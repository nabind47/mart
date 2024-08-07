import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_PUBLIC_BACKEND_URL ||
    "http://localhost:4000/api/admins",
  headers: {
    "Content-Type": "application/json",
  },
});

export const adminLogin = async (data: { email: string; password: string }) =>
  api.post("/auth/login", data);

export const adminRegister = async (data: {
  name: string;
  email: string;
  password: string;
}) => api.post("/auth/register", data);

export const getAllVendors = async () => api.get("/vendors");
