import './Board.css';
import { Route, Routes } from "react-router-dom";

import ReviewWrite from './ReviewWrite';
import InquiryWrite from './InquiryWrite';
import InquiryUpdate from './InquiryUpdate';

export default function Board() {
    return (
        <Routes>
            <Route path='/reviewWrite' element={<ReviewWrite />} />
            <Route path='/inquiryWrite' element={<InquiryWrite />} />
            <Route path='/inquiryUpdate/:id' element={<InquiryUpdate />} />
        </Routes >
    )
}