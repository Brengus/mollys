'use client';
import "../css/navigation.css";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { useRouter, useParams } from "next/navigation";
import { useSelector, useDispatch } from 'react-redux';
import { changeDarkMode } from "../slices/darkmodeSlice";
import { useTranslation } from 'react-i18next';

interface State {
    darkmode: {
        isDarkmode: boolean;
    }
}

function Navigation() {
    const { t, i18n } = useTranslation();
    const router = useRouter();
    const params = useParams();
    const lng = params?.lng as string;
    const scrollRef = useRef<HTMLDivElement>(null);
    const ghostRef = useRef<HTMLDivElement>(null);
    const isDarkmode: boolean = useSelector((state: State) => state.darkmode.isDarkmode);
    const dispatch = useDispatch();
    const switchMode = useCallback(() => dispatch(changeDarkMode()), [dispatch]);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const linkArray = [
        { id: "home", label: t("Home") },
        { id: "aboutus", label: t("About") },
        { id: "ourpartners", label: t("Partners") },
        { id: "services", label: t("Services") },
        { id: "openinghours", label: t("Opening Hours") },
    ];

    const handleClick = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            console.warn(`Section with ID ${sectionId} not found.`);
        }
        if (menuOpen) {
            setMenuOpen(false);
        }
    }

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    }

    const handleScroll = () => {
        if (scrollRef.current && ghostRef.current) {
            const original = scrollRef.current.getBoundingClientRect();
            const ghost = ghostRef.current.getBoundingClientRect();

            const difference = Math.abs(original.top - ghost.top);

            setIsScrolled(difference > 5);

        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    useEffect(() => {
        if (lng && i18n.language !== lng) {
            i18n.changeLanguage(lng);
        }
    }, [lng, i18n])

    const handleLanguageChange = (newLng: string) => {
        router.push(`/${newLng}`);
        i18n.changeLanguage(newLng);
    }

    return (
        <>
            <div className="ghost" ref={ghostRef}></div>

            <div className={`main ${isScrolled ? isDarkmode ? "active-dark" : "active" : ""}`} ref={scrollRef}>
                <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={() => handleMenuClick()}>
                    <div className={`first-stick ${isDarkmode ? "stick-color-dark" : "stick-color-light"}`}></div>
                    <div className={`second-stick ${isDarkmode ? "stick-color-dark" : "stick-color-light"}`}></div>
                    <div className={`third-stick ${isDarkmode ? "stick-color-dark" : "stick-color-light"}`}></div>
                </div>
                <nav className="navigation-class">
                    <div className="item">
                        <img src="../logos/title.png" title={t("Home")} alt="logo" className="logo" onClick={() => handleClick("home")} />
                    </div>
                    <div className={`nav-buttons item ${menuOpen ? "open" : ""} ${isDarkmode ? "open-dark" : ""}`}>
                        {linkArray.map((link, index) => {
                            return <button key={index} className={`item-buttons ${isDarkmode ? "button-dark" : "button-light"} ${isScrolled ? "active" : ""}`} onClick={() => handleClick(link.id)}>{link.label}</button>
                        })}
                        <button className={`item-buttons ${isDarkmode ? "button-dark" : "button-light"} button-hide-desktop`}
                            onClick={() => {
                                switchMode()
                                if (menuOpen) {
                                    setMenuOpen(false);
                                }
                            }}
                            style={{ paddingTop: "0px", paddingBottom: "0px" }}>
                            <img title={t("Light Mode")} className="item upgrade-button-responsive" src={isDarkmode ? "../blackPoodle.png" : "../whitePoodle.png"} alt="Dark/Light Mode" />
                        </button>
                        <button className={`item-buttons ${isDarkmode ? "button-dark" : "button-light"} button-hide-desktop`}
                            onClick={() => setMenuOpen(false)}
                            style={{ paddingTop: "0px" }}
                        >
                            <div className="item upgrade-button-responsive" title={t("GE/EN")}>
                                {
                                    lng === "ge" ? <img className="language" onClick={() => handleLanguageChange('en')} src="../ge.png" alt="Ge" />
                                        : <img className="language" onClick={() => handleLanguageChange('ge')} src="../us.png" alt="En" />
                                }
                            </div>
                        </button>
                    </div>
                    <div className="item upgrade-button" title={t("GE/EN")}>
                        {
                            lng === "ge" ? <img className="language" onClick={() => handleLanguageChange('en')} src="../ge.png" alt="Ge" />
                                : <img className="language" onClick={() => handleLanguageChange('ge')} src="../us.png" alt="En" />
                        }
                    </div>
                    <img title={t("Light Mode")} className="item upgrade-button" src={isDarkmode ? "../blackPoodle.png" : "../whitePoodle.png"} alt="Dark/Light Mode" onClick={() => switchMode()} />
                </nav>
            </div>
        </>


    )
}

export default Navigation;