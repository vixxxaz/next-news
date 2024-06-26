// app/Home/[slug]/page.tsx
import { ArrowBigLeft } from 'lucide-react';
import { Metadata } from 'next';
import NewsArticles from '../../components/NewsArticles';
import Link from 'next/link';

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
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY as string;
  
  const url = 'https://newsapi.org/v2/everything?' +
              'domains=techcrunch.com,thenextweb.com&' +             
              'from=2024-06-04&' +
              'sortBy=publishedAt&' +
              `apiKey=${apiKey}`;

  const response = await fetch(url);
  
  const data = await response.json();
  // console.log(data)
  return data.articles || [];
};




export const metadata: Metadata = {
    title: 'Techcrunch News Articles',
  };

const NewsPage = async ({ params }: { params: { slug: string } }) => {
  const articles = await fetchArticles();
 

  return (
    <section className='w-full h-full text-center  font-bold rounded'>
        <NewsArticles  articles={articles} />
      <div className='bg-white text-black p-auto w-40 h-20 mx-auto rounded '>
        <Link className='flex mx-auto text-center align-items'  href='./'>  
          <ArrowBigLeft className="color-black h-20 w-20"/>
          BACK Home 
        </Link>
      </div>         
    </section>
    
  );
};

export default NewsPage;
