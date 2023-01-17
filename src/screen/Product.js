import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header2 from '../component/Header2'
import { products } from '../data/data'

export default function Product() {
    let { id } = useParams()
    var check = true
    const data = products.find(e => e.id == id)


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


    return (
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
            {typeof data == 'undefined' ? <div>không tìm thấy id sản phẩm</div> :
                <div>
                    <div className='patch_product'>
                        HOME / SHOP PRODUCT
                    </div>
                    <img src={data.img1} />
                </div>}
        </div>
    )
}
