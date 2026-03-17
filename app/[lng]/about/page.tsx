import AboutUs from '@/components/AboutUs';

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  const path = 'about'; // Change this for each page (e.g., 'about', 'gallery')

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

function AboutUsComponent() {

  return (
    <>
      <div style={{ margin: "30px auto" }}>
        <AboutUs />
      </div>

    </>
  );
}

export default AboutUsComponent;