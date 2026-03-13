import "../css/services.css";
import objectArray from "@/blogposts/services.json";
import additionalServices from "@/blogposts/additionalServices.json";
import exhibitionGrooming from "@/blogposts/exhibitionGrooming.json";
import fullGrooming from "@/blogposts/fullGrooming.json";
import { useSelector } from "react-redux";
import { useTranslation } from 'next-i18next';
import Service from "./service";
import Link from "next/link";

function Services() {
    const { t } = useTranslation();

    const isDarkmode: boolean = useSelector((state: any) => state.darkmode.isDarkmode)

    return (
        <>
            <div className={`service-title letter-spacing ${isDarkmode ? "service-title-dark" : ""}`}>{t("Hygienic Grooming").toUpperCase()}</div>
            <div className="service-p">{t("Hygienic Grooming-p")}</div>
            <div className="services">
                {objectArray.map((service, index) => {
                    return <Link href={`services/${service.url}`} key={index} style={{ textDecoration: "none" }}>
                        <Service key={index} darkmode={isDarkmode} keyItem={index} title={t(service.title)} image={service.image} description={t(service.description).slice(0, 50)} />
                    </Link>
                }
                )}
            </div>
            <div className={`service-title letter-spacing ${isDarkmode ? "service-title-dark" : ""}`}>{t("Full Grooming").toUpperCase()}</div>
            <div className="service-p">{t("Full Grooming-p")}</div>

            <div className="services">
                {fullGrooming.map((service, index) => {
                    return <Link href={`services/${service.url}`} key={index} style={{ textDecoration: "none" }}>
                        <Service key={index} darkmode={isDarkmode} keyItem={index} title={t(service.title)} image={service.image} description={t(service.description).slice(0, 50)} />
                    </Link>
                }
                )}
            </div>
            <div className={`service-title letter-spacing ${isDarkmode ? "service-title-dark" : ""}`}>{t("Exhibition Grooming").toUpperCase()}</div>
            <div className="service-p">{t("Exhibition Grooming-p")}</div>

            <div className="services">
                {exhibitionGrooming.map((service, index) => {
                    return <Link href={`services/${service.url}`} key={index} style={{ textDecoration: "none" }}>
                        <Service key={index} darkmode={isDarkmode} keyItem={index} title={t(service.title)} image={service.image} description={t(service.description).slice(0, 50)} />
                    </Link>
                }
                )}
            </div>
            <div className={`service-title letter-spacing ${isDarkmode ? "service-title-dark" : ""}`}>{t("Additional Services").toUpperCase()}</div>
            <div className="service-p">{t("Additional Services-p")}</div>

            <div className="services">
                {additionalServices.map((service, index) => {
                    return <Link href={`services/${service.url}`} key={index} style={{ textDecoration: "none" }}>
                        <Service key={index} darkmode={isDarkmode} keyItem={index} title={t(service.title)} image={service.image} description={t(service.description).slice(0, 50)} />
                    </Link>
                }
                )}
            </div>
        </>
    )
}

export default Services;