import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

export default function DetailDetail() {

    const { id } = useParams();
    const [faq, setFaq] = useState({
        faq_title: '',
        faq_writer: '',
        faq_regdate: '',
        faq_count: '',
        faq_content: ''
    });

    useEffect(() => {
        axios
            .get('/faqDetail/' + id)
            .then((response) => {
                setFaq(response.data);
            })
            .catch((error) => {
                alert(`선택한 데이터가 없습니다.`);
            });
    }, []);

    const contents = faq.faq_content.split('\n').map((it) => <p>{it}</p>);

    return (
        <div className="DetailDetail">
            <div class="cateTitle">
                <h1>자주묻는질문</h1>
            </div>

            <div class="boardPackage">
                <table>
                    <tr>
                        <th scope="row">제목</th>
                        <td>[{faq.question_type}] {faq.faq_title}</td>
                    </tr>
                    <tr>
                        <th scope="row">작성자</th>
                        <td><span>{faq.faq_writer}</span></td>
                    </tr>
                    <tr>
                        <th scope="row">작성일</th>
                        <td><span>{faq.faq_regdate}</span></td>
                        <th scope="row">조회수</th>
                        <td><span>{faq.faq_count}</span></td>
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
