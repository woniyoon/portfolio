import React from "react";
import "./Navigator.css";

function Navigator() {
    return (
        <ul className="navMenu" >
            <li>
                <a href="#">MAIN</a>
            </li>
            <li>
                <a href="#skills">SKILLS</a>
            </li>
            <li>
                <a href="#works">WORKS</a>
            </li>
            <li>
                <a href="https://woniyoon.github.io/">BLOG</a>
            </li>
        </ul>
    );
}

export default Navigator;