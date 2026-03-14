import Image from "next/image"
import "../css/logoSlide.css"

interface Name { className: string }

const LogoSlide: React.FC<Name> = ({ className }) => {
    const logos = [
        { width: "200px", height: "40px", src: "artero" },
        { width: "200px", height: "40px", src: "botaniqa" },
        { width: "200px", height: "40px", src: "heiniger" },
        { width: "150px", height: "40px", src: "hydra" },
        { width: "300px", height: "40px", src: "isbusa" },
        { width: "200px", height: "40px", src: "tauro" },
    ]
    return (
        <div className={`logos-slide ${className}`}>
            {logos.map((item) => {
                return <Image key={item.src} style={{ width: item.width, height: item.height }} width="200" height="22" src={`/runningimg/${item.src}.webp`} alt={item.src} loading="lazy" />
            })}
        </div>
    )
}
export default LogoSlide