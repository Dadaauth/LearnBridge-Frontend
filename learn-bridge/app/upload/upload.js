import { redirect } from "next/navigation";
import Cookies from "js-cookie";

export default async function upload(formData) {
    let access_token = Cookies.get("access_token");
    try {
            var res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/video`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${access_token}`,
                },
                body: formData,
            });
    } catch (err) {
        console.log("Video upload failed", err);
    }
    if (res.ok) {
     redirect("/bridge");           
    }
}