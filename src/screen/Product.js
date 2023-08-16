import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Fooder from '../component/Fooder'
import Header2 from '../component/Header2'
import Header from '../component/Header'
import { products } from '../data/data'
import { store } from '../Redux/Store'
import Hide_header from '../component/Hide_header'
// import { set } from 'immer/dist/internal'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Product({ states }) {
    let { id } = useParams()  /// id được gửi bằng useparam nếu load lại trang thì sẽ bị mất id có thể thay thế chức năng năng này bằng cách lấy id của url 
    var check = true
    const data = states.products?.find(e => e.id == id)
    



    const [as, setAs] = useState('')

    window.addEventListener('scroll', () => {
        setAs(window.scrollY)
    })


    const i = [1, 2, 3, 4, 5]

    const [marginleft, setMarginleft] = useState(0)
    const tang = () => {
        if (marginleft < -49)
            setMarginleft(0)
        else
            setMarginleft(marginleft - 25)

    }

    const giam = () => {
        if (marginleft >= 0)
            setMarginleft(-49)
        else
            setMarginleft(marginleft + 25)
    }

    const [openzoom, setOpenzoom] = useState(false)
    const zoom_click = () => {
        setOpenzoom(!openzoom)
    }

    const [size_img, setSize_img] = useState(24)
    const zoom_img = () => {
        if (size_img != 50)
            setSize_img(50)
        else
            setSize_img(24)
    }

    const addwish = (item) => {
        const dis = { type: 'add_wishlish', id: Number(id), data: item }
        store.dispatch(dis)
        // store.dispatch({ type: 'INCREMENT_COUNTER' })

        toast.success('add to whish!', {
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

    const addcart = (item) => {
        const discart = { type: 'add_cart', id: Number(id), data: item }
        store.dispatch(discart)

        toast.success('add to cart!', {
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

                <Header2 scrol={as} />
                <Hide_header scrol={as} />
                <ToastContainer />


                {typeof data == 'undefined' ? <div>không tìm thấy id sản phẩm</div> :
                    <div>
                        <div className='patch_product' style={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}>
                            <Link to={'/'} className='Link_name_product'>HOME</Link> / SHOP PRODUCT
                        </div>
                        <br /><br />
                        <div  style={{ width: '52%', margin: 'auto', display: 'flex', justifyContent: 'space-around' }}>
                            <div style={{ width: '47%', position: 'relative' }}>
                                <iconify-icon onClick={zoom_click} icon="material-symbols:zoom-out-map-rounded" style={{
                                    color: 'gray', position: 'absolute',
                                    left: '93%',
                                    top: '10px',
                                    cursor: 'move'
                                }}></iconify-icon>
                                {/* ////// zoom img */}

                                <div className='zoom' style={{ display: openzoom == false ? 'none' : 'block' }}>
                                    <iconify-icon icon="ph:x" onClick={zoom_click} width='25' style={{ color: 'gray', position: 'absolute', right: '10%', top: '10px', cursor: 'pointer' }}></iconify-icon>
                                    <div style={{
                                        position: 'absolute', right: '20%', top: '2%'
                                    }}>
                                        <iconify-icon onClick={zoom_img} icon="material-symbols:zoom-in-rounded" width='30' style={{ color: 'gray', cursor: 'pointer' }}></iconify-icon>
                                        <iconify-icon onClick={zoom_img} icon="material-symbols:zoom-out" width='30' style={{ color: 'gray', cursor: 'pointer' }}></iconify-icon>
                                    </div>
                                    <br />
                                    <div style={{
                                        width: '70%', margin: 'auto',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <img className='img_zoom' style={{ width: `${size_img}%` }} src={data?.mainImg} /> 

                                    </div>
                                </div>


                                {/* ////// */}
                                <img style={{ width: '100%', aspectRatio: '6/7', marginBottom: '10px',border:'10px' }} src={data.mainImg} />
                                <button className='button_slide' onClick={giam}>
                                    <iconify-icon icon="material-symbols:arrow-back-ios-new" style={{ color: 'gray' }}></iconify-icon>
                                </button>
                                <button className='button_slide' style={{ left: '82%' }} onClick={tang}>
                                    <iconify-icon icon="material-symbols:arrow-forward-ios-rounded" style={{ color: 'gray' }}></iconify-icon>
                                </button>
                                <div className='swipe'>
                                    {/* <img className='muntil_img_slide' style={{ marginLeft: `${marginleft}%` }} src={data.images[0]?data.images[0].url:""} />  */}
                                    {data.images?.map((e,id)=>
                                    
                                        id>0?
                                            (<img key={id} className='muntil_img_slide' src={e.url} />)
                                            :(<img key={id}style={{ marginLeft: `${marginleft}%` }}  className='muntil_img_slide' src={e.url} />)
                                        
                                    )}
                                       
                                    

                                </div>

                            </div>
                            <div style={{ width: '48%' }}>
                                <b>
                                    {data.name}
                                </b>
                                <br />
                                <b style={{ color: '#fe5252' }}>
                                    {data.gia.toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                                </b>
                                <br />
                                {i.map(ei => <iconify-icon key={ei} icon="ic:twotone-star-outline" style={{ color: data.start >= ei ? '#ffaa00' : 'gray' }}></iconify-icon>)}
                                <p>
                                    {data.motaNgan}
                                </p>
                                <hr />

                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    width: '55%',
                                    alignItems: 'center',
                                }}>
                                    {/* <input type='number' name='soluong' style={{ width: '20%' }} value={states.wishlish.find(e => e.id == id)?.soluong} /> */}
                                    <div>
                                        {states.wishlish.find(e => e.id == id)?.soluong || 0}
                                    </div>
                                    <button onClick={() => addcart(data)} style={{ color: 'white', backgroundColor: '#343538', cursor: 'pointer', }}>add to cart</button>
                                    <iconify-icon icon="bi:heart" onClick={() => addwish(data)} style={{ color: 'gray', cursor: 'pointer' }}></iconify-icon>
                                    <iconify-icon icon="fe:random" style={{ color: 'gray' }}></iconify-icon>
                                </div>
                                <br />
                                <div>
                               
                                    Categories : {data.catergores?.map((e,i) =>
                                        <Link key={i} className='Link_name_product' to={'/collection'}> 
                                            {e.name} , 
                                        </Link>
                                    )}
                                    <br /><br />
                                    tag : {data.tags?.map((e,i) =>
                                        <Link key={i} className='Link_name_product' to={'/collection'}>
                                            {e.name} ,
                                        </Link>
                                    )}
                                </div>



                            </div>

                        </div>

                        <div style={{ width: '52%', margin: 'auto' }} >
                            <div >
                                <div style={{ display: 'flex', flexDirection: 'row', width: '74%', justifyContent: 'space-around', margin: 'auto', }} id="list-tab" role="tablist">
                                    <a className="list-group-item list-group-item-action active" style={{ width: 'auto' }} id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Additional Information</a>
                                    <a className="list-group-item list-group-item-action" style={{ width: 'auto' }} id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Description</a>
                                    <a className="list-group-item list-group-item-action" style={{ width: 'auto' }} id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Reviews</a>
                                    {/* <a className="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Settings</a> */}
                                </div>
                            </div>
                            <hr />
                            <div >
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                                        <b>Weight</b> 400 g
                                        <br />
                                        <b>Dimensions</b> 10 x 10 x 15 cm
                                        <br />
                                        <b>Materials</b> 60% cotton, 40% polyester
                                        <br />
                                        <b>Other Info</b> American heirloom jean shorts pug seitan letterpress
                                    </div>
                                    <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                                        {data.mota}
                                    </div>
                                    <div className="tab-pane fade" id="list-messages" style={{ display: 'flex' }} role="tabpanel" aria-labelledby="list-messages-list">
                                        <div style={{ width: '60%' }}>
                                            <div style={{ display: 'flex', fontSize: '10px' }}>
                                                <img src='https://flone.jamstacktemplates.dev/assets/img/testimonial/1.jpg' style={{ width: '20%', aspectRatio: '2/2' }} />
                                                <div>
                                                    <div>
                                                        White Lewis
                                                    </div>
                                                    <div>
                                                        Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla.
                                                    </div>
                                                </div>
                                            </div>

                                            <div style={{ display: 'flex', fontSize: '10px' }}>
                                                <img src='https://flone.jamstacktemplates.dev/assets/img/testimonial/1.jpg' style={{ width: '20%', aspectRatio: '2/2' }} />
                                                <div>
                                                    <div>
                                                        White Lewis
                                                    </div>
                                                    <div>
                                                        Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ width: '30%' }}>
                                            <h6>
                                                Add a Review
                                            </h6>
                                            Your rating:
                                            <span>
                                                <iconify-icon icon="material-symbols:star" style={{ color: 'yellow' }}></iconify-icon>
                                                <iconify-icon icon="material-symbols:star" style={{ color: 'yellow' }}></iconify-icon>
                                                <iconify-icon icon="material-symbols:star" style={{ color: 'yellow' }}></iconify-icon>
                                                <iconify-icon icon="material-symbols:star" style={{ color: 'yellow' }}></iconify-icon>
                                                <iconify-icon icon="material-symbols:star" style={{ color: 'yellow' }}></iconify-icon>
                                            </span>

                                            <div style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                flexWrap: 'wrap',
                                                justifyContent: 'space-around',
                                                alignContent: 'space-around',
                                                justifyContent: 'space-between',
                                                aspectRatio: '17/15',

                                            }}>
                                                <input style={{ width: '48%', border: 'solid 1px #e6e6e6' }} placeholder='name' />
                                                <input style={{ width: '48%', border: 'solid 1px #e6e6e6' }} placeholder='email' />
                                                <textarea placeholder='message' style={{ width: '100%', height: '69%', border: 'solid 1px #e6e6e6' }}>

                                                </textarea>
                                            </div>
                                            <button style={{
                                                width: '36%',
                                                fontSize: '13px',
                                                border: 'none',
                                                backgroundColor: '#a749ff',
                                                color: 'white',
                                                aspectRatio: '21/7'
                                            }}>
                                                gửi
                                            </button>


                                        </div>
                                    </div>
                                    {/* <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">..ssss.</div> */}
                                </div>


                            </div>

                            <div >
                                <center>
                                    <h2 style={{ height: '2px', backgroundColor: 'black', width: '48px', position: 'relative', top: '22px', left: '-84px' }}>

                                    </h2>
                                    DAILY DEALS
                                    <h2 style={{ height: '2px', backgroundColor: 'black', width: '48px', position: 'relative', top: '-11px', left: '84px' }}>

                                    </h2>

                                </center>

                            </div>

                            <div className='products' style={{ width: '100%' }}>
                                <div className='product detail'>
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
                                            {i.map(e => <iconify-icon key={e} icon="ic:twotone-star-outline" style={{ color: '#ffaa00' }}></iconify-icon>)}
                                        </div>
                                        <div>
                                            € <small>
                                                11
                                            </small>
                                        </div>
                                    </div>
                                </div>

                                <div className='product detail'>
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
                                            {i.map(e => <iconify-icon key={e} icon="ic:twotone-star-outline" style={{ color: '#ffaa00' }}></iconify-icon>)}
                                        </div>
                                        <div>
                                            € <small>
                                                11
                                            </small>
                                        </div>
                                    </div>
                                </div>

                                <div className='product detail'>
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
                                            {i.map(e => <iconify-icon key={e} icon="ic:twotone-star-outline" style={{ color: '#ffaa00' }}></iconify-icon>)}
                                        </div>
                                        <div>
                                            € <small>
                                                11
                                            </small>
                                        </div>
                                    </div>
                                </div>

                                <div className='product detail' >
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
                                            {i.map(e => <iconify-icon key={e} icon="ic:twotone-star-outline" style={{ color: '#ffaa00' }}></iconify-icon>)}
                                        </div>
                                        <div>
                                            € <small>
                                                11
                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>}
                <Fooder />
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

export default connect(mapStateToProps)(Product);