import { Routes, Route } from "react-router-dom";
import ArticleDetailsPage from "../../pages/article-details/ArticleDetailsPage";
import LoginPage from "../../pages/login/LoginPage";
import ArticleCreatePage from "../../pages/article-create/ArticleCreatePage";
import ArticleEditPage from "../../pages/article-edit/ArticleEditPage";
import { RequireAuth } from "../providers/RequireAuth";
import HomePage from "../../pages/home/HomePage";
import RegisterPage from "../../pages/register/RegisterPage";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles/:id" element={<ArticleDetailsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/create-article" element={<RequireAuth><ArticleCreatePage /></RequireAuth>} />
            <Route path="/articles/edit/:id" element={<RequireAuth><ArticleEditPage /></RequireAuth>} />
        </Routes>
    )
}