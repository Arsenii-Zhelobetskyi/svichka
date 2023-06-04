import {useState} from 'react'
import Carousel from "./components/Carousel/Carousel.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Header from "./components/Header/Header.jsx";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
    // const [count, setCount] = useState(0)


    // console.log(test)

    return (
        <>
            <Header/>

            <Carousel/>
            <Sidebar/>
        </>
    )
}

export default App
