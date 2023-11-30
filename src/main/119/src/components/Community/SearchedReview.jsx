import React from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Star from "../Community/Star";

// Mock Data
import mockData from "../MockData/MockData_Review";

function SearchedReview() {

    const [searchParams, setSearchParams] = useSearchParams("");

    const searchSelections = searchParams.get('searchSelections');
    const searchCriteria = searchParams.get('searchCriteria');
    const searchWord = searchParams.get('searchWord');

    const getSearchResult = () => {

        const today = new Date();

        let selectedData;
        let sortedData;

        if (searchWord == null) {   // 공지사항 페이지 첫렌더링 때, 전체 게시글 조회
            return mockData;
        }

        switch (searchSelections) {
            case 'newest':
                selectedData = mockData;
                break;

            case 'starRating':
                let aWeekAgo = new Date(today.setDate(today.getDate() - 7));
                selectedData = mockData.filter((it) => it.createDate >= aWeekAgo);
                break;

            case 'recommendation':
                let aMonthAgo = new Date(today.setMonth(today.getMonth() - 1));
                selectedData = mockData.filter((it) => it.createDate >= aMonthAgo);
                break;
        }

        switch (searchCriteria) {
            case 'subject':
                sortedData = selectedData.filter((it) => it.subject.includes(searchWord));
                break;

            case 'content':
                sortedData = selectedData.filter((it) => it.contents.includes(searchWord));
                break;

            case 'writer':
                sortedData = selectedData.filter((it) => it.username.includes(searchWord));
                break;
        }

        return sortedData;
    }

    return (

        getSearchResult().map((review) =>
            <tr>
                <td>
                    <div className="titleBox">
                        <ul>
                            <li>
                                <Link to={`${review.id}`}><img src={review.image} alt={review.productName} /></Link>
                            </li>
                            <li>
                                <strong>
                                    <p id="productName" name="productName">{review.productName}</p>
                                </strong>
                                <div>
                                    <Link to={`${review.id}`}>{review.subject}</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </td>
                <td>
                    <Star star={review.star} />
                </td>
                <td>{review.username}</td>
                <td>{review.createDate.toLocaleDateString()}</td>
            </tr>
        )

    );
}

export default SearchedReview;