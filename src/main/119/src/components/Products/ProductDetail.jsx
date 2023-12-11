import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';

import Star from "../Community/Star";

function Pagination({ totalPages, currentPage, onPageChange }) {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(
            <a
                key={i}
                href="#"
                className={i === currentPage ? 'active' : ''}
                onClick={() => onPageChange(i)}
            >
                {i}
            </a>
        );
    }

    return (
        <div className="pagination">
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>&laquo;</button>
            {pages}
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>&raquo;</button>
        </div>
    );
}

const ProductDetail = ({ calcProductPrice, addCart, addOrder, setCartItems }) => {
    const { id } = useParams();
    const [productDetailData, setProductDetailData] = useState([]);
    const [productImagesData, setProductImagesData] = useState([]);
    const [quantity, setQuantity] = useState(1);

    const date = new Date();
    const formattedDate = new Intl.DateTimeFormat('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);

    // 수량
    const quantityChange = (event) => {
        setQuantity(parseInt(event.target.value, 10));
    };

    // 장바구니 추가(2차 프젝)
    // const handleAddToCart = () => {
    //     addCart({ ...productDetailData, product_cnt :quantity });
    //     setQuantity(1);
    // };

    // 바로 구매하기
    const handleAddToOrder = () => {
        addOrder({ ...productDetailData, product_cnt: quantity });
    setQuantity(1);
  };

  // 장바구니 추가(3차 프젝)
  function cartInsert(a, b) {    
	let url="/rscart/cartInsert/" + a + "/" +b;
	
    axios.post(url)
        .then((response) => {
            alert("장바구니에 상품이 추가되었습니다");
            axios.get("/rscart/cartList")
                .then((response) => {
                setCartItems(response.data);
                })
                .catch((err) => {
                alert(`** checkdata 서버연결 실패 => ${err.message}`);
                });
        }).catch( err => {
                    if ( err.response.status ) alert(err.response.data);  				
                    else alert("~~ 시스템 오류, 잠시후 다시하세요 => " + err.message);
        });
}

    const scrollToAnchor = (anchorId) => {
        const element = document.getElementById(anchorId);
        if (element) {
            const offsetPosition = element.offsetTop - 151;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    const handleAnchorClick = (event, anchorId) => {
        event.preventDefault();
        scrollToAnchor(anchorId);
    };

    // 상품 후기
    const [review, setReview] = useState([]);

    // 상품문의
    const [inquiry, setInquiry] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    function AnswerCheck(inquiry) {
        if (inquiry.answer_content != null) {
            return <td style={{ color: 'blue' }}>답변완료</td>
        } else {
            return <td style={{ color: 'red' }}>확인중</td>
        }
    }

    const paginatedInquiryData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return inquiry.slice(startIndex, endIndex);
    };

    const paginateReviewdData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return review.slice(startIndex, endIndex);
    };

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const response = await axios.get(`/rsproduct/productDetail/${id}`);
                setProductDetailData(response.data);
                console.log("** productDetail 서버연결 성공 =>", response.data);
            } catch (error) {
                console.log(`** productDetail 서버연결 실패 => ${error.message}`);
            }
        };

        const fetchProductImageData = async () => {
            try {
                const response = await axios.get(`/rsproduct/productImage/${id}`);
                setProductImagesData(response.data);
                console.log("** productImagesData 서버연결 성공 =>", response.data);
            } catch (error) {
                console.log(`** productImagesData 서버연결 실패 => ${error.message}`);
            }
        };

        const fetchInquiryData = async () => {
            try {
                const response = await axios.get(`/rsproduct/inquiry/list/${id}`);
                setInquiry(response.data);
            } catch (error) {
                alert(`자료가 없습니다.`);
            }
        };

        const fetchReviewData = async () => {
            try {
                const response = await axios.get(`/rsproduct/review/list/${id}`);
                setReview(response.data);
            } catch (error) {
                alert(`자료가 없습니다.`);
            }
        };
        fetchInquiryData();
        fetchReviewData();
        fetchProductImageData();
        fetchProductData();

    }, [id]);

    // 스크롤
    const [scrollPosition, setScrollPosition] = useState(0);
    const [productDetailImgOffset, setProductDetailImgOffset] = useState(0);
    const [productReviewOffset, setProductReviewOffset] = useState(0);
    const [productQAOffset, setProductQAOffset] = useState(0);
    const [buyGuideOffset, setBuyGuideOffset] = useState(0);
    const productDetailImgRef = useRef(null);
    const productReviewRef = useRef(null);
    const productQARef = useRef(null);
    const buyGuideRef = useRef(null);

    useEffect(() => {
        const calculateOffsets = () => {
            if (productDetailImgRef.current && productReviewRef.current && productQARef.current && buyGuideRef.current) {
                setProductDetailImgOffset(productDetailImgRef.current.offsetTop - 152);
                setProductReviewOffset(productReviewRef.current.offsetTop - 152);
                setProductQAOffset(productQARef.current.offsetTop - 152);
                setBuyGuideOffset(buyGuideRef.current.offsetTop - 152);

                console.log("Offsets:", productDetailImgOffset, productReviewOffset, productQAOffset, buyGuideOffset);
            }
        };

        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        calculateOffsets();
        window.addEventListener("resize", calculateOffsets);

        return () => {
            window.removeEventListener("resize", calculateOffsets);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPosition, productDetailImgOffset, productReviewOffset, productQAOffset, buyGuideOffset]);

    return (
        <div className="ProductDetail">
            <div className="productPage">
                <div className="productImage">
                    <img
                        src={`${process.env.PUBLIC_URL}/Images/products/${productDetailData.product_mainimagepath}`}
                        alt={productDetailData.product_mainimagepath}
                        width="500px"
                        height="400px"
                    />
                    <div className="detailGallery">
                        {productImagesData.map((image, index) => (
                            <img
                                key={index}
                                src={`${process.env.PUBLIC_URL}/Images/products/${encodeURIComponent(image.product_imagepath)}`}
                                alt={`Review Image ${index + 1}`}
                                className="detailThumbnail"
                            />
                        ))}
                    </div>

                    <div className="regDate">
                        상품 등록일 : {formattedDate}
                    </div>
                </div>

                <table className="productInfo">
                    <tbody>
                        <tr>
                            <th>상품명</th>
                            <td>{productDetailData.product_name}</td>
                        </tr>
                        <tr>
                            <th>원산지</th>
                            <td>{productDetailData.product_origin}</td>
                        </tr>
                        <tr>
                            <th>가격</th>
                            <td>
                                {productDetailData.promotion_discount ? (
                                    <p className="productPrice">
                                        <span className="originalPrice">{productDetailData.product_price.toLocaleString()}원</span>
                                        <span>{calcProductPrice(productDetailData.product_price, productDetailData.promotion_discount)}원</span>
                                    </p>
                                ) : (
                                    <p className="productPrice">
                                        <span>{productDetailData.product_price ? `${productDetailData.product_price.toLocaleString()}원` : "가격 정보 없음"}</span>
                                    </p>
                                )}
                            </td>
                        </tr>
                        <tr>
                            <th>수량</th>
                            <td>
                                <select
                                    name="quantity"
                                    id="quantity"
                                    value={quantity}
                                    onChange={quantityChange}
                                >
                                    {Array.from({ length: 100 }, (_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1}
                                        </option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>배송비</th>
                            <td>3,000원</td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <Link to={`/user/order`}>
                                    <button
                                        className="buySoon"
                                        quantity={quantity}
                                        onClick={() => handleAddToOrder(productDetailData)}
                                    >
                                        바로구매하기
                                    </button>
                                </Link>
                                <Link to={`/user/cart`}>
                                    <button
                                        className="buyCart"
                                        //quantity={quantity}
                                        onClick={() => cartInsert(productDetailData.product_id, quantity)}
                                    >
                                        장바구니
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="productDetailPage">
                <div className="productDetailnav">
                    <ul className="productDetailMenu">
                        <li className={scrollPosition >= productDetailImgOffset && scrollPosition < productReviewOffset ? 'active' : ''}>
                            <a href="#" onClick={(e) => handleAnchorClick(e, "productDetailImg")}>상품정보</a>
                        </li>
                        <li className={scrollPosition >= productReviewOffset && scrollPosition < productQAOffset ? 'active' : ''}>
                            <a href="#" onClick={(e) => handleAnchorClick(e, "productReview")}>상품후기({review.length})</a>
                        </li>
                        <li className={scrollPosition >= productQAOffset && scrollPosition < buyGuideOffset ? 'active' : ''}>
                            <a href="#" onClick={(e) => handleAnchorClick(e, "productQA")}>상품문의({inquiry.length})</a>
                        </li>
                        <li className={scrollPosition >= buyGuideOffset ? 'active' : ''}>
                            <a href="#" onClick={(e) => handleAnchorClick(e, "buyGuide")}>구매안내</a>
                        </li>
                    </ul>
                </div>

                <div id="productDetailImg" className="productDetailImg" ref={productDetailImgRef}>
                    <img src={`${process.env.PUBLIC_URL}/Images/products/${encodeURIComponent(productDetailData.product_detailimagepath)}`} className="detailImage" alt="productDetail1" />
                </div>

                <div className="productReview" ref={productReviewRef}>
                    <div id="productReview" className="productDetailTitle">
                        <h2>상품후기 <span>({review.length})건</span></h2>
                        <Link to={`/board/reviewWrite2/${id}`}>후기작성</Link>
                    </div>

                    <div className="boardList">
                        <table>
                            <colgroup>
                                <col className="attr1" />
                                <col className="attr1" />
                                <col className="attr2" />
                                <col className="attr3" />
                                <col className="attr3" />
                            </colgroup>
                            <tr>
                                <th>제목</th>
                                <th>사진</th>
                                <th>평점</th>
                                <th>글쓴이</th>
                                <th>작성일</th>
                            </tr>

                            {paginateReviewdData().map((r) =>
                                <tr key={r.review_id}>
                                    <td style={{ textAlign: 'center' }}><Link to={`/community/review/${r.review_id}`}>{r.review_title}</Link></td>
                                    <td><Link to={`/community/review/${r.review_id}`}>
                                        <img style={{ width: '100px', height: '100px' }} src={process.env.PUBLIC_URL + `/Images/reviews/${r.review_image1}`} alt={r.review_image1} />
                                    </Link></td>
                                    <td><Star star={r.review_point} /></td>
                                    <td>{r.review_writer}</td>
                                    <td>{r.review_regdate}</td>
                                </tr>
                            )}

                        </table>

                        <Pagination
                            totalPages={Math.ceil(review.length / itemsPerPage)}
                            currentPage={currentPage}
                            onPageChange={setCurrentPage}
                        />
                    </div>
                </div>

                <div className="productQA" ref={productQARef}>
                    <div id="productQA" className="productDetailTitle">
                        <h2>상품문의 <span>({inquiry.length})건</span></h2>
                        <Link to={`/board/inquiryWrite2/${id}`}>문의작성</Link>
                    </div>

                    <div className="boardList">
                        <table>
                            <colgroup>
                                <col className="attr1" />
                                <col className="attr2" />
                                <col className="attr3" />
                                <col className="attr4" />
                            </colgroup>
                            <tr>
                                <th>제목</th>
                                <th>답변여부</th>
                                <th>글쓴이</th>
                                <th>작성일</th>
                            </tr>
                            {/* 데이터 매핑 */}
                            {paginatedInquiryData().map((i) =>
                                <tr key={i.inquiry_id}>
                                    <td><Link to={`/community/Inquiry/${i.inquiry_id}`}>{i.inquiry_title}</Link></td>
                                    {AnswerCheck(i)}
                                    <td>{i.inquiry_writer}</td>
                                    <td>{i.inquiry_regdate}</td>
                                </tr>
                            )}
                        </table>

                        {/* 페이지네이션 UI */}
                        <Pagination
                            totalPages={Math.ceil(inquiry.length / itemsPerPage)}
                            currentPage={currentPage}
                            onPageChange={setCurrentPage}
                        />
                    </div>
                </div>

                <div className="buyGuide" ref={buyGuideRef}>
                    <div id="buyGuide" className="productReviewTitle">
                        <h2>구매안내</h2>
                    </div>

                    <div className="buyGuide">
                        <div className="returnInfo">
                            <h2 className="returnTitle">반품/교환 정보</h2>
                            <table className="returnInfoTable">
                                <colgroup>
                                    <col style={{ width: "18%" }} />
                                    <col />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th scope="row">반품/교환 배송비</th>
                                        <td>
                                            (구매자귀책) 3,000원/6,000원 초기배송비 무료시 반품배송비
                                            부과방법 : 왕복(편도x2)
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">반품/교환지 주소</th>
                                        <td>XX시 XX구 XX동 XXX</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">반품/교환 안내</th>
                                        <td>상세설명 참조</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h2>반품/교환 기준</h2>
                            <div className="returnStandard">
                                <p className="returnStandardTitle">
                                    상품 수령 후 7일 이내에 신청하실 수 있습니다. 단, 제품이
                                    표시·광고 내용과 다르거나, 계약과 다르게 이행된 경우는 제품
                                    수령일부터 3개월 이내, 그 사실을 안 날 또는 알 수 있었던
                                    날부터 30일 이내에 교환/반품이 가능합니다.
                                </p>
                                <dl className="returnStandardList">
                                    <dt>
                                        ⦁ 추가적으로 다음의 경우 해당하는 반품/교환은 신청이
                                        불가능할 수 있습니다.
                                    </dt>
                                    <dd>
                                        - 소비자의 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우
                                        (단지, 상품 확인을 위한 포장 훼손 제외)
                                    </dd>
                                    <dd>
                                        - 소비자의 사용 또는 소비에 의해 상품 등의 가치가 현저히
                                        감소한 경우
                                    </dd>
                                    <dd>
                                        - 시간의 경과에 의해 재판매가 곤란할 정도로 상품 등의 가치가
                                        현저히 감소한 경우
                                    </dd>
                                    <dd>- 복제가 가능한 상품 등의 포장을 훼손한 경우</dd>
                                    <dd>
                                        - 소비자의 주문에 따라 개별적으로 생산되는 상품이 제작에
                                        들어간 경우
                                    </dd>
                                </dl>
                            </div>

                            <h2 className="returnTitle">판매자정보</h2>
                            <table className="sellerTable">
                                <colgroup>
                                    <col style={{ width: "18%" }} />
                                    <col style={{ width: "32%" }} />
                                    <col style={{ width: "18%" }} />
                                    <col style={{ width: "32%" }} />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th scope="row">판매자</th>
                                        <td>Petmily</td>
                                        <th scope="row">상호명/대표자</th>
                                        <td>주식회사 Petmily │ XXX</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">사업자구분</th>
                                        <td>법인사업자 </td>
                                        <th scope="row">고객문의 대표번호</th>
                                        <td>XXXX-XXXX</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">사업자등록번호</th>
                                        <td>XXXXXXXXXX</td>
                                        <th scope="row">통신판매업신고</th>
                                        <td>2023-경기성남-XXXX</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">E-Mail</th>
                                        <td>petmily@petmily.com</td>
                                        <th scope="row">고객문의 가능시간</th>
                                        <td>9시 ~ 17시 (점심시간, 토요일, 일요일, 공휴일 제외)</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">영업소재지</th>
                                        <td colspan="3">XX시 XX구 XX동 XXX</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="payDeposit">
                                <p className="registNum">
                                    펫밀리 결제대금예치업 등록번호: XX-XXX-XXXXX
                                </p>
                                <ul className="payDepositList">
                                    <li>
                                        펫밀리는 전자금융거래법에 따라 금융감독(원)위원회에
                                        결제대금예치업을 등록(등록번호:XX-XXX-XXXXX)하였으며, 모든
                                        입점 판매자는 자동적으로 동 서비스에 가입하였습니다.
                                    </li>
                                    <li>
                                        본 판매자는 고객님의 안전거래를 위해 구매금액, 결제수단에
                                        상관없이 모든 거래에 대하여 저희 펫밀리 쇼핑몰이 가입한
                                        펫밀리(주)의 구매안전 서비스를 자동으로 적용하고 있습니다.
                                    </li>
                                </ul>
                            </div>

                            <h2 className="returnTitle">구매시 주의사항</h2>
                            <div className="precaution">
                                <ul className="PrecautionsList">
                                    <li>
                                        ⦁ 「전자상거래 등에서의 소비자보호에 관한 법률」에 의한
                                        반품규정이 판매자가 지정한 반품조건보다 우선합니다.
                                    </li>
                                    <li>
                                        ⦁ 미성년자가 물품을 구매하는 경우, 법정대리인이 동의하지
                                        않으면 미성년자 본인 또는 법정대리인이 구매를 취소할 수
                                        있습니다.
                                    </li>
                                    <li>
                                        ⦁ 공산품, 전기용품 등 인증대상 상품을 구매하실 경우
                                        '전기용품 및 생활용품 안전관리법' 등 관련 법률에 따라 허가
                                        받은 상품인지 확인하시기 바랍니다.
                                    </li>
                                    <li>
                                        ⦁ 펫밀리의 결제시스템을 이용하지 않고 판매자와 직접거래 하실
                                        경우 상품을 받지 못하거나. 구매한 상품과 상이한 상품을 받는
                                        등 피해가 발생 할 수 있으니 유의하시기 바랍니다.
                                    </li>
                                    <li>
                                        ⦁ 등록된 판매물품과 내용은 판매자가 등록한 것으로
                                        펫밀리(주)가 운영하는 펫밀리에 등록된 내용에 대하여 일체의
                                        책임을 지지 않습니다.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
