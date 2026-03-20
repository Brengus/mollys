// 'use client';
// import Image from "next/image";
// import { useTranslation } from "next-i18next";
// import "../css/gallery.css";

// export default function GalleryComponent({ title, pictures }: { title: string, pictures: any[] }) {
//     const { t } = useTranslation();

//     return (
//         <>
//             <h2 className="gallery-title">{t(title).toUpperCase()}</h2>
//             <div className="gallery">
//                 {pictures.map((pic) => (
//                     <div
//                         key={pic.url}
//                         className="gallery-item"
//                     // style={{ aspectRatio: pic.aspect }}

//                     >
//                         <Image
//                             src={pic.url}
//                             alt="Dog photo"
//                             fill
//                             sizes="(max-width: 768px) 100vw, 33vw"
//                             className="gallery-image-fill"
//                             loading="lazy"
//                         />
//                     </div>
//                 ))}
//             </div >
//         </>
//     );
// }

'use client';
import Image from "next/image";
import { useTranslation } from "next-i18next";
import "../css/gallery.css";

export default function GalleryComponent({ title, pictures }: { title: string, pictures: any[] }) {
    const { t } = useTranslation();

    return (
        <>
            <h2 className="gallery-title">{t(title).toUpperCase()}</h2>
            <div className="gallery">
                {pictures.map((pic, index) => (
                    <div key={pic.url || index} className="gallery-item">
                        <img
                            src={pic.url}
                            alt="Dog photo"
                            className="gallery-img-natural"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </>
    );
}
