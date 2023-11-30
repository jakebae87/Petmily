import { Link } from 'react-router-dom';

function Login () {
    // const onKeyDown =(e)=>{
    //     if(e.keyCode === 13){
    //         onSubmit();
    //     }
    // };
    const onSubmit=(e)=>{
        e.preventDefault();
    }

    const NaverLogin =()=>{
        const NAVER_CLIENT_ID ='X8MsAj1qeOGBGpWCrM5B';
        const REDIERCT_URI ='http://localhost:3000/NaverLogin';
        const STATE ='false';
        const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIERCT_URI}`
        
        window.location.href=NAVER_AUTH_URL;
    }

    const KakaoLogin=()=>{
        const REST_API_KEY ='36c72e69dcc46636ff1acefe07171573';
        const REDIERCT_URI2 ='http://localhost:3000/KakaoLogin';
        const KAKAO_AUTH_URL =`https://kauth.kakao.com/KakaoLogin/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIERCT_URI2}&response_type=code`;

        window.location.href = KAKAO_AUTH_URL;
    }

    return (
        <div className="Login">
        <div className="cateTitle">
            <h1>로그인</h1>
        </div>

        <div className="login_">
            <form method="post" action="#" id="login-form">
                <input type="text" className="loginbox" name="userName" placeholder="아이디" />
                <input type="password" className="loginbox" name="userPassword" placeholder="비밀번호" />
                <input onClick={onSubmit} type="submit" className="loginBtn" value="로그인" />
            </form>
            <hr/>
            <button className="kakao" onClick={KakaoLogin}>카카오로 로그인</button>
            <button className="naver" onClick={NaverLogin}>네이버로 로그인</button>
            <ul>
                <Link to='/user/signup' style={{textDecoration: 'none'}}><li>회원가입</li></Link>
                <Link to="/user/findID" style={{textDecoration: 'none'}}><li>아이디 찾기</li></Link>
                <Link to="/user/findPW" style={{textDecoration: 'none'}}><li>비밀번호 찾기</li></Link>
            </ul>
        </div>
    </div>
    )
};

export default Login;