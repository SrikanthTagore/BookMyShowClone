import React, { useEffect, useContext} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MovieNavbar from "../components/Navbar/MovieNavbar.Component";
import { MovieContext } from "../context/Movie.Context";

const MovieLayout = (props) => {

    const { id } = useParams();
    const {movie, setMovie} = useContext(MovieContext);

    useEffect(() => {
        const requestMovie = async () => {
            const getMovieData = await axios.get(`/movie/${id}`);
            setMovie(getMovieData.data);
        }

        requestMovie();
    },[id]);

    return(
        <>
            <MovieNavbar movie={movie}/>
            {props.children}
            <div>Footer</div>
        </>
    );
};

export default MovieLayout;