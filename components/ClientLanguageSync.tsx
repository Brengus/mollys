'use client';
import { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function ClientLanguageSync({ lng }: { lng: string }) {
    const { i18n } = useTranslation();

    useLayoutEffect(() => {
        if (lng && i18n.language !== lng) {
            i18n.changeLanguage(lng);
        }
    }, [lng, i18n]);

    return null; // This component renders nothing
}