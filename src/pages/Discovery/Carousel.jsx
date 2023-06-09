import {Swiper, SwiperSlide} from "swiper/react";
import {useEffect, useState} from "react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './_Carousel.scss'
// import required modules
import {Autoplay, Pagination, Navigation} from 'swiper';
import {useRef} from "react";
// import {AJAX} from "../../utils/apiFetching.js";


/*const useAJAX = (url) => {
    const [data, setData] = useState(null);
     useEffect(()=>{
    AJAX().then((result)=>setData(result)).catch((error)=>{
        console.log(error)
    })
     },[url]);
    return data
}*/
import {useGetConfigurationQuery, useGetGenreQuery, useGetPopularMoviesQuery} from "../../utils/apiFetching.js";

function Carousel() {
    const progressCircle = useRef(null);
    // const test=useAJAX('/movie/popular');
    const progressContent = useRef(null);
    // console.log(test)
    const {data, error, isLoading} = useGetPopularMoviesQuery();
    const {data: {images} = {}} = useGetConfigurationQuery();
    const {data: {genres} = {}} = useGetGenreQuery();

    // {data: images{},etc:{} } =>  data ? {images} or data={} so images={}
    // console.log(images?.backdrop_sizes[3])
    // console.log(useGetConfigurationQuery());
    // console.log(data)
    // console.log(data?.results[0].genre_ids[0])
    // console.log(genres?.find(genre=>genre.id===data?.results[0].genre_ids[0]).name)
    console.log(data?.results[0].genre_ids.map(g => genres?.find(genre => genre.id === g).name))
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    const [_, setInit] = useState();
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <div className='container'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 1000340,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
                onInit={() => setInit(true)}
            >

                {error ? (
                    <>Oh no, there was an error</>
                ) : isLoading ? (
                    <>Loading...</>
                ) : data ? (

                        data.results.map(item => {
                            // console.log(item)
                            return <SwiperSlide key={item.id}>

                                <img src={`${images?.base_url}${images?.backdrop_sizes[1]}/${item.backdrop_path}`}
                                     className='backdrop-image'/>

                                <div className="info">
                                    {/*<div className="info__vote-average">{item.vote_average}</div>*/}
                                    <div
                                        className="info__genres">{
                                        item.genre_ids.slice(0, 4).map((g, id) => <div key={id}
                                                                                       className='info__genres__genre'>{genres?.find(genre => genre.id === g).name}</div>)
                                    }</div>
                                    <div className="info__title">{item.title}</div>
                                    <div className="info__additional">
                                        <div className='info__additional__rating'>⭐{item.vote_average}/10</div>
                                        <div>🎥{item.release_date.split('-')[0]}</div>
                                    </div>
                                    <div className='info__buttons'>
                                        <button className="info__buttons__watch-trailer">
                                            <img src='../../src/assets/icons/playButton.svg'
                                                 className='info__buttons__watch-trailer__image'
                                            />
                                            Watch Trailer
                                        </button>
                                        <button className="info__buttons__add-watchlist">
                                            <img src='../../src/assets/icons/watchlistButton.svg'
                                                 className='info__buttons__add-watchlist__image'/>
                                            Add Watchlist
                                        </button>

                                    </div>
                                </div>
                            </SwiperSlide>
                        })

                    )
                    : null

                }

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
            <div>
                <button className='navigation-buttons left' ref={prevRef}><img
                    src='../../src/assets/icons/arrow-left.svg'/></button>
                <button className='navigation-buttons right' ref={nextRef}>
                    <img
                        src='../../src/assets/icons/arrow-right.svg'/></button>
            </div>
        </div>
    );
}

export default Carousel;
