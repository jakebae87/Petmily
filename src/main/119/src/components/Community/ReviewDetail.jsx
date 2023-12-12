import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams, useNavigate } from "react-router-dom";
import Star from "./Star";
import Popup from '../Board/Popup';

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
        review_image2: '',
        reply_check: false
    });
    const [replies, setReplies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const isLoggedIn =
        sessionStorage.getItem("loggedInUser");
    const user = isLoggedIn ? JSON.parse(isLoggedIn) : null;
    const userName = user ? user.user_name : '';

    const navigate = useNavigate();
    let contents = review.review_content;

    function replyCheck() {
        if (review.reply_check) {

            return <div id='bottomBoard'><button onClick={() => getReplies(id)}>댓글보기</button></div>
        } else {
            return null;
        }
    }

    function WriterButton() {
        if (userName == review.review_writer) {
            return (
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Link to={`/board/reviewUpdate/${id}`}><input style={{ marginRight: '50px' }} type="button" value="수정" /></Link>
                    <input onClick={reviewDelete} style={{ marginRight: '50px' }} type="button" value="삭제" />
                </div>
            );
        }
    }

    function replyDeleteButton() {
        if (userName == review.review_writer) {
            return (
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <Link to={`/board/reviewUpdate/${id}`}><input style={{ marginRight: '50px' }} type="button" value="수정" /></Link>
                    <input onClick={reviewDelete} style={{ marginRight: '50px' }} type="button" value="삭제" />
                </div>
            );
        }
    }

    const [showPopup, setShowPopup] = useState(false);

    function replyWrite() {
        setShowPopup(true);
    }

    function closePopup() {
        setShowPopup(false);
    }

    function getReplies() {
        setIsLoading(true);
        let url = '/review/reply/' + id;
        axios.get(url)
            .then(response => {
                setReplies(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(`에러 응답 = ${error.response},
                    error status = ${error.response.status},
                    error message = ${error.message}`);
                setIsLoading(false);
            });
    }

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

    const replyDelete = async (reply_id) => {
        let url = '/review/reply/delete/' + reply_id;
        axios.delete(
            url
        ).then(response => {
            alert('댓글이 삭제 되었습니다.');
            window.location.reload();
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

                {replyCheck()}
                <div className="ReviewDetail">
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <div>
                            {replies.map((reply) => (
                                <div style={{ marginBottom: '15px' }}>
                                    <table style={{ width: '100%' }}>
                                        <tr>
                                            <div style={{ width: '15%' }}>
                                                <th>작성자</th>
                                                <td>{reply.reply_writer}</td>
                                            </div>
                                            <div style={{ width: '65%' }}>
                                                <th>내용</th>
                                                <td>{reply.reply_content}</td>
                                            </div>
                                            <div style={{ width: '20%' }}>
                                                <th>작성일</th>
                                                <td>{reply.reply_regdate}</td>
                                            </div>
                                            <div>
                                                {userName === reply.reply_writer && (
                                                <button onClick={() => replyDelete(reply.reply_id)} style={{ width: '50px' }} type="button">
                                                    삭제
                                                </button>
                                                )}
                                            </div>
                                        </tr>
                                    </table>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <Popup data={id} showPopup={showPopup} closePopup={closePopup} />
                <div id="bottomBoard" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <WriterButton/>
                    <input onClick={replyWrite} style={{ marginRight: '50px' }} type="button" value="댓글작성" />
                    <Link to="/community/review"><input type="button" value="목록" /></Link>
                </div>
            </div>
        </div>
    )
}
export default ReviewDetail;