'use client'
import "../css/video.css";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export default function GroomingVideo() {
    return (
        <div className="video-wrapper">
            <LiteYouTubeEmbed id="RptLV6xGi_8" title="Dog grooming" lazyLoad />
        </div>
    );
}