import "@/css/servicepage.css";
import ServicePage from "@/components/ServicePage";

export async function generateMetadata({ params }: { params: Promise<{ lng: string, servicename: string }> }) {
    const { lng, servicename } = await params;
    const path = 'services'; // Change this for each page (e.g., 'about', 'gallery')

    return {
        alternates: {
            canonical: `/${lng}/${path}/${servicename}`,
            languages: {
                en: `/en/${path}/${servicename}`,
                ka: `/ka/${path}/${servicename}`,
            },
        },
    };
}

export default function Page() {
    return <ServicePage />
}