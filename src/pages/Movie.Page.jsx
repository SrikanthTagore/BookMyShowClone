import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import Slider  from "react-slick";

import { FaCcVisa, FaCcApplePay } from "react-icons/fa";

import MovieHero from "../components/MovieHero/MovieHero.Component";
import { NextArrow, PrevArrow } from "../components/HeroCarousel/Arrows.Component";
import Cast from "../components/Cast/Cast.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";

// context
import { MovieContext } from "../context/Movie.Context";
import { useParams } from "react-router-dom";

const MoviePage = () => {

    const {movie} = useContext(MovieContext);
    const { id } = useParams();

    const [cast, setCast] = useState([]);
    const [recommended, setRecommended] = useState([]);

    useEffect(() => {
        const requestCast = async () => {
            const getCastdata = await axios.get(`/movie/${id}/credits`);
            setCast(getCastdata.data.cast);
        }

        requestCast();
    },[id]);

    useEffect(() => {
        const requestSimilarMovies = async () => {
            const getSimilardata = await axios.get(`/movie/${id}/recommendations`);
            setRecommended(getSimilardata.data.results);
        }

        requestSimilarMovies();
    },[id]);

    const settings = {
        infinity: false,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        InitialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoints: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              infinite: true,
            },
          },
          {
            breakpoints: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              InitialSlide: 1,
            },
          },
          {
            breakpoints: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };
      const settingsCast = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      };
    return(
        <>
            <MovieHero />
            <div className="my-12 container px-4 lg:ml-20 lg:w-2/3">
                <div className="flex flex-col items-start gap-3">
                    <h1 className="text-gray-800 font-bold text-2xl">About the Movie</h1>
                    <p>{movie.overview}</p>
                </div>
                <div className="my-8">
                    <hr />
                </div>
                <h2 className="text-gray-800 font-bold text-2xl mb-3">Applicable offers</h2>
                <div className="my-8 flex flex-start gap-10">
                    <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                        <div className="w-8 h-8">
                            <FaCcVisa className="w-full h-full"/>
                        </div>
                        <div className="flex flex-col items-start">
                            <h3 className="text-gray-700 text-xl font-bold">
                                Visa Stream Offer
                            </h3>
                            <p className="text-gray-600">
                                Get 50% off up INR 150 on all RuPay card* on BookMyShow Stream.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                        <div className="w-8 h-8">
                            <FaCcApplePay className="w-full h-full"/>
                        </div>
                        <div className="flex flex-col items-start">
                            <h3 className="text-gray-700 text-xl font-bold">
                                Filmy Pass
                            </h3>
                            <p className="text-gray-600">
                                Get 50% off up INR 150 on all RuPay card* on BookMyShow Stream.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="my-8">
                    <hr />
                </div>
                <div className="my-8">
                    <h2 className="text-gray-800 font-bold text-2xl mb-4">
                        Cast And Crew
                    </h2>
                    <Slider {...settingsCast}>
                        {cast.map((data) => (
                            <div key={data.id} className="px-2">
                                <Cast image={`https://image.tmdb.org/t/p/original${data.profile_path}`} castName={data.original_name} role={data.character}/>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="my-8">
                    <hr />
                </div>
                <div className="my-8">
                    <PosterSlider 
                        title="Recommended Movies"
                        config={settings}
                        posters={recommended}
                        isDark={false}
                    />
                </div>
            </div>
        </>
    );
};

export default MoviePage;