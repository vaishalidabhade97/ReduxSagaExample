import { PayloadAction, createReducer } from "@reduxjs/toolkit";
import { getUsersFailure, getUsersFetch, getUsersSuccess } from "./actions";

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

export const profile = createReducer(initialState, (builder) => {
    builder.addCase(getUsersSuccess, (state, action) => {
        state.users = action.payload
    }).addCase(getUsersFailure, (state, action) => {
        state.error = action.payload
    }).addDefaultCase(() => {})
})



