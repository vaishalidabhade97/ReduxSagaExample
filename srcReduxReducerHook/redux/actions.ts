import { createAction } from "@reduxjs/toolkit";
import { Users } from "./reducer";

export enum ActionType {
    GET_USERS_FETCH = 'GET_USERS_FETCH',
    GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
    GET_USERS_FAILURE = 'GET_USERS_FAILURE'
}

export const getUsersFetch = createAction(ActionType.GET_USERS_FETCH)
export const getUsersSuccess = createAction<Users[]>(ActionType.GET_USERS_SUCCESS)
export const getUsersFailure = createAction<string | unknown>(ActionType.GET_USERS_FAILURE)
