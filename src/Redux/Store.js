// import { configureStore } from "@reduxjs/toolkit";
// import ReduxF from './Redux'

// export const store = configureStore({
//     reducer: {
//         counter: ReduxF,
//     },
// })

import { createStore } from "redux";
import ReduxF from './Redux'

import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

export const store = createStore(ReduxF, applyMiddleware(thunk));


