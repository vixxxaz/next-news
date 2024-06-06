import Link from 'next/link';

interface Article {
  id: number;
  title: string;
  content: string;
}

interface HomeProps {
  articles: Article[];
}

const Home: React.FC<HomeProps> = ({ articles }) => {
  return (
    <div className="container mx-auto p-4">
      <main>
        <h1 className="text-3xl font-bold mb-4">Articles</h1>
        <ul>
          {articles.map((article, index) => (
            <li key={article.id} className="mb-4">
              <h2 className="text-2xl">{article.title}</h2>
              <p>{article.content}</p>
            </li>
          ))}
        </ul>
        <Link href="/news">
          <a className="text-blue-500 hover:underline">Go to Tech News</a>
        </Link>
      </main>
    </div>
  );
};

export default Home;

