import axios from "axios";
import { API_KEY } from "@/keys/apiKey";

interface ICreateUser {
  email: string;
  password: string;
}

const authenticate = async (mode, email, password) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const result = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  console.log(`${mode} 완료`);
};

export async function createUser(email, password) {
  await authenticate("signUp", email, password);
}

export async function login(email, password) {
  await authenticate("signInWithPassword", email, password);
}
