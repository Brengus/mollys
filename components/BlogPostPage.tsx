'use client';
import "@/css/blog.css";
import { useSelector } from 'react-redux';
import Blogs from "@/blogposts/blogposts.json";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation"
import NotFound from "@/app/not-found";

interface State {
    darkmode: {
        isDarkmode: boolean;
    }
}
export default function BlogPostPage() {
    const params = useParams();
    const blogname = params?.blogname as string;
    const isDarkmode: boolean = useSelector((state: State) => state.darkmode.isDarkmode);
    const blog = Blogs.find(b => b.id === blogname);

    if (!blog) return <NotFound />

    return <div className="blog-post-grid">
        <div className="blog-post">
            <div className={`blog-post-title letter-spacing-medium`}>{blog.ka.title.toUpperCase()}</div>
            <Image className="blog-post-image" src={blog.image} alt="" width={400} height={200} loading="lazy" />
            <div className={`blog-post-description letter-spacing-small ${isDarkmode ? "darkmode" : ""}`}>{blog.ka.description}</div>
        </div>
        <div className="blog-nav">
            {Blogs.map((b) => {
                return <Link href={{ pathname: `${b.id}` }} key={b.id} className={`blog-nav-item ${b.id === blogname ? "active" : ""}`}>
                    <Image src={b.image} alt={b.ka.title} width={400} height={200} style={{ width: "80px", height: "80px", objectFit: "cover" }} loading="lazy" />
                    <div className="blog-nav-title letter-spacing-small">{b.ka.title.toUpperCase()}</div>
                </Link>
            })}
        </div>
    </div>
}