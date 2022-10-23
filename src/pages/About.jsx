import React from "react";
import { ImGithub, ImLinkedin, ImMail } from "react-icons/im";

const About = () => {
    return (
        <div className="About">
            <h1>Hello My Name Is Andy Hua</h1>
            <p className="intro">
                I am currently a student at Clarusway, and I am studying React.<br></br> This is a
                recipe app created using what we've learned so far!
            </p>
            <div className="info">
                <div>
                    <ImGithub size={40}></ImGithub>
                    <a href="https://github.com/ahua1994">ahua1994</a>
                </div>
                <div>
                    <ImLinkedin size={40}></ImLinkedin>
                    <a href="https://www.linkedin.com/in/andy-hua-125431168/">Andy Hua</a>
                </div>
                <div className="email">
                    <ImMail size={40}></ImMail>
                    <p>user.andy.hua@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default About;
