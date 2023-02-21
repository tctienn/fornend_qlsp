import { useEffect, useState } from "react"
import { connect } from "react-redux";
import { postcart } from "./Funtion_thunk";
import { store } from "./Store";

var a = 0
export const Funtion_debounce = (value, delay) => {
    const [value_de, setValue_de] = useState(value)

    useEffect(() => {
        a++
        const hander = setTimeout(() => {
            // setValue_de(value)
            if (value.soluong > 0) {
                store.dispatch(postcart(value.data.id, a, value.data))
                console.log(value)
            }
            console.log(a)
            a = 0
        }, delay)

        return () => {
            clearTimeout(hander)
            // console.log('teeee')
        }

    }, [value, delay])
    // console.log(value_de)
    return (value_de)
}

const mapStateToProps = state => {
    const states = state;
    // todo: state.counter;
    // console.log('test', states.cart)
    return { states }
};

export default connect(mapStateToProps)(Funtion_debounce);