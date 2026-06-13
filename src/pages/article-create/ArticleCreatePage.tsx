import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createArticle } from "../../entities/article/api/articleApi";
import toast from "react-hot-toast";
import Spinner from "../../shared/ui/Spinner";

export default function ArticleCreatePage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (!title.trim() || !content.trim()) {
            toast.error("Title and content required!");
            return;
        }

        try {
            setLoading(true);

            const article = await createArticle({title, content, imageUrl, publishedAt: new Date().toISOString()});
            
            toast.success("Article created!");
            navigate(`/articles/${article.id}`);
        } catch (e) {
            console.error(e);
            toast.error("Failed to create article");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <h2>Create article</h2>

            <input 
                placeholder="title"
                value={title}
                onChange={e => setTitle(e.target.value)} 
            />

            <br />

            <textarea 
                placeholder="Content"
                value={content}
                onChange={e => setContent(e.target.value)} 
            />

            <br />

            <input 
                placeholder="Image URL"
                value={imageUrl}
                onChange={e => setImageUrl(e.target.value)}
            />

            <br />

            <button onClick={handleSubmit} disabled={loading}>{loading ? <Spinner /> : "Create article"}</button>
        </div>
    )
}