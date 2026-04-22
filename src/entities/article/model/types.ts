export type Article = {
    id: number;
    title: string;
    content: string;
    publishedAt: string;
    author: {
        id: number;
        userName: string;
    };
};