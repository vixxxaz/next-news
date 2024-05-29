// app/Home/[slug]/page.tsx
import { Metadata } from 'next';
import NewsArticles from '../../components/NewsArticles';

interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

interface NewsPageProps {
  articles: Article[];
}

const fetchArticles = async (): Promise<Article[]> => {
  const url = 'https://newsapi.org/v2/everything?' +
              'domains=techcrunch.com&' +
              'from=2024-05-28&' +
              'sortBy=popularity&' +
              'apiKey=fb46f0bd72e2482c8cee5ec82fd9bb88';

  const response = await fetch(url);
  const data = await response.json();
  console.log(data)
  return data.articles || [];
};


export const metadata: Metadata = {
    title: 'Apple News Articles',
  };

const NewsPage = async ({ params }: { params: { slug: string } }) => {
  const articles = await fetchArticles();

  return (
    <div className='w-full h-full text-center text-fifth-color'>
      <NewsArticles  articles={articles} />
    </div>
  );
};

export default NewsPage;
