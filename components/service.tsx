
import Image from "next/image";
import "../css/services.css";
function Service({ darkmode, keyItem, title, image, description }: { darkmode: boolean, keyItem: number, title: string, image: string, description: string }) {

    return <>
        <div className="whole-card">
            <div key={keyItem} className={`service-card ${darkmode ? "service-card-dark" : ""}`}>
                <Image src={image} width="50" height="50" alt={title} style={{ gridArea: "image" }} loading="lazy" />
                <h3 style={{ gridArea: "title" }}>{title.toUpperCase()}</h3>
                <p style={{ gridArea: "description" }}>{description}</p>
            </div>
            <div className="question">?</div>

        </div>

    </>

}
export default Service