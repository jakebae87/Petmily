import React, { useState, useEffect } from "react";
import OrderItem from "./OrderItem";
import axios from "axios";

export default function Order({ orderItems, deleteOrder }) {
  const totalPrice = () => {
    return orderItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // 로그인한 회원정보
  const [loginUser, setLoginUser] = useState([]);
  // true: 주문자 정보와 동일, false: 새로운 배송지
  const [useSameAddress, setUseSameAddress] = useState(true);
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

  // 회원 리스트 불러오기
  useEffect(() => {
    const userFromSession = JSON.parse(sessionStorage.getItem("loginID"));

    if (userFromSession) {
      setLoginUser(userFromSession);
    } else {
      alert("로그인하세요");
    }
  }, []);

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
              <OrderItem orderItems={orderItems} deleteOrder={deleteOrder} />
              <tfoot>
                <tr>
                  <th colSpan="7">
                    <span>상품구매금액 </span>
                    <strong>
                      <span className="productPrice">
                        {totalPrice().toLocaleString()}
                      </span>
                      원
                    </strong>
                    <span className="deliveryPrice"> + 배송비 3,000원 = </span>
                    <span>합계 : </span>
                    <strong>
                      <span className="cartPrice">
                        {(totalPrice() + 3000).toLocaleString()}
                      </span>
                      원
                    </strong>
                  </th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        <form action="post" id="orderForm">
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
                        value={setLoginUser.user_name}
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
                      {/* <input
                          type="text"
                          id="firstPhoneNumber"
                          name="firstPhoneNumber"
                          value="010"
                          size="1"
                          readonly
                        />
                        &ndash;
                        <input
                          type="text"
                          id="secondPhoneNumber"
                          name="secondPhoneNumber"
                          size="1"
                          minlength="3"
                          maxlength="4"
                          required
                        />
                        &ndash;
                        <input
                          type="text"
                          id="lastPhoneNumber"
                          name="lastPhoneNumber"
                          size="1"
                          minlength="4"
                          maxlength="4"
                          required
                        /> */}
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
                        {/* @ */}
                      </label>
                      {/* <input type="text" name="email_address" />
                        <select name="email_domain">
                          <option value="직접입력">직접입력</option>
                          <option value="naver.com">naver.com</option>
                          <option value="gmail.com">gmail.com</option>
                          <option value="daum.net">daum.net</option>
                        </select> */}
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
                        id="ordername"
                        name="ordername"
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
                        id="postCode"
                        name="postCode"
                        size="8"
                        minlength="5"
                        maxlength="5"
                        value={orderZipcode}
                        onChange={(e) => setOrderZipcode(e.target.value)}
                      />
                      <input
                        type="submit"
                        name="postCodeFind"
                        value="우편번호"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        size="30"
                        value={orderAddr}
                        onChange={(e) => setOrderAddr(e.target.value)}
                        required
                      />
                      기본주소
                    </td>
                    <td>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={orderAddrD}
                        onChange={(e) => setOrderAddrD(e.target.value)}
                      />
                      나머지주소(선택입력가능)
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
                        value={orderPhone}
                        onChange={(e) => setOrderPhone(e.target.value)}
                        size="10"
                      />
                      {/* <input
                          type="text"
                          id="firstPhoneNumber"
                          name="firstPhoneNumber"
                          value="010"
                          size="1"
                          readonly
                        />
                        &ndash;
                        <input
                          type="text"
                          id="secondPhoneNumber"
                          name="secondPhoneNumber"
                          size="1"
                          minlength="3"
                          maxlength="4"
                          required
                        />
                        &ndash;
                        <input
                          type="text"
                          id="lastPhoneNumber"
                          name="lastPhoneNumber"
                          size="1"
                          minlength="4"
                          maxlength="4"
                          required
                        /> */}
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <label for="deliveryMessage">배송메시지</label>
                    </th>
                    <td>
                      <textarea
                        name="deliveryMessage"
                        id="deliveryMessage"
                        rows="3"
                        value="조심히 안전하게 와주세요"
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
                <h3>결제 예정 금액</h3>
              </li>
            </ul>
            <div>
              <table className="payTable">
                <thead>
                  <tr>
                    <th>총 주문금액</th>
                    <th>총 할인 + 부가결제금액</th>
                    <th>총 결제예정 금액</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span>{(totalPrice() + 3000).toLocaleString()}</span>원
                    </td>
                    <td>
                      - <span>0</span>원
                    </td>
                    <td>
                      <span>{(totalPrice() + 3000).toLocaleString()}</span>원
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="payMethod">
            결제방법
            <div></div>
          </div>

          <div className="payArea">
            <button type="submit" className="productPay">
              결제하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
