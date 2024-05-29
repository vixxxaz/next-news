// components/NewsArticles.tsx


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

interface NewsArticlesProps {
  articles: Article[];
}

const NewsArticles: React.FC<NewsArticlesProps> = ({ articles }) => {
  return (
    <div>
    <h1>Apple News Articles</h1>
    <ul>
      {articles.map((article, index) => (
        <li key={index}>
          {article.urlToImage && (
            <img src={article.urlToImage} alt={article.title} style={{ width: '100%', height: 'auto' }} />
          )}
          <h2>{article.title}</h2>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default NewsArticles;
