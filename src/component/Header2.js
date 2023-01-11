import React, { useState } from 'react'
import './Header2.css'

export default function Header2({ scrol }) {



    return (
        <div className={scrol <= 10 ? 'border' : 'border2'}>
            <img src='https://reactdemo.hasthemes.com/flone/p2/img/logo/flone-black.png' style={{
                // width: '170px',
                height: '41%',
                marginLeft: '6.6%',
                marginTop: '2%'
            }} />
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
                <div style={{ width: '100px' }}>
                    <div className='line'>
                        Home
                    </div>
                </div>
                <div style={{ width: '100px' }}>
                    <div className='line'>
                        Shop
                    </div>
                </div>

                <div style={{ width: '100px' }}>
                    <div className='line'>
                        Collecttion
                    </div>
                </div>
                <div style={{ width: '100px' }}>
                    <div className='line'>
                        pages
                    </div>
                </div>
                <div style={{ width: '100px' }}>
                    <div className='line'>
                        blog
                    </div>
                </div>
                <div style={{ width: '100px' }}>
                    <div className='line'>
                        Contact Us
                    </div>
                </div>

            </div>
            <div className='Purchase'>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    flexDirection: 'row'
                }} className='Purchase_c2'>

                    <iconify-icon icon="et:profile-female"></iconify-icon>
                    <iconify-icon icon="fe:random"></iconify-icon>
                    <iconify-icon icon="mdi:cards-heart-outline"></iconify-icon>
                    <iconify-icon icon="ph:shopping-bag"></iconify-icon>
                </div>
            </div>

            <div>
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
            </div>

            {/* <iconify-icon icon="et:profile-female"></iconify-icon> */}

            {/* <iconify-icon icon="mdi:tick-network"></iconify-icon> */}

            {/* <iconify-icon icon="et:profile-female"></iconify-icon> */}

        </div >
    )
}
