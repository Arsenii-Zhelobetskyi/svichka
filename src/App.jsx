import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Header from "./components/Header/Header.jsx";

import Home from "./pages/Home/Home.jsx";
import Discovery from "./pages/Discovery/Discovery.jsx";
import TopRated from "./pages/TopRated/TopRated.jsx";
import ComingSoon from "./pages/ComingSoon/ComingSoon.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

import Banner from "./pages/Discovery/components/Banner/Banner.jsx";
import SingleContentPage from "./pages/SinglePage/SingleContentPage.jsx";
function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Sidebar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Discovery' element={<Discovery/>}>
                    <Route index element={<Banner/>}/>
                    <Route path=":id" element={<SingleContentPage/>}/>
                </Route>
                <Route path='/TopRated' element={<TopRated/>}/>
                <Route path='/ComingSoon' element={<ComingSoon/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>

    )
}

export default App
