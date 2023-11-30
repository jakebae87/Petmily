import React from "react";

export default function Profile() {
  return (
    <div className="Profile">
      <div class="profile_form">
        <h1>회원정보</h1>

        <form action="#" id="profileForm">
          <div>
            <table class="profileTable">
              <tbody>
                <tr>
                  <th>이름</th>
                  <td>
                    <span class="profile">김펫밀리</span>
                  </td>
                </tr>
                <tr>
                  <th>아이디</th>
                  <td>
                    <span class="profile">Petmily</span>
                  </td>
                </tr>
                <tr>
                  <th>비밀번호</th>
                  <td>
                    <span class="profile">********</span>
                  </td>
                </tr>
                <tr>
                  <th>비밀번호 확인</th>
                  <td>
                    <span class="profile">********</span>
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
                    <input type="submit" class="editBtn" value="수정하기" />
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
