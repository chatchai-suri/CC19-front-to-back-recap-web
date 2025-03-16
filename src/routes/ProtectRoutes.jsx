// rfce
import React, { useEffect, useState } from "react";
import useAuthStore from "../store/auth-store";
import { Check, Heading1 } from "lucide-react";
import { actionCurrent } from "../api/auth";

function ProtectRoutes({ el, allows }) {
  // console.log("Hello, Protect Route");
  // const user = useAuthStore((state) => state.user)
  const [ok, setOk] = useState(null)
  const token = useAuthStore((state) => state.token)
  // console.log("user.role ==== ", user.role )
  // console.log("token ==== ", token)

  useEffect(()=> {
    //code
    checkPermission()
  },[])

  const checkPermission = async () => {
      // code body
      console.log("check permission")
      try {
        const res = await actionCurrent(token)
        const role = res.data.result.role
        // role from backend
        // console.log("role from backend ==== ", res.data.result.role)
        // if (allows.includes(role)) {
        //   setOk(true)
        // } else {
        //   setOk(false)
        // }
        setOk(allows.includes(role))
      } catch (error) {
        console.log(error)
        setOk(false)
      }
    }
    console.log("ok ==== ", ok)
    if (ok === null) {
      return <h1>Loading....</h1>
    }
    if (!ok) {
      return <h1>Unauthorized!!!</h1>
    }
  
  return el;
}

export default ProtectRoutes;
