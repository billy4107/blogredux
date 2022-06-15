import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: 'awfesa avba'},
    {id: '1', name: 'zxcvb byny'},
    {id: '2', name: 'pocnbi xcvbxc'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    }
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer