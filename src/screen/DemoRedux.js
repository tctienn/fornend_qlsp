import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../Axiot/api';
import { add } from '../Redux/Redux'

export default function DemoRedux() {

    const [data, setData] = useState([]);

    // const api_axiot = axios.get(`https://62b6e8c76999cce2e809fa1e.mockapi.io/dkt/`)

    useEffect(() => {
        const frech = async () => {
            const res = await getProducts();
            setData(res.data)
            // console.log('ay', res.data)
        }
        frech()
    }, [])
    const them = useSelector((state) => state.counter.value)
    return (
        <div>
            {/* đầu ra : {them} */}
            {console.log(data)}
            {data?.map((e, i) =>
                <div key={i}>
                    {e.name}
                </div>)}
        </div>
    )
}
