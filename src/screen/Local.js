import React from 'react'

export default function Local() {
    let data = [
        // {
        //     id: 0,
        //     title: 'complete billing deteal 0',
        //     check: true,
        //     line: false,

        // },
        // {
        //     id: 1,
        //     title: 'complete billing deteal1',
        //     check: true,
        //     line: false,
        // },
        // {
        //     id: 2,
        //     title: 'complete billing deteal 3',
        //     check: true,
        //     line: false,

        // },
        // {
        //     id: 3,
        //     title: 'complete billing deteal 4',
        //     check: true,
        //     line: false,
        // }
    ]
    localStorage.setItem('foo', JSON.stringify(data)) /// local không nhận mảng nên phải đổi kiểu sang json 

    const datas = JSON.parse(localStorage.getItem("foo"))
    return datas
}
