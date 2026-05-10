import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createArticle } from "../../entities/article/api/articleApi";

export default function ArticleCreatePage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (!title.trim() || !content.trim()) {
            alert("Title and content required!");
            return;
        }

        try {
            const article = await createArticle({title, content, imageUrl, publishedAt: new Date().toISOString()});
            
            navigate(`/articles/${article.id}`);
        } catch (e) {
            console.error(e);
            alert("Failed to create article");
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

            <button onClick={handleSubmit}>Create</button>
        </div>
    )
}