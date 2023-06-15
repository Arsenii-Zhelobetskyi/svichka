import {useState, useRef} from "react";
import Skeleton from '@mui/material/Skeleton';
import {Link} from "react-router-dom";

//Swiper
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Pagination, Navigation} from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './_banner.scss'

//api
import {useGetConfigurationQuery, useGetGenreQuery, useGetPopularMoviesQuery} from "../../../../utils/apiFetching.js";
import {useGetLanguagesQuery} from "../../../../utils/apiIp.js";

function Banner() {
    //Custom navigation buttons
    const [_, setButtonsInit] = useState();
    const prevRef = useRef(null);
    const nextRef = useRef(null);


    const {data: {images: imageConfig} = {}, isLoading: imageConfigLoading} = useGetConfigurationQuery();
    const {data: {languages} = {}, isLoading: langLoading} = useGetLanguagesQuery();
    const Language = languages?.substring(0, languages.indexOf(','))

    const {data: {genres} = {}} = useGetGenreQuery(Language);
    const {data, error, isLoading} = useGetPopularMoviesQuery(Language);


    return (
        <div>
            <h6>Popular</h6>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading && langLoading && imageConfigLoading ? (
                <Skeleton variant="rounded" sx={{bgcolor: 'grey.900', borderRadius: '24px'}} width={756}
                          height={366}/>
            ) : data ? (
                <div className='banner-container'>
                    <Swiper
                        className="banner"
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 20000,
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
                        onInit={() => setButtonsInit(true)}
                    >

                        {
                            data.results.map(item => {
                                return <SwiperSlide key={item.id} className='banner-slide'>

                                    <img
                                        src={`${imageConfig?.base_url}${imageConfig?.backdrop_sizes[1]}${item.backdrop_path}`}
                                        className='banner-slide__backdrop-image' alt={'popular movie image'}/>

                                    <div className="banner-slide__info">
                                        <div
                                            className="banner-slide__info__genres">{
                                            item.genre_ids.slice(0, 4).map((g, id) => <div key={id}
                                                                                           className='banner-slide__info__genres__genre'>{genres?.find(genre => genre.id === g).name}</div>)
                                        }</div>
                                        <div className="banner-slide__info__title">{item.title}</div>
                                        <div className="banner-slide__info__additional">
                                            <div
                                                className='banner-slide__info__additional__rating'>⭐{item.vote_average}/10
                                            </div>
                                            <div>🎥{item.release_date.split('-')[0]}</div>
                                        </div>
                                        <div className='banner-slide__info__buttons'>
                                            <Link to={`/Discovery/${item.id}`} className='link-reset'>
                                                <button className="buttons primary-button">
                                                    <img src='../../src/assets/icons/playButton.svg'
                                                         className='banner-slide__info__buttons__watch-trailer__image'
                                                         alt={'▶️'}/>
                                                    <div> Watch Trailer</div>
                                                </button>
                                            </Link>

                                            <button className="buttons banner-slide__info__buttons__add-watchlist">
                                                <img src='../../src/assets/icons/watchlistButton.svg'
                                                     className='banner-slide__info__buttons__add-watchlist__image'
                                                     alt={'📃'}/>
                                                Add Watchlist
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })
                        }
                    </Swiper>
                    <div>
                        <button className='navigation-buttons left' ref={prevRef}><img
                            src='../../src/assets/icons/arrow-left.svg' alt={'<'}/></button>
                        <button className='navigation-buttons right' ref={nextRef}>
                            <img
                                src='../../src/assets/icons/arrow-right.svg' alt={'>'}/>
                        </button>
                    </div>
                </div>
            ) : null
            }


        </div>
    )
}

export default Banner;
