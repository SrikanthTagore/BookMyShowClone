import React, { useState, useContext } from "react";
import MovieInfo from "./MovieInfo.Component";
import PaymentModal from "../PaymentModal/Payment.Component";

//context
import { MovieContext } from "../../context/Movie.Context";

const MovieHero = () => {

    const {movie} = useContext(MovieContext);

    const genres = movie.genres?.map(({name}) => name).join(", ");

    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);

    const rentMovies = () => {
        setIsOpen(true);
        setPrice(149);
    }

    const buyMovies = () => {
        setIsOpen(true);
        setPrice(599);
    }
    return(
        <>
        <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price}/>
           <div>
                {/* mobile */}
                <div className="lg:hidden w-full">
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="Cover Poster" className="m-4 rounded h-96 object-cover" style={{width: "calc(100% - 2rem)"}}/>
                </div>
                <div className="flex flex-col gap-3 lg:hidden">
                    <div className="flex flex-col-reverse gap-3 px-4 my-3">
                        <div className="text-black flex flex-col gap-2 md:px-4">
                            <h4>75.3k ratings</h4>
                            <h4>4k &bull; {movie.original_language}</h4>
                            <h4>{(movie.runtime/60).toFixed(2)}hr &bull; {genres} &bull; 13+</h4>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
                        <button onClick={rentMovies} className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                            Rent ₹149
                        </button>
                        <button onClick={buyMovies} className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                            Buy ₹599
                        </button>
                    </div>
                </div>

                   {/* Large Screen */}
                <div className="relative hidden w-full lg:block" style={{height: '30rem'}}>
                    <div className="absolute z-10 w-full h-full" style={{backgroundImage:"linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)"}}>

                    </div>
                    <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
                        <div className="w-64 h-96">
                            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="movie poster" className="w-full h-full rounded-xl"/>
                        </div>
                        <div>
                            <MovieInfo movie={movie} genres={genres}/>
                        </div>
                    </div>
                    <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="Movie Poster" className="w-full h-full"/>
                </div>
           </div>
        </>
    );
};

export default MovieHero;