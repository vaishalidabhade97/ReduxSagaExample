import axios from "axios";
import {call, put, take, takeEvery, takeLatest} from 'redux-saga/effects'
import { Users, getUsersFailure, getUsersFetch, getUsersSuccess } from "./reducer";

async function userFetch(){
    console.log("--- in usersFetch of srcReduxSliceHook ---")
    return axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.data)
    .catch((err) => {
        throw err
    })
}

function* getUsers() {
    console.log("--- in getUsers of srcReduxSliceHook ---")
    try {
        const users: Users[] = yield call(userFetch)
        yield put(getUsersSuccess(users))

    }
    catch(error) {
        yield put(getUsersFailure(error))

    }
}

function* mySaga() {
    console.log("--- in mySaga of srcReduxSliceHook ---")
    yield takeLatest(getUsersFetch, getUsers)
}

export default mySaga;