import Image from "next/image";

export default function GalleryComponent() {
    const pictures = [
        "https://images.pexels.com/photos/4587995/pexels-photo-4587995.jpeg",
        "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg",
        "https://images.pexels.com/photos/4587994/pexels-photo-4587994.jpeg",
        "https://images.pexels.com/photos/4588010/pexels-photo-4588010.jpeg",
        "https://images.pexels.com/photos/4587970/pexels-photo-4587970.jpeg",
        "https://images.pexels.com/photos/1805168/pexels-photo-1805168.jpeg",
        "https://images.pexels.com/photos/374906/pexels-photo-374906.jpeg",
        "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
    ];

    return (
        <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
            <h2 style={{
                textAlign: "center",
                fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
                lineHeight: "1.5em",
                marginBottom: "4rem",
                color: "var(--color-two)",
                fontWeight: "700"
            }}>
                OUR HAPPY CLIENTS
            </h2>

            <div
                style={{
                    columnCount: 3,
                    columnGap: "10px",
                }}
            >
                {pictures.map((pic) => (
                    <div
                        key={pic}
                        style={{
                            position: "relative",
                            width: "100%",
                            marginBottom: "10px",
                        }}
                    >
                        <Image
                            src={pic}
                            alt="Dog photo"
                            title="Dog photo"
                            width={400} // width will scale to column width
                            height={0} // we will let Next.js calculate height automatically
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "cover",
                                borderRadius: "8px",
                                display: "block",
                            }}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
