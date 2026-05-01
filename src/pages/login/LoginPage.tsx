import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../features/auth/api/authApi";
import { setToken } from "../../shared/lib/auth";

export default function LoginPage () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const data = await login(email, password);
            setToken(data.token);
            navigate("/");
        } catch (e) {
            alert("Login failed");
        }
    };

    return (
        <div>
            <h2>Login</h2>

            <input
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />

            <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            <button onClick={handleLogin}>Login</button>
        </div>
    )
}