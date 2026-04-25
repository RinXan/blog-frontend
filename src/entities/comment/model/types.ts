export type Comment = {
    id: number;
    text: string;
    createdAt: string;
    author: {
        id: number;
        userName: string;
    };
};