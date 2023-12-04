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

    return (
        <div className="write">
            <div className="cateTitle">
                <h1>상품문의</h1>
            </div>

            <div>
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
                        <input type="submit" form="submitBoard" value="등록" />
                    </div>
                </div>

                <div>
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
}
