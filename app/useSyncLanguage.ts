'use client';

import { useParams } from 'next/navigation';
import { useTranslation } from 'next-i18next';
import { useLayoutEffect } from 'react';

export function useSyncLanguage() {
    const { i18n } = useTranslation();
    const params = useParams();
    const lng = params?.lng as string;

    useLayoutEffect(() => {
        if (lng && i18n.language !== lng) {
            i18n.changeLanguage(lng);
        }
    }, [lng, i18n]);
}
