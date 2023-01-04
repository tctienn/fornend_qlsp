
import { createSlice } from "@reduxjs/toolkit";

const data = {
    value: 1,
}

const ReduxF = createSlice({
    name: 'reduc1',
    initialState: data,
    reducers: {
        add: (state) => {
            state.value += 1
        }
    }
})

export const { add, } = ReduxF.actions
export default ReduxF.reducer
