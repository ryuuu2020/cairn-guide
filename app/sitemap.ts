import { MetadataRoute } from 'next';

const BASE_URL = 'https://cairn-guide.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    'beginners-guide',
    'beginner-survival',
    'crafting-recipes',
    'climbing-routes',
    'gear',
    'survival-tips',
    'map',
    'faq',
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route ? `/${route}` : ''}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
}
