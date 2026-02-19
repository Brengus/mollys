'use client';

import "../css/mainhero.css";
import { useSelector } from "react-redux";
import { useTranslation } from 'next-i18next';
import { useParams } from "next/navigation";
import { useState, useEffect, useRef } from 'react';
import Video from "./Video";

function MainHero() {
    const { lng } = useParams();
    const isDarkmode: boolean = useSelector((state: any) => state.darkmode.isDarkmode)
    const { t } = useTranslation();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) return <div style={{ minHeight: "600px" }} />;
    return (
        <>
            <div id="home" className={`main-hero ${isDarkmode ? "main-hero-dark" : "main-hero-light"}`}>
                <div className="main-hero-grid">
                    <div className={`main-hero-text ${isDarkmode ? "main-hero-text-dark" : ""} ${lng === "ge" ? "main-hero-text-georgian" : ""}`}>{t("MainHero")}</div>
                    <Video />
                </div>
            </div>
        </>
    )
}

export default MainHero;