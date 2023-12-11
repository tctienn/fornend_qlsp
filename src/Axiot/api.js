import axios from 'axios'
import { useState } from 'react';
import { getCookie, taocock } from './taocock';

// axios.get(`https://62b6e8c76999cce2e809fa1e.mockapi.io/dkt/products`)

export const api = axios.create({
    // baseURL: 'https://62d59d9515ad24cbf2caa1cd.mockapi.io/tets/',
    baseURL: 'https://657695fa0fd5d07e432eabee.mockapi.io/products',

    // baseURL: 'http://localhost:3000/',
    timeout: 30000,
    // headers: {'X-Custom-Header': 'foobar'}
});

export const getProducts = () => {

    return api.get(`/data`);
}

export const search = (params) => {
    return api.get(`/data`, { params })
}

///////////////////cart
export const api_cart = axios.create({
    baseURL: 'https://63e1d068f59c591411a6e1bb.mockapi.io/',
    // baseURL: 'http://localhost:3000/',
    timeout: 30000,
    // headers: {'X-Custom-Header': 'foobar'}
});


export const getcart = () => {
    // const res = await api_cart.get('/cart');
    // console.log('ay', res.data)

    return api_cart.get(`/cart`)

}

export const delete_cart_api = (param) => {
    return api_cart.delete(`/cart/${param}`)
}

//////////wish




export const getwish = () => {
    // const res = await api_cart.get('/cart');
    // console.log('ay', res.data)

    return api_cart.get(`/wish`)

}

export const delete_wish_api = (param) => {
    return api_cart.delete(`/wish/${param}`)
}


///////////////////////////////////////////


export const api_login = axios.create({
    baseURL: 'http://localhost:8888/login',
    // baseURL: 'http://localhost:3000/',
    timeout: 30000,
    // headers: {'X-Custom-Header': 'foobar'}
});

export const post_login = (data) => {
    console.log(data)
    return api_login.post(``,data);
}

api_login.interceptors.response.use(function(response) {
    // Trả về dữ liệu phản hồi
    // console.log('ay :', response)
    // localStorage.setItem('token', response.data.access_token)
    taocock('login_token' , response.data.access_token,'36000');
        // console.log(localStorage.getItem('token'))

    return response;
}, function(error) {
    // Xử lý lỗi
    console.log('lỗi')
    return Promise.reject(error);
});


//////////// public   cái này dùng làm gì quên mịa nó rồi

export const api_product = axios.create({
    baseURL: 'https://657695fa0fd5d07e432eabee.mockapi.io/products',
    // baseURL: 'http://localhost:3000/',
    // timeout: 30000,
    // headers: {'X-Custom-Header': 'foobar'}
});

export const get_products =()=>{

    return api_product.get();
}


/////// user

export const api_user  = axios.create({
    baseURL: 'http://localhost:8888/user/get-cart',
    // baseURL: 'http://localhost:3000/',
    // timeout: 30000,
    // headers: {'X-Custom-Header': 'foobar'}
});

api_user.interceptors.request.use(function(config) {
    if (config.method === 'get') {
        // var token = localStorage.getItem('token')
        var token = getCookie('login_token')
        if (token) {
            config.data = null // xác nhận phương thức get không gửi dữ liệu 
            config.headers = {
                Authorization: `Bearer ${token}`,
                'Accept': 'application/json', // báo cho máy chủ muốn nhận dữ liệu response dạng json 
                'Content-Type': 'application/json'
            };
            return config
        }
    }

}, function(error) {
    // Xử lý lỗi
    console.log('lỗi ở intercepter')
    return Promise.reject(error);
});

export const get_carts =()=>{

    return api_user.get();
}