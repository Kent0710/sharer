import {
    Popover,
    PopoverContent,
    PopoverDescription,
    PopoverHeader,
    PopoverTitle,
    PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "../ui/button";
import { LogOut, User } from "lucide-react";
import { getAccount, signOut } from "@/actions/auth";
import { redirect } from "next/navigation";

const AuthBlock = async () => {
    const {display_name} = await getAccount();

    const handleSignOut = async () => {
        'use server'
        await signOut().then(() => {
            redirect('/login')
        })
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline">
                    <User />
                    {display_name || "No Display Name"}
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverHeader>
                    <PopoverTitle>
                        Signed in as{" "}
                        <span className="underline">{display_name || "No Display Name"}</span>
                    </PopoverTitle>
                    <PopoverDescription>
                        Manage your authentication settings and preferences
                        here.
                    </PopoverDescription>
                    <div className="h-[0.5px] rounded-full w-full bg-neutral-200 mt-2" />
                    <form
                        action={handleSignOut}
                    >
                        <Button
                            className="w-fit"
                            variant={"ghost"}
                            type="submit"
                        >
                            <LogOut /> Sign out
                        </Button>
                    </form>
                </PopoverHeader>
            </PopoverContent>
        </Popover>
    );
};

export default AuthBlock;
