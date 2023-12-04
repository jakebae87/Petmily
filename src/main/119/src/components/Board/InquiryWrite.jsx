<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function InquiryWrite() {
    const [searchResult, setSearchResult] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {
    }, [selectedValue]);

    const fetchData = async () => {
        const searchInput = document.getElementById('searchInput').value;

        try {
            const response = await axios.get(`/product/search?name=${searchInput}`);
            setSearchResult(response.data);
        } catch (error) {
            console.error('There was a problem with the axios request:', error);
        }
    };

    const handleSelectChange = (event) => {
        const selectedProductName = event.target.value;
        const selectedProduct = searchResult.find(result => result.product_name === selectedProductName);

        if (selectedProduct) {
            const selectedProductId = selectedProduct.product_id;
            setSelectedValue(selectedProductId);
        }
    };

=======
import { Link } from "react-router-dom";

export default function InquiryWrite() {
>>>>>>> 51a11fd129897a089fbfb01d894228caf502a48a
    return (
        <div className="write">
            <div className="cateTitle">
                <h1>상품문의</h1>
            </div>

            <div>
<<<<<<< HEAD
                <div className="selectStarRegist">
                    <input type="text" id="searchInput" onChange={fetchData} />
                    <div id="searchResult">
                        <select value={selectedValue} onChange={handleSelectChange}>
                            <option value="">선택하세요</option>
                            {searchResult.map((result, index) => (
                                <option key={index} value={result.product_name}>
                                    {result.product_name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div id="selectedValue">
                        {/* 선택된 값 표시 */}
                        {selectedValue && <p>선택된 값: {selectedValue}</p>}
                    </div>

                    <div id="registButton">
=======

                <div className="selectStarRegist">
                    <select name="selectSubject" onChange="window.open(value,'_self');">
                        <option value="./writeInquiry.html">상품문의</option>
                        <option value="./writeReview.html">상품후기</option>
                    </select>

                    <div id="registButton"> {/* form 태그의 등록버튼을 form태그 외부로 빼서 사용 */}
>>>>>>> 51a11fd129897a089fbfb01d894228caf502a48a
                        <input type="submit" form="submitBoard" value="등록" />
                    </div>
                </div>

                <div>
<<<<<<< HEAD
                    <form id="submitBoard">
                        <input id="title" name="title" type="text" placeholder="제목을 입력하세요." maxLength="100" required />
                        <textarea id="contents" name="contents" rows="30" cols="100"></textarea>
                    </form>
                </div>
            </div>

            <div id="bottomBoard">
                <Link to="/community/inquiry">
                    <input type="button" value="목록" />
                </Link>
            </div>
        </div>
    );
=======
                    <form action="#" id="submitBoard" method="get">
                        <input id="title" name="title" type="text" placeholder="제목을 입력하세요." maxlength="100" required />

                        <input type="file" id="fileUpload" name="fileUpload" multiple
                            accept="image/gif,image/jpeg,image/png" />

                        <textarea id="contents" name="contents" rows="30" cols="100"></textarea>
                    </form>
                </div>

            </div>

            <div id="bottomBoard">
                <Link to="/community/inquiry"><input type="button" value="목록" /></Link>
            </div>
        </div>
    )
>>>>>>> 51a11fd129897a089fbfb01d894228caf502a48a
}
