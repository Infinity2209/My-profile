import React from 'react';
import "./profile.css";
import Mypic from "./Utils/My profile.jpeg";
import { useNavigate } from "react-router-dom";
import mail from "./Utils/mail.png";

const Main_profile = () => {
    const Navigate = useNavigate();
    return (
        <div>
            <div className="prop">
                <img src={Mypic} alt="Ananta Nag" className="profile-pic" />
                <p className="detail-1 ">
                    ANANTA NAG
                </p>
                <p className="detail-2">
                    Full-Stack Developer, UI Designer and Software Developer
                </p>
                <ul className="option">
                    <li className="opt" onClick={
                        ()=>{
                            Navigate("/personal")
                        }
                }>Personal Details</li>
                    <li className="opt">Skills And Experinces</li>
                    <li className="opt">Strength And Extra-Curicular Activity</li>
                    <li className="opt">Qualifications</li>
                    <li className="opt">Social Profile</li>
                </ul>
            </div>
            <div>
                <div className="socio ">
                    <p>
                        Hello and welcome to my digital paradise!<br/>I am Anant Nag, an experienced Full-Stack Developer and UI Designer who loves crafting immersive online experiences. My journey in technology has been an exciting odyssey marked by passion, perseverance and a relentless commitment to innovate. As you scroll through my profile you will see a tapestry of projects on my GitHub account, each one a labor of love and a testament to my skills and creativity. From dynamic web applications to beautiful UI designs, I have embraced a variety of challenges to push the boundaries of what is possible.
                    </p>
                    <p>
                        Feel free to explore the repository on my GitHub, where the code covers my technical prowess and skill development. I have had the opportunity to support projects that solve real world problems and enhance the user experience. Each legal process represents a learning opportunity, and each commit marks a step in my quest to keep getting better.
                    </p>
                    <p>
                        Outside of the digital realm, you can find me sharing insights, opinions and updates on Twitter and Instagram. Join me in these spaces, engage in conversation and be part of a vibrant community interested in technology and design.
                    </p>
                    <p>
                        The journey isn’t always easy, but it’s in those challenges that I’ve found the most profound growth. Late nights of coding, successes and lessons learned – all contribute to rich experiences that define my identity as a developer. Awards along the way are not just accolades but a reflection of the dedication and hard work poured into each project.
                    </p>
                    <p>Thank you for starting this journey with me. Whether you’re here to browse my portfolio, explore collaborations, or just share the love you all have for technology, I invite you to connect, get involved, and make the digital journey that it is part of this joy. Let’s push the boundaries together and create something different!
                    </p>
                </div>
            </div>
            <div className="contact">
                <img src={mail} alt="Gmail" className='mail'/>
                <p> anantanag91@gmail.com</p>
            </div>
        </div>
    );
}

export default Main_profile;