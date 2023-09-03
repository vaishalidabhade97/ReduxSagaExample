import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Users = {
address: {city: string, geo: [Object], street: string, suite: string, zipcode: string}, 
company: {bs: string, catchPhrase: string, name: string},
email: string, 
id: number, 
name: string, 
phone: string, 
username: string, 
website: string
}

type MyState = {
    name: string,
    users: Users[],
    error: string | unknown
}

const initialState: MyState = {
    name: "Initial name",
    users: [],
    error: ""
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        getUsersSuccess: (state, action: PayloadAction<Users[]>) =>{
            state.users = action.payload
        },
        getUsersFailure: (state, action: PayloadAction<string | unknown>) => {
            state.error = action.payload
        },
        getUsersFetch: (state, action: PayloadAction) => {}
    }

});

export const {getUsersSuccess, getUsersFailure, getUsersFetch} = profileSlice.actions;

export default profileSlice.reducer


