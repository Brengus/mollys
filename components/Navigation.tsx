'use client';
import "../css/navigation.css";
import Image from "next/image";
import Link from 'next/link';
import React, { useEffect, useState, useRef, useCallback } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from 'react-redux';
import { changeDarkMode } from "../slices/darkmodeSlice";
import { useTranslation } from 'next-i18next';
import Language from "./Language";
import Menu from "./Menu";

interface State {
    darkmode: {
        isDarkmode: boolean;
    }
}

function Navigation() {
    const { t, i18n } = useTranslation();
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
        { id: "services", label: t("Services") },
        { id: "aboutus", label: t("About") },
        { id: "ourpartners", label: t("Partners") },
        { id: "map", label: t("Map") },
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

    return (
        <>
            <div className="ghost" ref={ghostRef}></div>

            <div className={`main ${isScrolled ? isDarkmode ? "active-dark" : "active" : ""}`} ref={scrollRef}>
                <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} isDarkmode={isDarkmode} />
                <nav className="navigation-class">
                    <div className="item">
                        <Image src="/logos/title.webp" width="72" height="22" title={t("Home")} alt="logo" className="logo" onClick={() => handleClick("home")} />
                    </div>
                    <div className={`nav-buttons item ${menuOpen ? "open" : ""} ${isDarkmode ? "open-dark" : ""}`}>
                        {linkArray.map((link: { id: string, label: string }, index: number) => {
                            return <Link href={`/${lng}#${link.id}`} key={link.id} className={`item-buttons ${isDarkmode ? "button-dark" : "button-light"} ${isScrolled ? "active" : ""}`} onClick={() => handleClick(link.id)}>{link.label}</Link>
                        })}
                        <button className={`item-buttons ${isDarkmode ? "button-dark" : "button-light"} button-hide-desktop`}
                            onClick={() => {
                                switchMode()
                                if (menuOpen) {
                                    setMenuOpen(false);
                                }
                            }}
                            style={{ paddingTop: "0px", paddingBottom: "0px" }}>
                            <Image width="22" height="22" title={t("Light Mode")} className="item upgrade-button-responsive" src={isDarkmode ? "/blackPoodle.webp" : "/whitePoodle.webp"} alt="Dark/Light Mode" />
                        </button>
                        <button className={`item-buttons ${isDarkmode ? "button-dark" : "button-light"} button-hide-desktop`}
                            onClick={() => setMenuOpen(false)}
                            style={{ paddingTop: "0px" }}
                        >
                            <Language lng={lng} LanguageClass="item upgrade-button-responsive" LanguageTitle={t("GE/EN")} />
                        </button>
                    </div>
                    <Language lng={lng} LanguageClass="item upgrade-button" LanguageTitle={t("GE/EN")} />
                    <Image width="22" height="22" title={t("Light Mode")} className="item upgrade-button" src={isDarkmode ? "/blackPoodle.webp" : "/whitePoodle.webp"} alt="Dark/Light Mode" onClick={() => switchMode()} />
                </nav>
            </div>
        </>
    )
}

export default Navigation;