import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  getArticleById,
  updateArticle,
} from "../../entities/article/api/articleApi";
import { getUserFromToken } from "../../shared/lib/jwt";

export default function ArticleEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = getUserFromToken();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (!id) return;

    getArticleById(Number(id))
      .then(article => {
        if (article.author.id !== user?.id) {
          navigate("/");
          return;
        }
        setTitle(article.title);
        setContent(article.content);
        setImageUrl(article.imageUrl || "");
      })
      .catch(console.error);
  }, [id]);

  const handleSubmit = async () => {
    if (!id) return;

    try {
      await updateArticle(Number(id), {
        title,
        content,
        imageUrl,
        publishedAt: new Date().toISOString(),
      });

      navigate(`/articles/${id}`);
    } catch (e) {
      console.error(e);
      alert("Failed to update article");
    }
  };

  return (
    <div>
      <h2>Edit Article</h2>

      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <br />

      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
      />

      <br />

      <input
        value={imageUrl}
        onChange={e => setImageUrl(e.target.value)}
      />

      <br />

      <button onClick={handleSubmit}>
        Save
      </button>
    </div>
  );
}