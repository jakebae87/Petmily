import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
                if (err.response.status == 401) {
                    alert("~~ id 또는 password 오류!! 다시하세요 ~~");
                } else {
                    alert("~~ 시스템 오류, 잠시후 다시하세요 => " + err.message);
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

    const KakaoLogin = () => {
        const REST_API_KEY = "36c72e69dcc46636ff1acefe07171573";
        const REDIERCT_URI2 = "http://localhost:3000/KakaoLogin";
        const KAKAO_AUTH_URL = `https://kauth.kakao.com/KakaoLogin/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIERCT_URI2}&response_type=code`;

        window.location.href = KAKAO_AUTH_URL;
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
                <button className="kakao" onClick={KakaoLogin}>
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