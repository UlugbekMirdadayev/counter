import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name:"count",
    initialState: 1,
    reducers:{
        setCount:(_, {payload})=>{
           return payload
        },
    },
});

export const { setCount } = countSlice.actions // userSlice -> countSlice ga o'zgartirilgan


export default countSlice.reducer