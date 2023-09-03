import axios from "axios";
import {call, put, takeLatest} from 'redux-saga/effects'
import { Users } from "./reducer";
import { getUsersFailure, getUsersFetch, getUsersSuccess } from "./actions";

async function userFetch(){
    console.log("--- in usersFetch of srcReduxReducerHook ---")
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.data)
    .catch((err) => {
        throw err
    })
}

function* getUsers() {
    console.log("--- in getUsers of srcReduxReducerHook ---")
    try {
        const users: Users[] = yield call(userFetch)
        yield put(getUsersSuccess(users))

    }
    catch(error) {
        yield put(getUsersFailure(error))

    }
}

function* mySaga() {
    console.log("--- in mySaga of srcReduxReducerHook ---")
    yield takeLatest(getUsersFetch, getUsers)
}

export default mySaga;