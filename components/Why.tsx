import "../css/why.css";
import Image from "next/image";
import { useTranslation } from 'next-i18next';

function Why() {
    const { t } = useTranslation();
    return (
        <>
            <div className="why-title">{t("Why-title").toUpperCase()}</div>
            <div className="why-grid">
                <div className="why-text why-box-1" style={{ gridArea: "box-1" }}></div>
                <div className="why-text why-box-2" style={{ gridArea: "box-2" }}>
                    <Image src="/whitePoodle.webp" alt="Less time in the Chair" width={70} height={70} style={{ margin: "auto 10px" }} />
                    <div>
                        <div className="why-subtitle">Expert-Led Innovation</div>
                        <div className="why-desc">We don't just follow industry standards; we set them. Our team of seasoned specialists brings decades of collective experience to ensure every project is built with cutting-edge technology and forward-thinking strategy.</div>
                    </div>
                </div>
                <div className="why-text why-box-3" style={{ gridArea: "box-3" }}>
                    <Image src="/whitePoodle.webp" alt="Less time in the Chair" width={70} height={70} style={{ margin: "auto 10px" }} />
                    <div>
                        <div className="why-subtitle">Client-Centric Approach</div>
                        <div className="why-desc">Your goals are our North Star. We ditch the "one-size-fits-all" mentality in favor of bespoke solutions, maintaining transparent communication and dedicated support from the first meeting to the final hand-off.</div>
                    </div>
                </div>
                <div className="why-text why-box-4" style={{ gridArea: "box-4" }}>
                    <Image src="/whitePoodle.webp" alt="Less time in the Chair" width={70} height={70} style={{ margin: "auto 10px" }} />
                    <div>
                        <div className="why-subtitle">Data-Driven Results</div>
                        <div className="why-desc">We believe in growth you can actually measure. By leveraging advanced analytics and performance tracking, we ensure that every creative decision is backed by hard data to maximize your return on investment.</div>
                    </div>
                </div>
                <div className="why-text why-box-5" style={{ gridArea: "box-5" }}>
                    <Image src="/whitePoodle.webp" alt="Less time in the Chair" width={70} height={70} style={{ margin: "auto 10px" }} />
                    <div>
                        <div className="why-subtitle">Uncompromising Quality</div>
                        <div className="why-desc">Detail isn't just a buzzword for us—it's our obsession. From the underlying code to the final user interface, we perform rigorous testing to deliver a seamless, high-performance experience that stands the test of time.</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Why;