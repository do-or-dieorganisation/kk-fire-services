import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kk-fire-services.vercel.app';

  // Service slugs
  const services = [
    'fire-hydrant-sprinkler',
    'fire-alarm-detection',
    'fire-suppression',
    'cctv-surveillance',
    'access-control',
    'public-address',
    'water-leak-detection',
    'rodent-repellent',
    'fire-extinguisher',
  ];

  // Generate service page URLs
  const servicePages = services.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    // Homepage
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Services overview
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    // Individual service pages
    ...servicePages,
    // Contact page
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}