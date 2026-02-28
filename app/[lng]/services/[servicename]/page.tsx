'use client';
import "@/css/servicepage.css";
import { useParams } from "next/navigation"
import Services from "@/blogposts/services.json";
import { useTranslation } from 'next-i18next';
import NotFound from "@/app/not-found";
import Image from "next/image";

export default function Page() {
    const { t } = useTranslation();
    const params = useParams();
    const servicename = params?.servicename as string;
    const data = Services.find((service) => service.url === servicename);
    if (!data) return <NotFound />
    return <>
        <div className="service-main">
            <Image src={data.image} alt={data.title} width={400} height={400} style={{ borderRadius: "100%", width: "300px", height: "300px", }} />
            <div>
                <h2>{t(data.title)}</h2>
                <p>{t(data?.description)}</p>

            </div>

        </div>

    </>
}