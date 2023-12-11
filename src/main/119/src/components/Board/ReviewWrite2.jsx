import React, { useState, useEffect} from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import Star from "./Star";

export default function ReviewWrite() {
    const { id } = useParams();
    const [productData, setProductData] = useState([]);

    // 상품후기의 별점 수 받기 시작
    const [score, setScore] = useState(0);
    const onChangeScore = (data) => {
        setScore(data);
    }
    // 상품후기의 별점 수 받기 끝

    const navigate = useNavigate();

    const reviewSubmit = async () => {
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






    const getProductData = () => {
        axios.get(`/rsproduct/productDetail/${id}`)
            .then((response) => {
                setProductData(response.data);
                console.log(`** productDetail 서버연결 성공 =>`, response.data);
            })
            .catch((err) => {
                alert(`** productDetail 서버연결 실패 => ${err.message}`);
            });
    };

    useEffect(() => {
        getProductData();
    }, []);

    return (
        <div className="write">
            <div className="cateTitle">
                <h1>상품후기</h1>
            </div>

            <div>
                <div className="selectStarRegist">
                    <span>상품명 : {productData.product_name}</span>

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
                        <input type="hidden" name="product_id" value={id} />

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