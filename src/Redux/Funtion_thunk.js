import { getProducts, search } from "../Axiot/api"

export const frech_thunk = () => async (dispatch) => {
    const res = await getProducts();

    // console.log('ay', res.data)
    dispatch({ type: 'get_products', products: res.data })

}

export const get_tag_men = (tag_name) => async (dispatch) => {
    const res = await getProducts();
    // res = res.data.filter(e => e.loai.filter(ee => ee == 'men').length > 0)
    dispatch({ type: 'get_products_tag_men', products: res.data.filter(e => e.tags.filter(ee => ee == tag_name.name).length > 0) })
}

export const get_product_loai = (loai) => async (dispatch) => {
    const res = await getProducts();
    // res = res.data.filter(e => e.loai.filter(ee => ee == 'men').length > 0)
    dispatch({ type: 'get_products_tag_men', products: res.data.filter(e => e.loai.filter(ee => ee == loai).length > 0) })
}



export const search_product = (name) => async (dispatch) => {
    var url = new URL(window.location.href);
    var productName = url.searchParams.get("name");
    const res = await search({ name: productName });

    dispatch({ type: 'search', products: res.data })
}