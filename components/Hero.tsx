import "../css/hero.css";
import Link from "next/link";
import { useTranslation } from 'next-i18next';

function Hero({ lng }: { lng: string }) {
    const { t } = useTranslation();
    return (
        <>
            <div className="hero-grid">
                <div className="hero-text box-1" style={{ gridArea: "box-1" }}></div>
                <div className="hero-text box-2" style={{ gridArea: "box-2" }}>
                </div>
                <div className="hero-text box-3" style={{ gridArea: "box-3" }}>
                    <Link className="hero-link" href={`${lng ? 'ka/' : 'en/'}gallery`}>
                        {t("View-more").toUpperCase()}
                    </Link>
                </div>
                <div className="hero-text box-4" style={{ gridArea: "box-4" }}>
                </div>
            </div>
        </>
    )
}
export default Hero;