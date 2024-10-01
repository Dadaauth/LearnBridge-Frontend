"use client"
import { useEffect, useState } from "react";
import { Avatar, Card, CardBody } from "@nextui-org/react";

import SideBar from "../sidebar";
import ProtectedRoute from "../protected";
import fetchVideo from "./fetch_video";
import VideoPlayerUI from "./video_player";

export default function Page({ searchParams }) {
    const [video, setVideo] = useState({
        course_id: "",
        created_at: "",
        description: "",
        id: "",
        object_name: "",
        source_id: "",
        status: "",
        thumbnail: "",
        title: "",
        updated_at: "",
        user: "",
    });
    useEffect(() => {
        let { v_id, ob_name } = searchParams;
        if (!v_id || !ob_name) return;
        async function _fetchVideo() {
            let vid = await fetchVideo(v_id);

            console.log(vid);

            for (let key in vid) {
                setVideo((prevValue) => {
                    return { ...prevValue, [key]: vid[key], }
                });
            }
        }

        _fetchVideo();
    }, []);
    let { v_id, ob_name } = searchParams;
    if (!v_id || !ob_name) return (
        <SideBar>
            <div>Video not found</div>
        </SideBar>
    );

    return (
        <ProtectedRoute>
            <SideBar>
                <VideoPlayerUI id={v_id} ob_name={ob_name} />
                {/* <video controls autoPlay className="w-[60vw] h-[70vh]"></video> */}
                <h3 className="text-lg font-extrabold">{video.title}</h3>
                <div className="flex flex-row gap-4 mt-4 items-center">
                    <Avatar
                        src={`${process.env.NEXT_PUBLIC_API_STATIC}/images/uploads/${video.user.picture}`}
                        name={`${video.user.first_name} ${video.user.last_name}`}
                        size='sm'
                        className=''
                        showFallback
                    />
                    <p>{video.user.first_name} {video.user.last_name}</p>
                </div>
                <Card className="mt-4 w-[60vw]">
                    <CardBody>
                        <p className="font-medium text-sm tracking-wide">291K views  21 Feb 2019</p>
                        <p className="text-[0.8rem] leading-relaxed">
                            {/* Learn the most popular NoSQL / document database: MongoDB. In this quickstart tutorial, you'll be up and running with MongoDB and Python. 💻Code: https://github.com/mikeckennedy/mongodb-quickstart-course ⭐️Course Contents⭐️ ⌨️ (0:00:00) Welcome ⌨️ (0:04:33) Intro to MongoDB ⌨️ (0:07:49) How do document DBs work? ⌨️ (0:10:34) Who uses MongoDB ⌨️ (0:13:02) Data modeling ⌨️ (0:16:30) Modeling guidelines ⌨️ (0:22:11) Integration database ⌨️ (0:24:23) Getting demo code ⌨️ (0:30:07) How ODMs work? ⌨️ (0:32:55) Introduction to mongoengine ⌨️ (0:34:01) Demo: Registering connections with MongoEngine ⌨️ (0:37:20) Concept: Registering connections ⌨️ (0:39:14) Demo: Defining mongoengine entities (classes) ⌨️ (0:45:22) Concept: mongoengine entities ⌨️ (0:49:03) Demo: Create a new account ⌨️ (0:56:55) Demo: Robo 3T for viewing and managing data ⌨️ (0:58:18) Demo: Login ⌨️ (1:00:07) Demo: Register a cage ⌨️ (1:10:28) Demo: Add a bookable time as a host ⌨️ (1:16:13) Demo: Managing your snakes as a guest ⌨️ (1:19:18) Demo: Book a cage as a guest ⌨️ (1:33:41) Demo: View your bookings as guest ⌨️ (1:41:29) Demo: View bookings as host ⌨️ (1:46:18) Concept: Inserting documents ⌨️ (1:47:28) Concept: Queries ⌨️ (1:48:09) Concept: Querying subdocuments with mongoengine ⌨️ (1:49:37) Concept: Query using operators ⌨️ (1:50:24) Concept: Updating via whole documents ⌨️ (1:51:46) Concept: Updating via in-place operators ⌨️ (1:54:01) Conclusion Thanks to Michael Kennedy for letting us post his course. Check out his other content: 🔗 MongoDB for Developers with Python Full Course: https://training.talkpython.fm/courses/explore_mongodb_for_python_developers_course/mongodb-for-python-for-developers-featuring-orm-odm-mongoengine 🔗 Python Jumpstart by Building 10 Apps: https://training.talkpython.fm/courses/explore_python_jumpstart/python-language-jumpstart-building-10-apps 🔗 Main course page: https://freemongodbcourse.com/ -- Learn to code for free and get a developer job: https://www.freecodecamp.org Read hundreds of articles on programming: https://medium.freecodecamp.org And subscribe for new videos on technology: https://youtube.com/subscription_center?add_user=freecodecamp */}
                            {video.description}
                        </p>
                    </CardBody>
                </Card>
            </SideBar>
        </ProtectedRoute>
    );
}
