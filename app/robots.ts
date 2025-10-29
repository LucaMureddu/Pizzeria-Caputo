import { MetadataRoute } from 'next';

const siteUrl = 'https://pizzeria-caputo.vercel.app'; // Production URL

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}