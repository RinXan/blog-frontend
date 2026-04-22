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