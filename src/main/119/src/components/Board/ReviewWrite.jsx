import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Star from "./Star";

function ReviewWrite() {

    // 상품후기의 별점 수 받기 시작
    const [score, setScore] = useState(0);
    const formRef = useRef(null);
    const onChangeScore = (data) => {
        setScore(data);
    }
    // 상품후기의 별점 수 받기 끝

    const [searchResult, setSearchResult] = useState([]); // 검색한 값이 db에 있으면 searchResult에 저장한다.
    const [selectedValue, setSelectedValue] = useState('');

    const navigate = useNavigate();

    const reviewSubmit = async () => {
        try {
            const form = formRef.current;

            if (form) {
                let formData = new FormData(form);
                
                formData.forEach((value, key) => {
                    console.log(key, value);
                });

                await axios.post(
                    "/review/insert",
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    }
                );

                alert(`상품문의 등록 완료되었습니다.`);
                navigate('/community/review');
            } else {
                console.error('폼을 찾을 수 없습니다.');
            }
        } catch (error) {
            console.error('에러:', error);
        }
    };

    useEffect(() => {
    }, [selectedValue]);

    const fetchData = async () => {
        const searchInput = document.getElementById('searchInput').value;

        try {
            const response = await axios.get(`/product/search?name=${searchInput}`);
            setSearchResult(response.data);
        } catch (error) {
            console.error('찾으시는 상품이 없습니다.', error);
        }
    };

    const handleSelectChange = (event) => {
        const selectedProductId = event.target.value; // select 태그의 option 중 해당하는 상품명을 변수에 담는다.
        setSelectedValue(selectedProductId);
    };

    return (
        <div className="write">
            <div className="cateTitle">
                <h1>상품후기</h1>
            </div>

            <div>
                <div className="selectStarRegist">
                    <input type="text" id="searchInput" onChange={fetchData} placeholder="상품명을 입력하세요." required />
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

                    <div className="productRating">
                        <Star onChangeScore={onChangeScore} />
                    </div>

                    <div id="registButton">
                        <input onClick={reviewSubmit} value="등록" />
                    </div>
                </div>

                <div>
                    <form ref={formRef} name="submitBoard">
                        <input name="review_title"  type="text" placeholder="제목을 입력하세요." maxlength="100" required />

                        <input type="file" id="uploadfilef" name="review_image1" multiple accept="image/gif,image/jpeg,image/png" />

                        <input type="hidden" name="review_point" value={score} />

                        <textarea name="review_content" rows="30" cols="100"></textarea>
                    </form>
                </div>
            </div>

            <div id="bottomBoard">
                <Link to="/community/review"><input type="button" value="목록" /></Link>
            </div>
        </div>
    )
}
export default ReviewWrite;