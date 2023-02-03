import React from 'react'

export default function Ontop({ scrol }) {
    const as = () => {
        // const element = window
        // // element.scrollLeft = 50;
        // window.scrollY = 0
    }

    return (


        <a href='#' onClick={() => as()}
            style={{
                width: '2%',
                /* text-align: center, */
                aspectRatio: '2/2',
                borderRadius: '64%',
                // border: 'solid 1px black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'fixed',
                right: '3%',
                bottom: '9%',
                // display: scrol <= 260 ? 'none' : '',
                backgroundColor: '#a749ff'

            }}
            hidden={scrol <= 260 ? 'hidden' : ''}
        >
            <iconify-icon icon="material-symbols:keyboard-double-arrow-right" style={{ color: 'white' }} rotate="270deg"></iconify-icon>
        </a >


    )
}
