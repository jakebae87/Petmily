import { Link } from 'react-router-dom';


function Success() {
    return (
        <div className='Success'>
            <div className='Successform'>
                <h2>회원가입을 축하드립니다!</h2>
                <p>❤즐거운 쇼핑 되세요!</p>
                <div className='gotologin'>
                    <Link to="/user/Login"><button className='login-btn'>로그인하러가기</button></Link>
                </div>
            </div>
        </div>
    )
};

export default Success;