import { useState } from "react";
import { createComment } from "../../entities/comment/api/CommentApi";
import { getUserFromToken } from "../../shared/lib/jwt";
import { useNavigate } from "react-router-dom";

export const CommentForm = ({ articleId, onSuccess }: {
    articleId: number;
    onSuccess: () => void;
}) => {
    const [text, setText] = useState("");
    const user = getUserFromToken();
    const navigate = useNavigate();

    const handleSubmit = async() => {
        if (!text.trim()) return;

        if (!user) {
            navigate("/login");
            alert("You need to login to add comments");
            return;
        }

        try {
            await createComment(articleId, text);
            setText("");
            onSuccess();
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="mt-8">
            <textarea
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Write a comment..."
                className="
                w-full
                border
                rounded-lg
                p-3
                min-h-[120px]
                "
            />

            <button
                onClick={handleSubmit}
                className="
                mt-3
                bg-blue-600
                text-white
                px-4
                py-2
                rounded-lg
                "
            >
                Add comment
            </button>
        </div>
    );
};