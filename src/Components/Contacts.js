import React from "react";
import "./Contacts.css";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

function Contacts(){
    return (
        <section id="contacts" className="contacts">
            <h2>CONTACTS</h2>
            <article className="contactsContainer">
                <a href="mailto:woniyoon@gmail.com"><MailOutlineIcon fontSize="large"/></a>
                <a href="https://www.instagram.com/yoonj1i/"><InstagramIcon fontSize="large" /></a>
                <a href="https://github.com/woniyoon" target="_blank" rel="noopener noreferrer"><GitHubIcon fontSize="large" /></a>
            </article>
            <p>See you again!</p>
        </section>
    );
}

export default Contacts;