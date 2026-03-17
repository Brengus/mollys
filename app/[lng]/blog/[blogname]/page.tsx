import BlogPostPage from "@/components/BlogPostPage";

export async function generateMetadata({ params }: { params: Promise<{ lng: string, blogname: string }> }) {
    const { lng, blogname } = await params;
    const path = 'blog'; // Change this for each page (e.g., 'about', 'gallery')

    return {
        alternates: {
            canonical: `/${lng}/${path}/${blogname}`,
            languages: {
                en: `/en/${path}/${blogname}`,
                ka: `/ka/${path}/${blogname}`,
                'x-default': `/ka/${path}/${blogname}`, // Since you default to /ka
            },
        },
    };
}

export default function BlogPost() {
    return <BlogPostPage />
}