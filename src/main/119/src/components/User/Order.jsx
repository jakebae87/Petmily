import React, { useState, useEffect } from "react";
import OrderItem from "./OrderItem";
import DaumPostcode from 'react-daum-postcode';
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Order({ orderItems, deleteOrder, calcProductPrice }) {
  const totalPrice = () => {
    return orderItems.reduce(
      (total, item) => total + calcProductPrice(item.product_price, item.promotion_discount) * item.product_cnt,
      0
    );
  };

  // 로그인한 회원정보
  const [loginUser, setLoginUser] = useState([]);
  // true: 주문자 정보와 동일, false: 새로운 배송지
  const [useSameAddress, setUseSameAddress] = useState(true);
  // 결제수단
  const [payMethod, setPayMethod] = useState("카드");
  // 회원이름
  const [orderName, setOrderName] = useState("");
  // 회원전화번호
  const [orderPhone, setOrderPhone] = useState("");
  // 회원우편번호
  const [orderZipcode, setOrderZipcode] = useState("");
  // 회원주소
  const [orderAddr, setOrderAddr] = useState("");
  // 회원상세주소
  const [orderAddrD, setOrderAddrD] = useState("");
  // 배송요청사항
  const [orderReq, setOrderReq] = useState("조심히 안전하게 와주세요");
  
  // 주문완료시 이동 링크
  const navigate = useNavigate();

  // 회원 정보 불러오기
  useEffect(() => {
    const userFromSession = JSON.parse(sessionStorage.getItem("loggedInUser"));

    if (userFromSession) {
      setLoginUser(userFromSession);
      setOrderName(userFromSession.user_name);
      setOrderPhone(userFromSession.user_phone);
      setOrderZipcode(userFromSession.zipcode);
      setOrderAddr(userFromSession.addr);
      setOrderAddrD(userFromSession.addr_detail);
    } else {
      alert("로그인하세요");
    }
  }, []);

  //주소 api
  const [isPostOpen, setIsPostOpen] = useState(false);

  const handleComplete = (data) => {
      let fullAddress = data.address;
      let extraAddress = "";

      if (data.addressType === "R") {
          if (data.bname !== "") {
              extraAddress += data.bname;
          }
          if (data.buildingName !== "") {
              extraAddress +=
                  extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
          }
          fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
      }

      setOrderZipcode(data.zonecode);
      setOrderAddr(fullAddress);
      setOrderAddrD(orderAddrD);
      setIsPostOpen(false);
  };
  const togglePost = (e) => {
      e.preventDefault();
      setIsPostOpen(!isPostOpen);
  };

  // 결제 방법을 선택할 때 호출되는 함수입니다.
  const payMethodChange = (e) => {
    const selectedMethod = e.target.value;
    setPayMethod(selectedMethod);
  };

  // 주문
  function order() {
    // 주문내역 DTO
    const OrderProductDTO = {
      user_id: loginUser.user_id,
      order_total_price: totalPrice() > 50000 ? totalPrice() : totalPrice() + 3000,
      pay_method: payMethod,
      order_name: orderName,
      order_email: loginUser.user_email,
      order_tel: orderPhone,
      order_zipcode: orderZipcode,
      order_addr: orderAddr,
      order_addr_detail: orderAddrD,
      order_req: orderReq,
      orderItems: JSON.stringify(orderItems)
  };
  
  axios.post('/rscart/order', OrderProductDTO)
  .then(response => {
    alert("주문완료이 완료되었습니다.");
    navigate("/");
  })
  .catch(error => {
    alert('주문에 실패했습니다. 다시 시도해주세요.');
  });
}

  return (
    <div>
      <div className="Order">
        <div className="orderTitleArea">
          <h1>주문</h1>
          <ul type="square" className="listTitle">
            <li>
              <h3>주문상품</h3>
            </li>
          </ul>
        </div>
        <div className="orderListArea">
          <div>
            <table className="orderCartInfo">
              <colgroup>
                <col style={{ width: 280 }} />
                <col style={{ width: "auto" }} />
                <col style={{ width: 150 }} />
                <col style={{ width: 150 }} />
                <col style={{ width: 140 }} />
                <col style={{ width: 130 }} />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">이미지</th>
                  <th scope="col">상품명</th>
                  <th scope="col">판매가</th>
                  <th scope="col">수량</th>
                  <th scope="col">합계</th>
                  <th scope="col">선택</th>
                </tr>
              </thead>
              <OrderItem orderItems={orderItems} deleteOrder={deleteOrder} calcProductPrice={calcProductPrice} />
              <tfoot>
                <tr>
                  <th colSpan="7">
                    <span>상품구매금액 </span>
                    <strong>
                      <span className="productPrice">
                      {totalPrice() ? `${totalPrice().toLocaleString()}원` : "가격 정보 없음"}
                      </span>
                    </strong>
                    <span className="deliveryPrice"> + 배송비 {totalPrice() > 50000 ? "무료" : "3,000원"} = </span>
                    <span>합계 : </span>
                    <strong>
                      <span className="cartPrice">
                        {totalPrice() > 50000 ? `${totalPrice().toLocaleString()}원` : `${(totalPrice() + 3000).toLocaleString()}원`}
                      </span>
                    </strong>
                  </th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <form id="orderForm">
          <div className="orderArea">
            <ul type="square" className="listTitle">
              <li>
                <h3>주문 정보</h3>
              </li>
            </ul>
            <div className="cartProcess2">
              <ul>
                <li>장바구니</li>
                <li>주문서작성</li>
                <li>결제완료</li>
                <li>주문완료</li>
              </ul>
            </div>
            <div className="orderInfo">
              <table className="orderInfoTable">
                <tbody>
                  <tr>
                    <th>
                      <label for="name">
                        주문하시는 분<span className="thRed">*</span>
                      </label>
                    </th>
                    <td>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={loginUser.user_name}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label for="secondPhoneNumber">
                        휴대전화<span className="thRed">*</span>
                      </label>
                    </th>
                    <td>
                      <input
                        type="text"
                        id="firstPhoneNumber"
                        name="firstPhoneNumber"
                        value={loginUser.user_phone}
                        size="10"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      이메일<span className="thRed">*</span>
                    </th>
                    <td>
                      <label>
                        <input
                          type="text"
                          name="email_id"
                          value={loginUser.user_email}
                          size="20"
                          required
                        />
                      </label>
                      <ul className="emailAlert">
                        <li>- 이메일을 통해 주문처리과정을 보내드립니다.</li>
                        <li>
                          - 이메일 주소란에는 반드시 수신가능한 이메일주소를
                          입력해 주세요
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="deliveryArea">
            <ul type="square" className="listTitle">
              <li>
                <h3>배송 정보</h3>
              </li>
            </ul>
            <div className="deliveryInfo">
              <table className="deliveryInfoTable">
                <tbody>
                  <tr>
                    <th>
                      배송지 선택<span className="thRed">*</span>
                    </th>
                    <td>
                      <label>
                        <input
                          type="radio"
                          name="deliveryAddress"
                          checked={useSameAddress}
                          onChange={() => {
                            setUseSameAddress(true);
                            setOrderName(loginUser.user_name);
                            setOrderPhone(loginUser.user_phone);
                            setOrderZipcode(loginUser.zipcode);
                            setOrderAddr(loginUser.addr);
                            setOrderAddrD(loginUser.addr_detail);
                          }}
                        />
                        &nbsp;
                        <span>주문자 정보와 동일</span>
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="deliveryAddress"
                          checked={!useSameAddress}
                          onChange={() => {
                            setUseSameAddress(false);
                            setOrderName("");
                            setOrderPhone("");
                            setOrderZipcode("");
                            setOrderAddr("");
                            setOrderAddrD("");
                            setOrderReq(orderReq);
                          }}
                        />
                        &nbsp;
                        <span>새로운 배송지</span>
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label for="name">
                        받으시는 분<span className="thRed">*</span>
                      </label>
                    </th>
                    <td>
                      <input
                        type="text"
                        id="user_name"
                        name="user_name"
                        size="5"
                        value={orderName}
                        onChange={(e) => setOrderName(e.target.value)}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      주소<span className="thRed">*</span>
                    </th>
                    <td>
                      <input
                        type="text"
                        id="order_zipcode"
                        name="order_zipcode"
                        size="8"
                        minlength="5"
                        maxlength="5"
                        value={orderZipcode}
                        onChange={(e) => setOrderZipcode(e.target.value)}
                      />
                      <button className="postCodeFind" onClick={togglePost}>
                          {isPostOpen ? '우편번호 닫기' : '우편번호 찾기'}
                      </button>
                      {isPostOpen && (
                          <div>
                              <DaumPostcode onComplete={handleComplete} autoClose={true} />
                          </div>
                      )}
                    </td>
                    <td>
                      <input
                        type="text"
                        id="order_addr"
                        name="order_addr"
                        size="50"
                        value={orderAddr}
                        onChange={(e) => setOrderAddr(e.target.value)}
                        required
                      />
                      기본주소
                    </td>
                    <td>
                      <input
                        type="text"
                        id="order_addr_detail"
                        name="order_addr_detail"
                        value={orderAddrD}
                        onChange={(e) => setOrderAddrD(e.target.value)}
                      />
                      상세주소
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label for="secondPhoneNumber">
                        휴대전화<span className="thRed">*</span>
                      </label>
                    </th>
                    <td>
                      <input
                        type="text"
                        id="user_tel"
                        name="user_tel"
                        value={orderPhone}
                        onChange={(e) => setOrderPhone(e.target.value)}
                        size="10"
                      />
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label for="deliveryMessage">배송메시지</label>
                    </th>
                    <td>
                      <textarea
                        id="order_req"
                        name="order_req"
                        rows="3"
                        value={orderReq}
                      ></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="payInfoArea">
            <ul type="square" className="listTitle">
              <li>
                <h3>결제 금액 / 방법</h3>
              </li>
            </ul>
            <div>
              <table className="payTable">
                <thead>
                  <tr>
                    <th>총 결제예정 금액</th>
                    <th>결제방법</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {/* <span type="text" id="order_total_price" name="order_total_price" value={(totalPrice() + 3000).toLocaleString()} /> */}
                      <span>{(totalPrice() + 3000).toLocaleString()}</span>
                    </td>
                    <td>
                      <select id="pay_method" name="pay_method" value={payMethod} onChange={payMethodChange}>
                        <option value="카드">카드</option>
                        <option value="계좌이체">계좌이체</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="payArea">
            <Link to="/">
              <button className="productPay" onClick={order}>
                결제하기
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
