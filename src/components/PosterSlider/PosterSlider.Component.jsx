import React from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../HeroCarousel/Arrows.Component";
import Poster from "../Poster/Poster.Component";
const PosterSlider = (props) => {
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

      const {posters,title,subtitle,isDark, config} = props;

      const currentSettings = config ? config : settings
    return(
        <>
            <div className="container mx-auto mt-10">
                <h3 className={`text-2xl font-bold my-2 ${isDark ?"text-white":"text-black"}`}>{title}</h3>
                <p className={`text-sm my-2 ${isDark ? "text-white":"text-gray-800"}`}>{subtitle}</p>
                <Slider {...currentSettings}>
                    {posters.map((each,id) => (
                        <Poster {...each} key={id} isDark={isDark}/>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default PosterSlider;