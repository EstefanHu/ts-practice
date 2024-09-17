import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://lidiahu.com',
      lastModified: new Date(),
    },
    {
      url: 'https://lidiahu.com/p',
      lastModified: new Date(),
    },
    {
      url: 'https://lidiahu.com/p/extended-peace',
      lastModified: new Date(),
    },
    {
      url: 'https://lidiahu.com/p/weathered-basket',
      lastModified: new Date(),
    },
    {
      url: 'https://lidiahu.com/bio',
      lastModified: new Date(),
    },
    {
      url: 'https://lidiahu.com/contact',
      lastModified: new Date(),
    },
  ];
}
