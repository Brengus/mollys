import "../css/why.css";
import Wave from "./Wave";
import Image from "next/image";
import { useTranslation } from 'next-i18next';

function Why() {
    const array = [
        {
            title: "Expert-Led Innovation",
            desc: "We don't just follow industry standards; we set them. Our team of seasoned specialists brings decades of collective experience to ensure every project is built with cutting-edge technology and forward-thinking strategy.",
            box: "box-2"
        },
        {
            title: "Client-Centric Approach",
            desc: "Your goals are our North Star. We ditch the 'one-size-fits-all' mentality in favor of bespoke solutions, maintaining transparent communication and dedicated support from the first meeting to the final hand-off.",
            box: "box-3"
        },
        {
            title: "Data-Driven Results",
            desc: "We believe in growth you can actually measure. By leveraging advanced analytics and performance tracking, we ensure that every creative decision is backed by hard data to maximize your return on investment.",
            box: "box-4"
        },
        {
            title: "Uncompromising Quality",
            desc: "Detail isn't just a buzzword for us—it's our obsession. From the underlying code to the final user interface, we perform rigorous testing to deliver a seamless, high-performance experience that stands the test of time.",
            box: "box-5"
        },

    ]
    const { t } = useTranslation();
    return (
        <>
            <div className="why-wave">
                <Wave />
            </div>

            <h3 className="why-title letter-spacing">{t("Why-title").toUpperCase()}</h3>
            <div className="why-grid">
                <div className="why-text why-box-1" style={{ gridArea: "box-1" }}>
                    <Image src={"/pics/grooming.webp"} alt="Our Studio"
                        width="6000"
                        height="3376"
                        // sizes="(max-width: 768px) 100vw, 25vw"
                        loading='lazy' />
                </div>
                {
                    array.map((item, index) => {
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