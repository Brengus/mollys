import Blog from "@/components/Blog";

export async function generateMetadata({ params }: { params: Promise<{ lng: string }> }) {
  const { lng } = await params;
  const path = 'blog'; // Change this for each page (e.g., 'about', 'gallery')

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

export default function Page() {
    return <Blog lng="" />
}