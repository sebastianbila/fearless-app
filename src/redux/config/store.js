import {applyMiddleware, createStore} from "redux";
import reduxThunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import {rootReducer} from "./reducer";
import rootSaga from "./saga";

/* Saga Middleware Instance*/
const sagaMiddleware = createSagaMiddleware()

/* Creating store and apply middleware*/
const store = createStore(rootReducer, applyMiddleware(reduxThunk, sagaMiddleware))

/* Running sagas*/
sagaMiddleware.run(rootSaga)

export default store
