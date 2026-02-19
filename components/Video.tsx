import '../css/video.css';
import { useEffect, useRef } from 'react';

function Video() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    videoRef.current?.load();
                    videoRef.current?.play().catch(() => { });
                }, 0);

                observer.disconnect();
            }
        })

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }
        return () => observer.disconnect();
    }, [])

    return (
        <div className="hero-video-wrapper">
            <video
                ref={videoRef}
                muted
                playsInline
                loop
                autoPlay
                preload="none"
                style={{ width: "100%", height: "auto" }}
            >
                <source
                    src="/video.mov"
                    type='video/quicktime; codecs="hvc1"'
                />
                <source
                    src="/output.webm"
                    type="video/webm"
                />
            </video>

        </div>

    )
}

export default Video;