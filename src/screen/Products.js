// import React, { useEffect, useState } from 'react'
// import { getProducts } from '../Axiot/api';
// import Header from '../component/Header'
// import Header2 from '../component/Header2'

// export default function Products() {
//     // const dispatch = useDispatch()

//     const [data, setData] = useState([])
//     useEffect(() => {
//         const frech = async () => {
//             const res = await getProducts()
//             setData(res.data)
//             // console.log('ay', data[1])
//             // console.log(res.data[1])
//         }
//         frech()
//     }, []);

//     // console.log('ay', res.data)


//     // frech()

//     // const output = document.querySelector("#output");

//     const [as, setAs] = useState('')



//     useEffect(() => {
//         var scroller = document.querySelector("#scroller");
//         scroller.addEventListener("scroll", (event) => {
//             // output.textContent = `scrollTop: ${scroller.scrollTop}`;
//             setAs(scroller.scrollTop)
//         }, [as]);
//     })


//     const [trx, setTrx] = useState(200)
//     const handleMouseMove = event => {
//         // this.setState({
//         //   x: event.clientX,
//         //   y: event.clientY,
//         // })
//         var a = event.clientX
//         setTrx(-event.clientX / 10)
//     }

//     const clearCoor = () => {
//         // setTrx(100)
//         setTrx(100)
//     }
//     // const dispatch = useDispatch()



//     return (
//         <div style={{
//             display: 'flex',
//             flexFlow: 'column',
//             height: '100%'
//         }} >
//             <Header />


//             <div id='scroller' style={{
//                 // // border: '3px solid #00ff00',
//                 width: '100%',
//                 height: '660px',
//                 // overflowX: 'hidden',
//                 overflowY: 'auto',
//                 backgroundColor: '#f3f4f6'

//             }}>
//                 <Header2 scrol={as} />





//                 {/* <marquee behavior='scroll' >Hoc HTML tai VietJack - Vi du cach su dung the marquee.</marquee> */}

//                 <div id="scroll-text" style={{ height: '400px', width: '2000px', backgroundImage: 'url("https://reactdemo.hasthemes.com/flone/p2/img/preview-image/brook-landing-marque-image-01.jpg")' }}>
//                     <center className='colora'>38</center>
//                 </div>




//             </div>

//         </div >
//     )

// }

