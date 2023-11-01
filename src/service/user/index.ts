import api from "../api";

const BASE = "/user";

class User {
  constructor() {}

  async registerUser({
    fullName,
    email,
    username,
    password,
    confirmPassword,
  }: {
    fullName: string;
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
  }) {
    return await api.post(`${BASE}/register`, {
      fullName,
      email,
      username,
      password,
      confirmPassword,
    });
  }

  async getSingleUser(id: string) {
    return await api.get(`${BASE}/${id}`);
  }
  async getAllUser() {
    return await api.get(`${BASE}`);
  }
}

const userInstance = new User();

export default userInstance;
