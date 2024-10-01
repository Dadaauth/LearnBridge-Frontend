"use client"
import { useRef } from "react";
import dynamic from 'next/dynamic';
import videojs from "video.js";


const VideoPlayer = dynamic(() => import('/components/video_player'), { ssr: false });

export default function VideoPlayerUI({ id, ob_name }) {
    const playerRef = useRef(null);

    const videoJsOptions = {
        autoplay: true,
        // loop: true,
        controls: true,
        responsive: true,
        // fluid: true,
        height: 500,
        width: 800,
        sources: [{
          src: `${process.env.NEXT_PUBLIC_API_URL}/video/${id}/${ob_name}/${ob_name}?mpd=True`,
          type: 'application/dash+xml'
        }, {
          src: '/test video.mp4',
          type: 'video/mp4'
        }]
    };


    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
        player.on('waiting', () => {
          videojs.log('player is waiting');
        });

        player.on('dispose', () => {
          videojs.log('player will dispose');
        });
    };

    return (<VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />);

}