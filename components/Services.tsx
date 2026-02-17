import "../css/services.css";
import { useSelector } from "react-redux";
import { useTranslation } from 'next-i18next';
import { useState, useEffect } from "react";
import Service from "./service";

function Services() {
    const { t } = useTranslation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])


    const objectArray = [
        { title: t("Bathing"), image: "/servicesimg/bath-tub.webp", description: t("Bathing-p") },
        { title: t("Clipping"), image: "/servicesimg/trimmer.webp", description: t("Clipping-p") },
        { title: t("Safe Drying"), image: "/servicesimg/dryer.webp", description: t("Safe Drying-p") },
        { title: t("Paws and Claws"), image: "/servicesimg/paw.webp", description: t("Paws and Claws-p") },
        { title: t("Ear Cleaning"), image: "/servicesimg/ears.webp", description: t("Ear Cleaning-p") },
        { title: t("Tick Removal"), image: "/servicesimg/insect.webp", description: t("Tick Removal-p") },
        { title: t("Face Trim"), image: "/servicesimg/dog.webp", description: t("Face Trim-p") },
        { title: t("Spritz"), image: "/servicesimg/spray.webp", description: t("Spritz-p") },
    ]

    const isDarkmode: boolean = useSelector((state: any) => state.darkmode.isDarkmode)

    if (!mounted) return null;

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