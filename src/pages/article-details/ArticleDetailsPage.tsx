import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Article } from "../../entities/article/model/types";
import { getArticleById } from "../../entities/article/api/articleApi";
import { CommentForm } from "../../features/comment/CommentForm";
import { CommentList } from "../../features/comment/CommentList";

export default function ArticleDetailsPage() {
    const { id } = useParams();
    const [article, setArticle] = useState<Article | null>(null);
    const [reload, setReload] = useState(0);
    
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

            <CommentForm
                articleId={article.id}
                onSuccess={() => setReload(prev => prev + 1)}
            />
            <CommentList key={reload} articleId={article.id} />
        </div>
    )
}