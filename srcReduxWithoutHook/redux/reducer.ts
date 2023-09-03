import { Action, ActionType } from "./actions";

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

export function profile(state = initialState, action: Action) {
    switch (action.type) {
        case ActionType.GET_USERS_FETCH: 
            return state
        case ActionType.GET_USERS_SUCCESS: 
            return {
                ...state,
                users: action.payload
            }
        case ActionType.GET_USERS_FAILURE: 
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }

}
