import { ActionType } from "./actions"

export function takeGetUserFetchAction(){
    return {
        type: ActionType.GET_USERS_FETCH
    }
}