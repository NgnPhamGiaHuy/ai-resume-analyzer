import React from "react";
import { Link } from "react-router";

const Navbar = () => {
    return (
        <nav className={"navbar"}>
            <Link to={"/"}>
                <p className={"text-2xl text-gradient font-bold uppercase"}>Resumind</p>
            </Link>
            <Link to={"/upload"} className={"w-fit primary-button"}>
                Upload Resume
            </Link>
        </nav>
    );
};

export default Navbar;
