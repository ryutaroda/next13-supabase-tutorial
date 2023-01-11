import type { Database } from '../../../database.types';
import { Headers } from 'next/dist/compiled/@edge-runtime/primitives/fetch';
import Counter from '../counter';

type News = Database['public']['Tables']['news']['Row']

const fetchNews = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const res = await fetch(`${process.env.url}/rest/v1/news?select=*`, {
    headers: new Headers({
      apikey: process.env.apikey as string
    })
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const news: News[] = await res.json();
  return news;
};

export default async function NewsList() {
  const news = await fetchNews();
  return (
    <div className="p-4">
      <Counter />
      <p className="mb-4 pb-3 text-xl font-medium underline underline-offset-4">
        News
      </p>
      <ul className="text-sm">
        {news.map((news) => (
          <li key={news.id} className="my-1 text-base">
            {news.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
