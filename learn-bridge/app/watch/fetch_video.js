import Cookies from "js-cookie";

export default async function fetchVideo(vid_id) {
    try {
        let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/video/${vid_id}/details`, {
            headers: {
                "Authorization": `Bearer ${Cookies.get("access_token")}`,
            },
        });
    
        if (!res.ok) {
            console.error("Response is not okay!");
            return {}
        }
        let _res = await res.json();
        return _res["data"]["video"];
    } catch (err) {
        console.error("An error occured while fetching", err);
        return {}
    }
}