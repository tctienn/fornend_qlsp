
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { api } from "../Axiot/api";

import { api_cart, getcart, getProducts } from "../Axiot/api";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import Initial from "./Initial";


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

            return state
    }
};

export default ReduxF