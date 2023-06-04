import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./_carousel.scss"

import {useSelector, useDispatch} from 'react-redux'
import {selectHomeMovies} from '../../redux/feature/homeSlice.js'

import {BASE_URL} from "../config.js";

function Carousel() {
    const homeMovies = useSelector(selectHomeMovies)
    return (

        <Swiper
            slidesPerView={6}
            spaceBetween={30}
            grabCursor={true}
        >
            {homeMovies.map((item) => (<SwiperSlide key={item.id}>

                <img src={`${BASE_URL}${item.poster_path}`}/>
                <div className="title">{item.original_title}</div>


            </SwiperSlide>))}
        </Swiper>

    );
}

export default Carousel;