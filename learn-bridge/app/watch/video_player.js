"use client"
import { useRef } from "react";
import videojs from "video.js";

import VideoPlayer from "../../../components/video_player";

export default function VideoPlayerUI({ id }) {
    const playerRef = useRef(null);

    const videoJsOptions = {
        autoplay: true,
        controls: true,
        // responsive: true,
        // fluid: true,
        height: 600,
        width: 800,
        sources: [{
          src: '/test watch 2.mp4',
          type: 'watch/mp4'
        }, {
          src: '/test watch.mp4',
          type: 'watch/mp4'
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