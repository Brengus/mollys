import "../css/navigation.css";

export default function Menu({ menuOpen, setMenuOpen, isDarkmode }: { menuOpen: boolean, setMenuOpen: (open: boolean) => void, isDarkmode: boolean }) {
    return <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`first-stick ${isDarkmode ? "stick-color-dark" : "stick-color-light"}`}></div>
        <div className={`second-stick ${isDarkmode ? "stick-color-dark" : "stick-color-light"}`}></div>
        <div className={`third-stick ${isDarkmode ? "stick-color-dark" : "stick-color-light"}`}></div>
    </div>
}