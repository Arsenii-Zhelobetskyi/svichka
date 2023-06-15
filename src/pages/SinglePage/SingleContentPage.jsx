import {Link, useParams} from "react-router-dom";
import {
    useGetConfigurationQuery,
    useGetMovieActorsQuery,
    useGetMovieDetailsQuery, useGetRecommendedMoviesQuery,
    useGetSimiliarMoviesQuery,
} from "../../utils/apiFetching.js";
import './_singleContentPage.scss'

import {Swiper, SwiperSlide} from "swiper/react";
import {useGetLanguagesQuery} from "../../utils/apiIp.js";

function SingleContentPage() {
    const {data: {languages} = {}, isLoading: langLoading} = useGetLanguagesQuery();
    const {id} = useParams();
    const {data: {images: imageConfig} = {}} = useGetConfigurationQuery();

    const Language = languages?.substring(0, languages?.indexOf(','))
    const {data: {results: similiar} = {}} = useGetSimiliarMoviesQuery({content_id: id, language: Language});
    const {data: {results: recommended} = {}} = useGetRecommendedMoviesQuery({content_id: id, language: Language});
    const {data: actors} = useGetMovieActorsQuery({content_id: id, language: Language});
    const {data, error, isLoading} = useGetMovieDetailsQuery({content_id: id, language: Language});
    return (
        <div className='single-content-page'>
            {
                error ? (<>Oh no, there was an error</>) : isLoading ? (
                    <div>loading</div>
                ) : data ? (
                    <div className='single-content-page-box'>
                        <div className='snglPg-header'>
                            <div className='snglPg-header-left'>

                                <img src={`${imageConfig?.base_url}${imageConfig?.poster_sizes[4]}${data.poster_path}`}
                                     className='snglPg-header-left__poster-photo'/>

                            </div>

                            <div className='snglPg-header-right'>
                                <div className='snglPg-header-right__release-info'>
                                    <div className='pick-out'>
                                        {
                                            `${data.release_date?.split('-')[0]}`
                                        }
                                    </div>
                                    <div>
                                        , {data.production_countries?.map((country, index) => (
                                        <span key={index}>
                                            {country.name}
                                            {index < data.production_countries.length - 1 && ' | '}
                                        </span>
                                    ))}
                                    </div>
                                </div>
                                <h1 className='snglPg-header-right__title'>{data.title}</h1>
                                <h5 className='snglPg-header-right__slogan'>{data.tagline}</h5>
                                <div className="pill-tabs">
                                    {data.genres.map((item, index) =>

                                        <div key={index} className='pill-tabs__item'>
                                            {item.name}</div>
                                    )}
                                </div>
                                <div className='snglPg-header-right__stats medium'>
                                    <div className='snglPg-header-right__stats__item'> ⭐ {data.vote_average}/10</div>
                                    <div className='snglPg-header-right__stats__item'> 🎞️ {data.runtime} min</div>
                                    <div className='snglPg-header-right__stats__item'> 🍿 {data.status} </div>
                                </div>


                                <div className='buttons-container'>
                                    <button className='buttons primary-button alerts'>
                                        <img src='../../src/assets/icons/playButton.svg'
                                             className='buttons__image'
                                             alt={'▶️'}/>
                                        <div>Watch</div>
                                    </button>
                                    <button className='buttons secondary-button'>
                                        <div>Add Watchlist</div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='snglPg-about'>
                            <div className='large'>
                                About
                            </div>
                            <div className='snglPg-about__desc'>
                                <div className='snglPg-about__desc-left'>

                                    <div className='snglPg-about__desc-left__info'>{data.overview} <a
                                        href={data.homepage}> More..</a></div>

                                    <div className='large'>
                                        Genres
                                    </div>
                                    <div className="pill-tabs">
                                        {data.genres.map((item, index) =>

                                            <div key={index} className='pill-tabs__item'>
                                                {item.name}</div>
                                        )}
                                    </div>
                                    <div className='large'>
                                        Production
                                    </div>
                                    <div className="pill-tabs">
                                        {data.production_companies.map((item, index) =>

                                            <div key={index} className='pill-tabs__item'>
                                                {item.name}</div>
                                        )}
                                    </div>

                                </div>
                                <div className='snglPg-about__desc-right'>
                                    <div>
                                        <div className='pick-out'>Release date:</div>
                                        {data.release_date}
                                    </div>
                                    <div className='snglPg-about__desc-right__info'>
                                        <div className='pick-out'>Original language:</div>
                                        {data.original_language}
                                    </div>
                                    <div className='snglPg-about__desc-right__info'>
                                        <div
                                            className='pick-out'>Budget:
                                        </div>
                                        {data.budget}
                                    </div>
                                    <div className='snglPg-about__desc-right__info'>
                                        <div
                                            className='pick-out'>Revenue:
                                        </div>
                                        {data.revenue}
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='snglPg-castAndCrew'>
                            <div className='large'>
                                Top Cast
                            </div>
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={10}
                                grabCursor={true}
                                className="snglPg-castAndCrew__slider"
                            >
                                {actors?.cast.map((actor, index) =>
                                    <SwiperSlide key={index} className='snglPg-castAndCrew__slider__slide'>
                                        <img
                                            src={`${imageConfig?.base_url}${imageConfig?.profile_sizes[1]}${actor.profile_path}`}
                                            className='snglPg-castAndCrew__slider__slide__photo'/>
                                        <div className='snglPg-castAndCrew__slider__slide__info'>
                                            <div>
                                                <div className='medium'>{actor.name}</div>
                                                <div>{actor.character}</div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                        <div className='snglPg-other-content'>
                            <div className='large'>
                                Similar
                            </div>
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={30}
                                grabCursor={true}
                                className="snglPg-other-content__slider"
                            >
                                {similiar?.map((similiar, index) =>
                                    <SwiperSlide key={index} className='snglPg-other-content__slider__slide'>
                                        <Link to={`/Discovery/${similiar.id}`} className='link-reset'>
                                            <img
                                                src={`${imageConfig?.base_url}${imageConfig?.poster_sizes[2]}${similiar.poster_path}`}
                                                className='snglPg-other-content__slider__slide__photo'/>
                                            <div className='snglPg-other-content__slider__slide__info'>

                                                <div className='medium'>{similiar.title}</div>
                                                <div>{similiar.release_date.split('-')[0]}</div>

                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                        <div className='snglPg-other-content'>
                            <div className='large'>
                                Recommended
                            </div>
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={30}
                                grabCursor={true}
                                className="snglPg-other-content__slider"
                            >
                                {recommended?.map((recommendations, index) =>
                                    <SwiperSlide key={index} className='snglPg-other-content__slider__slide'>
                                        <Link to={`/Discovery/${recommendations.id}`} className='link-reset'>
                                            <div>
                                                <img
                                                    src={`${imageConfig?.base_url}${imageConfig?.poster_sizes[2]}${recommendations.poster_path}`}
                                                    className='snglPg-other-content__slider__slide__photo'/>
                                                <div className='snglPg-other-content__slider__slide__info'>
                                                    <div className='medium'>{recommendations.title}</div>
                                                    <div>{recommendations.release_date.split('-')[0]}</div>

                                                </div>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                    </div>
                ) : null
            }
        </div>
    );
}

export default SingleContentPage;