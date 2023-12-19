import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Star from "./Star";

export default function ReviewWrite() {

    // 상품후기의 별점 수 받기 시작
    const [score, setScore] = useState(0);
    const onChangeScore = (data) => {
        setScore(data);
    }
    // 상품후기의 별점 수 받기 끝

    const isLoggedIn =
        sessionStorage.getItem("loggedInUser");
    const user = isLoggedIn ? JSON.parse(isLoggedIn) : null;
    const userName = user ? user.user_name : ''; // 유저 이름 변수

    const [searchResult, setSearchResult] = useState([]); // 검색한 값이 db에 있으면 searchResult에 저장한다.
    const [selectedValue, setSelectedValue] = useState('');
    const [orderKey, setOrderKey] = useState('');
    const [userId, setUserId] = useState('');

    const navigate = useNavigate();

    const reviewSubmit = async () => {
        const selectedFilesInput = document.querySelector('input[type="file"]');
        const selectedFiles = selectedFilesInput.files;

        if (selectedFiles.length !== 2) {
            alert("후기 작성시에 이미지는 반드시 2장 업로드해야 합니다.");
            return;
        }

        if (!selectedValue) {
            alert("상품명을 선택해주세요.");
            return;
        }

        const reviewTitleInput = document.querySelector('input[name="review_title"]');
        const reviewTitle = reviewTitleInput.value.trim();

        if (!reviewTitle) {
            alert("제목을 입력하세요.");
            return;
        }

        let formData = new FormData(document.getElementById('reviewForm'));

        await axios.post(
            "/review/insert",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        ).then(
            response => {
                alert(response.data);
                navigate('/community/review');
            }
        ).catch(error => {
            console.error(`에러 응답 = ${error.response},
        error status = ${error.response.status},
        error message = ${error.message}`);
        });
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/product/searchByUser?user=${user.user_id}`);
                setSearchResult(response.data);
            } catch (error) {
                console.error('데이터를 불러오는 중에 오류가 발생했습니다.', error);
            }
        };

        fetchData();
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
        setOrderKey(event.target.options[event.target.selectedIndex].dataset.orderkey);
        setUserId(event.target.options[event.target.selectedIndex].dataset.userid);

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
                            <option value="">구매상품 (구매날짜)</option>
                            {searchResult.map((result, index) => {
                                const date = new Date(result.order_date);

                                const year = date.getFullYear();
                                const month = String(date.getMonth() + 1).padStart(2, '0');
                                const day = String(date.getDate()).padStart(2, '0');

                                const formattedDate = `${year}-${month}-${day}`;

                                return (
                                    <option key={index} value={result.product_id} data-orderKey={result.order_key} data-userId ={result.user_id}>
                                        {result.product_name} ({formattedDate}) 
                                    </option>
                                );
                            })}
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
                    <form id="reviewForm">
                        <input name="review_title" type="text" placeholder="제목을 입력하세요." maxlength="100" required />

                        <input type="file" name="uploadfile1" multiple accept="image/gif,image/jpeg,image/png"
                            onChange={(e) => {
                                const selectedFiles = Array.from(e.target.files).slice(0, 2); // 최대 2개의 파일 선택
                                console.log(selectedFiles);
                            }}
                        />

                        <input type="hidden" name="review_point" value={score} />
                        <input type="hidden" name="review_writer" value={userName} />
                        <input type="hidden" name="product_id" value={selectedValue} />
                        <input type="hidden" name="order_key" value={orderKey} />
                        <input type="hidden" name="user_id" value={userId} />

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