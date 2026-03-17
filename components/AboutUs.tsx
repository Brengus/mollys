'use client';
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import "../css/aboutus.css";
interface RootState {
    darkmode: { isDarkmode: boolean };
}
function AboutUs() {
    const { t } = useTranslation();
    const isDarkmode = useSelector((state: RootState) => state.darkmode.isDarkmode);
    const content = useMemo(() => [
        {
            id: "story",
            title: t("Story").toUpperCase(),
            text: t("Story-p"),
            spacingClass: "letter-spacing"
        },
        {
            id: "philosophy",
            title: t("Philosophy").toUpperCase(),
            text: t("Philosophy-p"),
            spacingClass: "letter-spacing-medium"
        }
    ], [t]);
    const themeClass = isDarkmode ? "dark-theme" : "light-theme";
    return (
        <div className={`aboutus-main ${themeClass}`}>
            <div className="aboutus-submain">
                <header className="aboutus-header-group">
                    <h1 className="aboutus-header letter-spacing">{t("About-h2").toUpperCase()}</h1>
                    <h3 className="headline letter-spacing-small">{t("About-h1").toUpperCase()}</h3>
                </header>
                <div className="about-content-grid">
                    {content.map(({ id, title, text, spacingClass }) => (
                        <article key={id} className="about-card">
                            <div className="title-separator">
                                <h3 className={`about-titles ${spacingClass}`}>{title}</h3>
                                <div className="separator" aria-hidden="true"></div>
                            </div>
                            <p className="about-text letter-spacing-small">{text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default AboutUs;