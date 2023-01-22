import axios from "axios";

const instsance = axios.create({
  baseURL: "https://63caa4aa4f53a0042027c558.mockapi.io/contacts"
});

export const fetchContacts = async () => {
  const { data } = await instsance.get("/");
  return data;
}

export const addContact = async (data) => {
  const { data: result } = await instsance.post("/", data);
  return result;
}

export const deleteContact = async (id) => {
  const { data } = await instsance.delete(`/${id}`);
  return data;
}
