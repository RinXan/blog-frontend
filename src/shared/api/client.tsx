import { getToken } from "../lib/auth";
import { API_URL } from "./base";

export const api = async (url: string, options: RequestInit = {}) => {
  const token = getToken();

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string> || {}),
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_URL}/${url.replace(/^\/+/, "")}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    throw new Error("API error");
  }

  return res.json();
};