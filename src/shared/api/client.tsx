import { API_URL } from "./base";

export const api = async (url: string, options?: RequestInit) => {
  const res = await fetch(`${API_URL}${url}`, options);

  if (!res.ok) throw new Error("API error");
  
  return res.json();
};