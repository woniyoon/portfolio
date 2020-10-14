import React from "react";
import "./Navigator.css";

function Navigator({ i18n }) {
    return (
        <ul className="navMenu" >
            <li>
                <a href="#about">MAIN</a>
            </li>
            <li>
                <a href="#skills">SKILLS</a>
            </li>
            <li>
                <a href="#works">WORKS</a>
            </li>
            {/* <li>
                <a href="https://woniyoon.github.io/">BLOG</a>
            </li> */}
            <li>
                <a href="#contacts">CONTACTS</a>
            </li>
            <li>
                <span className="langOption" onClick={() => {i18n.changeLanguage('en-US')}}>ENG </span> /
                <span className="langOption" onClick={() => {i18n.changeLanguage('ko-KR')}}> KOR</span>
            </li>
        </ul>
    );
}

export default Navigator;