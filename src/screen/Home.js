import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getProducts } from '../Axiot/api'
import Fooder from '../component/Fooder'
import Header from '../component/Header'
import Header2 from '../component/Header2'
import Hide_header from '../component/Hide_header'
import Ontop from '../component/Ontop'
import { products } from '../data/data'
import { frech_thunk, get_tag } from '../Redux/Funtion_thunk'
import { store } from '../Redux/Store'

function Home({ states }) {


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
        // const frech = async () => {
        //     const res = await getProducts();
        //     setData(res.data)
        //     console.log('ay', res.data)

        // }
        // frech()
        store.dispatch(frech_thunk())
        // setData(states)
        // console.log('vl', states)

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

    const get_products = () => {
        store.dispatch(get_tag())

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
                <Hide_header scrol={as} />
                <Ontop scrol={as} />

                <div className='slide'>
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                {/* <img src="..." className="d-block w-100" alt="..." /> */}
                                <div className='item_slide'>
                                    <div>
                                        <div>
                                            <b>
                                                Summer 2024 Offer Collecttion ss
                                            </b>
                                        </div>

                                        <button>
                                            Buy now
                                        </button>
                                    </div>
                                    <img src='https://flone.jamstacktemplates.dev/assets/img/slider/single-slide-hm1-2.png' className='img_slide' />
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                {/* <img src="..." className="d-block w-100" alt="..." /> */}
                                <div className='item_slide'>
                                    <div>
                                        <div>
                                            <b>
                                                Summer 2024 Offer Collecttion ss
                                            </b>
                                        </div>

                                        <button>
                                            Buy now
                                        </button>
                                    </div>
                                    <img src='https://flone.jamstacktemplates.dev/assets/img/slider/single-slide-1.png' className='img_slide' />
                                </div>
                            </div>
                            <div className="carousel-item">
                                {/* <img src="..." className="d-block w-100" alt="..." /> */}
                                <div className='item_slide'>
                                    <div>
                                        <div>
                                            <b>
                                                Summer 2024 Offer Collecttion ss
                                            </b>
                                        </div>

                                        <button>
                                            Buy now
                                        </button>
                                    </div>
                                    <img src='https://flone.jamstacktemplates.dev/assets/img/slider/single-slide-1.png' className='img_slide' />
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>


                </div>
                <br /><br /><br />
                <ul className='ul_free_icon' >
                    <li id='free_icon'>
                        <img className='icon_free ' src='https://flone.jamstacktemplates.dev/assets/img/icon-img/support-1.png' />
                        <div >
                            <b>
                                Free Shipping
                            </b>
                            <div>
                                Free shipping on all oder
                            </div>
                        </div>
                    </li>
                    <li id='free_icon'>
                        <img className='icon_free ' src='https://flone.jamstacktemplates.dev/assets/img/icon-img/support-2.png' />
                        <div >
                            <b>
                                Free Shipping
                            </b>
                            <div>
                                Free shipping on all oder
                            </div>
                        </div>
                    </li>
                    <li id='free_icon'>
                        <img className='icon_free ' src='https://flone.jamstacktemplates.dev/assets/img/icon-img/support-3.png' />
                        <div >
                            <b>
                                Free Shipping
                            </b>
                            <small>
                                Free shipping on all oder
                            </small>
                        </div>
                    </li>
                    <li id='free_icon'>
                        <img className='icon_free ' src='https://flone.jamstacktemplates.dev/assets/img/icon-img/support-4.png' />
                        <div >
                            <b>
                                Free Shipping
                            </b>
                            <div>
                                Free shipping on all oder
                            </div>
                        </div>
                    </li>
                </ul >

                <br />

                <div >
                    <center>
                        <h2 style={{ height: '2px', backgroundColor: 'black', width: '48px', position: 'relative', top: '22px', left: '-84px' }}>

                        </h2>
                        DAILY DEALS
                        <h2 style={{ height: '2px', backgroundColor: 'black', width: '48px', position: 'relative', top: '-11px', left: '84px' }}>

                        </h2>
                        <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '37%' }}>
                            <div>
                                New Arrivals
                            </div>
                            <div>
                                Best Sellers
                            </div>
                            <div>
                                Sale Items
                            </div>
                        </div>
                    </center>


                </div>

                {/* <marquee behavior='scroll' >Hoc HTML tai VietJack - Vi du cach su dung the marquee.</marquee> */}

                <div className='products'>
                    {/* {console.log("states: ...", states)}
                    {states.products ? states.products[1].name : ""} */}
                    {products.map((e, ii) =>
                        <div key={ii} className='product' >
                            <div className='mini_add'>
                                new
                            </div>
                            <div className='img_product2'>
                                <img onClick={() => onclickproduct(e.id)} className='img_mini' style={{ width: '100%', height: '88%' }} src={e.img2} />
                                <div className=' hide_mini' style={{ height: '10%', backgroundColor: '#a749ff' }}>
                                    <div className='hide_mini1' style={{ width: '12%', height: '100%' }}>
                                        <iconify-icon onClick={() => onclick_wish(e)} icon="ph:heart" style={{ color: 'white', cursor: 'pointer' }}></iconify-icon>
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
                                <Link className='Link_name_product' to={`/product/${e.id}`}>
                                    {e.name}
                                </Link>
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

                {/* <div className='products'>


                    <div className='product'>
                        <div className='mini_add'>
                            new
                        </div>
                        <div className='img_product2'>
                            <img className='img_mini' style={{ width: '100%', height: '88%' }} src='https://flone.jamstacktemplates.dev/assets/img/product/fashion/7.jpg' />
                            <div className=' hide_mini' style={{ height: '10%', backgroundColor: '#a749ff' }}>
                                <div className='hide_mini1' style={{ width: '12%', height: '100%' }}>
                                    <iconify-icon icon="ph:heart" style={{ color: 'white' }}></iconify-icon>
                                </div>
                                <div className='hide_mini2'>
                                    buy now
                                </div>
                                <div className='hide_mini3' style={{ width: '12%', height: '100%' }}>
                                    <iconify-icon icon="ic:outline-remove-red-eye" style={{ color: 'white', }}></iconify-icon>
                                </div>
                            </div>
                        </div>
                        <img className='img_product' style={{ width: '100%', height: '80%' }} src='https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg' />

                        <div className='str_product'>
                            Lorem ipsum kids six
                            <div>
                                {i.map(e => <iconify-icon icon="ic:twotone-star-outline" style={{ color: '#ffaa00' }}></iconify-icon>)}
                            </div>
                            <div>
                                € <small>
                                    11
                                </small>
                            </div>
                        </div>
                    </div>

                    <div className='product'>
                        <div className='mini_add'>
                            new
                        </div>
                        <div className='img_product2'>
                            <img className='img_mini' style={{ width: '100%', height: '88%' }} src='https://flone.jamstacktemplates.dev/assets/img/product/fashion/7.jpg' />
                            <div className=' hide_mini' style={{ height: '10%', backgroundColor: '#a749ff' }}>
                                <div className='hide_mini1' style={{ width: '12%', height: '100%' }}>
                                    <iconify-icon icon="ph:heart" style={{ color: 'white' }}></iconify-icon>
                                </div>
                                <div className='hide_mini2'>
                                    buy now
                                </div>
                                <div className='hide_mini3' style={{ width: '12%', height: '100%' }}>
                                    <iconify-icon icon="ic:outline-remove-red-eye" style={{ color: 'white', }}></iconify-icon>
                                </div>
                            </div>
                        </div>
                        <img className='img_product' style={{ width: '100%', height: '80%' }} src='https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg' />

                        <div className='str_product'>
                            Lorem ipsum kids six
                            <div>
                                {i.map(e => <iconify-icon icon="ic:twotone-star-outline" style={{ color: '#ffaa00' }}></iconify-icon>)}
                            </div>
                            <div>
                                € <small>
                                    11
                                </small>
                            </div>
                        </div>
                    </div>

                    <div className='product'>
                        <div className='mini_add'>
                            new
                        </div>
                        <div className='img_product2'>
                            <img className='img_mini' style={{ width: '100%', height: '88%' }} src='https://flone.jamstacktemplates.dev/assets/img/product/fashion/7.jpg' />
                            <div className=' hide_mini' style={{ height: '10%', backgroundColor: '#a749ff' }}>
                                <div className='hide_mini1' style={{ width: '12%', height: '100%' }}>
                                    <iconify-icon icon="ph:heart" style={{ color: 'white' }}></iconify-icon>
                                </div>
                                <div className='hide_mini2'>
                                    buy now
                                </div>
                                <div className='hide_mini3' style={{ width: '12%', height: '100%' }}>
                                    <iconify-icon icon="ic:outline-remove-red-eye" style={{ color: 'white', }}></iconify-icon>
                                </div>
                            </div>
                        </div>
                        <img className='img_product' style={{ width: '100%', height: '80%' }} src='https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg' />

                        <div className='str_product'>
                            Lorem ipsum kids six
                            <div>
                                {i.map(e => <iconify-icon icon="ic:twotone-star-outline" style={{ color: '#ffaa00' }}></iconify-icon>)}
                            </div>
                            <div>
                                € <small>
                                    11
                                </small>
                            </div>
                        </div>
                    </div>

                    <div className='product'>
                        <div className='mini_add'>
                            new
                        </div>
                        <div className='img_product2'>
                            <img className='img_mini' style={{ width: '100%', height: '88%' }} src='https://flone.jamstacktemplates.dev/assets/img/product/fashion/7.jpg' />
                            <div className=' hide_mini' style={{ height: '10%', backgroundColor: '#a749ff' }}>
                                <div className='hide_mini1' style={{ width: '12%', height: '100%' }}>
                                    <iconify-icon icon="ph:heart" style={{ color: 'white' }}></iconify-icon>
                                </div>
                                <div className='hide_mini2'>
                                    buy now
                                </div>
                                <div className='hide_mini3' style={{ width: '12%', height: '100%' }}>
                                    <iconify-icon icon="ic:outline-remove-red-eye" style={{ color: 'white', }}></iconify-icon>
                                </div>
                            </div>
                        </div>
                        <img className='img_product' style={{ width: '100%', height: '80%' }} src='https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg' />

                        <div className='str_product'>
                            Lorem ipsum kids six
                            <div>
                                {i.map(e => <iconify-icon icon="ic:twotone-star-outline" style={{ color: '#ffaa00' }}></iconify-icon>)}
                            </div>
                            <div>
                                € <small>
                                    11
                                </small>
                            </div>
                        </div>
                    </div>

                    <div className='product'>
                        <div className='mini_add'>
                            new
                        </div>
                        <div className='img_product2'>
                            <img className='img_mini' style={{ width: '100%', height: '88%' }} src='https://flone.jamstacktemplates.dev/assets/img/product/fashion/7.jpg' />
                            <div className=' hide_mini' style={{ height: '10%', backgroundColor: '#a749ff' }}>
                                <div className='hide_mini1' style={{ width: '12%', height: '100%' }}>
                                    <iconify-icon icon="ph:heart" style={{ color: 'white' }}></iconify-icon>
                                </div>
                                <div className='hide_mini2'>
                                    buy now
                                </div>
                                <div className='hide_mini3' style={{ width: '12%', height: '100%' }}>
                                    <iconify-icon icon="ic:outline-remove-red-eye" style={{ color: 'white', }}></iconify-icon>
                                </div>
                            </div>
                        </div>
                        <img className='img_product' style={{ width: '100%', height: '80%' }} src='https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg' />

                        <div className='str_product'>
                            Lorem ipsum kids six
                            <div>
                                {i.map(e => <iconify-icon icon="ic:twotone-star-outline" style={{ color: '#ffaa00' }}></iconify-icon>)}
                            </div>
                            <div>
                                € <small>
                                    11
                                </small>
                            </div>
                        </div>
                    </div>

                    <div className='product'>
                        <div className='mini_add'>
                            new
                        </div>
                        <div className='img_product2'>
                            <img className='img_mini' style={{ width: '100%', height: '88%' }} src='https://flone.jamstacktemplates.dev/assets/img/product/fashion/7.jpg' />
                            <div className=' hide_mini' style={{ height: '10%', backgroundColor: '#a749ff' }}>
                                <div className='hide_mini1' style={{ width: '12%', height: '100%' }}>
                                    <iconify-icon icon="ph:heart" style={{ color: 'white' }}></iconify-icon>
                                </div>
                                <div className='hide_mini2'>
                                    buy now
                                </div>
                                <div className='hide_mini3' style={{ width: '12%', height: '100%' }}>
                                    <iconify-icon icon="ic:outline-remove-red-eye" style={{ color: 'white', }}></iconify-icon>
                                </div>
                            </div>
                        </div>
                        <img className='img_product' style={{ width: '100%', height: '80%' }} src='https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg' />

                        <div className='str_product'>
                            Lorem ipsum kids six
                            <div>
                                {i.map(e => <iconify-icon icon="ic:twotone-star-outline" style={{ color: '#ffaa00' }}></iconify-icon>)}
                            </div>
                            <div>
                                € <small>
                                    11
                                </small>
                            </div>
                        </div>
                    </div>

                    <div className='product'>
                        <div className='mini_add'>
                            new
                        </div>
                        <div className='img_product2'>
                            <img className='img_mini' style={{ width: '100%', height: '88%' }} src='https://flone.jamstacktemplates.dev/assets/img/product/fashion/7.jpg' />
                            <div className=' hide_mini' style={{ height: '10%', backgroundColor: '#a749ff' }}>
                                <div className='hide_mini1' style={{ width: '12%', height: '100%' }}>
                                    <iconify-icon icon="ph:heart" style={{ color: 'white' }}></iconify-icon>
                                </div>
                                <div className='hide_mini2'>
                                    buy now
                                </div>
                                <div className='hide_mini3' style={{ width: '12%', height: '100%' }}>
                                    <iconify-icon icon="ic:outline-remove-red-eye" style={{ color: 'white', }}></iconify-icon>
                                </div>
                            </div>
                        </div>
                        <img className='img_product' style={{ width: '100%', height: '80%' }} src='https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg' />

                        <div className='str_product'>
                            Lorem ipsum kids six
                            <div>
                                {i.map(e => <iconify-icon icon="ic:twotone-star-outline" style={{ color: '#ffaa00' }}></iconify-icon>)}
                            </div>
                            <div>
                                € <small>
                                    11
                                </small>
                            </div>
                        </div>
                    </div>

                    <div className='product'>
                        <div className='mini_add'>
                            new
                        </div>
                        <div className='img_product2'>
                            <img className='img_mini' style={{ width: '100%', height: '88%' }} src='https://flone.jamstacktemplates.dev/assets/img/product/fashion/7.jpg' />
                            <div className=' hide_mini' style={{ height: '10%', backgroundColor: '#a749ff' }}>
                                <div className='hide_mini1' style={{ width: '12%', height: '100%' }}>
                                    <iconify-icon icon="ph:heart" style={{ color: 'white' }}></iconify-icon>
                                </div>
                                <div className='hide_mini2'>
                                    buy now
                                </div>
                                <div className='hide_mini3' style={{ width: '12%', height: '100%' }}>
                                    <iconify-icon icon="ic:outline-remove-red-eye" style={{ color: 'white', }}></iconify-icon>
                                </div>
                            </div>
                        </div>
                        <img className='img_product' style={{ width: '100%', height: '80%' }} src='https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg' />

                        <div className='str_product'>
                            Lorem ipsum kids six
                            <div>
                                {i.map(e => <iconify-icon icon="ic:twotone-star-outline" style={{ color: '#ffaa00' }}></iconify-icon>)}
                            </div>
                            <div>
                                € <small>
                                    11
                                </small>
                            </div>
                        </div>
                    </div>

                    <div className='product'>
                        <div className='mini_add'>
                            new
                        </div>
                        <div className='img_product2'>
                            <img className='img_mini' style={{ width: '100%', height: '88%' }} src='https://flone.jamstacktemplates.dev/assets/img/product/fashion/7.jpg' />
                            <div className=' hide_mini' style={{ height: '10%', backgroundColor: '#a749ff' }}>
                                <div className='hide_mini1' style={{ width: '12%', height: '100%' }}>
                                    <iconify-icon icon="ph:heart" style={{ color: 'white' }}></iconify-icon>
                                </div>
                                <div className='hide_mini2'>
                                    buy now
                                </div>
                                <div className='hide_mini3' style={{ width: '12%', height: '100%' }}>
                                    <iconify-icon icon="ic:outline-remove-red-eye" style={{ color: 'white', }}></iconify-icon>
                                </div>
                            </div>
                        </div>
                        <img className='img_product' style={{ width: '100%', height: '80%' }} src='https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg' />

                        <div className='str_product'>
                            Lorem ipsum kids six
                            <div>
                                {i.map(e => <iconify-icon icon="ic:twotone-star-outline" style={{ color: '#ffaa00' }}></iconify-icon>)}
                            </div>
                            <div>
                                € <small>
                                    11
                                </small>
                            </div>
                        </div>
                    </div>

                    <div className='product'>
                        <div className='mini_add'>
                            new
                        </div>
                        <div className='img_product2'>
                            <img className='img_mini' style={{ width: '100%', height: '88%' }} src='https://flone.jamstacktemplates.dev/assets/img/product/fashion/7.jpg' />
                            <div className=' hide_mini' style={{ height: '10%', backgroundColor: '#a749ff' }}>
                                <div className='hide_mini1' style={{ width: '12%', height: '100%' }}>
                                    <iconify-icon icon="ph:heart" style={{ color: 'white' }}></iconify-icon>
                                </div>
                                <div className='hide_mini2'>
                                    buy now
                                </div>
                                <div className='hide_mini3' style={{ width: '12%', height: '100%' }}>
                                    <iconify-icon icon="ic:outline-remove-red-eye" style={{ color: 'white', }}></iconify-icon>
                                </div>
                            </div>
                        </div>
                        <img className='img_product' style={{ width: '100%', height: '80%' }} src='https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg' />

                        <div className='str_product'>
                            Lorem ipsum kids six
                            <div>
                                {i.map(e => <iconify-icon icon="ic:twotone-star-outline" style={{ color: '#ffaa00' }}></iconify-icon>)}
                            </div>
                            <div>
                                € <small>
                                    11
                                </small>
                            </div>
                        </div>
                    </div>

                    <div className='product'>
                        <div className='mini_add'>
                            new
                        </div>
                        <div className='img_product2'>
                            <img className='img_mini' style={{ width: '100%', height: '88%' }} src='https://flone.jamstacktemplates.dev/assets/img/product/fashion/7.jpg' />
                            <div className=' hide_mini' style={{ height: '10%', backgroundColor: '#a749ff' }}>
                                <div className='hide_mini1' style={{ width: '12%', height: '100%' }}>
                                    <iconify-icon icon="ph:heart" style={{ color: 'white' }}></iconify-icon>
                                </div>
                                <div className='hide_mini2'>
                                    buy now
                                </div>
                                <div className='hide_mini3' style={{ width: '12%', height: '100%' }}>
                                    <iconify-icon icon="ic:outline-remove-red-eye" style={{ color: 'white', }}></iconify-icon>
                                </div>
                            </div>
                        </div>
                        <img className='img_product' style={{ width: '100%', height: '80%' }} src='https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg' />

                        <div className='str_product'>
                            Lorem ipsum kids six
                            <div>
                                {i.map(e => <iconify-icon icon="ic:twotone-star-outline" style={{ color: '#ffaa00' }}></iconify-icon>)}
                            </div>
                            <div>
                                € <small>
                                    11
                                </small>
                            </div>
                        </div>
                    </div>

                    <div className='product'>
                        <div className='mini_add'>
                            new
                        </div>
                        <div className='img_product2'>
                            <img className='img_mini' style={{ width: '100%', height: '88%' }} src='https://flone.jamstacktemplates.dev/assets/img/product/fashion/7.jpg' />
                            <div className=' hide_mini' style={{ height: '10%', backgroundColor: '#a749ff' }}>
                                <div className='hide_mini1' style={{ width: '12%', height: '100%' }}>
                                    <iconify-icon icon="ph:heart" style={{ color: 'white' }}></iconify-icon>
                                </div>
                                <div className='hide_mini2'>
                                    buy now
                                </div>
                                <div className='hide_mini3' style={{ width: '12%', height: '100%' }}>
                                    <iconify-icon icon="ic:outline-remove-red-eye" style={{ color: 'white', }}></iconify-icon>
                                </div>
                            </div>
                        </div>
                        <img className='img_product' style={{ width: '100%', height: '80%' }} src='https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg' />

                        <div className='str_product'>
                            Lorem ipsum kids six
                            <div>
                                {i.map(e => <iconify-icon icon="ic:twotone-star-outline" style={{ color: '#ffaa00' }}></iconify-icon>)}
                            </div>
                            <div>
                                € <small>
                                    11
                                </small>
                            </div>
                        </div>
                    </div>

                </div> */}
                {/* //// */}

                <div >
                    <center>
                        <h2 style={{ height: '2px', backgroundColor: 'black', width: '48px', position: 'relative', top: '22px', left: '-84px' }}>

                        </h2>
                        <b>
                            OUT BLOG
                        </b>
                        <h2 style={{ height: '2px', backgroundColor: 'black', width: '48px', position: 'relative', top: '-11px', left: '84px' }}>

                        </h2>


                    </center>
                    <div className='OUR_BLOG'>
                        <div className='out_blog_c1'>
                            <div className='out_blog_c2_1'>
                                <img className='img_out_blog' src='https://flone.jamstacktemplates.dev/assets/img/blog/blog-1.jpg' />
                            </div>
                            <div className='out_blog_c2_2'>
                                <p style={{ width: '53%', textAlign: 'center', margin: '0' }}>
                                    <b>
                                        A guide to latest trends
                                    </b>
                                </p>
                                <small style={{ color: 'gray', fontStyle: 'italic' }}>
                                    By Admin
                                </small>
                            </div>
                        </div>
                        <div className='out_blog_c1'>
                            <div className='out_blog_c2_1'>
                                <img className='img_out_blog' src='https://flone.jamstacktemplates.dev/assets/img/blog/blog-2.jpg' />
                            </div>
                            <div className='out_blog_c2_2'>
                                <p style={{ width: '53%', textAlign: 'center', margin: '0' }}>
                                    <b>
                                        A guide to latest trends
                                    </b>
                                </p>
                                <small style={{ color: 'gray', fontStyle: 'italic' }}>
                                    By Admin
                                </small>
                            </div>
                        </div>
                        <div className='out_blog_c1'>
                            <div className='out_blog_c2_1'>
                                <img className='img_out_blog' src='https://flone.jamstacktemplates.dev/assets/img/blog/blog-3.jpg' />
                            </div>
                            <div className='out_blog_c2_2'>
                                <p style={{ width: '53%', textAlign: 'center', margin: '0' }}>
                                    <b>
                                        A guide to latest trends
                                    </b>
                                </p>
                                <small style={{ color: 'gray', fontStyle: 'italic' }}>
                                    By Admin
                                </small>
                            </div>
                        </div>
                    </div>
                    {/* /// end out blog */}

                    <Fooder />



                </div>
            </div >

        </div >
    )
}

const mapStateToProps = state => {
    const states = state;
    // todo: state.counter;
    // console.log('test', states)
    return { states }
};

export default connect(mapStateToProps)(Home);