import axios from 'axios'
import React from 'react';
import { useState } from 'react';

function Findpw() {

    // const onKeyDown =(e)=>{
    //     if(e.keyCode === 13){
    //         onSubmit();
    //     }
    // };
    const [userId, setUserId] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        const url = `/rsuser/Findpw/${userId}`;
        const data = {
            user_id: userId,
            user_email: userEmail
        };

        axios.post(url, data)
            .then(response => {
                if (response.data === '임시 비밀번호가 이메일로 전송되었습니다.') {
                    alert('임시 비밀번호가 이메일로 전송되었습니다.');
                } else {
                    alert('해당 정보로 비밀번호를 찾을 수 없습니다.');
                }
            })
            .catch(error => {
                console.error('비밀번호 찾기 실패:', error);
                alert('비밀번호를 찾을 수 없습니다.');
            });
    }

    return (
        <div className="Findpw">
            <div class="cateTitle">
                <h1>비밀번호찾기</h1>
            </div>

            <div className="find_PW">
                <form method="post" onSubmit={onSubmit} id="findPW-form">
                    <input value={userId} onChange={(e) => setUserId(e.target.value)} type="text" className="findpwbox" name="userId" placeholder="아이디" />
                    <input value={userEmail} onChange={(e) => setUserEmail(e.target.value)} type="email" className="findpwbox" name="userEmail" placeholder="이메일" />
                    <input type="submit" className="findBtn" value="비밀번호찾기" />
                </form>
            </div>
        </div>
    )
};

export default Findpw;