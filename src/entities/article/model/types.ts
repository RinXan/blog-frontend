export type Article = {
    id: number;
    title: string;
    content: string;
    imageUrl?: string;
    publishedAt: string;
    author: {
        id: number;
        userName: string;
    };
};