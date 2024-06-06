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
    <section>
    <h1 className="text-3xl text-color-primary p-6 bg-blue-200 rounded-md">Tech News Articles</h1>
    <p className="text-white">Apple, techcrunch</p>
    <ul >
      {articles.map((article, index) => (
        <li className="p-6 " key={index}>
          {article.urlToImage && (
            
            // eslint-disable-next-line @next/next/no-img-element
            <img className=" rounded-xl mx-auto" src={article.urlToImage} alt={article.title} style={{ width: '350', height: '350' }} />
          )}
          <h2 className="p-6 text-white ">{article.title}</h2>
          <p className="p-6 text-white">{article.description}</p>
          <p className="p-6 text-white">{article.publishedAt}</p>
          <a className="p-6 text-white" href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </li>
      ))}
    </ul>
  </section>
  );
};

export default NewsArticles;
