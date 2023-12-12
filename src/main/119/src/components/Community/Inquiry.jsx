import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function Pagination({ totalPages, currentPage, onPageChange }) {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(
            <a
                key={i}
                href="#"
                className={i === currentPage ? 'active' : ''}
                onClick={() => onPageChange(i)}
            >
                {i}
            </a>
        );
    }

    return (
        <div className="pagination">
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>&laquo;</button>
            {pages}
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>&raquo;</button>
        </div>
    );
}

function Inquiry() {
    const [inquiry, setInquiry] = useState([]);
    const [searchPeriod, setSearchPeriod] = useState("all");
    const [searchCriteria, setSearchCriteria] = useState("subject");
    const [searchWord, setSearchWord] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [searchInput, setSearchInput] = useState("");

    const isLoggedIn =
        sessionStorage.getItem("loggedInUser");
    const user = isLoggedIn ? JSON.parse(isLoggedIn) : null;
    const userName = user ? user.user_name : ''; // 유저 이름 변수

    const handleSearch = (e) => {
        e.preventDefault();
        setInquiry([]); // 검색 결과 초기화
        setSearchPeriod(e.target.searchPeriod.value);
        setSearchCriteria(e.target.searchCriteria.value);
        setSearchWord(e.target.searchWord.value); // 검색어 업데이트
    };

    useEffect(() => {
        setCurrentPage(1); // 검색 매개변수가 변경될 때 currentPage를 1로 재설정
        const fetchData = async () => {
            try {
                const response = await axios.get('/inquiry/list', {
                    params: {
                        searchPeriod,
                        searchCriteria,
                        searchWord,
                    }
                });
                setInquiry(response.data);
            } catch (error) {
                alert(`자료가 없습니다.`);
            }
        };
        fetchData();
    }, [searchPeriod, searchCriteria, searchWord, setCurrentPage]);


    function AnswerCheck(inquiry) {
        if (inquiry.answer_content != null) {
            return <td style={{ color: 'blue' }}>답변완료</td>
        } else {
            return <td style={{ color: 'red' }}>확인중</td>
        }
    }

    function AccessWirte() {
        if (userName != '') {
            return (
                <div className="board_write">
                    <Link to="/board/inquiryWrite">글쓰기</Link>
                </div>
            );
        }
    }


    const paginatedData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return inquiry.slice(startIndex, endIndex);
    };

    return (
        <div className="Inquiry">
            <div className="cateTitle">
                <h1>상품문의</h1>
            </div>
            <div className="commnunityList">
                <ul>
                    <li><Link to="/community/notice">공지사항</Link></li>
                    <li><Link to="/community/inquiry">상품문의</Link></li>
                    <li><Link to="/community/review">상품후기</Link></li>
                    <li><Link to="/community/faq">자주묻는질문</Link></li>
                </ul>
            </div>

            <div className="boardList">
                <table>
                    <colgroup>
                        <col className="attr1" />
                        <col className="attr2" />
                        <col className="attr2" />
                        <col className="attr3" />
                        <col className="attr3" />
                    </colgroup>
                    <tr>
                        <th>제목</th>
                        <th>상품명</th>
                        <th>답변여부</th>
                        <th>글쓴이</th>
                        <th>작성일</th>
                    </tr>
                    {/* 데이터 매핑 */}
                    {paginatedData().map((i) =>
                        <tr key={i.inquiry_id}>
                            <td><Link to={`./${i.inquiry_id}`}>{i.inquiry_title}</Link></td>
                            <td>{i.product_name}</td>
                            {AnswerCheck(i)}
                            <td>{i.inquiry_writer}</td>
                            <td>{i.inquiry_regdate}</td>
                        </tr>
                    )}
                </table>
                {/* 페이지네이션 UI */}
                <Pagination
                    totalPages={Math.ceil(inquiry.length / itemsPerPage)}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
                <div name="search" className="search">
                    <form onSubmit={handleSearch}>
                        <div className="searchConditions">
                            <div>
                                <select name="searchPeriod">
                                    <option value="all">전체</option>
                                    <option value="week">일주일</option>
                                    <option value="month">한달</option>
                                    <option value="firstQuarter">세달</option>
                                </select>
                                <select name="searchCriteria">
                                    <option value="subject">제목</option>
                                    <option value="content">내용</option>
                                    <option value="writer">글쓴이</option>
                                </select>
                            </div>
                        </div>
                        <div className="searchInput">
                            <div>
                                <input
                                    className="searchWord"
                                    name="searchWord"
                                    type="text"
                                    value={searchInput}
                                    onChange={(e) => setSearchInput(e.target.value)}
                                />
                                <input type="submit" value="검색" />
                            </div>
                            <AccessWirte />
                        </div>
                    </form>
                </div>


            </div>
        </div>
    );
}

export default Inquiry;
