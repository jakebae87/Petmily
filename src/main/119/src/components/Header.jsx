import "./Header.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'

import PetmilyLogo from '../assets/Images/Petmily_logo.png';
import glassLogo from '../assets/Images/magnifying-glass-30.png';

function Header() {
    const [isSideMenuOpen, setSideMenuOpen] = useState(false);

    useEffect(() => {
        setSideMenuOpen(false);
    }, [window.location.pathname]);

    const isLoggedIn =
        sessionStorage.getItem("loggedInUser");
    const user = isLoggedIn ? JSON.parse(isLoggedIn) : null;
    const userName = user ? user.user_name : ''; // 유저 이름 변수



    const handleLogout = () => {
        sessionStorage.removeItem("loggedInUser");
        window.location.reload(); // 로그아웃 후 페이지 새로고침
    };

    const navigate = useNavigate();


    const handleEnterPress = (e) => {
        navigate("/products/searchedproducts");
    };

    const onKeyPress = (e) => {
        if (e.keyCode === 13) { handleEnterPress(); }
    };

    return (
        <div className="Header">
            <div className="headerTOP">
                <div className="topLogo">
                    {/* <span>Petmily</span> */}
                    <Link to="/"><img src={PetmilyLogo} alt="Petmily_logo" /></Link>
                </div>

                <div className="searchBox">
                    <form>
                        <fieldset>
                            <input type="text" maxlength="30" className="search_input" name="search" placeholder="검색어를 입력해주세요." onKeyDown={onKeyPress} />
                            {/* <input type="submit" value="검색" className="serach_submit" onKeyDown={onKeyPress} /> */}
                            <button value="검색" className="serach_submit" onClick={handleEnterPress}>
                                <img src={glassLogo} alt="돋보기 이미지" />
                            </button>
                        </fieldset>
                    </form>
                </div>

                <div className="userMenu">
                    {isLoggedIn ? (
                        <>
                            <span>{userName}님</span>
                            <Link to="/" onClick={handleLogout}>
                                로그아웃
                            </Link>
                            <Link to="/user/mypage">마이페이지</Link>
                            <Link to="/user/cart">장바구니</Link>
                        </>
                    ) : (
                        <>
                            <Link to="/user/login">로그인</Link>
                            <Link to="/user/signup">회원가입</Link>
                        </>
                    )}
                </div>
            </div>

            <div className="headerBottom">
                <nav>
                    <ul className="mainMenu">
                        <li>
                            <input type="checkbox" id="sideBtn" checked={isSideMenuOpen} onChange={() => setSideMenuOpen(!isSideMenuOpen)} />
                            <label for="sideBtn">
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>

                            <ul className="sideMenu">
                                <li>
                                    <ul>
                                        <li><Link to="/products/newproducts">신상품</Link></li>
                                        <li><Link to="/products/popularproducts">인기상품</Link></li>
                                        <li><Link to="/products/dog/all">강아지</Link></li>
                                        <li><Link to="/products/cat/all">고양이</Link></li>
                                        <li><Link to="/products/all/feed">사료</Link></li>
                                        <li><Link to="/products/all/snackNutrient">간식/영양제</Link></li>
                                        <li><Link to="/products/all/hygiene">위생</Link></li>
                                        <li><Link to="/products/all/beautyCare">미용/케어</Link></li>
                                        <li><Link to="/products/all/living">리빙</Link></li>
                                        <li><Link to="/products/all/walkPlay">산책/놀이</Link></li>
                                        <li><Link to="/products/all/clothesAccessorie">의류/악세사리</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li><Link to="/community/notice">공지사항</Link></li>
                                        <li><Link to="/community/inquiry">상품문의</Link></li>
                                        <li><Link to="/community/review">상품후기</Link></li>
                                        <li><Link to="/community/faq">자주묻는질문</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li><Link to="/products/all/all">전체상품</Link>
                            <ul className="subMenu">
                                <li><Link to="/products/newproducts">신상품</Link></li>
                                <li><Link to="/products/popularproducts">인기상품</Link></li>
                                <li><Link to="/products/dog/all">강아지</Link></li>
                                <li><Link to="/products/cat/all">고양이</Link></li>
                                <li><Link to="/products/all/feed">사료</Link></li>
                                <li><Link to="/products/all/snackNutrient">간식/영양제</Link></li>
                                <li><Link to="/products/all/hygiene">위생</Link></li>
                                <li><Link to="/products/all/beautyCare">미용/케어</Link></li>
                                <li><Link to="/products/all/living">리빙</Link></li>
                                <li><Link to="/products/all/walkPlay">산책/놀이</Link></li>
                                <li><Link to="/products/all/clothesAccessorie">의류/악세사리</Link></li>
                            </ul>
                        </li>

                        <li><Link to="/community/notice">커뮤니티</Link>
                            <ul className="subMenu">
                                <li><Link to="/community/notice">공지사항</Link></li>
                                <li><Link to="/community/inquiry">상품문의</Link></li>
                                <li><Link to="/community/review">상품후기</Link></li>
                                <li><Link to="/community/faq">자주묻는질문</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/event">이벤트</Link></li>
                        <li><Link to="/products/discountedproducts">할인중인 상품</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default React.memo(Header);