import { api } from "../../../shared/api/client";
import type { Article } from "../model/types";

type PagedResult<T> = {
    items: T[];
    total: number;
    page: number;
    size: number;
};

export const getArticles = async (): Promise<Article[]> => {
    const data: PagedResult<Article> = await api("/articles");
    return data.items;
};

export const getArticleById = async (id: number): Promise<Article> => {
    return api(`/articles/${id}`);
};

export const deleteArticle = async (id: number) => {
    return api(`/articles/${id}`, {
        method: "DELETE",
    });
};

export const createArticle = async (data: {
    title: string;
    content: string;
    imageUrl?: string;
    publishedAt: string;
}) => {
    return api("/articles", {
        method: "POST",
        body: JSON.stringify(data),
    });
};

export const updateArticle = async (
    id: number,
    data: {
        title: string;
        content: string;
        imageUrl?: string;
        publishedAt?: string;
    }
) => {
    return api(`/articles/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
    });
};