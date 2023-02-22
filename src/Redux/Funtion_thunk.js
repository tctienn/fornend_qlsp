import { api_cart, delete_cart_api, delete_wish_api, getProducts, search } from "../Axiot/api"
import { ToastContainer, toast } from 'react-toastify';

export const frech_thunk = () => async (dispatch) => {
    const res = await getProducts();

    // console.log('ay', res.data)
    dispatch({ type: 'get_products', products: res.data })

}

export const get_tag = (tag_name) => async (dispatch) => {
    const res = await getProducts();
    // res = res.data.filter(e => e.loai.filter(ee => ee == 'men').length > 0)
    dispatch({ type: 'get_products_tag_men', products: res.data.filter(e => e.tags.filter(ee => ee == tag_name.name).length > 0) })

}

export const get_product_loai = (loai) => async (dispatch) => {

    const res = await getProducts();

    if (loai.name == 'all categories') {

        dispatch({ type: 'get_products', products: res.data })
    }
    else {

        // res = res.data.filter(e => e.loai.filter(ee => ee == 'men').length > 0)
        dispatch({ type: 'get_products_tag_men', products: res.data.filter(e => e.loai.filter(ee => ee == loai.name).length > 0) })
    }
}


export const get_product_color = (color) => async (dispatch) => {
    const res = await getProducts();
    if (color.name == 'all color') {
        dispatch({ type: 'get_products', products: res.data })
    }
    else {

        // res = res.data.filter(e => e.loai.filter(ee => ee == 'men').length > 0)

        dispatch({ type: 'get_product_color', products: res.data.filter(e => e.color.filter(ee => ee == color.name).length > 0) })
    }

}

export const get_product_size = (size) => async (dispatch) => {

    const res = await getProducts();
    if (size.name == 'all size') {
        dispatch({ type: 'get_products', products: res.data })
    }

    // res = res.data.filter(e => e.loai.filter(ee => ee == 'men').length > 0)

    else
        dispatch({ type: 'get_product_size', products: res.data.filter(e => e.size.filter(ee => ee == size.name).length > 0) })
}




export const search_product = (name) => async (dispatch) => {
    // var url = new URL(window.location.href);
    // var productName = url.searchParams.get("name");
    // console.log(name)
    const res = await search({ name: name });
    // console.log(res.data)
    dispatch({ type: 'search', products: res.data })

}

export const sx_price = (hienthi) => async (dispatch) => {

    const res = await getProducts();
    var sx
    if (hienthi == 'default') {
        sx = res.data

    }
    else {
        if (hienthi == 'giam') {

            sx = res.data.sort((a, b) => b.gia - a.gia)

        }
        else {
            sx = res.data.sort((a, b) => a.gia - b.gia)

        }
    }


    // console.log(sx)
    dispatch({ type: 'sx_price', products: sx })
}


///// them cart thông qua api

export const postcart = (id, soluong, data) => async (dispatch) => {
    return await api_cart.get('/cart')
        .then(res => {
            const check_id = res.data.find(e => e.id == id)
            // some array ??
            // const resss = res
            // console.log("action: ", check_id, id, data, resss)
            // console.log(typeof check_id, id)
            if (typeof check_id != 'undefined') {
                // console.log('check ', check_id)
                api_cart.put(`/cart/${check_id.id_def}`, { id: check_id.id, soluong: (check_id.soluong + soluong), data: data })
                    .then(
                        dispatch({ type: 'tang_cart', id: id, soluong: (check_id.soluong + soluong) }),
                        toast.success('tăng số lượng sản phẩm', {
                            position: "bottom-left",
                            autoClose: 800,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        })
                    )
            }
            else { /// nếu click sản phẩm mới nhanh thì hàm chỉ chạy điều kiện này
                // console.log('check ')

                return api_cart.post(`/cart`, { id: id, soluong: soluong, data: data })
                    .then(

                        dispatch({ type: 'post_cart', cart: { id: id, soluong: soluong, data: data } }),

                        toast.success('add to cart!', {
                            position: "bottom-left",
                            autoClose: 800,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        })

                    )
            }
        }
        )


}


export const giam_cart = (id, soluong) => (dispatch) => {
    return api_cart.get('/cart')
        .then(res => {

            const check_id = res.data.find(e => e.id == id)

            if (typeof check_id != 'undefined') {
                var check = check_id.soluong <= 1 ? true : false
                if (check != true) {
                    // console.log(check_id)
                    return api_cart.put(`/cart/${check_id.id_def}`, { id: id, soluong: (check_id.soluong - 1), data: check_id.data })
                        .then(
                            dispatch({ type: 'giam_cart', id: id, soluong: ((check_id.soluong - 1)), check: check }),
                            toast.success(' đã giảm sản phẩm  ', {
                                position: "bottom-left",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                            })
                        )
                }
                else {  /// số lượng nhỏ hơn 1 
                    dispatch({ type: 'giam_cart', check: check })
                }


            }
            else {

                // console.log('add')
                // return api_cart.post(`/cart`, { id: id, soluong: soluong, data: data })
                console.log('ko co ')
            }
        }
        )
}

export const delete_cart = (id) => (dispatch) => {
    return api_cart.get('/cart')
        .then(res => {
            const check_id = res.data.find(e => e.id == id)
            delete_cart_api(check_id.id_def)
            dispatch({ type: 'delete_cart', id: id })
        })

}



export const postwish = (id, data) => async (dispatch) => {
    return await api_cart.get('/wish')
        .then(res => {
            const check_id = res.data.find(e => e.id == id)

            if (typeof check_id != 'undefined') {
                toast.success(' sản phẩm đã có trong danh sách mong muốn', {
                    position: "bottom-left",
                    autoClose: 800,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            }
            else { /// nếu click sản phẩm mới nhanh thì hàm chỉ chạy điều kiện này
                // console.log('check ')

                return api_cart.post(`/wish`, { id: id, data: data })
                    .then(

                        dispatch({ type: 'post_wish', wish: { id: id, data: data } }),

                        toast.success('add to wish!', {
                            position: "bottom-left",
                            autoClose: 800,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        })

                    )
            }
        })

}

export const delete_wish = (id) => (dispatch) => {
    console.log(id)
    return api_cart.get('/wish')
        .then(res => {
            const check_id = res.data.find(e => e.id == id)
            delete_wish_api(check_id.id_def)

            dispatch({ type: 'delete_wish', id: id })
        })

}