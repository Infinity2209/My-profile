import React from "react";
import Left from "./Left";
import "./skill.css";

const Strength = () => {
    return (
        <div className="skill-container h-screen">
            <Left />
            <div className="ex">
                <div className="coding">
                    <h2>
                        Strength :
                    </h2>
                    <ul className="sk3">
                        <li>The ability to Work in a team.</li>
                        <li>Leadership Qualities.</li>
                        <li>Hard-working with lots of patience.</li>
                        <li>Organizing Capabilities.</li>
                        <li>Positive Attitude.</li>
                        <li>Quick Learner.</li>
                        <li>Self-Confidence.</li>
                    </ul>
                </div>
                <div className="coding">
                    <h2>
                        Extra-curicular Activity :
                    </h2>
                    <ul className="sk3">
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