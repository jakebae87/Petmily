import React from "react";
import { Link, useParams } from "react-router-dom";

import mockData from "../MockData/MockData_Notice";

export default function NoticeDetail() {

    const { id } = useParams();    
    const notice = mockData.find((item) => item.id === parseInt(id));
    // raw데이터 (mockData)에서 id의 값이 위 전달받은 id 값과 동일한 배열의 값을 notice에 저장한다.

    const contents = notice.contents.split('\n').map((it) => <p>{it}</p>);
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
