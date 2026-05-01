import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Article } from "../../entities/article/model/types";
import { deleteArticle, getArticleById } from "../../entities/article/api/articleApi";
import { CommentForm } from "../../features/comment/CommentForm";
import { CommentList } from "../../features/comment/CommentList";
import { getUserFromToken } from "../../shared/lib/jwt";

export default function ArticleDetailsPage() {
    const { id } = useParams();
    const [article, setArticle] = useState<Article | null>(null);
    const [reload, setReload] = useState(0);
    const user = getUserFromToken();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!id) return;
        
        getArticleById(Number(id))
        .then(setArticle)
        .catch(console.error);
    }, [id]);

    const handleDelete = async (id: number) => {
        if (!confirm("Are you shure?")) return;

        try {
            await deleteArticle(id);
            navigate("/");
        } catch (e) {
            console.error(e);
        }
    };

    if (!article) return <div>Loading...</div>
    
    const isAuthor = user && article.author.id === user.id;

    return (
        <div>
            <h1>{article.title}</h1>

            <p>
                Author: <b>{article.author.userName}</b>
            </p>

            <p>{article.content}</p>

            {isAuthor && (
                <div>
                    <button onClick={() => navigate(`/articles/edit/${article.id}`)}>Edit</button>
                    <button onClick={() => handleDelete(article.id)}>Delete</button>
                </div>
            )}

            <CommentForm
                articleId={article.id}
                onSuccess={() => setReload(prev => prev + 1)}
            />
            <CommentList key={reload} articleId={article.id} />
        </div>
    )
}