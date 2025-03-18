// rfce
import React, { useEffect, useState } from "react";
import useAuthStore from "../../store/auth-store";
import axios from "axios";
import { actionListUser } from "../../api/user";
import { Trash2 } from "lucide-react";

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
              <td>{item.role}</td>
              <td> <Trash2 color="red" /> </td>
            </tr>
          );
        })}
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Manage;
