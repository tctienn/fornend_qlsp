import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getProducts } from '../Axiot/api'
import Fooder from '../component/Fooder'
import Header from '../component/Header'
import Header2 from '../component/Header2'
import { products } from '../data/data'
import { store } from '../Redux/Store'

function Collection({ states }) {


    // const output = document.querySelector("#output");

    const [as, setAs] = useState('')

    useEffect(() => {
        var scroller = document.querySelector("#scroller");
        scroller.addEventListener("scroll", (event) => {
            // output.textContent = `scrollTop: ${scroller.scrollTop}`;
            setAs(scroller.scrollTop)
        }, [as]);
    })


    const [trx, setTrx] = useState(200)
    const handleMouseMove = event => {
        // this.setState({
        //   x: event.clientX,
        //   y: event.clientY,
        // })
        var a = event.clientX
        setTrx(-event.clientX / 10)
    }

    const clearCoor = () => {
        // setTrx(100)
        setTrx(100)
    }
    // const dispatch = useDispatch()

    const [data, setData] = useState()
    useEffect(() => {
        const frech = async () => {
            const res = await getProducts();
            setData(res.data)
            console.log('ay', res.data)

        }
        frech()

        // dispatch(thunk_funtion())
    }, [])


    /// ayyy
    const i = [1, 2, 3, 4, 5]

    const navigation = useNavigate()

    const onclickproduct = (id) => {
        navigation(`/product/${id}`)
    }

    const onclick_wish = (item) => {
        const dis = { type: 'add_wishlish', id: item.id, data: item }
        store.dispatch(dis)
        // store.dispatch({ type: 'INCREMENT_COUNTER' })
    }
    return (
        <div style={{
            display: 'flex',
            flexFlow: 'column',
            height: '100%'
        }} >
            <Header />


            <div id='scroller' style={{
                // // border: '3px solid #00ff00',
                width: '100%',
                height: '660px',
                // overflowX: 'hidden',
                overflowY: 'auto',
                // backgroundColor: '#f3f4f6'

            }}>
                <Header2 scrol={as} />


                <div className='patch_product'>
                    HOME / SHOP PRODUCT
                </div>
                <br /><br />
                <div className='products'>
                    {products.map((e, ii) =>
                        <div key={ii} className='product' >
                            <div className='mini_add'>
                                new
                            </div>
                            <div className='img_product2'>
                                <img onClick={() => onclickproduct(e.id)} className='img_mini' style={{ width: '100%', height: '88%' }} src={e.img2} />
                                <div className=' hide_mini' style={{ height: '10%', backgroundColor: '#a749ff' }}>
                                    <div className='hide_mini1' style={{ width: '12%', height: '100%' }}>
                                        <iconify-icon onClick={() => onclick_wish(e)} icon="ph:heart" style={{ color: 'white' }}></iconify-icon>
                                    </div>
                                    <div className='hide_mini2'>
                                        buy now
                                    </div>
                                    <div className='hide_mini3' style={{ width: '12%', height: '100%' }}>
                                        <iconify-icon icon="ic:outline-remove-red-eye" style={{ color: 'white', }}></iconify-icon>
                                    </div>
                                </div>
                            </div>
                            <img onClick={() => onclickproduct(e.id)} className='img_product' style={{ width: '100%', height: '80%' }} src={e.img1} />

                            <div className='str_product'>
                                {e.name}
                                <div>
                                    {i.map(ei => <iconify-icon key={ei} icon="ic:twotone-star-outline" style={{ color: e.start >= ei ? '#ffaa00' : 'gray' }}></iconify-icon>)}
                                </div>
                                <div>
                                    € <small>
                                        {e.gia}
                                    </small>
                                </div>
                            </div>
                        </div>
                    )}
                </div>


                {/* //// */}


            </div >

        </div >
    )
}

const mapStateToProps = state => {
    const states = state;
    // todo: state.counter;
    console.log('test', states)
    return { states }
};

export default connect(mapStateToProps)(Collection);