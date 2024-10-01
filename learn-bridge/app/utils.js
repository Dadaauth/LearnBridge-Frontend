import Cookies from "js-cookie";

export async function fetchVideos() {
    try {
        let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/videos`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${Cookies.get("access_token")}`
            },
        });

        if (!res.ok) {
            console.error("Error occured!");
            return [];
        }

        return (await res.json())["data"]["videos"];
    } catch (err) {
        console.error("Error occured", err);
        return [];
    }
}