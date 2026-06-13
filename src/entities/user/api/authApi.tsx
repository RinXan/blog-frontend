import { api } from "../../../shared/api/client";

export const login = async (data: {
  email: string;
  password: string;
}) => {
  return api("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const register = async (data: {
  userName: string;
  email: string;
  password: string;
}) => {
  return api("/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
};