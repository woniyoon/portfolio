import React from "react";
import { Link } from "react-router-dom";
import "./Navigator.css";

function Navigator() {
    return (
        <ul className="navMenu" >
            <li>
                <Link to="/">MAIN</Link>
            </li>
            <li>
                <Link to="/works">WORKS</Link>
            </li>
            <li>
                <a href="https://woniyoon.github.io/">BLOG</a>
            </li>
        </ul>
    );
}

export default Navigator;