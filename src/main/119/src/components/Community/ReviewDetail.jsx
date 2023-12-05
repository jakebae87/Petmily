import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams, useNavigate } from "react-router-dom";
import Star from "./Star";

function ReviewDetail() {

    const { id } = useParams();
    const [review, setReview] = useState({
        review_title: '',
        product_id: '',
        review_writer: '',
        review_title: '',
        review_point: 0,
        review_count: '',
        review_content: '',
        review_regdate: '',
        review_image1: '',
        review_image2: ''
    });

    const navigate = useNavigate();
    let contents = review.review_content;

    function reviewDelete() {
        let url = '/review/delete/' + id;
        axios.delete(
            url
        ).then(response => {
            alert('상품후기가 삭제 되었습니다.');
            navigate('/community/review');
        }).catch(error => {
            console.error(`에러 응답 = ${error.response},
			error status = ${error.response.status},
			error message = ${error.message}`);
        })
    }

    useEffect(() => {
        axios
            .get('/reviewDetail/' + id)
            .then((response) => {
                setReview(response.data);
            })
            .catch((error) => {
                alert(`선택한 데이터가 없습니다.`);
            });
    }, []);

    if (contents != null) {
        contents = review.review_content.split('\n').map((it) => <p>{it}</p>);
    }


    return (
        <div className="ReviewDetail">
            <div className="cateTitle">
                <h1>상품후기</h1>
            </div>

            <div className="boardPackage">
                <table>
                    <tr>
                        <th scope="row">제목</th>
                        <td>{review.review_title}</td>
                    </tr>
                    <tr>
                        <th scope="row">작성자</th>
                        <td><span>{review.review_writer}</span></td>
                    </tr>
                    <tr>
                        <th scope="row">작성일</th>
                        <td><span>{review.review_regdate}</span></td>
                        <th scope="row">조회수</th>
                        <td><span>{review.review_count}</span></td>
                    </tr>
                    <tr>
                        <th scope="row">상품명</th>
                        <td>
                            <Link to={`/products/productdetail/${review.product_id}`}>{review.product_name}</Link>
                        </td>
                        <th scope="row">평점{review.review_point}</th>
                        <td>
                            <Star star={review.review_point} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {review.review_image1 != null ?
                                <div>
                                    <img style={{ width: '500px', height: '500px' }} src={process.env.PUBLIC_URL + `/Images/reviews/${review.review_image1}`} alt='상품후기 이미지1' />
                                    <img style={{ width: '500px', height: '500px' }} src={process.env.PUBLIC_URL + `/Images/reviews/${review.review_image2}`} alt='상품후기 이미지2' />
                                </div>
                                : null}

                            <br></br>
                            <div className="contents">
                                {contents}
                            </div>
                        </td>
                    </tr>
                </table>
                <div id="bottomBoard">
                    <Link to={`/board/reviewUpdate/${id}`}><input style={{ marginRight: '50px' }} type="button" value="수정" /></Link>
                    <input onClick={reviewDelete} style={{ marginRight: '50px' }} type="button" value="삭제" />
                    <Link to="/community/review"><input type="button" value="목록" /></Link>
                </div>
            </div>
        </div>
    )
}
export default ReviewDetail;