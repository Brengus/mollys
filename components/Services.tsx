'use client';
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
    const servicesArray = [
        { title: "Hygienic Grooming", subTitle: "Hygienic Grooming-p", arr: objectArray },
        { title: "Full Grooming", subTitle: "Full Grooming-p", arr: fullGrooming },
        { title: "Exhibition Grooming", subTitle: "Exhibition Grooming-p", arr: exhibitionGrooming },
        { title: "Additional Services", subTitle: "Additional Services-p", arr: additionalServices }
    ]
    const { t } = useTranslation();
    const isDarkmode: boolean = useSelector((state: any) => state.darkmode.isDarkmode)
    return (
        servicesArray.map((item) => {
            return <div key={item.title}>
                <div key={item.title} className={`service-title letter-spacing ${isDarkmode ? "service-title-dark" : ""}`}>{t(item.title).toUpperCase()}</div>
                <div className="service-p">{t(item.subTitle)}</div>
                <div className="services">
                    {item.arr.map((service, index) => {
                        return <Link href={`services/${service.url}`} key={index} style={{ textDecoration: "none" }}>
                            <Service key={index} darkmode={isDarkmode} keyItem={index} title={t(service.title)} image={service.image} description={t(service.description).slice(0, 50)} />
                        </Link>
                    }
                    )}
                </div>
            </div>
        })
    )
}
export default Services;