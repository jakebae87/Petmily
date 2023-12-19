import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
    const navigate = useNavigate();
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");


    const onSubmit = (e) => {
        e.preventDefault();

        let url = "/rsuser/Login";

        const data = {
            user_id: userId,
            user_password: userPassword,
        };


        axios
            .post(url, data, { headers: { "Content-Type": "application/json" } })
            .then((response) => {
                const user = response.data;
                sessionStorage.setItem("loggedInUser", JSON.stringify(user));
                navigate("/");

            })
            .catch((err) => {
                console.error(
                    `** err.response=${err.response}, err.response.status=${err.response.status}, err.message=${err.message}`
                );
                if (err.response.status === 401) {
                    alert("id 또는 password 가 다릅니다");
                } else {
                    alert("id 또는 password 가 다릅니다");
                }
            });
    };
    const NaverLogin = () => {
        const NAVER_CLIENT_ID = "X8MsAj1qeOGBGpWCrM5B";
        const REDIERCT_URI = "http://localhost:3000/NaverLogin";
        const STATE = "false";
        const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIERCT_URI}`;

        window.location.href = NAVER_AUTH_URL;
    };

    const onKakaoLoginClick = () => {
        const REST_API_KEY = "36c72e69dcc46636ff1acefe07171573";
        const REDIERCT_URI2 = "http://localhost:3000/KakaoLogin";
        const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIERCT_URI2}&response_type=code`;

        window.location.href = KAKAO_AUTH_URL;

        const handleKakaoLogin = () => {
            onKakaoLoginClick(); // 카카오 로그인 인가 요청

            // 여기서 코드를 가져와서 서버로 전송합니다.
            const code = new URL(window.location.href).searchParams.get("code");
            if (code) {
                sendAuthorizationCodeToServer(code);
            }
        };


        const sendAuthorizationCodeToServer = (code) => {
            const SERVER_URL = "http://localhost:8080"; // Spring Boot 서버의 URL
            const KAKAO_LOGIN_URL = `${SERVER_URL}/oauth/kakao`;

            // 카카오 인가 코드를 서버로 전송
            axios.post(KAKAO_LOGIN_URL, { code })
                .then((response) => {
                    // 서버에서 받은 응답 처리
                    const user = response.data;
                    sessionStorage.setItem("loggedInUser", JSON.stringify(user));
                    console.log("Kakao login successful!", response.data);
                    navigate("/");
                })
                .catch((error) => {
                    // 오류 처리
                    console.error("Kakao login error:", error);
                    // 오류 처리 로직 추가
                });
        };


    };







    return (
        <div className="Login">
            <div className="cateTitle">
                <h1>로그인</h1>
            </div>

            <div className="login_">
                <form onSubmit={onSubmit} id="login-form">
                    <input
                        type="text"
                        className="loginbox"
                        name="userId"
                        placeholder="아이디"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                    <input
                        type="password"
                        className="loginbox"
                        name="userPassword"
                        placeholder="비밀번호"
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}
                    />
                    <input type="submit" className="loginBtn" value="로그인" />
                </form>
                <hr />
                <button className="kakao" onClick={onKakaoLoginClick}>
                    카카오로 로그인
                </button>
                <button className="naver" onClick={NaverLogin}>
                    네이버로 로그인
                </button>
                <ul>
                    <Link to="/user/signup" style={{ textDecoration: "none" }}>
                        <li>회원가입</li>
                    </Link>
                    <Link to="/user/findID" style={{ textDecoration: "none" }}>
                        <li>아이디 찾기</li>
                    </Link>
                    <Link to="/user/findPW" style={{ textDecoration: "none" }}>
                        <li>비밀번호 찾기</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Login;