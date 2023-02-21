import { type } from '@testing-library/user-event/dist/type'
import React, { useEffect, useState, useRef } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getProducts } from '../Axiot/api'
import Fooder from '../component/Fooder'
import Header from '../component/Header'
import Header2 from '../component/Header2'
import Hide_header from '../component/Hide_header'
import Ontop from '../component/Ontop'
import { products } from '../data/data'
import { frech_thunk, get_product_loai, get_tag, search_product, get_product_color, get_product_size, sx_price, postcart } from '../Redux/Funtion_thunk'
import { store } from '../Redux/Store'



/// thu viện thông báo
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Funtion_debounce, Funtion_debounce_wish } from '../Redux/Funtion_debounce'
// import 'Reac-toastify/dist/ReactToastify.min.css';


function Collection({ states }) {


    // const output = document.querySelector("#output");

    const [as, setAs] = useState('')

    // useEffect(() => {
    //     var scroller = document.querySelector("#scroller");
    //     scroller.addEventListener("scroll", (event) => {
    //         // output.textContent = `scrollTop: ${scroller.scrollTop}`;
    //         setAs(scroller.scrollTop)
    //         // console.log(scroller.scrollTop)
    //     });




    //     // const scrollElement = document.querySelector("#scroller");
    //     // var outputDiv = document.querySelector(".output");
    //     // scrollElement.addEventListener("scroll", () => {
    //     //     outputDiv.innerHTML = scrollElement.scrollTop;
    //     //     console.log(scrollElement.scrollTop)
    //     //     alert()
    //     // });

    // })

    window.addEventListener('scroll', () => {
        setAs(window.scrollY)
    })

    const [data, setData] = useState()


    ///////// lọc sản phẩm

    ///linkpage



    var [tongsp, setTongSp] = useState(0)
    useEffect(() => {

        store.dispatch(frech_thunk())

        const frech = async () => {
            const res = await getProducts();
            setData(res.data)
            // console.log('ay', res.data.length)
            setTongSp(res.data.length)
        }
        frech()


    }, [])








    const i = [1, 2, 3, 4, 5]

    const navigation = useNavigate()

    const onclickproduct = (id) => {
        navigation(`/product/${id}`)
    }

    // const onclick_wish = (item) => {
    //     const dis = { type: 'add_wishlish', id: item.id, data: item }
    //     store.dispatch(dis)
    //     // store.dispatch({ type: 'INCREMENT_COUNTER' })

    // }

    // const tag_men = () => {
    //     store.dispatch(get_tag())
    // }

    const loai = ['all categories', 'fashion', 'men', 'women', 'electronics', 'furmiture', 'plant', 'organic food', 'flower', 'book', 'cosmetics', 'accessories', 'handmade', 'kids', 'auto parts', 'cakes', 'pet food', 'medical', 'black friday', 'christmas']
    const color = ['all color', 'white', 'black', 'brown', 'blue',]
    const size = ['all size', 'x', 'm', 'xl', 'xxl']
    const tag = ['fashion', 'men', 'jacket', 'full sleeve', 'women', 'coat', 'top', 'sleeveless', 'electronics', 'furmiture', 'plant', 'organic food', 'flower', 'book', 'cosmetics', 'accessories', 'handmade', 'kids', 'auto parts', 'cakes', 'pet food', 'medical', 'black friday', 'chirsymas']

    const [check, setCheck] = useState({ loai: '', name: '' })
    const [searchValue, setSearchValue] = useState('')

    const change_check = (e, loai) => {
        setCheck({ loai: loai, name: e })
        setSearchValue('')

    }

    useEffect(() => {
        if (check.name != '') {
            if (check.loai == 'tag') { store.dispatch(get_tag(check)) }
            else if (check.loai == 'loai') { store.dispatch(get_product_loai(check)) }
            else if (check.loai == 'color') { store.dispatch(get_product_color(check)) }
            else { store.dispatch(get_product_size(check)) }


        }

        page_number.current = 0
    }, [check])

    // const get_all = () => {
    //     store.dispatch(frech_thunk())
    // }

    // search

    const onchange_search = (e) => {
        setSearchValue(e.target.value)

    }
    const search = (searchValue) => {

        store.dispatch(search_product(searchValue))

    }

    const [value_select, setValue_select] = useState('')
    const tg = useRef()
    const onchange_select = (value) => {
        const dataValue = value.target.value
        // tg.current = value.target.value
        setValue_select((prev) => {
            // alert(value_select)

            return value.target.value
        }) //// vấn đề bất đồng bộ khiến biến state không được gán chính xác lúc hàm thunk sử dụng
        store.dispatch(sx_price(dataValue))
    }

    /////////////////////// phân trang 


    // const page_f = () => {
    //     var page_array = []
    //     var as = 0
    //     const page = !states.products ? "" : (states.products.length % 9 == 0 ? Math.floor(states.products.length / 9) : (Math.floor(states.products.length / 9) + 1))
    //     for (var i = 0; i < page; i++) {
    //         page_array.push(i)
    //         as++
    //     }
    //     return page_array
    // }
    // const [te, setTe] = useState(page_f())
    // console.log(te)
    // const ui = []
    // const ass = () => {
    //     states.products?.map()
    // }

    const [linkpage, setLinkpage] = useState(0)
    const page_number = useRef(0)

    const onChangepage = (number) => {
        // setLinkpage(number)
        page_number.current = number * 9

        setLinkpage(number) //// chỉ có tác dụng ép cho page number hoạt động trong trường hợp bất đồng bộ

    }


    ///////////////////////end phân trang 
    const [ay, setAy] = useState()
    const action_s = useRef('x3')
    const action_show = (name) => {

        action_s.current = name
        setAy(name)
        // console.log(action_s.current)

    }

    /////////// end loc

    // const addwish = (item) => {
    //     const dis = { type: 'add_wishlish', id: Number(item.id), data: item }
    //     store.dispatch(dis)
    //     // store.dispatch({ type: 'INCREMENT_COUNTER' })


    // }

    // // const addcart = (item) => {
    // //     // const discart = { type: 'add_cart', id: Number(item.id), data: item }
    // //     // store.dispatch(discart)
    // //     store.dispatch(postcart(item.id, 1, item))



    // // }


    const [value_de, setValue_de] = useState({ soluong: 0, data: {} })
    const trangthai_de = Funtion_debounce(value_de, 800)

    const addcart = (item) => {
        setValue_de({ soluong: (value_de.soluong + 1), data: item })
    }


    ///wish
    const [value_wish, setValue_wish] = useState({ soluong: 0, data: {} })
    const trangthai_wish = Funtion_debounce_wish(value_wish, 800)
    const addwish = (item) => {
        // const dis = { type: 'add_wishlish', id: item.id, data: item }
        // store.dispatch(dis)
        setValue_wish({ soluong: (value_wish.soluong + 1), data: item }) // lấy cả số lượng để kiểm tra trường hợp số lượng bằng 0 khi mới load 

        // store.dispatch({ type: 'INCREMENT_COUNTER' })
    }




    const notify = () => {
        // console.log(toast("Wow so easy!"))
        {
            toast.success('🦄 Wow so easy!', {
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


    return (
        <div style={{
            display: 'flex',
            flexFlow: 'column',
            height: '100%'
        }} >
            {/* <Header /> */}

            <ToastContainer />



            <div id='scroller' style={{
                // // border: '3px solid #00ff00',
                width: '100%',
                // height: 'max-content',
                // overflowX: 'hidden',
                overflowY: 'auto',
                // backgroundColor: '#f3f4f6'

            }}>
                <Header2 scrol={as} />
                <Hide_header scrol={as} />
                <Ontop scrol={as} />

                <div className='patch_product' style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <Link to={'/'} className='Link_name_product'>HOME</Link> /  SHOP
                </div>


                <br /><br />


                <div style={{
                    width: '63%',
                    margin: 'auto',
                    // border: 'solid',
                    display: 'flex',
                    flexDirection: 'row'
                }}>

                    <div style={{ width: '28%', padding: '3%' }}>
                        <h6 className='output'>
                            SEARCH
                        </h6>
                        <br />
                        <div style={{
                            display: 'flex', border: 'solid 1px #e6e6e6',
                            width: '75%',
                            flexDirection: 'row',
                            flexWrap: 'nowrap',
                            alignItems: 'center',
                            justifyContent: 'center',
                            aspectRatio: '157/26',
                            fontSize: '13px'

                        }}>
                            <input type='text' className='no-outline' onChange={onchange_search} value={searchValue} placeholder='search here' />
                            <div style={{ width: '2px', borderLeft: 'solid 1px gray', height: '20px' }}>

                            </div>

                            <div onClick={() => search(searchValue)} style={{ cursor: 'pointer' }}>
                                <iconify-icon icon="carbon:search" style={{ color: 'gray' }}></iconify-icon>
                            </div>
                        </div>

                        <br />
                        <h6>
                            Categories
                        </h6>
                        {loai.map((e, i) =>
                            <div key={i} className='button_loc' style={{ display: 'flex', fontSize: '87%', cursor: 'pointer' }} onClick={() => change_check(e, 'loai')}>

                                <div style={{ width: '20px' }}>
                                    <iconify-icon id={check.name == e ? '' : 'check_icon'} icon="material-symbols:check-box" style={{ color: 'purple' }}></iconify-icon>
                                    <iconify-icon id={check.name == e ? 'icon2' : 'icon'} icon="material-symbols:check-box-outline-blank" style={{ color: 'gray' }}></iconify-icon>
                                </div>
                                <div>{e}</div>

                                {/* <iconify-icon icon="ic:round-check-box" style={{ color: 'purple' }} width="20"></iconify-icon>                                <div>{e}</div> */}
                            </div>
                        )
                        }

                        <h6>
                            color
                        </h6>
                        {color.map((e, i) =>
                            <div key={i} onClick={() => change_check(e, 'color')} className="button_loc" style={{ display: 'flex', fontSize: '87%', cursor: 'pointer' }}>

                                <div style={{ width: '20px' }}>
                                    <iconify-icon id={check.name == e ? '' : 'check_icon'} icon="material-symbols:check-box" style={{ color: 'purple' }}></iconify-icon>
                                    <iconify-icon id={check.name == e ? 'icon2' : 'icon'} icon="material-symbols:check-box-outline-blank" style={{ color: 'gray' }}></iconify-icon>
                                </div>
                                <div>{e}</div>

                                {/* <iconify-icon icon="ic:round-check-box" style={{ color: 'purple' }} width="20"></iconify-icon>                                <div>{e}</div> */}
                            </div>
                        )
                        }

                        <h6>
                            size
                        </h6>

                        {size.map((e, i) =>
                            <div key={i} onClick={() => change_check(e, 'size')} className='button_loc' style={{ display: 'flex', fontSize: '87%', cursor: 'pointer' }}>

                                <div style={{ width: '20px' }}>
                                    <iconify-icon id={check.name == e ? '' : 'check_icon'} icon="material-symbols:check-box" style={{ color: 'purple' }}></iconify-icon>
                                    <iconify-icon id={check.name == e ? 'icon2' : 'icon'} icon="material-symbols:check-box-outline-blank" style={{ color: 'gray' }}></iconify-icon>
                                </div>
                                <div>{e}</div>

                                {/* <iconify-icon icon="ic:round-check-box" style={{ color: 'purple' }} width="20"></iconify-icon>                                <div>{e}</div> */}
                            </div>
                        )
                        }

                        <h6>
                            tag
                        </h6>
                        <div style={{ width: '58%' }}>
                            {tag.map((e, i) =>
                                <div className={check.name == e ? 'button_tag2' : 'button_tag'} onClick={() => change_check(e, 'tag')} key={i} style={{ fontSize: '87%', borderRadius: '20px', padding: '4px 7px', width: 'max-content', fontSize: '12px', float: 'left', margin: '4px', cursor: 'pointer' }}>
                                    {e}
                                </div>
                            )
                            }
                        </div>

                    </div>
                    <div className='products2' style={{
                        width: '70%',
                        // margin: 'auto',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'flex-start',
                        aspectRatio: '25/36',
                        alignContent: 'flex-start'

                    }} >

                        <div style={{
                            width: '100%', fontSize: '11px',
                            color: 'gray',
                            display: 'flex'
                        }}>
                            <select value={value_select} onChange={onchange_select}>
                                <option value='default'>default</option>
                                <option value='giam'>Price - Hight to Low</option>
                                <option value='tang'>Low to Hight</option>
                            </select>


                            <div style={{ marginLeft: '20px' }}>
                                Show {states.products?.length} of {tongsp} result
                            </div>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                position: 'relative',
                                left: '53%',
                                width: '12%',
                                justifyContent: 'space-around'

                            }}>
                                <iconify-icon onClick={() => action_show('x3')} icon="subway:menu" style={{ color: 'gray', cursor: 'pointer' }} width='15'></iconify-icon>
                                <iconify-icon onClick={() => action_show('x2')} icon="fluent-mdl2:expand-menu" style={{ color: 'gray', cursor: 'pointer' }} width='16'></iconify-icon>
                                <iconify-icon onClick={() => action_show('x1')} icon="gridicons:menus" style={{ color: 'gray', cursor: 'pointer' }} width='16' ></iconify-icon>
                                {/* <iconify-icon onClick={() => action_show('x1')} icon="system-uicons:side-menu" style={{ color: 'gray' }} width="22"></iconify-icon> */}
                            </div>

                        </div>
                        <br />
                        {/* {states.products ? states.products[1].name : ""} */}
                        {
                            /////////////x3
                            action_s.current == 'x3' ?
                                (
                                    !states.products ? '' : states.products.slice(page_number.current, (page_number.current + 9)).map((e, ii) =>
                                        <div key={ii} className='product' style={{ width: '204px', height: '362px', margin: '11px 6px' }} >
                                            <div className='mini_add'>
                                                new
                                            </div>
                                            <div className='img_product2'>
                                                <img onClick={() => onclickproduct(e.id)} className='img_mini' style={{ width: '100%', height: '88%' }} src={e.img2} />
                                                <div className=' hide_mini' style={{ height: '10%', backgroundColor: '#a749ff' }}>
                                                    <div className='hide_mini1' onClick={() => addwish(e)} style={{ width: '12%', height: '100%' }}>
                                                        <iconify-icon icon="ph:heart" style={{ color: 'white' }}></iconify-icon>
                                                    </div>
                                                    <div onClick={() => addcart(e)} className='hide_mini2'>
                                                        buy now
                                                    </div>
                                                    <div className='hide_mini3' style={{ width: '12%', height: '100%' }}>
                                                        <iconify-icon icon="ic:outline-remove-red-eye" style={{ color: 'white', }}></iconify-icon>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ width: '100%', aspectRatio: '49/70' }}>
                                                <img onClick={() => onclickproduct(e.id)} className='img_product' style={{ width: '100%', height: '100%' }} src={e.img1} />

                                            </div>
                                            <div className='str_product' style={{ fontSize: '10px' }}>
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
                                    )
                                ) :
                                ////////////end x3

                                ////////x2

                                (
                                    action_s.current == 'x2' ?
                                        (
                                            !states.products ? '' : states.products.slice(page_number.current, (page_number.current + 9)).map((e, ii) =>
                                                <div key={ii} className='product' style={{ width: '45%', margin: '11px 6px' }} >
                                                    <div className='mini_add'>
                                                        new
                                                    </div>
                                                    <div className='img_product2' style={{ height: '90%' }}>
                                                        <img onClick={() => onclickproduct(e.id)} className='img_mini' style={{ width: '100%', height: '88%' }} src={e.img2} />
                                                        <div className=' hide_mini' style={{ height: '10%', backgroundColor: '#a749ff' }}>
                                                            <div className='hide_mini1' onClick={() => addwish(e)} style={{ width: '12%', height: '100%' }}>
                                                                <iconify-icon icon="ph:heart" style={{ color: 'white' }}></iconify-icon>
                                                            </div>
                                                            <div onClick={() => addcart(e)} className='hide_mini2'>
                                                                buy now
                                                            </div>
                                                            <div className='hide_mini3' style={{ width: '12%', height: '100%' }}>
                                                                <iconify-icon icon="ic:outline-remove-red-eye" style={{ color: 'white', }}></iconify-icon>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={{ width: '100%', aspectRatio: '65/70' }}>
                                                        <img onClick={() => onclickproduct(e.id)} className='img_product' style={{ width: '100%', height: '100%' }} src={e.img1} />

                                                    </div>
                                                    <div className='str_product' style={{ fontSize: '14px' }}>
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
                                            )
                                        ) :
                                        ///////////// x 1
                                        (
                                            <div style={{ width: '100%' }}>
                                                {
                                                    !states.products ? '' : states.products.slice(page_number.current, (page_number.current + 9)).map((e, ii) =>
                                                        <div key={ii} className='product' style={{ width: '100%', aspectRatio: '60/25', margin: '11px 6px', display: 'flex' }} >

                                                            <div className='img_product2' style={{ width: '34%', height: '100%' }}>
                                                                <img onClick={() => onclickproduct(e.id)} className='img_mini' style={{ width: '100%', height: '100%' }} src={e.img2} />
                                                            </div>
                                                            <div style={{ width: '34%', aspectRatio: '65/87' }}>
                                                                <img onClick={() => onclickproduct(e.id)} className='img_product' style={{ width: '100%', height: '100%' }} src={e.img1} />

                                                            </div>
                                                            <div style={{ fontSize: '14px', width: '60%', margin: 'auto' }}>
                                                                <h6>
                                                                    <Link className='Link_name_product' to={`/product/${e.id}`}>
                                                                        {e.name}
                                                                    </Link>
                                                                </h6>
                                                                <div>
                                                                    € <small>
                                                                        {e.gia}
                                                                    </small>
                                                                </div>
                                                                <div>
                                                                    {i.map(ei => <iconify-icon key={ei} icon="ic:twotone-star-outline" style={{ color: e.start >= ei ? '#ffaa00' : 'gray' }}></iconify-icon>)}
                                                                </div>
                                                                <div >
                                                                    {e.mota}
                                                                </div>
                                                                <div style={{
                                                                    display: 'flex',
                                                                    justifyContent: 'space-around',
                                                                    width: '55%',
                                                                    alignItems: 'center',
                                                                }}>
                                                                    {/* <input type='number' name='soluong' style={{ width: '20%' }} value={states.wishlish.find(e => e.id == id)?.soluong} /> */}
                                                                    {/* <div>
                                                                        {states.wishlish.find(ee => ee.id == e.id)?.soluong}
                                                                    </div> */}
                                                                    <button onClick={() => addcart(e)}>add to cart</button>
                                                                    <div onClick={() => addwish(e)} style={{ cursor: 'pointer' }} >
                                                                        <iconify-icon icon="bi:heart" style={{ color: 'gray' }}></iconify-icon>
                                                                    </div>

                                                                    <iconify-icon icon="fe:random" style={{ color: 'gray' }}></iconify-icon>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        )
                                )


                            //////end x2

                        }

                        <div id='ay' style={{ width: '100%', textAlign: 'center', }}>
                            {/* {(!states.products ? "" : (states.products.length % 9 == 0 ? Math.floor(states.products.length / 9) : (Math.floor(states.products.length / 9))))} */}
                            {


                                (!states.products ? "" : (states.products.length % 9 == 0 ? Math.floor(states.products.length / 9) : (Math.floor(states.products.length / 9)))) <= 0 ? '' :   // điều kiện nếu có một trang thì không hieent thị phân trang
                                    (states.products?.map((e, i) => (i + 1) <= (!states.products ? "" : (states.products.length % 9 == 0 ? Math.floor(states.products.length / 9) : (Math.floor(states.products.length / 9) + 1))) ?

                                        <button key={i} onClick={() => onChangepage(i)} className={!(page_number.current / 9) == i ? 'number_button' : 'number_button2'} >

                                            {/* width: '10xp' */}
                                            {i}
                                        </button>
                                        : ''

                                    ))


                            }
                        </div>

                    </div>

                </div>
                <Fooder />

                {/* //// */}


            </div >
            {/* <iframe src="/" width="680" height="auto" allowFullscreen>

            </iframe> */}

        </div >
    )
}

const mapStateToProps = state => {
    const states = state;
    // todo: state.counter;
    // console.log('test', states.products)
    return { states }
};

export default connect(mapStateToProps)(Collection);