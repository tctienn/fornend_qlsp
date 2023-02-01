import { getProducts, search } from "../Axiot/api"

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
    console.log(res.data)
    dispatch({ type: 'search', products: res.data })

}

export const sx_price = (hienthi) => async (dispatch) => {

    const res = await getProducts();
    var sx
    if (hienthi.name == 'Defalt') {
        sx = res.data
    }

    // res = res.data.filter(e => e.loai.filter(ee => ee == 'men').length > 0)

    else if (hienthi.name == 'giam') {
        sx = res.data.sort((a, b) => a.gia - b.gia)
    }
    else { sx = res.data.sort((a, b) => b.gia - a.gia) }

    dispatch({ type: 'sx_price', products: sx })
}