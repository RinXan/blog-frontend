import { Link, useNavigate } from "react-router-dom";
import { getUserFromToken } from "../lib/jwt"
import { removeToken } from "../lib/auth";

export const Navbar = () => {
    const user = getUserFromToken();
    const navigate = useNavigate();

    const handleLogout = () => {
        removeToken();
        navigate("/login");
    };

    return (
        <div style={{display: "flex", gap: "10px", marginBottom: "20px"}}>
            <Link to="/">Home</Link>
            {user ? (
                <>
                    <span>👤 {user.userName}</span>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </div>
    )
}