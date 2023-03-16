import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Demo4 from './screen/Demo4';



export default function Appcompo() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' exact element={<Demo4 />} />
        



            </Routes>
        </BrowserRouter>
    )
}
