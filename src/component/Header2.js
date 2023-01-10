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
                        Demos
                    </div>
                </div>
                <div style={{ width: '100px' }}>
                    <div className='line'>
                        Features
                    </div>
                </div>

                <div style={{ width: '100px' }}>
                    <div className='line'>
                        Support
                    </div>
                </div>

            </div>
            <div className='Purchase'>
                <div className='Purchase_c2'>
                    <div>
                        Purchase
                    </div>
                </div>
            </div>

        </div>
    )
}
