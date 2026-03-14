import "../css/why.css";
import WhyArray from "@/blogposts/why.json";
import Wave from "./Wave";
import GroomingVideo from "./Commercial";
import { useTranslation } from 'next-i18next';

function Why() {
    const { t } = useTranslation();
    return (
        <>
            <div className="why-wave"><Wave /></div>
            <h3 className="why-title letter-spacing">{t("Why-title").toUpperCase()}</h3>
            <div className="why-grid">
                <div className="why-text why-box-1" style={{ gridArea: "box-1" }}><GroomingVideo /></div>
                {
                    WhyArray.map((item, index) => {
                        return <div key={index} className={`why-text why-${item.box}`} style={{ gridArea: `${item.box}` }}>
                            <div>
                                <div className="why-subtitle letter-spacing-medium">{item.title}</div>
                                <div className="why-desc letter-spacing-small">{item.desc}</div>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}
export default Why;