import axios from "axios";
import {call, put, takeLatest} from 'redux-saga/effects'
import { Users } from "./reducer";
import { ActionType } from "./actions";

async function userFetch(){
    console.log("--- in usersFetch of srcReduxWithoutHook ---")
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.data)
    .catch((err) => {
        throw err
    })
}

function* getUsers() {
    console.log("--- in getUsers of srcReduxWithoutHook ---")
    try {
        const users: Users[] = yield call(userFetch)
        yield put({type: ActionType.GET_USERS_SUCCESS, payload: users})

    }
    catch(error) {
        yield put({type: ActionType.GET_USERS_FAILURE, payload: error})

    }
}

function* mySaga() {
    console.log("--- in mySaga of srcReduxWithoutHook ---")
    yield takeLatest(ActionType.GET_USERS_FETCH, getUsers)
}

export default mySaga;