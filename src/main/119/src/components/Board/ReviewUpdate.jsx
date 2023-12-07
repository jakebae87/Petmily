import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Star from "./Star";

export default function ReviewUpdate() {
    const { id } = useParams();
    const [clickedStars, setClickedStars] = useState(0);
    const [searchResult, setSearchResult] = useState([]); // 검색한 값이 db에 있으면 searchResult에 저장한다.
    const [selectedValue, setSelectedValue] = useState('');
    const [review, setReview] = useState({
        review_title: '',
        product_id: '',
        review_point: 0,
        review_content: ''
    });

    // 상품후기의 별점 수 받기 시작
    const [score, setScore] = useState(0);
    const onChangeScore = (data) => {
        setClickedStars(data);
    }
    // 상품후기의 별점 수 받기 끝

    const navigate = useNavigate();

    const reviewUpdate = async () => {
        try {
            await axios.post(`/review/updateBoard/`, {
                review_id: id,
                review_title: review.review_title,
                product_id: selectedValue || review.product_id,
                review_content: review.review_content,
                review_point: clickedStars
            });
            alert(`상품후기 수정이 완료되었습니다.`);
            navigate(`/community/review/${id}`);
        } catch (error) {
            console.error('상품후기 수정 에러:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/reviewDetail/${id}`);
                setReview(response.data);
            } catch (error) {
                console.error('상품후기 데이터를 불러오는 중 에러:', error);
            }
        };
        fetchData(); // 컴포넌트가 마운트되거나 id 값이 변경될 때마다 호출
    }, [id]);
    

    const fetchData = async () => {
        const searchInput = document.getElementById('searchInput').value;

        try {
            const response = await axios.get(`/product/search?name=${searchInput}`);
            setSearchResult(response.data);
        } catch (error) {
            console.error('찾으시는 상품이 없습니다.', error);
        }
    };
    const handleInputChange = (event) => {
        const value = event.target.value;
        setReview({ ...review, product_name: value });
        fetchData(value);
    };
    const handleSelectChange = (event) => {
        const selectedProductId = event.target.value; // select 태그의 option 중 해당하는 상품명을 변수에 담는다.
        setSelectedValue(selectedProductId);
    };

    return (
        <div className="write">
            <div className="cateTitle">
                <h1>상품후기 수정</h1>
            </div>

            <div>
                <div className="selectStarRegist">
                    <input
                        type="text"
                        id="searchInput"
                        onChange={handleInputChange}
                        value={review.product_name}
                    />
                    <div id="searchResult">
                        <select id="product_id" style={{
                            width: '150px',
                            height: '50px',
                            fontSize: '16px'
                        }} value={selectedValue} onChange={handleSelectChange}>
                            <option value="">선택하세요</option>
                            {searchResult.map((result, index) => (
                                <option key={index} value={result.product_id} >
                                    {result.product_name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div id="registButton">
                        <input onClick={reviewUpdate} value="수정" />
                    </div>
                </div>

                <div>
                    <form>
                        <input
                            id="review_title"
                            type="text"
                            placeholder="제목을 입력하세요."
                            maxLength="100"
                            value={review.review_title}
                            onChange={(e) => setReview({ ...review, review_title: e.target.value })}
                            required
                        /> <Star star={review.review_point} onChangeScore={onChangeScore} />
                        <textarea
                            id="review_content"
                            rows="30"
                            cols="100"
                            value={review.review_content}
                            onChange={(e) => setReview({ ...review, review_content: e.target.value })}
                        ></textarea>
                        <input type='hidden' id='product_id' value={selectedValue ? selectedValue.toString() : review.product_id} />
                    </form>
                </div>
            </div>

            <div id="bottomBoard">
                <Link to="/community/review">
                    <input type="button" value="목록" />
                </Link>
            </div>
        </div>
    );
}
