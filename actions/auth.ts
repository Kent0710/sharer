"use server";

import { createClient } from "@/lib/supabase/server";

export async function getAccount() {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();
    const { data: account } = await supabase
        .from("account")
        .select("*")
        .eq("auth_id", user?.id)
        .single();

    return account || {
        display_name: "No Display Name",
    };
}

export async function registerUser(username: string, password: string) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signUp({
        // TODO: Handle real email
        email: username.trim().toLocaleLowerCase() + "@gmail.com",
        password: password,
    });

    if (error) {
        return {
            ok: false,
            message: "ERR (Register User): " + error.message,
        };
    }

    // Create the account record
    const { error: accountError } = await supabase.from("account").insert({
        display_name: username.trim().toLocaleLowerCase(),
        auth_id: data.user?.id,
    });

    if (accountError) {
        await supabase.auth.signOut();
        return {
            ok: false,
            message: "ERR (Create Account Record): " + accountError.message,
        };
    }

    return {
        ok: true,
        message: "User registered successfully",
    };
}

export async function login(username: string, password: string) {
    const supabase = await createClient();
    const { error } = await supabase.auth.signInWithPassword({
        email: username.trim().toLocaleLowerCase() + "@gmail.com",
        password: password,
    });
    if (error) {
        return {
            ok: false,
            message: "ERR (Login): " + error.message,
        };
    }
    return {
        ok: true,
        message: "User logged in successfully",
    };
}

export async function signOut() {
    const supabase = await createClient();
    await supabase.auth.signOut();
}
