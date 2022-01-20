import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    age: 0,
    cpf: ''
}

export const personSlice = createSlice({
    name: "person",
    initialState,
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name
            state.age = action.payload.age
            state.cpf = action.payload.cpf
        },
    }
})

export const { update } = personSlice.actions

export default personSlice.reducer