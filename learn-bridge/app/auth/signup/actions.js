"use server"
import { redirect } from "next/navigation";

export default async function signUpAction(formData) {
    "use server"
    // const formObject = Object.fromEntries(formData.entries());
    // Object.keys(formObject).forEach((key) => {
    //     if (key.startsWith("$ACTION_ID_")) {
    //         delete formObject[key];
    //     }
    // })

    try {
        var res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
            method: "POST",
            body: formData,
        });
        var data = await res.json();
    } catch (error) {
        console.log(error);
    }
    if (res.ok) {
        redirect("/auth/signin");
    }
}