import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Fooder from '../component/Fooder'
import Header2 from '../component/Header2'
import Header from '../component/Header'
import { products } from '../data/data'
import { store } from '../Redux/Store'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api_cart, getProducts, getcart } from '../Axiot/api'


function Cart({ states }) {



    // const ay = () => {
    //     const as = typeof data
    //     if (as === 'undefined')
    //         check = false



    // }
    // console.log(check)
    // const get_cart = () => async () => {
    //     const res = await api_cart.get()
    //     // store.dispatch({ type: 'getcart', cart: res.data })
    //     console.log('ay')
    // }
    // useEffect(() => {
    //     const get_cart = async () => {
    //         const res = await getcart()
    //         store.dispatch({ type: 'getcart', cart: res.data })

    //     }
    //     get_cart()

    // }, [])

    const [as, setAs] = useState('')
    useEffect(() => {
        // var scroller = document.querySelector("#scroller");
        // scroller.addEventListener("scroll", (event) => {
        //     // output.textContent = `scrollTop: ${scroller.scrollTop}`;
        //     setAs(scroller.scrollTop)
        // }, [as]);

        const checks = () => {

            if (states.TH == true) {

                toast.success(' số lượng sản phẩm không được nhỏ hơn 1  ', {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            }
        }
        checks()
    })


    const delete_on_wish = (id, name) => {
        let ay = { type: 'delete_cart', id: id }
        store.dispatch(ay)

        toast.success(' đã xóa sản phẩm : ' + name, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }



    const click_input_t = (id) => {

        store.dispatch({ type: 'tang_cart', id: id.id })


    }

    const click_input_g = (id) => {

        store.dispatch({ type: 'giam_cart', id: id.id })

    }

    const onclick_clear_cart = () => {
        store.dispatch({ type: 'clear_cart' })
    }

    return (
        <div>

            {/* <Header /> */}

            <div
                id='scroller' style={{
                    // // border: '3px solid #00ff00',
                    width: '100%',
                    // height: '660px',
                    // overflowX: 'hidden',
                    overflowY: 'auto',
                    // backgroundColor: '#f3f4f6'

                }}>
                {/* <button onClick={() => get_cart()}>
                    ay
                </button> */}

                <Header2 scrol={as} />
                <ToastContainer />
                {states.cart?.length == 0 ?
                    <div>
                        <div className='patch_product' style={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}>
                            <Link to={'/'} className='Link_name_product'>HOME</Link> / SHOP PRODUCT
                        </div>
                        <div className='no_wishlish'>
                            <iconify-icon icon="bi:heart" style={{ color: 'black' }} width="80"></iconify-icon>
                            No items found in cart
                            <Link to={'/'}>
                                <button>
                                    add item
                                </button>
                            </Link>
                        </div>
                    </div>
                    :
                    <div className='lish_item'>
                        <div className='body_lish_item'>
                            your lish item

                            <table width='100%'>
                                <tbody>
                                    <tr style={{ backgroundColor: '#f9f9f9' }} >



                                        <th className='th_panding'>
                                            IMAGE
                                        </th>
                                        <th className='th_panding'>
                                            PRODUCT NAME
                                        </th>
                                        <th className='th_panding'>
                                            UNIT PRICE
                                        </th>
                                        <th className='th_panding'>
                                            QTY
                                        </th>
                                        <th className='th_panding'>
                                            SUBTOTAL
                                        </th>
                                        <th className='th_panding'>
                                            ACTION
                                        </th>
                                    </tr>
                                    {states.cart.map((e, i) =>
                                        <tr key={i}>
                                            <td>
                                                <img style={{
                                                    width: '76px',
                                                    aspectRatio: '2/2',
                                                    margin: '7px',
                                                }} src={e.data.img1} />
                                            </td>
                                            <td>
                                                {e.data.name}
                                            </td>
                                            <td>
                                                €{e.data.gia.toFixed(2)}
                                            </td>
                                            <td>
                                                <div style={{ display: 'flex' }}>
                                                    <button className='button_number' name='ay' onClick={() => click_input_t(e)}>
                                                        <iconify-icon icon="ic:twotone-plus" style={{ color: 'gray' }}></iconify-icon>
                                                    </button>
                                                    <div>{e.soluong}</div>
                                                    <button onClick={() => click_input_g(e)} name='-' className='button_number'>
                                                        <iconify-icon icon="ic:baseline-minus" style={{ color: 'gray', opacity: states.TH ? '0' : '1' }}></iconify-icon>
                                                    </button>
                                                    {console.log(states.TH)}

                                                </div>
                                            </td>
                                            <td>
                                                €{(e.data.gia * e.soluong).toFixed(2)}
                                            </td>
                                            <td>
                                                <iconify-icon onClick={() => delete_on_wish(e.id, e.data.name)} icon="bx:x" style={{ color: 'gray' }} width="20"></iconify-icon>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <br />
                            <div style={{ display: 'flex', justifyContent: 'space-between', }} >
                                <div className='buttoncart'>
                                    CONTINUE SHOPPING
                                </div>
                                <div onClick={onclick_clear_cart} className='buttoncart'>
                                    CLEAR SHOPPING CART
                                </div>
                            </div>

                            <br />



                        </div>

                        <div style={{ display: 'flex', width: '70%', margin: 'auto', justifyContent: 'space-between', }} >
                            <div className='cart_c'>
                                <h4 style={{ width: '80%' }}>
                                    Estimate Shipping And Tax
                                </h4>

                                <p style={{ width: '80%' }}>
                                    Enter your destination to get a shipping estimate.
                                </p>
                                <label style={{ width: '80%' }}>
                                    * Country
                                </label>
                                <select className="form-select btn" style={{ textAlign: 'start', }} aria-label="Default select example">
                                    <option value="1">Bangladesh</option>
                                    <option value="1">Albania</option>
                                    <option value="2">Slsnd Islands</option>
                                    <option value="3">Afghanistan</option>
                                    <option value="4">Belgum</option>
                                </select>
                                <br />
                                <label style={{ width: '80%' }}>
                                    Region / State
                                </label>
                                <br />
                                <select className="form-select btn" style={{ textAlign: 'start' }} aria-label="Default select example">
                                    <option value="1">Bangladesh</option>
                                    <option value="1">Albania</option>
                                    <option value="2">Slsnd Islands</option>
                                    <option value="3">Afghanistan</option>
                                    <option value="4">Belgum</option>
                                </select>
                                <br />
                                <label style={{ width: '80%' }}>
                                    * Zip/Postal Code

                                </label>
                                <input style={{ width: '80%' }} type='text' />
                                <br />
                                <button className='button_cart_c'>
                                    GET A QUOTE
                                </button>

                            </div>

                            <div className='cart_c' style={{ height: '206px' }}>
                                <h4 style={{ width: '80%' }}>
                                    Use Coupon Code
                                </h4>

                                <label style={{ width: '80%' }}>
                                    Enter your coupon code if you have one
                                </label>
                                <input style={{ width: '80%' }} type='text' />
                                <br />
                                <button className='button_cart_c'>
                                    APPLY COUPON
                                </button>

                            </div>

                            <div className='cart_c' style={{ height: '206px' }}>
                                <h4 style={{ width: '80%' }}>
                                    Cart Total
                                </h4>

                                <label style={{ width: '80%', position: 'relative' }}>
                                    Total products
                                    <div style={{ position: 'absolute', right: '0', top: '0' }}>
                                        €{(states.cart?.reduce(
                                            (accumulator, currentValue) => accumulator + (currentValue.data.gia * currentValue.soluong),
                                            0
                                        )).toFixed(2)
                                        }
                                    </div>

                                </label>
                                <br />
                                <label style={{ width: '80%', position: 'relative' }}>
                                    <b style={{ color: '#a749ff' }}>
                                        Total products
                                        <div style={{ position: 'absolute', right: '0', top: '0' }}>
                                            €{(states.cart?.reduce(
                                                (accumulator, currentValue) => accumulator + (currentValue.data.gia * currentValue.soluong),
                                                0
                                            )).toFixed(2)
                                            }
                                        </div>
                                    </b>

                                </label>

                                <br />
                                <button className='button_cart_c' style={{ width: '53%' }}>
                                    PROCEED TO CHECKOUT
                                </button>

                            </div>

                        </div>






                    </div>}
                <br />
                <Fooder />
            </div >
        </div >
    )
}

const mapStateToProps = state => {
    const states = state;
    // todo: state.counter;
    // console.log('test', states.cart)
    return { states }
};

export default connect(mapStateToProps)(Cart);