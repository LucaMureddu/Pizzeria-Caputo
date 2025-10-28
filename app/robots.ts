import { MetadataRoute } from 'next';

const siteUrl = 'https://www.nomepizzeriamilano.it'; // Placeholder

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}