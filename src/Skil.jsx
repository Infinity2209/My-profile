import React from "react";
import Left from "./Left";
import "./skill.css";
import react from "./Utils/logo192.png";
import html from "./Utils/html.png";
import CSS from "./Utils/css-3.png";
import JS from "./Utils/javascript.png";
import c from "./Utils/letter-c.png";
import python from "./Utils/python.png";
import java from "./Utils/java.png";
import figma from "./Utils/figma-96.png";

const Skill = () => {
    return (
        <div className="skill-container">
            <Left />
            <div className="ex">
                <div className="coding">
                    <h2>
                        Technical Skills :
                    </h2>
                    <ul className="sk">
                        <li>
                            <img src={react} alt="" className="log" />
                            React Js
                        </li>
                        <li>
                            <img src={html} alt="" className="log" />
                            HTML
                        </li>
                        <li>
                            <img src={CSS} alt="" className="log" />
                            CSS
                        </li>
                        <li>
                            <img src={JS} alt="" className="log" />
                            JavaScript
                        </li>
                        <li>
                            <img src={c} alt="" className="log" />
                            Programming C
                        </li>
                        <li>
                            <img src={python} alt="" className="log" />
                            Python
                        </li>
                        <li>
                            <img src={java} alt="" className="log" />
                            Java
                        </li>
                        <li>
                            <img src={figma} alt="" className="log" />
                            Figma
                        </li>
                    </ul>
                </div>
                <div className="coding">
                    <h2>
                        Experiences :
                    </h2>
                    <ul className="sk2">
                        <li>
                            <div className="name">
                                <h3>
                                    Intelligent AWS Application
                                </h3>
                                <h6>
                                    7-July-2023 
                                </h6>
                            </div>
                            <p className="desc">
                                I interned at the company for four months, contributing as a Full-Stack Developer with a primary focus on UI/UX design and development. During this time, I designed user interfaces for multiple websites, implemented frontend solutions, and played a key role in building the company's website, among other projects.                            </p>
                        </li>
                        {/* <li>
                            <div className="name">
                                <h3>
                                    Intelligent AWS Application
                                </h3>
                                <h6>
                                    7- Nov -2023
                                </h6>
                            </div>
                            <p className="desc">
                                I am working as an Part-Time Employee in this company . I have mainly
                                work on the code implementation, Front-end or UI of the software,
                                Functionality of the websites and on the coding of websites. I use to work
                                on the developmental part of the websites.
                            </p>
                        </li> */}
                    </ul>
                </div>
                <div className="coding">
                    <h2>
                        Projects :
                    </h2>
                    <ul className="sk4">
                        <li>Full-Stack Developer Intern for 4 months</li>
                        <li>Specialized in UI/UX design and development</li>
                        <li>Designed user interfaces for multiple websites</li>
                        <li>Implemented front-end solutions for various projects</li>
                        <li>Completed projects in Data Structures using C</li>
                        <li>Conducted design and analysis of algorithms in C</li>
                        <li>Proficient in Python programming</li>
                        <li>Executed numerous programs in Java</li>
                        <li>Experienced in web development</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skill;