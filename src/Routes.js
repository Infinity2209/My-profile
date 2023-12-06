/* eslint-disable react/jsx-pascal-case */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main_profile from "./Main_profile";
import Personal from "./Personal";

const RoutesContainer = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main_profile />} />
                <Route path="/personal" element={<Personal />} />
            </Routes>
        </Router>
    );
};

export default RoutesContainer;
