import { Link } from "react-router-dom";
import type { Article } from "../model/types";

type Props = {
    article: Article
};

export default function ArticleCard({article}: Props) {
    return (
        <div className="bg-white rounded-xl shadow p-5">
            <h2 className="text-2xl font-semibold mb-2">
                {article.title}
            </h2>

            <p className="text-gray-600 mb-4 line-clamp-3">
                {article.content}
            </p>

            <Link 
            to={`/articles/${article.id}`}
            className="text-blue-600 hover:underline">
                Read more...
            </Link>
        </div>
    )
}