import { Routes, Route } from "react-router-dom";
import ArticlesPage from "../../pages/articles/ArticlesPage";
import ArticleDetailsPage from "../../pages/article-details/ArticleDetailsPage";
import LoginPage from "../../pages/login/LoginPage";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<ArticlesPage />} />
            <Route path="/articles/:id" element={<ArticleDetailsPage />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    )
}