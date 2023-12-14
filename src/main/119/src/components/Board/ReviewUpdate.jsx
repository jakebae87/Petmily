import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Star from "./Star";

export default function ReviewUpdate() {
    const { id } = useParams();
    const [searchResult, setSearchResult] = useState([]); // 검색한 값이 db에 있으면 searchResult에 저장한다.
    const [selectedValue, setSelectedValue] = useState('');
    const [review, setReview] = useState({
        review_title: '',
        review_writer: '',
        product_id: '',
        review_point: 0,
        review_content: ''
    });
    const [clickedStars, setClickedStars] = useState(review.review_point || 0);

    // 상품후기의 별점 수 받기 시작
    const onChangeScore = (data) => {
        setClickedStars(data);
    }
    // 상품후기의 별점 수 받기 끝

    const navigate = useNavigate();

    const [selectedFile1, setSelectedFile1] = useState(null);
    const [selectedFile2, setSelectedFile2] = useState(null);

    const handleFileChange1 = (e) => {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = function (event) {
                setSelectedFile1(event.target.result);
            };
        } else {
            setSelectedFile1(null); // 파일이 선택되지 않았을 때 null로 설정
        }
    };

    const handleFileChange2 = (e) => {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = function (event) {
                setSelectedFile2(event.target.result);
            };
        } else {
            setSelectedFile2(null); // 파일이 선택되지 않았을 때 null로 설정
        }
    };


    const reviewUpdate = async () => {
        let formData = new FormData(document.getElementById('reviewForm'));

        if (!review.review_title) {
            alert("제목을 입력하세요.");
            return;
        }

        const pointToAdd = clickedStars !== 0 ? clickedStars : review.review_point;
        formData.append('review_point', pointToAdd);

        await axios.post(
            `/review/updateBoard/`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }).then(response => {
                alert(`상품후기 수정이 완료되었습니다.`);
                navigate(`/community/review/${id}`);
            }).catch(error => {
                console.error(`에러 응답 = ${error.response},
			error status = ${error.response.status},
			error message = ${error.message}`);
            });
    }

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
    }, [id],);


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
                    <input type="text" id="searchInput" onChange={handleInputChange} value={review.product_name} />
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
                    <form id="reviewForm">
                        <input
                            id="review_title"
                            name="review_title"
                            type="text"
                            placeholder="제목을 입력하세요."
                            maxLength="100"
                            value={review.review_title}
                            onChange={(e) => setReview({ ...review, review_title: e.target.value })}
                            required
                        />
                        <div className="productRating">
                            <Star star={review.review_point} onChangeScore={onChangeScore} />
                        </div><br />

                        <div style={{ display: 'flex' }}>
                            <div>
                                {selectedFile1 ? (
                                    <img
                                        className='selectImage2'
                                        style={{ width: '150px', height: '150px' }}
                                        src={selectedFile1}
                                        alt='상품후기 이미지1'
                                    />
                                ) : (
                                    <img
                                        className='selectImage1'
                                        style={{ width: '150px', height: '150px' }}
                                        src={process.env.PUBLIC_URL + `/Images/reviews/${review.review_image1}`}
                                        alt='상품후기 이미지1'
                                    />
                                )}
                                <input type="hidden" name="review_image1" value={review.review_image1} /><br />
                                <input type="file" name="uploadfile1" id="uploadfile1" size="20" onChange={handleFileChange1} />
                            </div>

                            <div>
                                {selectedFile2 ? (
                                    <img
                                        className='selectImage2'
                                        style={{ width: '150px', height: '150px' }}
                                        src={selectedFile2}
                                        alt='상품후기 이미지2'
                                    />
                                ) : (
                                    <img
                                        className='selectImage2'
                                        style={{ width: '150px', height: '150px' }}
                                        src={process.env.PUBLIC_URL + `/Images/reviews/${review.review_image2}`}
                                        alt='상품후기 이미지2'
                                    />
                                )}
                                <input type="hidden" name="review_image2" value={review.review_image2} /><br />
                                <input type="file" name="uploadfile2" id="uploadfile2" size="20" onChange={handleFileChange2} />
                            </div>
                        </div>
                        <textarea
                            id="review_content"
                            name="review_content"
                            rows="30"
                            cols="100"
                            value={review.review_content}
                            onChange={(e) => setReview({ ...review, review_content: e.target.value })}
                        ></textarea>
                        <input type='hidden' name='review_id' value={id} />
                        <input type='hidden' name='review_writer' value={review.review_writer} />
                        <input type='hidden' name='product_id' value={selectedValue ? selectedValue.toString() : review.product_id} />
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