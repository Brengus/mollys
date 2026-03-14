import LogoSlide from "./LogoSlide";
import { useSelector } from "react-redux";
import { useTranslation } from "next-i18next";
import Dog from "./Dog";
import "../css/RunningLine.css"

export default function RunningLine() {
    const { t } = useTranslation();
    const isDarkmode: boolean = useSelector((state: any) => state.darkmode.isDarkmode);
    return (
        <div id="ourpartners" className="white-background">
            <Dog rightPos="50%" topPos="-15px" />
            <div className="column">
                <div className="clients">
                    <div className="main-container">
                        <h3 className={`running-line-title letter-spacing ${isDarkmode ? "running-line-title-dark" : ""}`}>{t("Partners").toUpperCase()}</h3>
                        <div className="logos">
                            <LogoSlide className="slide-animation" />
                            <LogoSlide className="slide-animation" />
                            <LogoSlide className="slide-animation" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}