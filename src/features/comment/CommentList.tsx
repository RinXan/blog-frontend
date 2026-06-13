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
        <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4">
                Comments
            </h2>

            <div className="space-y-4">
                {comments.map(comment => (
                <div
                    key={comment.id}
                    className="
                    bg-white
                    rounded-lg
                    shadow
                    p-4
                    "
                >
                    <div className="font-semibold">
                    {comment.author.userName}
                    </div>

                    <div className="text-gray-700 mt-2">
                    {comment.text}
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}