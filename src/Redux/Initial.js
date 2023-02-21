import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { getcart, getProducts, getwish } from '../Axiot/api';
import { frech_thunk } from './Funtion_thunk';
import { store } from './Store';

function Initial() {

    useEffect(() => {
        const get_cart = async () => {
            const res = await getcart()
            store.dispatch({ type: 'getcart', cart: res.data })

        }
        const get_wish = async () => {
            const res = await getwish()
            store.dispatch({ type: 'getwish', wish: res.data })

        }
        store.dispatch(frech_thunk())
        get_cart()
        get_wish()

        //


    }, [])

}



const mapStateToProps = state => {
    const states = state;
    // todo: state.counter;
    // console.log('test', states.cart)
    return { states }
};
export default connect(mapStateToProps)(Initial);