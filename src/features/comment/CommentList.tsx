import { useEffect, useState } from "react"
import { getCommentsByArticle } from "../../entities/comment/api/CommentApi";
import type { Comment } from "../../entities/comment/model/types"

export const CommentList = ({ articleId }: { articleId: number }) => {
    const [comments, setComments] = useState<Comment[]>([]);

    useEffect(() => {
        getCommentsByArticle(articleId)
        .then(setComments)
        .catch(console.error);
    }, [articleId]);

    return (
        <div>
            <h3>Comments</h3>

            {comments.map(c => (
                <div key={c.id}>
                    <b>{c.author.userName}</b>
                    <p>{c.text}</p>
                </div>
            ))}
        </div>
    )
}