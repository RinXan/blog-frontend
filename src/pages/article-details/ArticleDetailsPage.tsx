import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Article } from "../../entities/article/model/types";
import { getArticleById } from "../../entities/article/api/articleApi";

export default function ArticleDetailsPage() {
    const { id } = useParams();
    const [article, setArticle] = useState<Article | null>(null);
    
    useEffect(() => {
        if (!id) return;
        
        getArticleById(Number(id))
        .then(setArticle)
        .catch(console.error);
    }, [id]);

    if (!article) return <div>Loading...</div>

    return (
        <div>
            <h1>{article.title}</h1>

            <p>
                Author: <b>{article.author.userName}</b>
            </p>

            <p>{article.content}</p>
        </div>
    )
}