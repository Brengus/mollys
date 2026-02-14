import dbConnect from '@/lib/db';
import Gallery from '@/models/Gallery';
import Image from 'next/image'; // Optimized Next.js Image component

async function getPictures() {
    await dbConnect();
    // Fetch all pictures from MongoDB
    const pictures = await Gallery.find({}).lean();
    return pictures;
}

export default async function GalleryComponent() {
    const pictures = await getPictures();

    return (
        <>
            <section className="gallery-section">
                <h2>Our Happy Clients</h2>
                <div className="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                    {pictures.map((pic: any) => (
                        <div key={pic._id.toString()} className="gallery-item" style={{ position: 'relative', overflow: 'hidden' }}>
                            <Image
                                src={pic.imageUrl}
                                alt={pic.altText}      // CRITICAL FOR SEO
                                title={pic.title}      // Good for user experience
                                width={pic.width}      // Prevents the page from jumping while loading
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="optimized-img"
                                loading="lazy"         // Only load when in view
                                placeholder="blur"      // Adds a nice blur effect while loading
                                blurDataURL="data:image/png;base64,..." // Optional: a tiny tiny placeholder string
                            />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}