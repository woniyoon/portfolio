import React from "react";

function Footer (){
    return (
        <footer style={{backgroundColor: "grey", 
                        color: "white", 
                        height: "80px", 
                        display: "flex", 
                        justifyContent: "center", 
                        alignItems: "center"}}>
            &copy; Copyright 2020, Jaewon Yoon 
        </footer> 
    );
}

export default Footer;