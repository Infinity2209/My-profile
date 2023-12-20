import React from "react";
import Left from "./Left";
import "./skill.css";

const Qualification = () => {
    return (
        <div className="skill-container h-screen">
            <Left />
            <div className="ex">
                <div className="coding pt-[5%]">
                    <h2>
                        Qualifications :
                    </h2>
                    <ul className="pt-[3%]">
                        <li>
                            <div className="name">
                                <h3>
                                    Government College of Engineering, Kalahandi,Bhawanipatna
                                </h3>
                                <h6>
                                    2022-2025
                                </h6>
                            </div>
                            <p className="desc">
                                Branch: Computer Science and Engineering <br />
                                Course: B. Tech <br />
                                Score: Pursuing
                            </p>
                        </li>
                        <li>
                            <div className="name">
                                <h3>
                                    Oriental Public School, Malamunda, Bolangir
                                </h3>
                                <h6>
                                    2018-2020
                                </h6>
                            </div>
                            <p className="desc">
                                Stream: Science <br />
                                Course: Higher Secondary Education <br />
                                Score: 82.6%
                            </p>
                        </li>
                        <li>
                            <div className="name">
                                <h3>
                                    Little Angels Public School, Barpali, Bargarh
                                </h3>
                                <h6>
                                    2018
                                </h6>
                            </div>
                            <p className="desc">
                                Course: High School <br />
                                Score: 87%
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Qualification;