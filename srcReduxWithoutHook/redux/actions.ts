import { Users } from "./reducer";

export enum ActionType {
    GET_USERS_FETCH = 'GET_USERS_FETCH',
    GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
    GET_USERS_FAILURE = 'GET_USERS_FAILURE'
}

interface getUsersFetch {
    type: ActionType.GET_USERS_FETCH;
}
interface getUsersSuccess {
    type: ActionType.GET_USERS_SUCCESS;
    payload: Users[];
}

interface getUsersFailure {
    type: ActionType.GET_USERS_FAILURE;
    payload: string;
}

export type Action = getUsersFetch | getUsersSuccess | getUsersFailure
