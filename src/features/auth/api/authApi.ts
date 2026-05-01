import { api } from "../../../shared/api/client"

export const login = async(email: string, password: string) => {
    return api("/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
    });
};

export const register = async (userName: string, email: string, password: string) => {
    return api("/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({userName, email, password}),
    });
};