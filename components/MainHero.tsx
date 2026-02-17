'use client';

import "../css/mainhero.css";
import { useSelector } from "react-redux";
import { useTranslation } from 'next-i18next';
import { useParams } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from 'react';

function MainHero() {
    const { lng } = useParams();
    const isDarkmode: boolean = useSelector((state: any) => state.darkmode.isDarkmode)
    const { t } = useTranslation();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) return null;
    return (
        <>
            <div id="home" className={`main-hero ${isDarkmode ? "main-hero-dark" : "main-hero-light"}`}>
                <div className="main-hero-grid">
                    <div className={`main-hero-text ${isDarkmode ? "main-hero-text-dark" : ""} ${lng === "ge" ? "main-hero-text-georgian" : ""}`}>{t("MainHero")}</div>
                    {/* <Image src="/doggo.webp" width="720" height="381" alt="" className="hero-image" /> */}
                    <video autoPlay loop muted playsInline poster="fallback.jpg" className="hero-image">
                        <source src="video.webm" type="video/webm" />
                    </video>
                </div>
            </div>
        </>
    )
}

export default MainHero;