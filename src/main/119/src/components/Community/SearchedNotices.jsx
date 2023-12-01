import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

// 페이지네이션 컴포넌트
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

function SearchedNotices() {
    const [notice, setNotice] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams("");

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/notice/list', {
                    params: searchParams
                });
                setNotice(response.data);
            } catch (error) {
                alert(`자료가 없습니다.`);
            }
        };
        fetchData();
    }, [searchParams]);

    const searchPeriod = searchParams.get('searchPeriod');
    const searchCriteria = searchParams.get('searchCriteria');
    const searchWord = searchParams.get('searchWord');

    const getSearchResult = (notice) => {
        const today = new Date();
        let periodData = notice;
        let sortedData = [];

        if (!searchWord) {
            return notice;
        }

        switch (searchPeriod) {
            case 'week':
                let aWeekAgo = new Date(today.setDate(today.getDate() - 7));
                periodData = notice.filter((it) => it.regdate >= aWeekAgo);
                break;
            case 'month':
                let aMonthAgo = new Date(today.setMonth(today.getMonth() - 1));
                periodData = notice.filter((it) => it.regdate >= aMonthAgo);
                break;
            case 'firstQuarter':
                let threeMonthAgo = new Date(today.setMonth(today.getMonth() - 3));
                periodData = notice.filter((it) => it.regdate >= threeMonthAgo);
                break;
            default:
                break;
        }

        switch (searchCriteria) {
            case 'subject':
                sortedData = periodData.filter((it) => it.subject && it.subject.includes(searchWord));
                break;
            case 'content':
                sortedData = periodData.filter((it) => it.contents && it.contents.includes(searchWord));
                break;
            case 'writer':
                sortedData = periodData.filter((it) => it.username && it.username.includes(searchWord));
                break;
            default:
                sortedData = periodData;
                break;
        }

        return sortedData;
    };

    const paginatedData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return getSearchResult(notice).slice(startIndex, endIndex);
    };

    return (
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
                
                {/* 페이지네이션된 데이터를 기반으로 매핑 */}
                {paginatedData().map((n) =>
                    <tr key={n.notice_id}>
                        <td><Link to={`/${n.notice_id}`}>{n.notice_title}</Link></td>
                        <td>{n.notice_writer}</td>
                        <td>{n.notice_regdate}</td>
                    </tr>
                )}
            </table>
            {/* 페이지네이션 UI */}
            <Pagination
                totalPages={Math.ceil(getSearchResult(notice).length / itemsPerPage)}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
            />
        </div>
    );
}

export default SearchedNotices;