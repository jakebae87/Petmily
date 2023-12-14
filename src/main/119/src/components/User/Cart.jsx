import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import axios from "axios";

export default function Cart({ cartItems, setCartItems, nothing, setNothing, onDelete, increQuantity, decreQuantity, checkChange, checkedItems, allCheck, allOrder, selectedOrder, calcProductPrice }) {
  // 장바구니 불러오기
  useEffect(() => {
    const loggedInUser = sessionStorage.getItem("loggedInUser");

    if (loggedInUser) {
      axios
        .get("/rscart/cartList")
        .then((response) => {
          setCartItems(response.data);
        })
        .catch((err) => {
          alert(`** checkdata 서버연결 실패 => ${err.message}`);
        });
    } else {
      alert("로그인 해주세요");
    }
  }, [setCartItems, nothing]);

  // 체크된 상품 가격
  const totalPrice = () => {
    const selectedTotalPrice = checkedItems.reduce((total, item) => {
      const selectedItem = cartItems.find((cart) => cart.product_id === item);
      if (selectedItem) {
        return (
          total +
          calcProductPrice(
            selectedItem.product_price,
            selectedItem.promotion_discount
          ) *
            selectedItem.product_cnt
        );
      }
      return total;
    }, 0);
    return selectedTotalPrice;
  };

  const cartItem = cartItems.map((item) => (
    <CartItem
      user_id={item.user_id}
      product_id={item.product_id}
      product_cnt={item.product_cnt}
      product_name={item.product_name}
      product_price={item.product_price}
      promotion_discount={item.promotion_discount}
      product_mainimagepath={item.product_mainimagepath}
      cartItems={cartItems}
      nothing={nothing}
      setNothing={setNothing}
      onDelete={onDelete}
      checkChange={checkChange}
      checkedItems={checkedItems}
      increQuantity={increQuantity}
      decreQuantity={decreQuantity}
      calcProductPrice={calcProductPrice}
    />
  ));

  return (
    <div className="Cart">
      <div className="titleArea">
        <ul type="square">
          <li>
            <h1>장바구니</h1>
          </li>
        </ul>
      </div>
      <div className="cartProcess">
        <ul>
          <li>장바구니</li>
          <li>주문서작성</li>
          <li>결제완료</li>
          <li>주문완료</li>
        </ul>
      </div>
      <div className="cartMain">
        <div className="cartProduct">
          <table className="cartInfo">
            <colgroup>
              <col style={{ width: 100 }} />
              <col style={{ width: 280 }} />
              <col style={{ width: "auto" }} />
              <col style={{ width: 150 }} />
              <col style={{ width: 120 }} />
              <col style={{ width: 130 }} />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">
                  <input
                    type="checkbox"
                    onChange={(e) => allCheck(e.target.checked)}
                    checked={
                      checkedItems.length === cartItems.length ? true : false
                    }
                  />
                </th>
                <th scope="col">이미지</th>
                <th scope="col">상품명</th>
                <th scope="col">판매가</th>
                <th scope="col">수량</th>
                <th scope="col">합계</th>
                <th scope="col">선택</th>
              </tr>
            </thead>
            <tbody>{cartItem}</tbody>
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
                  <span className="deliveryPrice"> + 배송비 { totalPrice() > 50000 ? "무료" : "3,000원"  } = </span>
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
        <div className="cartOrder">
          <Link to={`/user/order`}>
            <button
              className="allOrder"
              onClick={() => {
                allOrder();
              }}
            >
              전체상품주문
            </button>
          </Link>
          <Link to={`/user/order`}>
            <button
              className="selectOrder"
              onClick={() => {
                selectedOrder();
              }}
            >
              선택상품주문
            </button>
          </Link>
          <Link to="/products/all/all">
            <button className="returnShop">쇼핑계속하기</button>
          </Link>
        </div>
        <div className="Guide">
          <h3>이용안내</h3>
          <div className="cartGuideInner">
            <h4>장바구니 이용안내</h4>
            <ol className="cartGuide">
              <li>
                [쇼핑계속하기] 버튼을 누르시면 상품목록페이지로 이동하여 쇼핑을
                계속 하실 수 있습니다.
              </li>
              <li>
                장바구니를 이용하여 원하시는 상품을 등록하시거나 주문하실 수
                있습니다.
              </li>
            </ol>
            <h4>무이자할부 이용안내</h4>
            <ol className="payGuide">
              <li>
                상품별 무이자할부 혜택을 받으시려면 무이자할부 상품만 선택하여
                [주문하기] 버튼을 눌러 주문/결제 하시면 됩니다.
              </li>
              <li>
                [전체 상품 주문] 버튼을 누르시면 장바구니의 구분없이 선택된 모든
                상품에 대한 주문/결제가 이루어집니다.
              </li>
              <li>
                단, 전체 상품을 주문/결제하실 경우, 상품별 무이자할부 혜택을
                받으실 수 없습니다.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
