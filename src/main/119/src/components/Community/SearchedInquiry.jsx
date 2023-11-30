import React from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Mock Data
import mockData from "../MockData/MockData_Inquiry";

function SearchedInquiry() {

    const [searchParams, setSearchParams] = useSearchParams("");

    const searchPeriod = searchParams.get('searchPeriod');      // 기본값 all
    const searchCriteria = searchParams.get('searchCriteria');  // 기본값 subject
    const searchWord = searchParams.get('searchWord');
    // name이 searchWord인 값을 search에 저장한다. (?searchWord=휴무, search = '휴무')

    const getSearchResult = () => {

        const today = new Date();

        let periodData;
        let sortedData;

        if (searchWord == null) {   // 공지사항 페이지 첫렌더링 때, 전체 게시글 조회
            return mockData;
        }

        switch (searchPeriod) {     // 기간 선택별 데이터 분류
            case 'all':
                periodData = mockData;
                break;

            case 'week':            // 오늘 기준 일주일 이내의 게시글만 조회
                let aWeekAgo = new Date(today.setDate(today.getDate() - 7));
                // console.log('일주일전 : ' + aWeekAgo);
                periodData = mockData.filter((it) => it.createDate >= aWeekAgo);
                break;

            case 'month':
                let aMonthAgo = new Date(today.setMonth(today.getMonth() - 1));
                // console.log('한달전 : ' + aMonthAgo);
                periodData = mockData.filter((it) => it.createDate >= aMonthAgo);
                break;

            case 'firstQuarter':
                let threeMonthAgo = new Date(today.setMonth(today.getMonth() - 3));
                periodData = mockData.filter((it) => it.createDate >= threeMonthAgo);
                break;
        }

        switch (searchCriteria) {
            case 'subject':
                sortedData = periodData.filter((it) => it.subject.includes(searchWord));
                break;

            case 'content':
                sortedData = periodData.filter((it) => it.contents.includes(searchWord));
                break;

            case 'writer':
                sortedData = periodData.filter((it) => it.username.includes(searchWord));
                break;
        }

        return sortedData;
    }

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

                {getSearchResult().map((inquiry) =>
                    <tr>
                        <td><Link to={`${inquiry.id}`}>{inquiry.subject}</Link></td>
                        <td>{inquiry.username}</td>
                        <td>{inquiry.createDate.toLocaleDateString()}</td>
                    </tr>
                )}
            </table>
        </div>
    );
}

export default SearchedInquiry;