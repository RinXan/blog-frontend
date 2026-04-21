import { useEffect, useState } from "react";
import { getArticles } from "../../entities/article/api/articleApi";
import type { Article } from "../../entities/article/model/types";

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
        <div key={a.id}>{a.title}</div>
      ))}
    </div>
  )
}