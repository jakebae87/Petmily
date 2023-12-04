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
