import "../css/whatsapp.css";
import Link from "next/link";

export default function Whatsapp() {
    return (
        <>
            <Link href="https://wa.me/995568611223" className={`whatsapp-icon`} target="_blank"></Link>
        </>
    )
}