import { Link } from "react-router-dom";

// 이미지
import order from "../../assets/Images/mypage/order.png";
import profile from "../../assets/Images/mypage/profile.png";
import board from "../../assets/Images/mypage/board.png";
import cart from "../../assets/Images/mypage/cart.png";

export default function MyPage() {
  return (
    <div className="MyPage">
      <div className="mypageTitleArea">
        <ul type="square">
          <h1>마이 페이지</h1>
          <li>
            <div>
              주문처리 현황<span>(최근 3개월 기준)</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="myOrder">
        <div className="beforePay">
          <div>
            <span>
              <Link to="/user/orderList">
                <a href="./orderList.html">0</a>
              </Link>
            </span>
          </div>
          <div>
            <strong>입금전</strong>
          </div>
        </div>
        <div className="setDelivery">
          <div>
            <span>
              <Link to="/user/orderList">
                <a href="./orderList.html">0</a>
              </Link>
            </span>
          </div>
          <div>
            <strong>배송준비중</strong>
          </div>
        </div>
        <div className="delivering">
          <div>
            <span>
              <Link to="/user/orderList">
                <a href="./orderList.html">0</a>
              </Link>
            </span>
          </div>
          <div>
            <strong>배송중</strong>
          </div>
        </div>
        <div className="delivered">
          <div>
            <span>
              <Link to="/user/orderList">
                <a href="./orderList.html">0</a>
              </Link>
            </span>
          </div>
          <div>
            <strong>배송완료</strong>
          </div>
        </div>
        <div className="cancelExchangeRefund">
          <ul>
            <li className="cancel">
              <span>
                <strong>취소 </strong>
              </span>
              <span>
                <Link to="/user/orderList">
                  <a href="./orderList.html">0</a>
                </Link>
              </span>
            </li>
            <li className="exchange">
              <span>
                <strong>환불 </strong>
              </span>
              <span>
                <Link to="/user/orderList">
                  <a href="./orderList.html">0</a>
                </Link>
              </span>
            </li>
            <li className="refund">
              <span>
                <strong>반품 </strong>
              </span>
              <span>
                <Link to="/user/orderList">
                  <a href="./orderList.html">0</a>
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="shopMain">
        <Link to="/user/orderList">
          <a href="" className="orderList">
            <div className="orderListImg">
              <img src={order} alt="" />
            </div>
            <strong></strong>
            <span>주문내역 조회</span>
            <p>고객님의 주문내역을 확인하실 수 있습니다.</p>
          </a>
        </Link>
        <Link to="/user/mypage/myprofile">
          <a href="" className="profil">
            <div className="orderListImg">
              <img src={profile} alt="" />
            </div>
            <strong></strong>
            <span>회원 정보</span>
            <p>회원이신 고객님의 개인정보를 관리하는 공간입니다.</p>
          </a>
        </Link>
        <Link to="/user/mypage/manageBoard/inquiry">
          <a href="" className="board">
            <div className="orderListImg">
              <img src={board} alt="" />
            </div>
            <strong></strong>
            <span>게시글 관리</span>
            <p>고객님께서 작성하신 게시물을 관리하는 공간입니다.</p>
          </a>
        </Link>
        <Link to="/user/cart">
          <a href="" className="cart">
            <div className="orderListImg">
              <img src={cart} alt="" />
            </div>
            <strong></strong>
            <span>장바구니</span>
            <p>장바구니에 등록하신 상품의 목록을 보여드립니다.</p>
          </a>
        </Link>
      </div>
    </div>
  );
}
