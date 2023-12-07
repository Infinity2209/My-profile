import React from "react";
import Left from "./Left";
import "./skill.css";

const Strength = () => {
    return (
        <div className="skill-container">
        <Left />
        <div className="ex">
            <div className="coding">
                <h2>
                    Extra-curicular Activity :
                </h2>
                <ul className="sk">
                    <li>Member of Literary Club.</li>
                    <li>Member of Nukkad Club (Sakhyam).</li>
                    <li>Member of Robotics Club.</li>
                    <li>Members of Coding Club (Codebreakers).</li>
                </ul>
            </div>
        </div>
        </div>
    );
}

export default Strength;