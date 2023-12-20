import React from 'react';
import Left from "./Left";
import profile from "./Utils/My profile.jpeg";
import "./personal.css";

const Personal = () => {
    return (
        <div className="left-container">
            <Left />
            <form className="box ">
                <div className="prop p-10">
                    <img src={profile} alt="Ananta Nag" className="sm-profile" />
                </div>
                <div className="form pt-10">
                    <span className="line">
                        <p className="title">Name  : </p>
                        <p className="para">Ananta Nag</p>
                    </span>
                    <span className="line">
                        <p className="title">Date of Birth  : </p>
                        <p className="para">22 septs. 2002</p>
                    </span>
                    <span className="line">
                        <p className="title">Father’s Name  : </p>
                        <p className="para">Pratap Nag</p>
                    </span>
                    <span className="line">
                        <p className="title">Mother’s Name  :  </p>
                        <p className="para">Lalita Nag</p>
                    </span>
                    <span className="line">
                        <p className="title">Gender  : </p>
                        <p className="para">Male</p>
                    </span>
                    <span className="line">
                        <p className="title">Marital Status  : </p>
                        <p className="para">Single</p>
                    </span>
                    <span className="line">
                        <p className="title">Nationality  : </p>
                        <p className="para">Indian</p>
                    </span>
                    <span className="line">
                        <p className="title">Religion  : </p>
                        <p className="para"> Hindu</p>
                    </span>
                    <span className="line">
                        <p className="title">Language Known  : </p>
                        <p className="para">Hindi, Odia, English</p>
                    </span>
                </div>
            </form>
        </div>
    );
}

export default Personal;