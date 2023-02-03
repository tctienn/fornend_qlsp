import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Fooder from '../component/Fooder'
import Header2 from '../component/Header2'
import Header from '../component/Header'
import { products } from '../data/data'
import { store } from '../Redux/Store'
// import { set } from 'immer/dist/internal'

function Wishlish({ states }) {



    // const ay = () => {
    //     const as = typeof data
    //     if (as === 'undefined')
    //         check = false



    // }
    // console.log(check)

    const [as, setAs] = useState('')
    useEffect(() => {
        var scroller = document.querySelector("#scroller");
        scroller.addEventListener("scroll", (event) => {
            // output.textContent = `scrollTop: ${scroller.scrollTop}`;
            setAs(scroller.scrollTop)
        }, [as]);
    })


    const delete_on_wish = (id) => {
        let ay = { type: 'delete_wish', id: id }
        store.dispatch(ay)
    }


    const add_cart = (e) => {
        console.log(e)
        store.dispatch({ type: 'add_cart', id: e.id, data: e.data })
    }





    return (
        <div>
            {/* <Header /> */}
            <div
                id='scroller' style={{
                    // // border: '3px solid #00ff00',
                    width: '100%',
                    height: '660px',
                    // overflowX: 'hidden',
                    overflowY: 'auto',
                    // backgroundColor: '#f3f4f6'

                }}>

                <Header2 scrol={as} />
                {states.wishlish?.length == 0 ?
                    <div>
                        <div className='patch_product' style={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}>
                            <Link to={'/'} className='Link_name_product'>HOME</Link> / SHOP PRODUCT
                        </div>
                        <div className='no_wishlish'>
                            <iconify-icon icon="bi:heart" style={{ color: 'black' }} width="80"></iconify-icon>
                            No items found in wishlist
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
                                            ADD TO CART
                                        </th>
                                        <th className='th_panding'>
                                            ACTION
                                        </th>
                                    </tr>
                                    {states.wishlish.map((e, i) =>
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
                                                {e.data.gia}
                                            </td>
                                            <td>
                                                <button type="button" className="btn btn-dark" onClick={() => add_cart(e)}>add to cart</button>
                                            </td>
                                            <td>
                                                <iconify-icon onClick={() => delete_on_wish(e.id)} icon="bx:x" style={{ color: 'gray' }} width="20"></iconify-icon>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>}
                <Fooder />
            </div >
        </div>
    )
}

const mapStateToProps = state => {
    const states = state;
    // todo: state.counter;
    console.log('test', states)
    return { states }
};

export default connect(mapStateToProps)(Wishlish);