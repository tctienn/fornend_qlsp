import { type } from '@testing-library/user-event/dist/type'
import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getProducts } from '../Axiot/api'
import Fooder from '../component/Fooder'
import Header from '../component/Header'
import Header2 from '../component/Header2'
import { products } from '../data/data'
import { frech_thunk, get_tag_men, search_product } from '../Redux/Funtion_thunk'
import { store } from '../Redux/Store'

function Collection({ states }) {


    // const output = document.querySelector("#output");

    const [as, setAs] = useState('')

    useEffect(() => {
        var scroller = document.querySelector("#scroller");
        scroller.addEventListener("scroll", (event) => {
            // output.textContent = `scrollTop: ${scroller.scrollTop}`;
            setAs(scroller.scrollTop)
        }, []);
    })


    const [data, setData] = useState()


    ///////// lọc sản phẩm

    ///linkpage

    const [linkpage, setLinkpage] = useState()


    useEffect(() => {

        store.dispatch(frech_thunk())

    }, [])








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

    // const tag_men = () => {
    //     store.dispatch(get_tag_men())
    // }

    const loai = ['fashion', 'men', 'women', 'electronics', 'furmiture', 'plant', 'organic food', 'flower', 'book', 'cosmetics', 'accessories', 'handmade', 'kids', 'auto parts', 'cakes', 'pet food', 'medical', 'black friday', 'christmas']
    const color = ['white', 'black', 'brown', 'blue',]
    const size = ['x', 'm', 'xl', 'xxl']
    const tag = ['fashion', 'men', 'jacket', 'full sleeve', 'women', 'coat', 'top', 'sleeveless', 'electronics', 'furmiture', 'plant', 'organic food', 'flower', 'book', 'cosmetics', 'accessories', 'handmade', 'kids', 'auto parts', 'cakes', 'pet food', 'medical', 'black friday', 'chirsymas']

    const [check, setCheck] = useState({ loai: '', name: '' })
    const change_check = (e, loai) => {
        setCheck({ loai: loai, name: e })

    }

    useEffect(() => {
        if (check.name != '') {
            if (check.loai == 'tag')
                store.dispatch(get_tag_men(check))
        }
    }, [check])

    // search
    const [searchValue, setSearchValue] = useState()
    const onchange_search = (e) => {
        setSearchValue(e.target.value)
    }
    const search = () => {
        navigation(`?name=${searchValue}`)
        store.dispatch(search_product(searchValue))

    }

    /////////// end loc
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
                    HOME /  SHOP
                </div>
                <br /><br />
                {/* {
                    !states.products ? "" : states.products.map((e, i) => e.id)
                } */}
                <input type='search' onChange={onchange_search} value={searchValue} />
                {searchValue}
                <button onClick={() => search()}>
                    search
                </button>
                <div style={{
                    width: '63%',
                    margin: 'auto',
                    border: 'solid',
                    display: 'flex',
                    flexDirection: 'row'
                }}>
                    <div style={{ width: '28%' }}>
                        <h4>
                            Categories
                        </h4>
                        {loai.map((e, i) =>
                            <div key={i} className='button_loc' style={{ display: 'flex', fontSize: '87%' }} onClick={() => change_check(e, 'loai')}>

                                <div style={{ width: '20px' }}>
                                    <iconify-icon id={check.name == e ? '' : 'check_icon'} icon="material-symbols:check-box" style={{ color: 'purple' }}></iconify-icon>
                                    <iconify-icon id={check.name == e ? 'icon2' : 'icon'} icon="material-symbols:check-box-outline-blank" style={{ color: 'gray' }}></iconify-icon>
                                </div>
                                <div>{e}</div>

                                {/* <iconify-icon icon="ic:round-check-box" style={{ color: 'purple' }} width="20"></iconify-icon>                                <div>{e}</div> */}
                            </div>
                        )
                        }

                        <h4>
                            color
                        </h4>
                        {color.map((e, i) =>
                            <div key={i} onClick={() => change_check(e, 'color')} className="button_loc" style={{ display: 'flex', fontSize: '87%' }}>

                                <div style={{ width: '20px' }}>
                                    <iconify-icon id={check.name == e ? '' : 'check_icon'} icon="material-symbols:check-box" style={{ color: 'purple' }}></iconify-icon>
                                    <iconify-icon id={check.name == e ? 'icon2' : 'icon'} icon="material-symbols:check-box-outline-blank" style={{ color: 'gray' }}></iconify-icon>
                                </div>
                                <div>{e}</div>

                                {/* <iconify-icon icon="ic:round-check-box" style={{ color: 'purple' }} width="20"></iconify-icon>                                <div>{e}</div> */}
                            </div>
                        )
                        }

                        <h4>
                            size
                        </h4>

                        {size.map((e, i) =>
                            <div key={i} onClick={() => change_check(e, 'size')} className='button_loc' style={{ display: 'flex', fontSize: '87%' }}>

                                <div style={{ width: '20px' }}>
                                    <iconify-icon id={check.name == e ? '' : 'check_icon'} icon="material-symbols:check-box" style={{ color: 'purple' }}></iconify-icon>
                                    <iconify-icon id={check.name == e ? 'icon2' : 'icon'} icon="material-symbols:check-box-outline-blank" style={{ color: 'gray' }}></iconify-icon>
                                </div>
                                <div>{e}</div>

                                {/* <iconify-icon icon="ic:round-check-box" style={{ color: 'purple' }} width="20"></iconify-icon>                                <div>{e}</div> */}
                            </div>
                        )
                        }

                        <h4>
                            tag
                        </h4>
                        <div style={{ width: '58%' }}>
                            {tag.map((e, i) =>
                                <div className={check.name == e ? 'button_tag2' : 'button_tag'} onClick={() => change_check(e, 'tag')} key={i} style={{ fontSize: '87%', borderRadius: '20px', padding: '4px 7px', width: 'max-content', fontSize: '12px', float: 'left', margin: '4px' }}>
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
                        {/* {states.products ? states.products[1].name : ""} */}
                        {!states.products ? '' : states.products.map((e, ii) => ii >= 9 ? '' :
                            <div key={ii} className='product' style={{ width: '204px', height: '362px', margin: '11px 6px' }} >
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
                                <div style={{ width: '100%', aspectRatio: '49/70' }}>
                                    <img onClick={() => onclickproduct(e.id)} className='img_product' style={{ width: '100%', height: '100%' }} src={e.img1} />

                                </div>
                                <div className='str_product' style={{ fontSize: '10px' }}>
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
                </div>


                {/* //// */}


            </div >

        </div >
    )
}

const mapStateToProps = state => {
    const states = state;
    // todo: state.counter;
    // console.log('test', states.products.length)
    return { states }
};

export default connect(mapStateToProps)(Collection);