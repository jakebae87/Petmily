import "./Policy.css";
import { Route, Routes } from "react-router-dom";

import ToS from "./ToS";
import Privacy from "./Privacy";
import Guide from "./Guide";
import Refund from "./Refund";

function Policy() {
    return (
        <Routes>
            <Route path="/tos" element={<ToS />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/refund" element={<Refund />} />
        </Routes>
    );
}

export default Policy;