import Services from '@/components/Services';

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }) {
    const { lng } = await params;
    const path = 'services'; // Change this for each page (e.g., 'about', 'gallery')

    return {
        alternates: {
            canonical: `/${lng}/${path}`,
            languages: {
                en: `/en/${path}`,
                ka: `/ka/${path}`,
                'x-default': `/ka/${path}`, // Since you default to /ka
            },
        },
    };
}

function ServicesPage() {

    return (
        <>
            <Services />
        </>
    );
}

export default ServicesPage;