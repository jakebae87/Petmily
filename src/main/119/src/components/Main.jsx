import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

// Home
import Home from "./Home/Home";

// Products
import Products from "./Products/Products";

// Policy
import Policy from "./Policy/Policy";

// User
import User from "./User/User";

// Community
import Community from "./Community/Community";

// Board
import Board from "./Board/Board";

// Event
import Event from "./Event/Event";

// 상품 할인적용된 최종가격
const calcProductPrice = (productPrice, promotionDiscount) => {
  if (promotionDiscount) {
    const discountedPrice = Math.floor(productPrice - (productPrice * promotionDiscount / 100));
    return discountedPrice;
  } else {
    return productPrice;
  }
}

function Main() {
  
  // 장바구니 상품
  const [cartItems, setCartItems] = useState([]);
  // 장바구니 무한루프 방지용
  const [nothing, setNothing] = useState(1);

  // useEffect(() => {
  //   const loggedInUser = sessionStorage.getItem('loggedInUser');
  
  //   if (loggedInUser) {
  //     axios
  //       .get("/rscart/cartList")
  //       .then((response) => {
  //         setCartItems(response.data);
  //       })
  //       .catch((err) => {
  //         alert(`** checkdata 서버연결 실패 => ${err.message}`);
  //       });
  //   }
  // }, [setCartItems, nothing]);

  // 장바구니 체크된 상품
  const [checkedItems, setCheckedItems] = useState(
    cartItems.map((cart) => cart.product_id)
  );

  // 주문페이지 상품
  const [orderItems, setOrderItems] = useState([]);

  // 장바구니 상품 추가
  const addCart = (it) => {
    const existingCartItem = cartItems.find((item) => item.product_id === it.product_id);
    if (existingCartItem) {
      const updatedCart = cartItems.map((item) =>
        item.product_id === it.product_id
          ? { ...item, product_cnt: item.product_cnt + it.product_cnt }
          : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...it }]);
    }
  };

  // 바로 주문
  const addOrder = (it) => {
    const existingCartItem = orderItems.find(
      (item) => item.product_id === it.product_id
    );
    if (existingCartItem) {
      const updatedCart = orderItems.map((item) =>
        item.product_id === it.product_id
          ? { ...item, product_cnt: item.product_cnt + it.product_cnt }
          : item
      );
      setOrderItems(updatedCart);
    } else {
      setOrderItems([...orderItems, { ...it }]);
    }
  };

  // 장바구니 상품 삭제
  const deleteCart = (it) => {
    setCartItems(cartItems.filter((cartItems) => cartItems.id !== it.id));
  };

  // 주문 상품 삭제
  const deleteOrder = (it) => {
    setOrderItems(
      orderItems.filter((orderItems) => orderItems.product_id !== it.product_id)
    );
  };

  // 수량 up
  const increQuantity = (it) => {
    const updatedCart = cartItems.map((cartItem) =>
      cartItem.id === it.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCartItems(updatedCart);
  };

  // 수량 down
  const decreQuantity = (it) => {
    if (it.quantity > 1) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.id === it.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      setCartItems(updatedCart);
    }
  };

  // 각 상품 체크
  const checkChange = (e, productId) => {
    if (e.target.checked) {
      setCheckedItems([...checkedItems, productId]);
    } else {
      setCheckedItems(checkedItems.filter((cartId) => cartId !== productId));
    }
  };

  // 전체 상품 체크
  const allCheck = (checked) => {
    if (checked) {
      const cartIdArray = [];
      cartItems.map((cart) => cartIdArray.push(cart.product_id));
      setCheckedItems(cartIdArray);
    } else {
      setCheckedItems([]);
    }
  };

  // 장바구니 전체상품 주문
  const allOrder = () => {
    setOrderItems(cartItems);
  };

  // 장바구니 체크(선택)상품만 주문
  const selectedOrder = () => {
    const selectedOrderItems = cartItems.filter((cart) =>
      checkedItems.includes(cart.product_id)
    );
    setOrderItems(selectedOrderItems);
  };

  return (
    <div className="Main">
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <Home calcProductPrice={calcProductPrice} addCart={addCart} />
          }
        />

        {/* Products */}
        <Route
          path="/products/*"
          element={
            <Products
              calcProductPrice={calcProductPrice}
              addCart={addCart}
              addOrder={addOrder}
              nothing={nothing}
              setNothing={setNothing}
              setCartItems={setCartItems}
              increQuantity={increQuantity}
              decreQuantity={decreQuantity}
            />
          }
        />

        {/* Policy */}
        <Route path="/policy/*" element={<Policy />} />

        {/* User */}
        <Route
          path="/user/*"
          element={
            <User
              cartItems={cartItems}
              setCartItems={setCartItems}
              nothing={nothing}
              setNothing={setNothing}
              addCart={addCart}
              onDelete={deleteCart}
              deleteOrder={deleteOrder}
              increQuantity={increQuantity}
              decreQuantity={decreQuantity}
              checkedItems={checkedItems}
              orderItems={orderItems}
              allOrder={allOrder}
              selectedOrder={selectedOrder}
              allCheck={allCheck}
              checkChange={checkChange}
              calcProductPrice={calcProductPrice}
            />
          }
        />

        {/* Community */}
        <Route path="/community/*" element={<Community />} />

        {/* Board */}
        <Route path="/board/*" element={<Board />} />

        {/* Event */}
        <Route path="/event" element={<Event />} />
      </Routes>
    </div>
  );
}

export default Main;
