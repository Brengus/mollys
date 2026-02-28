import "../css/mainhero.css";
import { useSelector } from "react-redux";
import { useTranslation } from 'next-i18next';
import Video from "./Video";
import Wave from '@/components/Wave';


function MainHero({ lng }: { lng?: string }) {
    const isDarkmode: boolean = useSelector((state: any) => state.darkmode.isDarkmode)
    const { t } = useTranslation();

    return (
        <>
            <div id="home" className={`main-hero ${isDarkmode ? "main-hero-dark" : "main-hero-light"}`}>
                <Wave position="position-1" />
                <Wave position="position-2" />

                <div className="main-hero-grid">
                    <div className={`main-hero-text ${isDarkmode ? "main-hero-text-dark" : ""} ${lng === "ge" ? "main-hero-text-georgian" : ""}`}>{t("MainHero").toUpperCase()}</div>
                    <Video />
                </div>
            </div>
        </>
    )
}

export default MainHero;