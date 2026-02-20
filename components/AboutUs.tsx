import "../css/aboutus.css";
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';

function AboutUs() {
    const { t } = useTranslation();
    const isDarkmode: boolean = useSelector((state: any) => state.darkmode.isDarkmode);
    const obj = {
        header: t("About-h2"),
        headline: t("About-h1"),
        subheadline: t("About-h3"),
        ourStoryTitle: t("Story"),
        ourStory: t("Story-p"),
        ourPhilosophyTitle: t("Philosophy"),
        ourPhilosophy: t("Philosophy-p")
    };

    return (
        <section id="aboutus" className="aboutus-main">
            <div className="aboutus-submain">
                <div className="aboutus-header-group">
                    <div className="headline">{obj.headline}</div>
                    <h1 className={`aboutus-header ${isDarkmode ? "aboutus-header-dark" : ""}`}>{obj.header}</h1>
                    <p className={`subheadline ${isDarkmode ? "aboutus-header-dark" : ""}`}>{obj.subheadline}</p>
                </div>

                <div className="about-content-grid">
                    <div className={`about-card ${isDarkmode ? "about-card-dark" : ""}`}>
                        <div className="title-separator">
                            <div className="about-titles">{obj.ourStoryTitle}</div>
                            <div className="separator"></div>
                        </div>
                        <p className={`about-text ${isDarkmode ? "about-text-dark" : ""}`}>{obj.ourStory}</p>
                    </div>
                    <div className={`about-card ${isDarkmode ? "about-card-dark" : ""}`}>
                        <div className="title-separator">
                            <div className="about-titles">{obj.ourPhilosophyTitle}</div>
                            <div className="separator"></div>
                        </div>
                        <p className={`about-text ${isDarkmode ? "about-text-dark" : ""}`}>{obj.ourPhilosophy}</p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default AboutUs;