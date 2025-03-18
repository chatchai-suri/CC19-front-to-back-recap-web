// rfce
import React, { useEffect, useState } from "react";
import useAuthStore from "../../store/auth-store";
import axios from "axios";
import { actionListUser, actionUpdateRole } from "../../api/user";
import { LucideTrash2, Trash2 } from "lucide-react";
import { createAlert } from "../../utils/createAlert";

function Manage() {
  const token = useAuthStore((state) => state.token);
  console.log("token ==== ", token);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    hdlFetchUsers(token);
  }, []);

  const hdlFetchUsers = async (token) => {
    try {
      const res = await actionListUser(token);
      // console.log("res.data.result ==== ", res.data.result)
      setUsers(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("users ==== ", users);

  const hdlUpdateRole = async (token, id, role) => {
    console.log("token, id, role")
    try {
      const res = await actionUpdateRole(token, {id, role})
      createAlert("success", "Update Role Success!!!")
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <table className="table-fixed">
      <thead>
        <tr>
          <th>No.</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((item, index) => {
          return (
            <tr key={index}> 
              <td>{index +1}</td>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.email}</td>
              <td> 
                {/* Select */}
                <select
                onChange={(e)=>hdlUpdateRole(token, item.id, e.target.value)}
                defaultValue={item.role}
                >
                  <option>USER</option>
                  <option>ADMIN</option>
                </select>
                {/* /Select */}
              </td>
              <td><LucideTrash2 color="red" /> </td>

            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Manage;
