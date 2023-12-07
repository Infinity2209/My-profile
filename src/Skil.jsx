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

const Skill = () => {
    return (
        <div className="skill-container">
            <Left />
            <div className="ex">
                <div className="coding">
                    <h2>
                        Coding Skills :
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
                        <li></li>
                    </ul>
                </div>
                <div className="coding">

                </div>
                <div className="coding">

                </div>
            </div>
        </div>
    );
}

export default Skill;