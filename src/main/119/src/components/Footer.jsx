import "./Footer.css";
import React from "react";
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="Footer">
      <div>
        <h1>Petmily</h1>
        <ul>
          <li>Tel : XXX-XXX-XXXX</li>
          <li>Email : Email@mail.com</li>
          <li>Address : XX시 XX구 XX동 XXX</li>
          <li>CEO : Jeonghyeon BaeㅣSora KimㅣHuisang EunㅣSeungho Choi</li>
        </ul>
      </div>

      <div>
        <div>
          <h3>POLICY</h3>
          <ul>
            <li><Link to="/policy/tos">이용약관</Link></li>
            <li><Link to="/policy/privacy">개인정보처리방침</Link></li>
            <li><Link to="/policy/guide">이용안내</Link></li>
            <li><Link to="/policy/refund">반품, 환불규정</Link></li>
          </ul>
        </div>

        <div>
          <h3>C/S CENTER</h3>
          <ul>
            <li></li>
            <li>MON-FRIㅣ09:30 - 17:00</li>
            <li>LUNCH ㅣ 12:30 - 13:30</li>
            <li>SAT, SUN, HOLIDAY OFF</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Footer);
