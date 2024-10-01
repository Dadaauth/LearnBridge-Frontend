"use client"
import { Card, CardHeader, CardBody, Input, Button } from "@nextui-org/react";

import { useAuth } from "/lib/auth";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    const { login } = useAuth();

    function handleSignInSubmit(e) {
        e.preventDefault();
        let email = document.querySelector("input[type='email']").value
        let password = document.querySelector("input[type='password']").value
        console.log(email, password);
        login({email, password});
        router.push("/");
    }
    return (
        <div className="flex justify-center mt-8">
            <Card className="max-w-[40vw] w-[40vw]">
                <CardHeader className="pt-4 pl-10">
                    <h3 className="text-lg font-bold">Sign In</h3>
                </CardHeader>

                <CardBody className="mb-4 pt-0">
                    <form  onSubmit={handleSignInSubmit} className="flex flex-col justify-center mt-4">
                        <div className="w-[90%] grid grid-cols-2 place-content-center place-self-center place-items-center gap-4 mb-3">
                            <Input
                                type="email"
                                name="email"
                                label="email"
                            />
                            <Input
                                type="password"
                                name="password"
                                label="password"
                            />
                        </div>
                        <div className="mt-4 flex place-self-center">
                            <Button
                                type="submit"
                            >Submit</Button>
                        </div>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
}