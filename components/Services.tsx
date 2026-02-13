import "../css/services.css";
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import Service from "./service";

function Services() {
    const { t } = useTranslation();

    const objectArray = [
        { title: t("Bathing"), image: "../servicesimg/bath-tub.png", description: t("Bathing-p") },
        { title: t("Clipping"), image: "../servicesimg/trimmer.png", description: t("Clipping-p") },
        { title: t("Safe Drying"), image: "../servicesimg/dryer.png", description: t("Safe Drying-p") },
        { title: t("Paws and Claws"), image: "../servicesimg/paw.png", description: t("Paws and Claws-p") },
        { title: t("Ear Cleaning"), image: "../servicesimg/ears.png", description: t("Ear Cleaning-p") },
        { title: t("Tick Removal"), image: "../servicesimg/insect.png", description: t("Tick Removal-p") },
        { title: t("Face Trim"), image: "../servicesimg/dog.png", description: t("Face Trim-p") },
        { title: t("Spritz"), image: "../servicesimg/spray.png", description: t("Spritz-p") },
    ]

    const isDarkmode: boolean = useSelector((state: any) => state.darkmode.isDarkmode)

    return (
        <>
            <div id="services" className={`service-title ${isDarkmode ? "service-title-dark" : ""}`}>{t("Services")}</div>
            <div className="services">
                {objectArray.map((service, index) => (
                    <Service key={index} darkmode={isDarkmode} keyItem={index} title={service.title} image={service.image} description={service.description} />
                ))}
            </div>
        </>
    )
}

export default Services;