import "../css/services.css";
import objectArray from "@/blogposts/services.json";
import additionalServices from "@/blogposts/additionalServices.json";
import { useSelector } from "react-redux";
import { useTranslation } from 'next-i18next';
import Service from "./service";
import Link from "next/link";

function Services() {
    const { t } = useTranslation();

    const isDarkmode: boolean = useSelector((state: any) => state.darkmode.isDarkmode)

    return (
        <>
            <div id="services" className={`service-title letter-spacing ${isDarkmode ? "service-title-dark" : ""}`}>{t("Services").toUpperCase()}</div>
            <div className="services">
                {objectArray.map((service, index) => {
                    const descriptionItems = t(service.description, { returnObjects: true }) as string[];

                    return <Link href={`services/${service.url}`} key={index} style={{ textDecoration: "none" }}>
                        <Service key={index} darkmode={isDarkmode} keyItem={index} title={t(service.title)} image={service.image} description={t(descriptionItems[0])} />
                    </Link>
                }

                )}
            </div>
            <div id="services" className={`service-title letter-spacing ${isDarkmode ? "service-title-dark" : ""}`}>{t("Additional Services").toUpperCase()}</div>
            <div className="services">
                {additionalServices.map((service, index) => {
                    const descriptionItems = t(service.description, { returnObjects: true }) as string[];
                    return <Link href={`services/${service.url}`} key={index} style={{ textDecoration: "none" }}>
                        <Service key={index} darkmode={isDarkmode} keyItem={index} title={t(service.title)} image={service.image} description={t(descriptionItems[0])} />
                    </Link>

                }

                )}
            </div>
        </>
    )
}

export default Services;