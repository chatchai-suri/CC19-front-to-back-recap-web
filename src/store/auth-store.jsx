import { create } from "zustand"
import { actionLogin, actionRegister } from "../api/auth"
import { persist } from "zustand/middleware"

// step 1 create store
const authStore = (set) => ({
  user: [],
  token: null,
  actionLoginWithZustand: async (value) => {
    try {
      const res = await actionLogin(value)
      // console.log("Hello, Zustand!!!", res)
      const { payload, token } = res.data
      console.log("payload.role ==== ", payload.role)
      console.log("token ==== ", token)
      set({user: payload, token: token})
      return{sucess: true, role: payload.role}
    } catch (error) {
      return{success: false, error: error.response?.data?.message}
    }
  }
})


// step 2 export store
const useAuthStore = create(persist(authStore,{name: 'auth-store'}))

export default useAuthStore