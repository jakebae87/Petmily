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


function Faq() {
    const [faq, setFaq] = useState([]);
    const [searchPeriod, setSearchPeriod] = useState("all");
    const [searchCriteria, setSearchCriteria] = useState("subject");
    const [searchWord, setSearchWord] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [searchInput, setSearchInput] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        setFaq([]); // 검색 결과 초기화
        setSearchPeriod(e.target.searchPeriod.value);
        setSearchCriteria(e.target.searchCriteria.value);
        setSearchWord(e.target.searchWord.value); // 검색어 업데이트
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/faq/list', {
                    params: {
                        searchPeriod,
                        searchCriteria,
                        searchWord,
                    }
                });
                setFaq(response.data);
            } catch (error) {
                alert(`자료가 없습니다.`);
            }
        };
        fetchData();
    }, [searchPeriod, searchCriteria, searchWord]);

    const paginatedData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return faq.slice(startIndex, endIndex);
    };

    return (

        <div className="Faq">
            <div className="cateTitle">
                <h1>자주묻는질문</h1>
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
                        <col className="attr3" />
                    </colgroup>
                    <tr>
                        <th>제목</th>
                        <th>글쓴이</th>
                        <th>작성일</th>
                    </tr>
                    {/* 데이터 매핑 */}
                    {paginatedData().map((f) =>
                        <tr key={f.faq_id}>
                            <td><Link to={`./${f.faq_id}`}>{f.faq_title}</Link></td>
                            <td>{f.faq_writer}</td>
                            <td>{f.faq_regdate}</td>
                        </tr>
                    )}
                </table>
                {/* 페이지네이션 UI */}
                <Pagination
                    totalPages={Math.ceil(faq.length / itemsPerPage)}
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
                        </div>
                    </form>
                </div>


            </div>
        </div>
    );
}

export default Faq;