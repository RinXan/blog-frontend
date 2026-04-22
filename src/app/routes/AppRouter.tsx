import { Routes, Route } from "react-router-dom";
import ArticlesPage from "../../pages/articles/ArticlesPage";
import ArticleDetailsPage from "../../pages/article-details/ArticleDetailsPage";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<ArticlesPage />} />
            <Route path="/articles/:id" element={<ArticleDetailsPage />} />
        </Routes>
    )
}