import React from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Profile() {

  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('/rsuser/detail');
        setUserData(response.data); // 받아온 데이터로 상태 업데이트
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile(); // 프로필 정보 가져오는 함수 호출

  }, []);


  return (
    <div className="Profile">
      <div class="profile_form">
        <h1>회원정보</h1>
        <form id="profileForm">
          <div>
            <table class="profileTable">
              <tbody>
                <tr>
                  <th>이름</th>
                  <td>
                    <input class="profile" value={userData.user_name}></input>
                  </td>
                </tr>
                <tr>
                  <th>아이디</th>
                  <td>
                    <span class="profile">{userData.id}</span>
                  </td>
                </tr>

                <tr>
                  <th>이메일</th>
                  <td>
                    <span class="profile">petmily@petmily.com</span>
                  </td>
                </tr>
                <tr>
                  <th>생년월일</th>
                  <td>
                    <div>
                      <span class="profBirth">1997</span>
                      <span class="profBirth">5</span>
                      <span class="profBirth">20</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>연락처</th>
                  <td>
                    <div>
                      <span class="profNumber">010</span>
                      <span class="profNumber">1234</span>
                      <span class="profNumber">5678</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <Link to="/user/Success"></Link><input type="submit" class="editBtn" value="수정하기" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </div>
  );
}
