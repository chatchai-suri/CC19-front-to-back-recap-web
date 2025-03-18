import axios from "axios"

export const actionListUser = async (token) => {
  return await axios.get("http://localhost:8000/api/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
}