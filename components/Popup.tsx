'use client';
import "../css/popup.css";
import { useTranslation } from "next-i18next";
// import "./Pizza"
import React, { useEffect, useState, useRef, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { changeStatus } from '../slices/popupSlice';
// import BusLayout from "./BusLayout";

interface State {
    popup: {
        isOpen: boolean
    }
}

function Popup() {
    const { t } = useTranslation();
    const [mounted, setMounted] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);
    const isOpen: boolean = useSelector((state: State) => state.popup.isOpen);
    const dispatch = useDispatch();
    const closePopUp = useCallback(() => dispatch(changeStatus()), [dispatch]);


    useEffect(() => {
        setMounted(true);
        const handleClickOutside = (event: MouseEvent) => {
            if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
                closePopUp();
            }
        }
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = 'unset';
        }
    }, [isOpen, closePopUp]);

    if (!mounted) return <div style={{ minHeight: "100px" }} />;

    return (
        <>
            <button
                className={`book-icon ${isOpen ? 'hidden' : ''}`}
                onClick={() => {
                    //  dispatch(changeStatus()); 
                    window.open("https://www.fresha.com/book-now/bregvasbusiness-efouvgsj/all-offer?share=true&pId=2786881", "_blank");
                }}
            >
                <div className="text-wrapping">
                    {t("Book Now")}
                </div>
            </button >
        </>
    )
}

export default Popup