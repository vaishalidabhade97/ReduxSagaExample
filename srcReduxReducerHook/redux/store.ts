import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import mySaga from "./sagas";
import { profile } from "./reducer";

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
    profile: profile
})

export const store = configureStore(
    {
        reducer: rootReducer,
        middleware: [sagaMiddleware]
    }
)

sagaMiddleware.run(mySaga)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch