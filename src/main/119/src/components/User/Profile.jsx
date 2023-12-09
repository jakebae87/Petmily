import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
export default function Profile() {

  const navigate = useNavigate();
  // 회원이름
  const [userName, setUserName] = useState("");
  // 회원아이디
  const [userId, setUserId] = useState("");
  // 회원이메일
  const [userEmail, setUserEmail] = useState("");
  // 회원생일
  const [userBirthday, setUserBrithday] = useState("");
  // 회원전화번호
  const [userPhone, setUserPhone] = useState("");
  // 회원우편번호
  const [Zipcode, setZipcode] = useState("");
  // 회원주소
  const [Addr, setAddr] = useState("");
  // 회원상세주소
  const [AddrD, setAddrD] = useState("");

  // 회원 정보 불러오기
  useEffect(() => {
    const userFromSession = JSON.parse(sessionStorage.getItem("loggedInUser"));

    if (userFromSession) {
      setUserName(userFromSession.user_name);
      setUserId(userFromSession.user_id);
      setUserEmail(userFromSession.user_email);
      setUserBrithday(userFromSession.user_birthday);
      setUserPhone(userFromSession.user_phone);
      setZipcode(userFromSession.zipcode);
      setAddr(userFromSession.addr);
      setAddrD(userFromSession.addr_detail);
    } else {
      alert("로그인하세요");
    }
  }, []);

  //수정하기
  

  //회원탈퇴
  const ondelete = (user_id) => {

    const confirmDelete = window.confirm("정말 탈퇴하시겠습니까?");
    if (confirmDelete) {
      axios.delete(`/rsuser/selfDelete/${user_id}`)
        .then(response => {
          alert("회원탈퇴가 완료되었습니다");
          sessionStorage.removeItem("loggedInUser"); // 세션에서 사용자 정보 삭제
          navigate("/"); // 홈 페이지로 이동
        })
        .catch(error => {
          console.error("회원탈퇴 실패:", error);
        });
    } else {
      alert("탈퇴 취소되었습니다");
    }
  };

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
                    <input class="profile" value={userName}></input>
                  </td>
                </tr>
                <tr>
                  <th>아이디</th>
                  <td>
                    <input class="profile" value={userId}></input>
                  </td>
                </tr>

                <tr>
                  <th>이메일</th>
                  <td>
                    <input class="profile" value={userEmail}></input>
                  </td>
                </tr>
                <tr>
                  <th>생년월일</th>
                  <td>
                    <div>
                      <input class="profile" value={userBirthday}></input>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>연락처</th>
                  <td>
                    <div>
                      <input class="profile" value={userPhone}></input>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>우편번호</th>
                  <td>
                    <div>
                      <input class="profile" value={Zipcode}></input>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>주소</th>
                  <td>
                    <div>
                      <input class="profile" value={Addr}></input>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>상세주소</th>
                  <td>
                    <div>
                      <input class="profile" value={AddrD}></input>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
            <Link to="/user/Update"><input type="submit" class="editBtn" value="수정하기" /></Link>
            <input onClick={() => ondelete(userId)} type="submit" class="deleteBtn" value="회원탈퇴" />
          </div>
        </form>
      </div>
    </div>
  );
}
