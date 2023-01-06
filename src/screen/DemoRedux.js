import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getProducts } from '../Axiot/api';

import { add, thunk_funtion } from '../Redux/Redux'

export default function DemoRedux() {

    const [data, setData] = useState([]);

    // const api_axiot = axios.get(`https://62b6e8c76999cce2e809fa1e.mockapi.io/dkt/`)
    const dispatch = useDispatch()
    useEffect(() => {
        // const frech = async () => {
        //     const res = await getProducts();
        //     setData(res.data)
        //     // console.log('ay', res.data)

        // }
        // frech()

        dispatch(thunk_funtion())
    }, [])
    const them = useSelector((state) => state.counter)



    // const ay = useSelector(thunk_funtion())
    return (
        <div>
            {/* đầu ra : {them} */}
            {/* {console.log(data)} */}
            {/* {data?.map((e, i) =>
                <div key={i}>
                    {e.name}
                </div>)} */}


            {/* {console.log(them[1].name)} */}
            {
                them.name
            }

        </div>
    )
}
