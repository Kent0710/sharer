'use server'

import { createClient } from "@/lib/supabase/server"
import { generateReadableCode } from "@/lib/utils"
import { getAccount } from "./auth"

export async function createSpace(spaceName: string) {
    const account = await getAccount();
    if (!account.id) {
        return {
            ok: false,
            message: "ERR (Create Space): User not authenticated"
        }
    };

    const supabase = await createClient()

    // Generate readable code
    const code = generateReadableCode();

    const { data, error } = await supabase.from("space")
        .insert({
            name: spaceName,
            code: code,
            created_by: account.id,
        })
        .select()
        .single()
    
    if (error || !data) {
        return {
            ok: false,
            message: "ERR (Create Space): Failed to create space. " + error?.message
        }
    }

    return {
        ok: true,
        space: data,
        message: "Space created successfully"
    }
}