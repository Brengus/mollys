import "../css/navigation.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslation } from 'next-i18next';

export default function Language({ LanguageClass, LanguageTitle, lng }: { LanguageClass?: string, LanguageTitle?: string, lng?: string }) {
    const { t, i18n } = useTranslation();
    const router = useRouter();
    const handleLanguageChange = (newLng: string) => {
        router.push(`/${newLng}`);
        i18n.changeLanguage(newLng);
    }

    return (
        <div className={LanguageClass} title={LanguageTitle}>
            {
                lng === "ka" ? <Image width="22" height="22" className="language" onClick={() => handleLanguageChange('en')} src="/ge.webp" alt="Ge" />
                    : <Image width="22" height="22" className="language" onClick={() => handleLanguageChange('ka')} src="/us.webp" alt="En" />
            }
        </div>
    )
}