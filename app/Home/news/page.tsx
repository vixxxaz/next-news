// app/news/page.tsx
import React from 'react';
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

const fetchArticles = async (): Promise<Article[]> => {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  const url = `https://newsapi.org/v2/everything?` +
              `q=bitcoin&` +
              `from=2024-06-04&` +
              `sortBy=popularity&` +
              `apiKey=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();
  
  if (data.status === 'error') {
    throw new Error(data.message);
  }

  return data.articles || [];
};

const NewsPage = async () => {
  let articles: Article[] = [];
  try {
    articles = await fetchArticles();
  } catch (error) {
    console.error(error);
  }

  return (
    <div className="container mx-auto p-4">
      <NewsArticles articles={articles} />
    </div>
  );
};

export default NewsPage;
