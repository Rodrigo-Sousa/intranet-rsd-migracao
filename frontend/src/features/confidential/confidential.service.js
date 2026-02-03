import api from "../../services/api";

export async function sendMessage(data) {
  const response = await api.post("/confidential", data);
  return response.data;
}
