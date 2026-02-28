export default function Wave({ position }: { position: string }) {
    return <div className={`wavy-line ${position}`}></div>
}