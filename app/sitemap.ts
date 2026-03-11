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

  const mainServiceUrls: MetadataRoute.Sitemap = (services as ServiceItem[]).flatMap((service) =>
    LANGUAGES.map((lng) => ({
      url: `${BASE_URL}/${lng}/services/${service.url}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    }))
  );

  const additionalServiceUrls: MetadataRoute.Sitemap = (additionalServices as ServiceItem[]).flatMap((service) =>
    LANGUAGES.map((lng) => ({
      url: `${BASE_URL}/${lng}/services/${service.url}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    }))
  );

  return [...staticUrls, ...mainServiceUrls, ...additionalServiceUrls];
}
