
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { api } from "../Axiot/api";

import { api_cart, getcart, getProducts } from "../Axiot/api";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import Initial from "./Initial";
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


// const getallcart = () => async (dispatch) => {
//     const res = await getcart();

//     console.log('ay', res.data)
//     dispatch({ type: 'getcart', cart: res.data })

// }

// // const getallcart = getcart

// // const runFunc = getcart()

// // console.log('fg', runFunc)



const initialState = {
    counter: 0,
    wishlish: [],
    cart: [],


    TH: false,

};

///thunk
// const applyMiddleware = ReduxF .applyMiddleware

// export const frech_thunk = () => async (dispatch) => {
//     const res = await getProducts();

//     // console.log('ay', res.data)
//     dispatch({ type: 'get_products', products: res.data })

// }


//

const ReduxF = (state = initialState, action) => {


    switch (action.type) {

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

            // case ('delete_wish'):
            let ay = state.wishlish
            ay = ay.filter(e => e.id != action.id)
            return { ...state, wishlish: ay }

            // case ('add_cart'):
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
            // console.log(aa)
            return {
                ...state,
                cart: aa
            };
        case ('delete_cart'):
            var ay2 = state.cart
            ay2 = ay2.filter(e => e.id != action.id)
            return { ...state, cart: ay2 }

        // case ('tang_cart'):
        // var ay2 = state.cart
        // for (let ii = 0; ii < ay2.length; ii++) {
        //     if (ay2[ii].id == action.id) {
        //         ay2[ii].soluong++
        //         break
        //     }
        // }
        // return { ...state, TH: false, cart: ay2 }

        // case ('giam_cart'):
        // var ay2 = state.cart
        // var th = false
        // for (let ii = 0; ii < ay2.length; ii++) {
        //     if (ay2[ii].id == action.id) {
        //         if (ay2[ii].soluong > 1) {
        //             ay2[ii].soluong--
        //             break
        //         }
        //         else {
        //             th = true
        //         }
        //     }
        // }
        // return { ...state, TH: th, cart: ay2 }

        case ('clear_cart'):
            var ay2 = []
            return { ...state, cart: ay2 }


        case ('get_products'):
            // console.log('ui', action.products)
            return { ...state, products: action.products }

        case ('get_products_tag_men'):  //lọc tất các trường hợp
            // console.log('ui', action.products)

            return { ...state, products: action.products }

        case ('get_product_color'):
            return { ...state, products: action.products }

        case ('get_product_size'):
            return { ...state, products: action.products }

        case ('sx_price'):

            return { ...state, products: action.products }

        case ('search'):

            return { ...state, products: action.products }

        case ('post_cart'):
            var cart_ar = state.cart
            cart_ar.push(action.cart)
            // console.log(action.cart)
            return { ...state, cart: cart_ar }

        case ('tang_cart'):
            // console.log('action tang cart ', action.soluong)
            var ay2 = state.cart
            ay2.map(e => e.id == action.id ? e.soluong = action.soluong : '')
            // console.log('gam cart :', action.soluong)
            return { ...state, cart: ay2, TH: false }


        case ('giam_cart'):
            // var cart_ar = state.cart
            // cart_ar.push(action.cart)


            // state = state.cart.map(e => e.id == action.id ? e.soluong-- : '')

            if (action.check == true) {
                // console.log(state.cart)
                return { ...state, TH: true }
            }
            else {
                var ay2 = state.cart
                ay2.map(e => e.id == action.id ? e.soluong = action.soluong : '')
                // console.log('ay2')
                return { ...state, cart: ay2, TH: false }
            }


        case ('post_wish'):
            var wish_ar = state.wishlish
            wish_ar.push(action.wish)
            console.log(wish_ar)
            return { ...state, wishlish: wish_ar }

        case ('delete_wish'):
            var ay2 = state.wishlish
            ay2 = ay2.filter(e => e.id != action.id)
            return { ...state, wishlish: ay2 }
        case ('getcart'):

            return { ...state, cart: action.cart }
        case ('getwish'):

            return { ...state, wishlish: action.wish }

        default:
            // getallcart()/// load cart lần đầu
            // console.log(initializeData())
            // initializeData()
            // console.log(ay)
            // var as = []


            return state
    }
};

export default ReduxF