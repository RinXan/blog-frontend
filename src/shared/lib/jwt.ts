import { jwtDecode } from "jwt-decode";
import { getToken } from "./auth";

type JwtPayload = {
    [key: string]: any,
};

export const getUserFromToken = () => {
    const token = getToken();

    if (!token) return null;

    try {
        const decoded = jwtDecode<JwtPayload>(token);

        const id = decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];

        const userName = decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];

        return {
            id: Number(id),
            userName,
        };
    } catch {
        return null;
    }
};