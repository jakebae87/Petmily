import { useState } from "react";
import { Route, Routes } from "react-router-dom";

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

// Test

function Main() {
    // 장바구니 상품
    const [cartItems, setCartItems] = useState([]);
    // 장바구니 체크된 상품
    const [checkedItems, setCheckedItems] = useState(
      cartItems.map((cart) => cart.product_id)
    );
    // 주문페이지 상품
    const [orderItems, setOrderItems] = useState([]);

    // 장바구니 상품 추가
    const addCart = (it) => {
        const existingCartItem = cartItems.find((item) => item.id === it.id);
        if (existingCartItem) {
            const updatedCart = cartItems.map((item) =>
                item.id === it.id
                    ? { ...item, quantity: item.quantity + it.quantity }
                    : item
            );
            setCartItems(updatedCart);
        } else {
            setCartItems([...cartItems, { ...it }]);
        }
    };

    // 장바구니 상품 삭제
    const deleteCart = (it) => {
        setCartItems(cartItems.filter((cartItems) => cartItems.id !== it.id));
    };
    
    // 주문 상품 삭제
    const deleteOrder = (it) => {
        setOrderItems(orderItems.filter((orderItems) => orderItems.id !== it.id));
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
        checkedItems.map((cart) => cartIdArray.push(cart.product_id));
        setCheckedItems(cartIdArray);
      } else {
        setCheckedItems([]);
      }
    };

    // 장바구니 전체상품 주문
    const allOrder = () => {
        setOrderItems(checkedItems);
    };

    // 장바구니 체크(선택)상품만 주문
    const selectedOrder = () => {
      const selectedOrderItems = checkedItems.filter((cart) =>
        checkedItems.includes(cart.id)
      );
        setOrderItems(selectedOrderItems);
    };

    return (
      <div className="Main">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home addCart={addCart} />} />

          {/* Products */}
          <Route
            path="/products/*"
            element={
              <Products
                addCart={addCart}
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