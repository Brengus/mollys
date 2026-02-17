// 'use client';
import "../css/aboutus.css";
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

function AboutUs() {
    const { t } = useTranslation();
    const isDarkmode: boolean = useSelector((state: any) => state.darkmode.isDarkmode);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])
    const obj = {
        header: t("About-h2"),
        headline: t("About-h1"),
        subheadline: t("About-h3"),
        ourStoryTitle: t("Story"),
        ourStory: t("Story-p"),
        ourPhilosophyTitle: t("Philosophy"),
        ourPhilosophy: t("Philosophy-p")
    };

    if (!mounted) return null;

    return (
        <section id="aboutus" className="aboutus-main">
            <div className="aboutus-submain">
                {/* Header Section */}
                <div className="aboutus-header-group">
                    <div className="headline">{obj.headline}</div>
                    <h1 className={`aboutus-header ${isDarkmode ? "aboutus-header-dark" : ""}`}>{obj.header}</h1>
                    <p className={`subheadline ${isDarkmode ? "aboutus-header-dark" : ""}`}>{obj.subheadline}</p>
                </div>

                {/* Content Section */}
                <div className="about-content-grid">

                    {/* Story Card */}
                    <div className={`about-card ${isDarkmode ? "about-card-dark" : ""}`}>
                        <div className="title-separator">
                            <div className="about-titles">{obj.ourStoryTitle}</div>
                            <div className="separator"></div>
                        </div>
                        <p className="about-text">{obj.ourStory}</p>
                    </div>

                    {/* Philosophy Card */}
                    <div className={`about-card ${isDarkmode ? "about-card-dark" : ""}`}>
                        <div className="title-separator">
                            <div className="about-titles">{obj.ourPhilosophyTitle}</div>
                            <div className="separator"></div>
                        </div>
                        <p className="about-text">{obj.ourPhilosophy}</p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default AboutUs;