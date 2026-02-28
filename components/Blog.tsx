'use client';
import Link from "next/link";
import Image from "next/image";
import "@/css/blog.css";
import Blogs from "@/blogposts/blogposts.json";
import { useSelector } from "react-redux";
import { useTranslation } from 'next-i18next';

interface State {
    darkmode: {
        isDarkmode: boolean;
    }
}
export default function Blog({ lng }: { lng: string }) {
    const { t } = useTranslation();
    const isDarkmode: boolean = useSelector((state: State) => state.darkmode.isDarkmode);
    return <>
        <div id="blog" className={`blog-main-title ${isDarkmode ? "darkmode" : ""}`}>{t("Blog").toUpperCase()}</div>
        <div className="blog-grid">
            {Blogs.map((blog) => {
                return <div key={blog.id} className="blog-card">
                    <Link href={{
                        pathname: `${lng ? 'ka/' : ''}blog/${blog.id}`,
                    }}>
                        <Image className="blog-image" src={blog.image} alt={blog.ka.title} width={400} height={400} loading="lazy" />
                        <h2 className="blog-title">{blog.ka.title}</h2>
                        <p className={`blog-text ${isDarkmode ? "darkmode" : ""}`} >{blog.ka.hook}</p>
                    </Link>
                </div>
            })}
        </div>

    </>
}