
import Cookies from "js-cookie";

export async function getVideos(user_id) {
    try {
        let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/videos/user/${user_id}/get`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${Cookies.get("access_token")}`,
            },
        });

        if (!res.ok) {
            console.error("Request failed");
            return [];
        }
        return (await res.json())["data"]["videos"];
    } catch (err) {
        console.error("An error occured", err);
        return [];
    }
}