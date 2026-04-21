export const api = async (url: string, options?: RequestInit) => {
  const res = await fetch(`http://localhost:5296/api${url}`, options);

  if (!res.ok) throw new Error("API error");
  
  return res.json();
};