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
    const [kind, setKind] = useState('all');
    const [productByKind, setProductByKind] = useState([]);

    const navigate = useNavigate();

    const inquiryUpdate = async () => {
        if (!inquiry.inquiry_title) {
            alert("제목을 입력하세요.");
            return;
        }
        try {
            await axios.post(`/inquiry/updateBoard/`, {
                inquiry_id: id,
                inquiry_title: inquiry.inquiry_title,
                product_id: selectedValue || inquiry.product_id, // 만약 selectedValue가 존재하면 그 값을 사용하고, 그렇지 않으면 inquiry.product_id 사용
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

    const handleKindChange = async (event) => {
        const selectedKind = event.target.value;
        setKind(selectedKind);

        try {
            const response = await axios.get(`/product/kind/${selectedKind}`);
            const { product, kinds } = response.data;

            const formattedData = Object.values(kinds).map(category => ({
                product_category: category
            }));

            setProductByKind(formattedData);
            setSearchResult(Object.values(product));
        } catch (error) {
            console.error('카테고리 데이터를 불러오는 중 에러:', error);
        }
    };

    const handleCategoryChange = async (event) => {
        const selectedCategory = event.target.value;

        try {
            const response = await axios.get(`/product/category/${kind}/${selectedCategory}`);
            setSearchResult(response.data);
        } catch (error) {
            console.error('카테고리 데이터를 불러오는 중 에러:', error);
        }
    };


    return (
        <div className="write">
            <div className="cateTitle">
                <h1>상품문의 수정</h1>
            </div>

            <div>
                <div className="selectStarRegist">
                    <input
                        type="text"
                        id="searchInput"
                        onChange={fetchData}
                        value={inquiry.product_name}
                    />
                    <div id="searchResult" style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <select id="product_kind" onChange={handleKindChange} style={{ width: '150px' }}>
                            <option value="all">종류</option>
                            <option value="dog">강아지</option>
                            <option value="cat">고양이</option>
                        </select>
                        <select id="product_category" onChange={handleCategoryChange} style={{ width: '150px' }}>
                            <option value="all">카테고리</option>
                            {productByKind.map((result, index) => (
                                <option key={index} >
                                    {result.product_category}
                                </option>
                            ))}
                        </select>
                        <select id="product_id" value={selectedValue} onChange={handleSelectChange} style={{ width: '150px' }}>
                            <option value="">상품</option>
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
                        <input type='hidden' id='product_id' value={selectedValue ? selectedValue.toString() : inquiry.product_id} />
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