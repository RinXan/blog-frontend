import { useEffect, useState } from "react";

import { getArticles } from "../../entities/article/api/articleApi";
import type { Article } from "../../entities/article/model/types";
import ArticleCard from "../../entities/article/ui/ArticleCard";
import PageLoader from "../../shared/ui/PageLoader";

export default function HomePage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArticles()
      .then(data => {
        setArticles(data || []);
      })
      .catch(error => {
        console.error("Failed to load articles:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No articles found
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-gray-800">
          Latest Articles
        </h1>

        <p className="text-gray-500 mt-2">
          Read the latest posts from our blog
        </p>
      </div>

      <div className="grid gap-6">
        {articles.map(article => (
          <ArticleCard
            key={article.id}
            article={article}
          />
        ))}
      </div>
    </div>
  );
}