import type { MetadataRoute } from 'next';
import services from '@/blogposts/services.json';
import additionalServices from '@/blogposts/additionalServices.json';

const BASE_URL = 'https://mollys.ge';
const LANGUAGES = ['en', 'ka'] as const;

const STATIC_ROUTES = [
  '',
  '/about',
  '/services',
  '/gallery',
  '/blog',
] as const;

type ServiceItem = {
  title: string;
  image: string;
  description: string;
  url: string;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticUrls: MetadataRoute.Sitemap = LANGUAGES.flatMap((lng) =>
    STATIC_ROUTES.map((route) => ({
      url: `${BASE_URL}/${lng}${route}`,
      lastModified,
      changeFrequency: route === '' ? 'weekly' : 'monthly',
      priority: route === '' ? 1 : 0.8,
    }))
  );

  const allServiceItems = [
    ...(services as ServiceItem[]),
    ...(additionalServices as ServiceItem[]),
  ];

  const uniqueServiceSlugs = [...new Set(allServiceItems.map((item) => item.url))];

  const serviceUrls: MetadataRoute.Sitemap = uniqueServiceSlugs.flatMap((slug) =>
    LANGUAGES.map((lng) => ({
      url: `${BASE_URL}/${lng}/services/${slug}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    }))
  );

  return [...staticUrls, ...serviceUrls];
}
