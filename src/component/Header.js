import React from 'react'

export default function Header() {
    return (
        <div style={{ backgroundColor: '#262626', color: 'white', width: '100%', height: '56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ width: '152px', height: '18px', backgroundImage: 'url("https://public-assets.envato-static.com/assets/logos/envato_market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg")', backgroundRepeat: 'no-repeat', marginLeft: '20px' }}>

            </div>
            <button style={{ backgroundColor: '#82b440', width: '93px', height: '65%', color: 'white', borderRadius: '5px', marginRight: '10px' }}>
                Buy now
            </button>
        </div >
    )
}
