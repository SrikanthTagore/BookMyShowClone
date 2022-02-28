import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import axios from "axios";

import {NextArrow, PrevArrow} from "./Arrows.Component";

const HeroCarousel = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const requestNowPlayingMovies = async () => {
             const getImages = await axios.get("/movie/now_playing");
             setImages(getImages.data.results);
        }
        requestNowPlayingMovies();
    },[]);

    const settingsLG = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        centerPadding: '200px', 
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />  
    };
    return(
        <>
            <div className="lg:hidden">
                <Slider {...settings}>
                    {images.map((img,id) => (
                        <div className="w-full h-56 md:h-80 py-3" key={id}>
                            <img src={`https://image.tmdb.org/t/p/original${img.backdrop_path}`} alt="HeroBanner" className="w-full h-full rounded-md"/>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="hidden lg:block">
                <Slider {...settingsLG}>
                    {images.map((img,id) => (
                        <div className="w-full h-96 px-2 py-3" key={id}>
                            <img src={`https://image.tmdb.org/t/p/original${img.backdrop_path}`} alt="HeroBanner" className="w-full h-96 rounded-md object-center"/>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default HeroCarousel;