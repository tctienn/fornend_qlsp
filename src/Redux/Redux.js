
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../Axiot/api";

const data = {
    value: 1,
}


export const thunk_funtion = createAsyncThunk('reduc1/thunk_funtion', async () => {
    const response = await api.get('/products/1')
    // console.log('ay', response.data)
    return response.data

})


const ReduxF = createSlice({
    name: 'reduc1',
    initialState: data,
    reducers: {
        add: (state) => {
            state.value += 1
        }
    },
    extraReducers: {
        [thunk_funtion.fulfilled]: (state, action) => {
            return action.payload
        },
    },
})

export const { add, } = ReduxF.actions
export default ReduxF.reducer
