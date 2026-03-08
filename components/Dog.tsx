import Image from "next/image"
export default function Dog({ rightPos, topPos }: { rightPos: string, topPos: string }) {
    return (<>
        <Image src="/logos/background.webp" width="100" height="100" alt="background-icon" loading="lazy" style={{ width: "120px", height: "auto", position: "absolute", right: rightPos, top: topPos }} />
    </>)
}