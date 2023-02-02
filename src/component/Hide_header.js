import React from 'react'

export default function
    Hide_header({ scrol }) {
    return (
        <div style={{
            width: '100%',
            aspectRatio: scrol <= 10 ? '' : '29/2',
            display: scrol <= 10 ? 'none' : ''
        }}>
            Hide_header
        </div>
    )
}
