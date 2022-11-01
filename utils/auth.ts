import axios from "axios";
import { API_KEY } from "@/keys/apiKey";

interface ICreateUser {
  email: string;
  password: string;
}

export async function createUser(email, password) {
  axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
