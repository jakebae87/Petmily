import React from "react";
import { Link, useParams } from "react-router-dom";

import mockData from "../MockData/MockData_Inquiry";

export default function InquiryDetail() {

    const { id } = useParams();
    const inquiry = mockData.find((item) => item.id === parseInt(id));

    const contents = inquiry.contents.split('\n').map((it) => <p>{it}</p>);

    return (
        <div className="InquiryDetail">
            <div class="cateTitle">
                <h1>상품문의</h1>
            </div>

            <div class="boardPackage">
                <table>
                    <tr>
                        <th scope="row">제목</th>
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
                    </tr>
                    <tr>
                        <th scope="row">상품명</th>
                        <td>
                            <Link to={`/productdetail/${inquiry.id}`}>{inquiry.productName}</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="contents">
                                {contents}
                            </div>

                        </td>
                    </tr>
                </table>
                <div id="bottomBoard">
                    <Link to="/community/inquiry"><input type="button" value="목록" /></Link>
                </div>
            </div>
        </div>
    )
}
