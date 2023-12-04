<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

export default function NoticeDetail() {

    const { id } = useParams();    
    const [notice, setNotice] = useState({
        notice_title: '',
        notice_writer: '',
        notice_regdate: '',
        notice_count: '',
        notice_content: ''
    });

    useEffect(() => {
        axios
            .get('/noticeDetail/'+id)
            .then((response) => {
                setNotice(response.data);
            })
            .catch((error) => {
                alert(`선택한 데이터가 없습니다.`);
            });
    }, []);

    const contents = notice.notice_content.split('\n').map((it) => <p>{it}</p>);
=======
import React from "react";
import { Link, useParams } from "react-router-dom";

import mockData from "../MockData/MockData_Notice";

export default function NoticeDetail() {

    const { id } = useParams();    
    const notice = mockData.find((item) => item.id === parseInt(id));
    // raw데이터 (mockData)에서 id의 값이 위 전달받은 id 값과 동일한 배열의 값을 notice에 저장한다.

    const contents = notice.contents.split('\n').map((it) => <p>{it}</p>);
>>>>>>> 51a11fd129897a089fbfb01d894228caf502a48a
    // 위 선택된 데이터의 contents(게시글 내용)을 \n 기준으로 잘라서 배열구조로 저장하고 p 태그에 씌워 conents라는 변수에 저장한다.

    return (
        <div className="NoticeDetail">
            <div className="cateTitle">
                <h1>공지사항</h1>
            </div>

            <div className="boardPackage">
                <table>
                    <tr>
                        <th scope="row">제목</th>
<<<<<<< HEAD
                        <td>{notice.notice_title}</td>
                    </tr>
                    <tr>
                        <th scope="row">작성자</th>
                        <td><span>{notice.notice_writer}</span></td>
                    </tr>
                    <tr>
                        <th scope="row">작성일</th>
                        <td><span>{notice.notice_regdate}</span></td>
                        <th scope="row">조회수</th>
                        <td><span>{notice.notice_count}</span></td>
=======
                        <td>{notice.subject}</td>
                    </tr>
                    <tr>
                        <th scope="row">작성자</th>
                        <td><span>{notice.username}</span></td>
                    </tr>
                    <tr>
                        <th scope="row">작성일</th>
                        <td><span>{notice.createDate.toLocaleDateString()}</span></td>
                        <th scope="row">조회수</th>
                        <td><span>{notice.hit}</span></td>
>>>>>>> 51a11fd129897a089fbfb01d894228caf502a48a
                    </tr>
                    <tr>
                        <td className="contents">
                            {contents}
                        </td>
                    </tr>
                </table>
                <div id="bottomBoard">
                    <Link to="/community/notice"><input type="button" value="목록" /></Link>
                </div>
            </div>
        </div>
    )
}
