import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function InquiryUpdate() {
    const { id } = useParams();
    const [searchResult, setSearchResult] = useState([]); // 검색한 값이 db에 있으면 searchResult에 저장한다.
    const [selectedValue, setSelectedValue] = useState('');
    const [inquiry, setInquiry] = useState({
        inquiry_title: '',
        product_id: '',
        inquiry_content: ''
    });

    const navigate = useNavigate();

    const inquiryUpdate = async () => {
        console.log(inquiry);
        try {
            await axios.post(`/inquiry/updateBoard/`, {
                inquiry_id: id,
                inquiry_title: inquiry.inquiry_title,
                product_id: selectedValue,
                inquiry_content: inquiry.inquiry_content
            });
            alert(`상품문의 수정이 완료되었습니다.`);
            navigate(`/community/inquiry/${id}`);
        } catch (error) {
            console.error('상품문의 수정 에러:', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/inquiryDetail/${id}`);
                setInquiry(response.data);
            } catch (error) {
                console.error('상품문의 데이터를 불러오는 중 에러:', error);
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
        setInquiry({ ...inquiry, product_name: value });
        fetchData(value);
    };
    const handleSelectChange = (event) => {
        const selectedProductId = event.target.value; // select 태그의 option 중 해당하는 상품명을 변수에 담는다.
        setSelectedValue(selectedProductId);
    };

    return (
        <div className="write">
            <div className="cateTitle">
                <h1>상품문의</h1>
            </div>

            <div>
                <div className="selectStarRegist">
                    <input
                        type="text"
                        id="searchInput"
                        onChange={handleInputChange}
                        value={inquiry.product_name}
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
                        <input onClick={inquiryUpdate} value="수정" />
                    </div>
                </div>

                <div>
                    <form>
                        <input
                            id="inquiry_title"
                            type="text"
                            placeholder="제목을 입력하세요."
                            maxLength="100"
                            value={inquiry.inquiry_title}
                            onChange={(e) => setInquiry({ ...inquiry, inquiry_title: e.target.value })}
                            required
                        />
                        <textarea
                            id="inquiry_content"
                            rows="30"
                            cols="100"
                            value={inquiry.inquiry_content}
                            onChange={(e) => setInquiry({ ...inquiry, inquiry_content: e.target.value })}
                        ></textarea>
                        <input type='hidden' id='product_id' value={selectedValue ? selectedValue.toString() : ''} />
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
