import { api } from "../../../shared/api/client";
import type { Comment } from "../model/types";

export const getCommentsByArticle = async (articleId: number): Promise<Comment[]> => {
    return api(`/comments/article/${articleId}`);
};

export const createComment = async (articleId: number, text: string) => {
    return api(`/comments/${articleId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
    });
};