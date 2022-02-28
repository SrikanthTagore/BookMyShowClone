import React, { useState, useEffect } from "react";
import axios from "axios";

import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import EntertainmentCard from "../components/Entertainment/Entertainment.Component"
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";
const HomePage = () => {
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [premierMovies, setPremierMovies] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

    useEffect(() => {
        const requestPopularMovies = async () => {
            const getRecommended = await axios.get("/movie/popular");
            setRecommendedMovies(getRecommended.data.results);
        }

        requestPopularMovies();
    },[]);

    useEffect(() => {
        const requestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get("/movie/top_rated");
            setPremierMovies(getTopRatedMovies.data.results);
        }

        requestTopRatedMovies();
    },[]);

    useEffect(() => {
        const requestUpcommingMovies = async () => {
            const getUpcommingMovies = await axios.get("/movie/upcoming");
            setOnlineStreamEvents(getUpcommingMovies.data.results);
        }

        requestUpcommingMovies();
    },[]);
    return(
        <>
            <HeroCarousel />
            <PosterSlider 
                title="Recommended Movies"
                subtitle="List of recommended movies"
                posters={recommendedMovies}
                isDark={false}
            />
            <EntertainmentCard />
            <div className="bg-bms-800 py-12">
                <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
                    <div className="hidden md:flex">
                        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-rupay-banner-web-collection-202104230555.png" alt="Rupay" className="w-full h-full"/>
                    </div>
                    <PosterSlider 
                        title="Premiers"
                        subtitle="Brand new releases every Friday"
                        posters={premierMovies}
                        isDark={true}
                    />
                </div>
            </div>
            <PosterSlider 
                title="OnlineStream Events"
                subtitle="List of recommended movies"
                posters={onlineStreamEvents}
                isDark={false}
            />
        </>
    );
};

export default HomePage;