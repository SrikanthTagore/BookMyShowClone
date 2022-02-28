import React, {useContext} from "react";
import { BiMenu, BiSearch} from "react-icons/bi";
import { BsShare, BsChevronLeft } from "react-icons/bs";
import { RiArrowDropDownFill } from "react-icons/ri"

// context
import { MovieContext } from "../../context/Movie.Context";

const NavSm = () => {
    
    const {movie} = useContext(MovieContext);
    return(
        <>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <span>
                        <BsChevronLeft className="w-full h-full"/>
                    </span>
                    <h3 className="text-xl text-black font-bold">{movie.original_title}</h3>
                </div>
                <div className="items-center">
                    <BsShare />
                </div>
            </div>
        </>
    );
};
const NavLg = () => {
    return(
        <>
            <div className="container flex mx-auto px-4 items-center justify-between">
                <div className="flex items-center w-1/2 gap-5">
                    <div className="w-20 h-10">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1POx70rAnULC-sZC_UbH4LXhy9jsr2MmuJzSmmlMIMD7yCK3" 
                            alt="logo" 
                            className="w-full h-full "
                        />
                    </div>
                    <div className="w-full flex items-center gap-3 px-3 py-1 rounded-md bg-white">
                        <BiSearch />
                        <input type="search" className="w-full bg-transparent border-none focus:outline-none" placeholder="Search for Movies,Events,Plays,Sports and Activities"/>
                    </div>
                </div>
                <div className="flex items-center gap-10"> 
                    <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
                        Hyderabad <RiArrowDropDownFill className="w-full h-full"/>
                    </span>
                    <button className="bg-red-600 text-white px-2 py-1 cursor-pointer text-sm rounded">
                        Sign In
                    </button>
                    <div className="w-8 h-8 text-white">
                        <BiMenu className="w-full h-full"/>
                    </div>
                </div>
            </div>
        </>
    );
};
const MovieNavbar = () => {
    return(
        <>
            <nav className="lg:bg-bms-700 p-4">
                <div className="lg:hidden">
                    {/* Mobile Screen */}
                    <NavSm />
                </div>
                <div className="hidden lg:flex w-full">
                    {/* Large Screen */}
                    <NavLg />
                </div>
            </nav>
        </>
    );
};

export default MovieNavbar;