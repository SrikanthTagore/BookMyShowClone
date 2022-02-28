import React, { useState } from "react";
import PaymentModal from "../PaymentModal/Payment.Component";

const MovieInfo = ({movie, genres}) => {

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
            <div className="flex flex-col gap-8">
                <h1 className="text-white text-5xl font-bold">{movie.original_title}</h1>
                <div className="flex flex-col gap-5">
                    <h4 className="text-white">75.3k ratings</h4>
                    <h4 className="text-white">4k &bull; {movie.original_language}</h4>
                    <h4 className="text-white">{(movie.runtime/60).toFixed(2)}hr &bull; {genres} &bull; 13+</h4>
                </div>
                <div className="flex items-center gap-3 w-full">
                    <button onClick={rentMovies} className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                        Rent ₹149
                    </button>
                    <button onClick={buyMovies} className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                         Buy ₹599
                    </button>
                </div>
            </div>
        </>
    );
};

export default MovieInfo;