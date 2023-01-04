import { configureStore } from "@reduxjs/toolkit";
import ReduxF from './Redux'

export const store = configureStore({
    reducer: {
        counter: ReduxF,
    },
})