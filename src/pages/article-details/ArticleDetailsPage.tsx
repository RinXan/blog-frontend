import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import type { Article } from "../../entities/article/model/types";
import { deleteArticle, getArticleById } from "../../entities/article/api/articleApi";
import { CommentForm } from "../../features/comment/CommentForm";
import { CommentList } from "../../features/comment/CommentList";
import { getUserFromToken } from "../../shared/lib/jwt";
import toast from "react-hot-toast";

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
            toast.success("Article deleted!");
            navigate("/");
        } catch (e) {
            console.error(e);
            toast.error("Failed to delete article");
        }
    };

    const getReadingTime = (text: string) => {
        const wordsPerMinute = 200;
        const words = text.trim().split(/\s+/).length;
        return Math.ceil(words / wordsPerMinute);
    };

    if (!article) return <div>Loading...</div>
    
    const isAuthor = user && article.author.id === user.id;

    return (
        <div className="max-w-3xl mx-auto p-6">
            <div className="bg-white rounded-xl shadow-sm border p-8">
                <Link
                    to="/"
                    className="
                        inline-block
                        mb-6
                        text-blue-600
                        hover:underline
                    "
                    >
                    ← Back to articles
                    </Link>
                <h1 className="text-4xl font-bold mb-4">
                    {article.title}
                </h1>

                <div className="text-gray-500 text-sm flex items-center gap-2 mb-6">
                    <span>👤 {article.author.userName}</span>
                    <span>•</span>
                    <span>
                        {new Date(article.publishedAt).toLocaleDateString()}
                    </span>
                    <span>•</span>
                    ⏱ {getReadingTime(article.content)} min read
                </div>

                
                {isAuthor && (
                    <div className="flex gap-3 mb-6">
                        <Link
                            to={`/articles/edit/${article.id}`}
                            className="
                            px-4 py-2
                            bg-blue-600
                            text-white
                            rounded-lg
                            "
                        >
                            Edit
                        </Link>

                        <button
                            onClick={() => handleDelete(article.id)}
                            className="
                            px-4 py-2
                            bg-red-600
                            text-white
                            rounded-lg
                            "
                        >
                            Delete
                        </button>
                    </div>
                )}

                <hr className="my-6 border-gray-200" />

                <div className="prose prose-lg max-w-none leading-relaxed prose-gray">
                    {article.content}
                </div>

                <div className="mt-12 border-t pt-4">
                    <CommentForm
                        articleId={article.id}
                        onSuccess={() => setReload(prev => prev + 1)}
                    />
                    <CommentList key={reload} articleId={article.id} />
                </div>
            </div>
        </div>
    )
}