import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getProducts } from '../Axiot/api'
import Header from '../component/Header'
import Header2 from '../component/Header2'

export default function Home() {


    // const output = document.querySelector("#output");

    const [as, setAs] = useState('')



    useEffect(() => {
        var scroller = document.querySelector("#scroller");
        scroller.addEventListener("scroll", (event) => {
            // output.textContent = `scrollTop: ${scroller.scrollTop}`;
            setAs(scroller.scrollTop)
        }, [as]);
    })


    const [trx, setTrx] = useState(200)
    const handleMouseMove = event => {
        // this.setState({
        //   x: event.clientX,
        //   y: event.clientY,
        // })
        var a = event.clientX
        setTrx(-event.clientX / 10)
    }

    const clearCoor = () => {
        // setTrx(100)
        setTrx(100)
    }
    // const dispatch = useDispatch()

    const [data, setData] = useState()
    useEffect(() => {
        const frech = async () => {
            const res = await getProducts();
            setData(res.data)
            console.log('ay', res.data)

        }
        frech()

        // dispatch(thunk_funtion())
    }, [])

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
                backgroundColor: '#f3f4f6'

            }}>
                <Header2 scrol={as} />

                <div id="container" onMouseOut={clearCoor} onMouseMove={handleMouseMove} className='ay' style={{ width: '100%', height: '200px' }}>
                    <div>
                        <div className='imgstranf' style={{ left: `${trx}px`, backgroundColor: 'white' }}>
                            <img src="https://reactdemo.hasthemes.com/flone/p2/img/revoulation/brook-landing-new-slider-slide-image-01.png" alt="react logo" style={{ width: '400px', }} />
                            {/* <image width='100px' height='100px' src='https://reactdemo.hasthemes.com/flone/p2/img/revoulation/brook-landing-new-slider-slide-image-01.png' /> */}
                        </div>
                        <div className='imgstranf' style={{ width: '70px', height: '100px', left: `${trx}px`, backgroundColor: 'white' }}>
                            <img src="https://reactdemo.hasthemes.com/flone/p2/img/revoulation/brook-landing-new-slider-slide-image-01.png" alt="react logo" style={{ width: '400px', }} />

                        </div>
                        <div className='imgstranf' style={{ width: '200px', height: '100px', left: `${trx}px`, backgroundColor: 'white' }}>
                            <img src="https://reactdemo.hasthemes.com/flone/p2/img/revoulation/brook-landing-new-slider-slide-image-01.png" alt="react logo" style={{ width: '400px', }} />

                        </div>
                    </div>

                    <div>
                        Flone Minimal React Template
                    </div>

                </div >

                <ul  >
                    <li>
                        <b>
                            Latest React & Redux
                        </b>
                        <br />
                        Latest React and Redux used.
                    </li>
                    <li>
                        <b>
                            Mega Menu
                        </b>
                        <br />
                        Mega Menu is the door that has the entrance to every pages of your site. It navigates things for bringing ease.
                    </li>
                    <li>
                        <b>
                            Responsive Design
                        </b>
                        <br />
                        Flone is super responsive & work perfectly in all devices.
                    </li>
                    <li >
                        <b>
                            Real Support
                        </b>
                        <br />
                        We provide 7 days a week one by one real support.
                    </li>
                </ul >


                {/* <marquee behavior='scroll' >Hoc HTML tai VietJack - Vi du cach su dung the marquee.</marquee> */}

                < div div id="scroll-text" style={{ height: '400px', width: '2000px', backgroundImage: 'url("https://reactdemo.hasthemes.com/flone/p2/img/preview-image/brook-landing-marque-image-01.jpg")' }
                }>
                    <center className='colora'>38</center>
                </ div>


                {/* <div id="container">
                    <div id="scroller">
                        <p>
                            Far out in the uncharted backwaters of the unfashionable end of the
                            western spiral arm of the Galaxy lies a small unregarded yellow sun.
                            Orbiting this at a distance of roughly ninety-two million miles is an
                            utterly insignificant little blue green planet whose ape-descended life
                            forms are so amazingly primitive that they still think digital watches are
                            a pretty neat idea.
                        </p>
                    </div>
                </div>

                <div id="output">scrollTop: {as}</div> */}

            </div >

        </div >
    )
}
