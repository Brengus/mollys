import Image from "next/image"
import "../css/logoSlide.css"

interface Name {
    className: string
}

const LogoSlide: React.FC<Name> = ({ className }) => {
    return (
        <div className={`logos-slide ${className}`}>
            <Image style={{ width: "200px", height: "40px" }} width="200" height="22" src="/runningimg/artero.webp" alt="artero" />
            <Image style={{ width: "200px", height: "40px" }} width="200" height="22" src="/runningimg/botaniqa.webp" alt="botaniqa" />
            <Image style={{ width: "200px", height: "40px" }} width="200" height="22" src="/runningimg/heiniger.webp" alt="heiniger" />
            <Image style={{ width: "150px", height: "50px" }} width="200" height="22" src="/runningimg/hydra.webp" alt="hydra" />
            <Image style={{ width: "300px", height: "40px" }} width="80" height="22" src="/runningimg/isbusa.webp" alt="isbusa" />
            <Image style={{ width: "200px", height: "40px" }} width="200" height="22" src="/runningimg/tauro.webp" alt="tauro" />
        </div>
    )
}

export default LogoSlide