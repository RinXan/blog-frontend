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
        <div>
            <textarea
                value={text} 
                onChange={e => setText(e.target.value)} 
            />
            <br />
            <button onClick={handleSubmit}>Add comment</button>
        </div>
    );
};