import './Cart.css'
import './Findid.css';
import './Findpw.css';
import './Login.css'
import './ManageBoard.css'
import './MyPage.css'
import './Order.css'
import './OrderList.css'
import './Profile.css'
import './Signup.css'
import './Success.css'

import { Route, Routes } from "react-router-dom";

import Cart from './Cart';
import MyPage from './MyPage';
import Profile from './Profile';
import ManageBoard from './ManageBoard';
import Order from './Order';
import OrderList from './OrderList';
import Signup from './Signup';
import Login from './Login';
import Findid from './Findid';
import Findpw from './Findpw';
import Success from './Success';

function User({ cartItems, onDelete, deleteOrder, increQuantity, decreQuantity, checkedItems, orderItems, allOrder, selectedOrder, allCheck, checkChange }) {
    return (
        <Routes>
            <Route path="/cart" element={<Cart
                cartItems={cartItems}
                onDelete={onDelete}
                increQuantity={increQuantity}
                decreQuantity={decreQuantity}
                checkedItems={checkedItems}
                orderItems={orderItems}
                allOrder={allOrder}
                selectedOrder={selectedOrder}
                allCheck={allCheck}
                checkChange={checkChange}
            />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/mypage/myprofile" element={<Profile />} />
            <Route path="/mypage/manageboard" element={<ManageBoard />} />
            <Route path="/order" element={<Order cartItems={cartItems} deleteOrder={deleteOrder} orderItems={orderItems} />} />
            <Route path="/orderlist" element={<OrderList />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/findID" element={<Findid />} />
            <Route path="/findPW" element={<Findpw />} />
            <Route path="/success" element={<Success />} />
        </Routes >
    )
}

export default User;