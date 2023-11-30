import './Board.css';
import { Route, Routes } from "react-router-dom";

import ReviewWrite from './ReviewWrite';
import InquiryWrite from './InquiryWrite';

export default function Board() {
    return (
        <Routes>
            <Route path='/review' element={<ReviewWrite />} />
            <Route path='/inquiry' element={<InquiryWrite />} />
        </Routes >
    )
}