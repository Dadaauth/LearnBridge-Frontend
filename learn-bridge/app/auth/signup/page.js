"use client"
import { useFormAction } from "next/server";
import { useFormStatus } from "react-dom";

import { Card, CardHeader, CardBody, Input, Button } from "@nextui-org/react";

import signUpAction from "./actions";

export default function Page() {
    return (
        <div className="flex justify-center mt-8">
            <Card className="md:max-w-[40vw] md:w-[40vw]">
                <CardHeader className="pt-4 pl-10">
                    <h3 className="text-lg font-bold">Sign Up</h3>
                </CardHeader>

                <CardBody className="mb-4 pt-0">
                    <form action={signUpAction} className="flex flex-col justify-center mt-4">
                        <InputFields />
                    </form>
                </CardBody>
            </Card>
        </div>
    );
}




function InputFields() {
    const { pending } = useFormStatus();
    return (
        <>
            <div className="w-[90%] grid sm:grid-cols-2 place-content-center place-self-center place-items-center gap-4 mb-3">
                <Input
                    type="text"
                    name="first_name"
                    label="first name"
                />
                <Input
                    type="text"
                    name="last_name"
                    label="last name"
                />
                <Input
                    type="email"
                    name="email"
                    label="email"
                />
                <Input
                    type="text"
                    name="level"
                    label="level"
                />
                <Input
                    type="select"
                    name="department"
                    label="department"
                />
                <Input
                    type="select"
                    name="faculty"
                    label="faculty"
                />
                <Input
                    type="date"
                    name="dob"
                    label="dob"
                />
                <Input
                    type="tel"
                    name="phone_calls"
                    label="phone_calls"
                />
                <Input
                    type="tel"
                    name="whatsapp_calls"
                    label="whatsapp_calls"
                />
                <Input
                    type="password"
                    name="password"
                    label="password"
                />
                <Input
                    type="file"
                    name="picture"
                    label="picture"
                />
            </div>
            <div className="mt-8 w-[90%] flex place-self-center">
                <Button
                    disabled={pending}
                    type="submit"
                >Submit</Button>
            </div>
        </>
    );
}