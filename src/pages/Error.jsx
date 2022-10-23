import React from "react";
import { Link } from "react-router-dom";
import "./pages.scss";

const Error = () => {
    return (
        <>
            <h1 className="Error">You've Gone Down The Wrong Path</h1>
            <Link to="/">
                <img
                    src="https://www.wallquotes.com/sites/default/files/styles/uc_product_full/public/home0084_01.jpg?itok=gPhMUy3H"
                    alt="Take Me Back Home!"
                ></img>
            </Link>
        </>
    );
};

export default Error;
