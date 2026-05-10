import { Routes, Route } from "react-router-dom";
import ArticlesPage from "../../pages/articles/ArticlesPage";
import ArticleDetailsPage from "../../pages/article-details/ArticleDetailsPage";
import LoginPage from "../../pages/login/LoginPage";
import ArticleCreatePage from "../../pages/article-create/ArticleCreatePage";
import ArticleEditPage from "../../pages/article-edit/ArticleEditPage";
import { RequireAuth } from "../providers/RequireAuth";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<ArticlesPage />} />
            <Route path="/articles/:id" element={<ArticleDetailsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-article" element={<RequireAuth><ArticleCreatePage /></RequireAuth>} />
            <Route path="/articles/edit/:id" element={<RequireAuth><ArticleEditPage /></RequireAuth>} />
        </Routes>
    )
}