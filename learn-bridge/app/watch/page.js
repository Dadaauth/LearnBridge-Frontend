import videojs from "video.js";

import { auth } from "/auth";
import NavBar from "../../../components/navbar";
import VideoPlayerUI from "./video_player";


export default async function Page() {
    const session = await auth();

    if (!session) return <NavBar />

    return (
        <>
            <NavBar />
            <h2>Watch A Video</h2>
            <div className="flex justify-center">
                <VideoPlayerUI />
            </div>
        </>
    );
}