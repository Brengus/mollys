import LogoSlide from "./LogoSlide";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import "../css/RunningLine.css"

export default function RunningLine() {
    const { t } = useTranslation();
    const isDarkmode: boolean = useSelector((state: any) => state.darkmode.isDarkmode);
    return (
        <div id="ourpartners" className="white-background">
            <div className="column">
                <div className="clients">
                    <div className="main-container">
                        <h3 className={`running-line-title ${isDarkmode ? "running-line-title-dark" : ""}`}>{t("Partners")}</h3>
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