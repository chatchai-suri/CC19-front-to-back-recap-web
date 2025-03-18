import axios from "axios"

export const actionListUser = async (token) => {
  return await axios.get("http://localhost:8000/api/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
}

export const actionUpdateRole = async (token, value) => {
  return await axios.patch("http://localhost:8000/api/user/update-role", value, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
}

export const actionDeleteUser = async (token, id) => {
  return await axios.delete("http://localhost:8000/api/user/update-role/"+id, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
}