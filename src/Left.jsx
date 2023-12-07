// LeftBanner.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './left.css';
import homeIcon from './Utils/home.png';
import userIcon from './Utils/user.png';
import skillIcon from './Utils/skill.png';
import extraIcon from './Utils/extra-curicular.png';
import socialIcon from './Utils/social.png';
import profilePic from './Utils/My profile.jpeg';

const LeftBanner = () => {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <div className="left-banner">
            <img src={profilePic} alt="Ananta Nag" className="left-pic" />
            <ul className="iconopt">
                <li onClick={() => navigateTo('/')}>
                    <img src={homeIcon} alt="" className="icon" />
                </li>
                <li onClick={() => navigateTo('/personal')}>
                    <img src={userIcon} alt="" className="icon" />
                </li>
                <li onClick={() => navigateTo('/skill')}>
                    <img src={skillIcon} alt="" className="icon" />
                </li>
                <li onClick={() => navigateTo('/extra-curricular')}>
                    <img src={extraIcon} alt="" className="icon" />
                </li>
                <li onClick={() => navigateTo('/social')}>
                    <img src={socialIcon} alt="" className="icon" />
                </li>
            </ul>
        </div>
    );
};

export default LeftBanner;
