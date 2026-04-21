import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlesPage from "../../pages/articles/ArticlesPage";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ArticlesPage />} />
            </Routes>
        </BrowserRouter>
    )
}