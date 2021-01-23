import React from "react";
import "./Skills.css";
import { css, html, javascript, java, github, spring, react, oracle, vue } from "../images/index";

function Skills(){

    

    return (
        <section id="skills" className="skillsSection">
            <h1>SKILLS</h1>
            <div className="iconContainer" align="center">
                {iconArr.map((item, index)=>{
                    const indicatorStyle = { 
                        width: item.level * 10 + "%", 
                        backgroundColor: "rgb(64 64 64)", 
                        height: "10px", 
                        margin: "3px", 
                        borderRadius: "3px"
                    };
                    
                    return (
                        <div className="skillDetail" align="center" key={index}>
                            <img className="skillIcon" src={item.src} alt="skill icons"/>
                            <div className="levelIndicator">
                                <div className="levelBar" style={indicatorStyle}></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

const iconArr = [
    {
        src: css,
        level: 8,
    }, 
    {
        src: html,
        level: 8,
    },
    {
        src: javascript,
        level: 7,
    },
    {
        src: java,
        level: 7,
    },
    {
        src: spring,
        level: 6,
    },
    {
        src: react,
        level: 6,
    },
    {
        src: oracle,
        level: 7,
    },
    {
        src: github,
        level: 8,
    },
    {
        src: vue,
        level: 7,
    }
];


export default Skills;