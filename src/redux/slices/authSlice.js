import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : undefined,
    isSidebarOpen : false
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    setCredentials : (state, action) => {
        state.user = action.payload,
        localStorage.setItem('userInfo', JSON.stringify(action.payload))
    },
    logout : (state, action) => {
       state.user = null,
       localStorage.removeItem('userInfo')
    },
    setOpenSideBar : (state, action) => {
        state.isSidebarOpen = action.payload
    }
})

export const {setCredentials, logout, setOpenSideBar} = authSlice.actions


export default authSlice.reducer