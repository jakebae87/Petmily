import './Board.css';
import { Route, Routes } from "react-router-dom";

import ReviewWrite from './ReviewWrite';
import ReviewWrite2 from './ReviewWrite2';
import InquiryWrite from './InquiryWrite';
import InquiryWrite2 from './InquiryWrite2';
import InquiryUpdate from './InquiryUpdate';
import ReviewUpdate from './ReviewUpdate';

export default function Board() {
    return (
        <Routes>
            <Route path='/reviewWrite' element={<ReviewWrite />} />
            <Route path='/reviewWrite2/:id/:key' element={<ReviewWrite2 />} />
            <Route path='/inquiryWrite' element={<InquiryWrite />} />
            <Route path='/inquiryWrite2/:id' element={<InquiryWrite2 />} />
            <Route path='/inquiryUpdate/:id' element={<InquiryUpdate />} />
            <Route path='/reviewUpdate/:id' element={<ReviewUpdate />} />
        </Routes >
    )
}