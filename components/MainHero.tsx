'use client';

import "../css/mainhero.css";
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import { useParams } from "next/navigation";
import Image from "next/image";

function MainHero() {
    const { lng } = useParams();
    const isDarkmode: boolean = useSelector((state: any) => state.darkmode.isDarkmode)
    const { t } = useTranslation();
    return (
        <>
            <div id="home" className={`main-hero ${isDarkmode ? "main-hero-dark" : "main-hero-light"}`}>
                <div className="main-hero-grid">
                    <div className={`main-hero-text ${isDarkmode ? "main-hero-text-dark" : ""} ${lng === "ge" ? "main-hero-text-georgian" : ""}`}>{t("MainHero")}</div>
                    <Image src="/doggo.webp" width="720" height="381" alt="" className="hero-image" />
                </div>
            </div>
        </>
    )
}

export default MainHero;