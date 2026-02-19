import "../css/hero.css";
import { useTranslation } from 'next-i18next';

function Hero() {
    const { t } = useTranslation();
    return (
        <>
            <div className="hero-grid">
                <div className="hero-text box-1" style={{ gridArea: "box-1" }}></div>
                <div className="hero-text box-2" style={{ gridArea: "box-2" }}>
                </div>
                <div className="hero-text box-3" style={{ gridArea: "box-3" }}>
                    <div>{t("Daycare")}</div>
                </div>
                <div className="hero-text box-4" style={{ gridArea: "box-4" }}>
                    <div>{t("Grooming")}</div>
                </div>
            </div>
        </>
    )
}
export default Hero;