
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { api } from "../Axiot/api";

// const data = {
//     value: 1,
// }


// export const thunk_funtion = createAsyncThunk('reduc1/thunk_funtion', async () => {
//     const response = await api.get('/products/1')
//     // console.log('ay', response.data)
//     return response.data

// })


// const ReduxF = createSlice({
//     name: 'reduc1',
//     initialState: data,
//     reducers: {
//         add: (state) => {
//             state.value += 1
//         }
//     },
//     extraReducers: {
//         [thunk_funtion.fulfilled]: (state, action) => {
//             return action.payload
//         },
//     },
// })

// export const { add, } = ReduxF.actions
// export default ReduxF.reducer



const initialState = {
    counter: 0,
    wishlish: [],
    cart: [],
};

///thunk
// const applyMiddleware = ReduxF .applyMiddleware

const ReduxF = (state = initialState, action) => {
    switch (action.type) {
        case ('INCREMENT_COUNTER'):
            return { ...state, counter: (state.counter + 1) };
        case ('DECREMENT_COUNTER'):
            return {
                ...state,
                counter: state.counter - 1
            };
        case ('add_wishlish'):
            let check = false
            const a = state.wishlish;
            if (a.length > 0) {
                // a.map(e => e.id == action.id ? e.soluong++ : e)
                for (let ii = 0; ii < a.length; ii++) {
                    if (a[ii].id == action.id) {
                        a[ii].soluong++
                        check = true
                        break
                    }


                }

            }

            if (check == false)
                a.push({ id: action.id, soluong: 1, data: action.data })
            return {
                ...state,
                wishlish: a
            };

        case ('delete_wish'):
            let ay = state.wishlish
            ay = ay.filter(e => e.id != action.id)
            return { ...state, wishlish: ay }

        case ('add_cart'):
            let check2 = false
            const aa = state.cart;
            if (aa.length > 0) {
                // a.map(e => e.id == action.id ? e.soluong++ : e)
                for (let ii = 0; ii < aa.length; ii++) {
                    if (aa[ii].id == action.id) {
                        aa[ii].soluong++
                        check2 = true
                        break
                    }
                }
            }

            if (check2 == false)
                aa.push({ id: action.id, soluong: 1, data: action.data })
            return {
                ...state,
                cart: aa
            };
        case ('delete_cart'):
            var ay2 = state.cart
            ay2 = ay2.filter(e => e.id != action.id)
            return { ...state, cart: ay2 }

        case ('tang_cart'):
            var ay2 = state.cart
            for (let ii = 0; ii < ay2.length; ii++) {
                if (ay2[ii].id == action.id) {
                    ay2[ii].soluong++
                    break
                }
            }
            return { ...state, cart: ay2 }

        case ('giam_cart'):
            var ay2 = state.cart
            for (let ii = 0; ii < ay2.length; ii++) {
                if (ay2[ii].id == action.id) {
                    ay2[ii].soluong--
                    break
                }
            }
            return { ...state, cart: ay2 }

        case ('clear_cart'):
            var ay2 = []
            return { ...state, cart: ay2 }
        default:
            return state
    }
};

export default ReduxF