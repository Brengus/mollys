'use client';
import "@/i18n/i18n";
import { Provider, useSelector } from "react-redux";
import { store } from "../state/store"; // Path to your store
import { useEffect } from 'react';

function ThemeManager({ children }: { children: React.ReactNode }) {
    const isDarkmode = useSelector((state: any) => state.darkmode.isDarkmode);

    useEffect(() => {
        if (isDarkmode) {
            document.body.classList.add("darkmode-body");
        } else {
            document.body.classList.remove("darkmode-body");
        }
    }, [isDarkmode]);

    return <>{children}</>;
}

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            <ThemeManager>{children}</ThemeManager>
        </Provider>
    );
}