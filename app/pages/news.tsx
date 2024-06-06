import { GetServerSideProps } from 'next';
import NewsArticles from '../components/NewsArticles';

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
                'domains=apple&' +             
                'from=2024-06-04&' +
                'sortBy=popularity&' +
                `apiKey=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();
    
    return data.articles || [];
    };

const NewsPage: React.FC<NewsPageProps> = ({ articles }) => {
  return (
    <div className="container mx-auto p-4">
      <NewsArticles articles={articles} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const articles = await fetchArticles();

    return {
      props: {
        articles,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        articles: [],
      },
    };
  }
};

export default NewsPage;