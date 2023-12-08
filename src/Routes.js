/* eslint-disable react/jsx-pascal-case */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main_profile from "./Main_profile";
import Personal from "./Personal";
import Skill from "./Skil";
import Strength from "./Strength";
import Qualification from "./Qualification";

const RoutesContainer = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main_profile />} />
                <Route path="/personal" element={<Personal />} />
                <Route path="/skill" element={<Skill />} />
                <Route path="/strength" element={<Strength />} />
                <Route path="/qualification" element={<Qualification />} />
            </Routes>
        </Router>
    );
};

export default RoutesContainer;
