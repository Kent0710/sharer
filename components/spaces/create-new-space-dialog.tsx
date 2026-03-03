/*
    TODO: The form logic will be improved in the future, this is just a placeholder for now.
*/

"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState } from "react";
import { createSpace } from "@/actions/space";
import { useRouter } from "next/navigation";

const CreateNewSpaceDialog = () => {
    const router = useRouter();
    const [newSpaceName, setNewSpaceName] = useState("");

    const handleCreateSpace = async () => {
        const res = await createSpace(newSpaceName);
        if (res.ok) {
            const spaceCode = res.space.code;
            router.push(`/space/${spaceCode}`);
        } else {
            console.log(res.message + " " + res.message);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"outline"}>Create New Space</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create New Space</DialogTitle>
                    <DialogDescription>
                        Give your space a name and start sharing files.
                    </DialogDescription>
                    <form
                        className="flex flex-col gap-4 mt-4"
                        action={handleCreateSpace}
                    >
                        <div>
                            <Label htmlFor="spaceName"> Space Name </Label>
                            <Input
                                id="spaceName"
                                name="spaceName"
                                placeholder="My new space..."
                                value={newSpaceName}
                                onChange={(e) =>
                                    setNewSpaceName(e.target.value)
                                }
                            />
                        </div>
                        <Button type="submit"> Create Space </Button>
                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default CreateNewSpaceDialog;
