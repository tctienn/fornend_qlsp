import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Demo from './screen/Demo';
import Demo2 from './screen/Demo2';
import Demo4 from './screen/Demo4';
import DemoRedux from './screen/DemoRedux';
import Home from './screen/Home';
import Products from './screen/Products';
import Product from './screen/Product';
import Wishlish from './screen/Wishlish';
import Cart from './screen/Cart';
import Collection from './screen/Collection';
import Push from './screen/demo/Push';


export default function Appcompo() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Demo2 />} /> */}
                {/* <Route path="/" element={<DemoRedux />} /> */}
                {/* <Route path="/" element={<Demo4 />} /> */}
                {/* <Route path='/demo2/:id' element={<Demo />} /> */}
                {/* <Route>lỗi </Route> */}

                {/* <Route path="/demo/:id" element={<Demo />} /> */}
                {/* <Route path='/cart' element={<Cart />} /> */}


                <Route path='/' exact element={<Push />} />


                <Route path='/' exact element={<Home />} />
                <Route path='/product/:id' element={<Product />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/wishlish' element={<Wishlish />} />
                <Route path='/collection' element={<Collection />} />


                {/* <Route path='/' element={< Products />} /> */}

            </Routes>
        </BrowserRouter>
    )
}
