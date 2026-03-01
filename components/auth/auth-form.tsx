/*
    TODO: Replace with validation and error handling.
    A temproary component for the authentication form. 
    This will be replaced by a more complex one in the future, but for now it serves as a placeholder and a way to test the authentication flow.
*/

"use client";

import { useEffect, useState } from "react";

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { login, registerUser } from "@/actions/auth";
import { redirect } from "next/navigation";

const AuthForm = () => {
    // Authentication
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Render Texts
    const [choice, setChoice] = useState<"login" | "register">("register");
    const [choiceRenderTexts, setChoiceRenderTexts] = useState({
        title: "",
        description: "",
        alternativeHref: "",
        alternativeTextTrigger: "",
        alternativeText: "",
    });

    useEffect(() => {
        const handleTextRenderChange = () => {
            if (choice === "login") {
                setChoiceRenderTexts({
                    title: "Login",
                    description: "Login to your account",
                    alternativeHref: "/register",
                    alternativeTextTrigger: "Register",
                    alternativeText: "Don't have an account?",
                });
            } else {
                setChoiceRenderTexts({
                    title: "Register",
                    description: "Create a new account",
                    alternativeHref: "/login",
                    alternativeTextTrigger: "Login",
                    alternativeText: "Already have an account?",
                });
            }
        };

        handleTextRenderChange();
    }, [choice]);

    // Handler for the actual authentication
    const handleAuthentication = async () => {
        let result = { ok: false, message: "" };

        if (choice == "register") {
            result = await registerUser(username, password);
        } else if (choice == "login") {
            result = await login(username, password);
        }

        if (result.ok) {
            redirect("/home");
        } else {
            console.log(result.message);
        }
    };

    if (!choiceRenderTexts.title) return null;

    return (
        <div className="flex flex-col gap-8 bg-white border w-[30rem] h-fit p-8 rounded-lg shadow-sm">
            <header>
                <h1 className="text-xl font-semibold">
                    {choiceRenderTexts.title}
                </h1>
                <p className="text-muted-foreground">
                    {choiceRenderTexts.description}
                </p>
            </header>
            {/* Username  */}
            <main className="flex flex-col gap-4">
                <div>
                    <Label htmlFor="username">Username</Label>
                    <Input
                        id="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Button onClick={handleAuthentication}>
                    {choiceRenderTexts.title}
                </Button>
            </main>
            <footer className="text-center text-muted-foreground">
                <span>{choiceRenderTexts.alternativeText} </span>
                <button
                    className="underline"
                    onClick={() =>
                        setChoice(choice === "login" ? "register" : "login")
                    }
                >
                    {choiceRenderTexts.alternativeTextTrigger}
                </button>
            </footer>
        </div>
    );
};

export default AuthForm;
