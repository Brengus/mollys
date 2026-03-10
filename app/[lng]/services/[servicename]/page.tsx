'use client';
import "@/css/servicepage.css";
import { useParams } from "next/navigation";
import Services from "@/blogposts/services.json";
import additionalServices from "@/blogposts/additionalServices.json";
import { useTranslation } from 'react-i18next'; // Ensure correct import
import NotFound from "@/app/not-found";
import Image from "next/image";

export default function Page() {
    const { t } = useTranslation();
    const params = useParams();
    const servicename = params?.servicename as string;
    const data = Services.find((service) => service.url === servicename);
    const additionalData = additionalServices.find((s) => s.url === servicename);
    if (!data && !additionalData) return <NotFound />;

    const descriptionItems = data ? t(data.description, { returnObjects: true }) as string[] : additionalData ? t(additionalData.description, { returnObjects: true }) as string[] : "";

    return (
        <div className="service-main">
            <Image src={data ? data.image : additionalData ? additionalData.image : ""} alt={data ? data.title : additionalData ? additionalData.title : ""} width={400} height={400} />
            <div className="service-content">
                <h2>{t(data ? data.title : additionalData ? additionalData.title : "")}</h2>
                <ul className="service-list">
                    {Array.isArray(descriptionItems) ? (
                        descriptionItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    ) : (
                        <p>{descriptionItems}</p>
                    )}
                </ul>
            </div>
        </div>
    );
}