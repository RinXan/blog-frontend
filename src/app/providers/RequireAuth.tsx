import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../shared/lib/auth";

type Props = {
    children: React.ReactNode;
};

export const RequireAuth = ({children}: Props) => {
    if (!isAuthenticated()) {
        return <Navigate to="/login" replace />
    }

    return children;
}