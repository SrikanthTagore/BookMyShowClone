import React from "react";
import Navbar from "../components/Navbar/Navbar.Component";


const DefaultLayout = (props) => {
    return(
        <>
            <Navbar />
            {props.children}
            <div>Footer</div>
        </>
    );
};

export default DefaultLayout;