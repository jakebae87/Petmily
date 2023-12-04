<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

export default function InquiryDetail() {

    const { id } = useParams();
    const [inquiry, setInquiry] = useState({
        inquiry_title: '',
        inquiry_writer: '',
        product_id: '',
        inquiry_regdate: '',
        inquiry_count: '',
        inquiry_content: '',
        answer_content: '',
        answer_regdate: ''
    });

    useEffect(() => {
        axios
            .get('/inquiryDetail/' + id)
            .then((response) => {
                setInquiry(response.data);
            })
            .catch((error) => {
                alert(`선택한 데이터가 없습니다.`);
            });
    }, []);

    const contents = inquiry.inquiry_content.split('\n').map((it) => <p>{it}</p>);

    function Answer() {
        if (inquiry.answer_content != null) {
            return (
                <table>
                    <tr>
                        <th scope="row">답변 작성일</th>
                        <td>{inquiry.answer_regdate}</td>
                    </tr>
                    <tr>
                        <th scope="row">답변 내용</th>
                        <td><span>{inquiry.answer_content}</span></td>
                    </tr>
                </table>
            );
        }
    }

=======
import React from "react";
import { Link, useParams } from "react-router-dom";

import mockData from "../MockData/MockData_Inquiry";

export default function InquiryDetail() {

    const { id } = useParams();
    const inquiry = mockData.find((item) => item.id === parseInt(id));

    const contents = inquiry.contents.split('\n').map((it) => <p>{it}</p>);
>>>>>>> 51a11fd129897a089fbfb01d894228caf502a48a

    return (
        <div className="InquiryDetail">
            <div class="cateTitle">
                <h1>상품문의</h1>
            </div>

            <div class="boardPackage">
                <table>
                    <tr>
                        <th scope="row">제목</th>
<<<<<<< HEAD
                        <td>{inquiry.inquiry_title}</td>
                    </tr>
                    <tr>
                        <th scope="row">작성자</th>
                        <td><span>{inquiry.inquiry_writer}</span></td>
                    </tr>
                    <tr>
                        <th scope="row">작성일</th>
                        <td><span>{inquiry.inquiry_regdate}</span></td>
                        <th scope="row">조회수</th>
                        <td><span>{inquiry.inquiry_count}</span></td>
=======
                        <td>{inquiry.subject}</td>
                    </tr>
                    <tr>
                        <th scope="row">작성자</th>
                        <td><span>{inquiry.username}</span></td>
                    </tr>
                    <tr>
                        <th scope="row">작성일</th>
                        <td><span>{inquiry.createDate.toLocaleDateString()}</span></td>
                        <th scope="row">조회수</th>
                        <td><span>{inquiry.hit}</span></td>
>>>>>>> 51a11fd129897a089fbfb01d894228caf502a48a
                    </tr>
                    <tr>
                        <th scope="row">상품명</th>
                        <td>
<<<<<<< HEAD
                            <Link to={`/productdetail/${inquiry.product_id}`}>product에서 받아온 상품명</Link>
=======
                            <Link to={`/productdetail/${inquiry.id}`}>{inquiry.productName}</Link>
>>>>>>> 51a11fd129897a089fbfb01d894228caf502a48a
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="contents">
                                {contents}
                            </div>

                        </td>
                    </tr>
<<<<<<< HEAD
                    
                </table><br /><br />
                <Answer/>
=======
                </table>
>>>>>>> 51a11fd129897a089fbfb01d894228caf502a48a
                <div id="bottomBoard">
                    <Link to="/community/inquiry"><input type="button" value="목록" /></Link>
                </div>
            </div>
        </div>
    )
}
