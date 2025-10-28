import { MetadataRoute } from 'next';

const siteUrl = 'https://www.nomepizzeriamilano.it'; // Placeholder

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: 'yearly', priority: 1 },
    { url: `${siteUrl}/menu`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/prenota`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/ordina`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/chi-siamo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${siteUrl}/contatti`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ];
}