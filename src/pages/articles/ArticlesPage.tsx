import { useEffect, useState } from "react";
import { getArticles } from "../../entities/article/api/articleApi";
import type { Article } from "../../entities/article/model/types";
import { Link } from "react-router-dom";

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    getArticles()
    .then(setArticles)
    .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Articles</h2>
      {articles.map(a => (
        <div key={a.id}>
          <Link to={`/articles/${a.id}`}>{a.title}</Link>
        </div>
      ))}
    </div>
  )
}