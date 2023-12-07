import './Commnunity.css';
import './CommnunityDetail.css';

import { Route, Routes } from "react-router-dom";

import Notice from "./Notice";
import NoticeDetail from "./NoticeDetail";
import Inquiry from "./Inquiry";
import InquiryDetail from "./InquiryDetail";
import ProductDetail from "../Products/ProductDetail";
import Review from "./Review";
import ReviewDetail from "./ReviewDetail";
import Faq from "./Faq";
import FaqDetail from "./FaqDetail";

export default function Community() {
    return (
        <Routes>
            <Route path="/notice" element={<Notice />} />
            <Route path="/notice/:id" element={<NoticeDetail />} />
            <Route path="/inquiry" element={<Inquiry />} />
            <Route path="/inquiry/:id" element={<InquiryDetail />} />
            <Route path="/products/productdetail/:id" element={<ProductDetail />} />
            <Route path="/review" element={<Review />} />
            <Route path="/review/:id" element={<ReviewDetail />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/faq/:id" element={<FaqDetail />} />
        </Routes >
    )
}