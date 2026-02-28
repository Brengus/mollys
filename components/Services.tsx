import "../css/services.css";
import objectArray from "@/blogposts/services.json";
import { useSelector } from "react-redux";
import { useTranslation } from 'next-i18next';
import { useState, useEffect } from "react";
import Service from "./service";
import Link from "next/link";

function Services() {
    const { t } = useTranslation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])


    // const objectArray = [
    //     { title: t("Bathing"), image: "/servicesimg/bath-tub.webp", description: t("Bathing-p"), url: "bathing" },
    //     { title: t("Clipping"), image: "/servicesimg/trimmer.webp", description: t("Clipping-p"), url: "clipping" },
    //     { title: t("Safe Drying"), image: "/servicesimg/dryer.webp", description: t("Safe Drying-p"), url: "safe-drying" },
    //     { title: t("Paws and Claws"), image: "/servicesimg/paw.webp", description: t("Paws and Claws-p"), url: "paws-and-claws" },
    //     { title: t("Ear Cleaning"), image: "/servicesimg/ears.webp", description: t("Ear Cleaning-p"), url: "ear-cleaning" },
    //     { title: t("Tick Removal"), image: "/servicesimg/insect.webp", description: t("Tick Removal-p"), url: "tick-removal" },
    //     { title: t("Face Trim"), image: "/servicesimg/dog.webp", description: t("Face Trim-p"), url: "face-trim" },
    //     { title: t("Spritz"), image: "/servicesimg/spray.webp", description: t("Spritz-p"), url: "spritz" },
    // ]

    const isDarkmode: boolean = useSelector((state: any) => state.darkmode.isDarkmode)

    if (!mounted) return <div style={{ minHeight: "509px" }} />;

    return (
        <>
            <div id="services" className={`service-title ${isDarkmode ? "service-title-dark" : ""}`}>{t("Services").toUpperCase()}</div>
            <div className="services">
                {objectArray.map((service, index) => (
                    <Link href={`services/${service.url}`} key={index} style={{ textDecoration: "none" }}>
                        <Service key={index} darkmode={isDarkmode} keyItem={index} title={t(service.title)} image={service.image} description={t(service.description)} />
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Services;