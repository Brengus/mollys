'use client';

import "@/css/servicepage.css";
import { useParams } from "next/navigation";
import { useTranslation } from 'react-i18next';
import Image from "next/image";
import NotFound from "@/app/not-found";

// Data Imports
import Services from "@/blogposts/services.json";
import exhibitionGrooming from "@/blogposts/exhibitionGrooming.json";
import fullGrooming from "@/blogposts/fullGrooming.json";
import additionalServices from "@/blogposts/additionalServices.json";

export default function Page() {
    const { t } = useTranslation();
    const params = useParams();
    const servicename = params?.servicename as string;

    // 1. Flatten all data sources into one searchable array
    const allServices = [
        ...Services,
        ...exhibitionGrooming,
        ...fullGrooming,
        ...additionalServices
    ];

    // 2. Find the specific item
    const service = allServices.find((s) => s.url === servicename);

    // 3. Early return for clean logic flow
    if (!service) return <NotFound />;

    // 4. Pre-format display values to keep the JSX clean
    const title = t(service.title).toUpperCase();
    const description = t(service.description);

    return (
        <div className="service-main">
            <div className="image-wrapper">
                <Image
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={400}
                    priority // Performance boost for LCP
                />
            </div>

            <div className="service-content">
                <h2 className="letter-spacing">{title}</h2>
                <p className="service-list letter-spacing-small">
                    {description}
                </p>
            </div>
        </div>
    );
}