import "../css/navigation.css";
import Image from "next/image";
import { useTranslation } from 'next-i18next';
import Link from "next/link";

export default function Language({ LanguageClass, LanguageTitle, lng }: { LanguageClass?: string, LanguageTitle?: string, lng?: string }) {
    const { t, i18n } = useTranslation();
    const handleLanguageChange = (newLng: string) => {
        i18n.changeLanguage(newLng);
    }

    return (
        <div className={LanguageClass} title={LanguageTitle}>
            {
                lng === "ka" ?
                    <Link href={`/en`}>
                        <Image width="22" height="22" className="language" loading="lazy" onClick={() => handleLanguageChange(lng === "ka" ? "en" : "ka")} src={lng === "ka" ? "/us.webp" : "/ge.webp"} alt={lng === "ka" ? "En" : "Ge"} />
                    </Link>
                    :
                    <Link href={`/ka`}>
                        <Image width="22" height="22" className="language" loading="lazy" onClick={() => handleLanguageChange('ka')} src="/us.webp" alt="En" />
                    </Link>
            }
        </div>
    )
}