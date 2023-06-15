/*
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./_watchProviders.scss";

// import required modules
import {Pagination} from "swiper";
import {useGetConfigurationQuery, useGetNowPlayingQuery, useGetProvidersQuery} from "../../utils/apiFetching.js";
import {useGetLanguagesQuery} from "../../utils/apiIp.js";

// import Skeleton from "@mui/material/Skeleton";

function WatchProviders() {
    const {data: {languages} = {}, isLoading: langLoading} = useGetLanguagesQuery();
    const Languages = languages?.substring(0, languages.indexOf(','))
    const {data: {results} = {}, error, isLoading: contentLoading} = useGetNowPlayingQuery();
    const {data: {images} = {}, isLoading: imgLoading} = useGetConfigurationQuery();
    console.log(results)
    return (
        <>
            {
                error ? (
                    <>Oh no, there was an error</>
                ) : contentLoading ? (
                    // <Skeleton variant="rounded" sx={{bgcolor: 'grey.900', borderRadius: '24px'}} width={756}
                    //           height={366}/>
                    <>Is loading</>
                ) : results ? (
                    <Swiper
                        slidesPerView={7}
                        spaceBetween={30}
                        grabCursor={true}
                        modules={[Pagination]}
                        className="cards"
                    >
                        {results.map((item, index) =>
                            <SwiperSlide key={index} className='cards__item'>
                                <img src={`${images?.secure_base_url}${images.poster_sizes[2]}${item.poster_path}`} className='poster-photo'/>
                                <div>{item.title}</div>
                                <div>{item.release_date.split('-')[0]}</div>
                            </SwiperSlide>)}

                    </Swiper>
                ) : null
            }
        < />);
}

export default WatchProviders;*/
