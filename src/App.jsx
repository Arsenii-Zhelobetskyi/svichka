import {useState} from 'react'
// import Card from "./components/Carousel/Card.jsx";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Header from "./components/Header/Header.jsx";

import Home from "./pages/Home/Home.jsx";
import Discovery from "./pages/Discovery/Discovery.jsx";
import TopRated from "./pages/TopRated/TopRated.jsx";
import ComingSoon from "./pages/ComingSoon/ComingSoon.jsx";
import {store} from "./redux/store.js";
// import {settingFetched} from "./redux/feature/apiConfigSlice.js";
import {useGetConfigurationQuery} from "./utils/apiFetching.js";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
    // const [count, setCount] = useState(0)
    // const response =useGetConfigurationQuery()
    // console.log(response.results.images)
    // store.dispatch(settingFetched(useGetConfigurationQuery))

    // console.log(test)

    return (
        <BrowserRouter>
            <Header/>
            <Sidebar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Discovery' element={<Discovery/>} />
                <Route path='/TopRated' element={<TopRated/>} />
                <Route path='/ComingSoon' element={<ComingSoon/>} />
            </Routes>
        </BrowserRouter>

)
}

export default App
