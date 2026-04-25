import { useState } from "react";
import { createComment } from "../../entities/comment/api/CommentApi";

export const CommentForm = ({ articleId, onSuccess }: {
    articleId: number;
    onSuccess: () => void;
}) => {
    const [text, setText] = useState("");

    const handleSubmit = async() => {
        if (!text.trim()) return;

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