import React from "react";
import { Link, useParams } from "react-router-dom";

import mockData from "../MockData/MockData_Faq";

export default function DetailDetail() {

    const { id } = useParams();
    const faq = mockData.find((item) => item.id === parseInt(id));

    const contents = faq.contents.split('\n').map((it) => <p>{it}</p>);

    return (
        <div className="DetailDetail">
            <div class="cateTitle">
                <h1>자주묻는질문</h1>
            </div>

            <div class="boardPackage">
                <table>
                    <tr>
                        <th scope="row">제목</th>
                        <td>[{faq.type}] {faq.subject}</td>
                    </tr>
                    <tr>
                        <th scope="row">작성자</th>
                        <td><span>{faq.username}</span></td>
                    </tr>
                    <tr>
                        <th scope="row">작성일</th>
                        <td><span>{faq.createDate.toLocaleDateString()}</span></td>
                        <th scope="row">조회수</th>
                        <td><span>{faq.hit}</span></td>
                    </tr>
                    <tr>
                        <td class="contents">
                            {contents}
                        </td>
                    </tr>
                </table>
                <div id="bottomBoard">
                    <Link to="/community/Faq"><input type="button" value="목록" /></Link>
                </div>
            </div>
        </div>
    )
}
