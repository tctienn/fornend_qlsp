import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './Header2.css'

function Header2({ scrol, states }) {


    const navigate = useNavigate();

    const click_wish = () => {
        navigate('/wishlish')
    }

    const click_cart = () => {
        navigate('/cart')
    }
    return (
        <div className={scrol <= 10 ? 'border' : 'border2'}>
            <Link to={'/'} style={{
                // width: '170px',
                height: '41%',
                marginLeft: '6.6%',
                marginTop: '2%'
            }}>
                <img src='https://reactdemo.hasthemes.com/flone/p2/img/logo/flone-black.png' style={{
                    // width: '170px',
                    height: '100%',

                }} />
            </Link>

            <div style={{
                display: 'flex',
                // flexWrap: 'nowrap',
                // justifyContent: 'space-around',
                // width: '40%',
                alignItems: 'center',
                height: '100%',
                // width: '100%'
                margin: 'auto'

            }}>
                <Link to={'/'} className='Link_name_product' style={{ color: 'none', textDecoration: 'none' }}>
                    <div className='line'>
                        Home
                    </div>
                </Link>
                <Link to={'/collection'} className='Link_name_product' style={{ color: 'none', textDecoration: 'none' }}>
                    <div className='line'>
                        Shop
                    </div>
                </Link>

                <Link to={'/collection'} className='Link_name_product' style={{ color: 'none', textDecoration: 'none' }}>
                    <div className='line'>
                        Collecttion

                    </div>
                </Link>
                <div className='line'>
                    pages

                </div>
                <div className='line'>
                    blog

                </div>
                <div className='line'>
                    Contact Us
                </div>

            </div>
            <div className='Purchase'>
                <div className='Purchase_c2'>
                    <iconify-icon className='icon_header' icon="ic:baseline-search"></iconify-icon>
                    <iconify-icon className='icon_header' icon="et:profile-female"></iconify-icon>
                    <iconify-icon className='icon_header' icon="fe:random"></iconify-icon>

                    <iconify-icon onClick={() => click_wish()} className='icon_header' style={{ cursor: 'pointer' }} icon="mdi:cards-heart-outline"></iconify-icon>

                    <div className='number_cart' style={{
                        top: '10px',
                        left: '52%',
                    }}>
                        0
                    </div>

                    <iconify-icon onClick={() => click_cart()} className='icon_header' style={{ cursor: 'pointer' }} icon="ph:shopping-bag"></iconify-icon>

                    <div className='number_cart' style={{
                        top: '10px',
                        left: '72%',
                    }}>
                        {states.wishlish.length}
                    </div>
                    <div className='number_cart' style={{
                        top: '10px',
                        left: '92%',
                    }}>
                        {states.cart.length}
                    </div>
                </div>
            </div>

            {/* <div>
                <div style={{ width: '100px' }}>
                    defalts
                    <select>
                        <option>dafault</option>
                        <option>s</option>

                        <option>s</option>

                    </select>
                </div>
                <div>

                </div>
            </div> */}

            {/* <iconify-icon icon="et:profile-female"></iconify-icon> */}

            {/* <iconify-icon icon="mdi:tick-network"></iconify-icon> */}

            {/* <iconify-icon icon="et:profile-female"></iconify-icon> */}

        </div >
    )
}


const mapStateToProps = state => {
    const states = state;
    // todo: state.counter;
    // console.log('test', states)
    return { states }
};

export default connect(mapStateToProps)(Header2);