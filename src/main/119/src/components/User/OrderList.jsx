import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Pagination({ totalPages, currentPage, onPageChange }) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <a
        key={i}
        href="#"
        className={i === currentPage ? "active" : ""}
        onClick={() => onPageChange(i)}
      >
        {i}
      </a>
    );
  }

  return (
    <div className="paginations">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &laquo;
      </button>
      {pages}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &raquo;
      </button>
    </div>
  );
}

function isWithin30Days(orderDate) {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const orderDateTime = new Date(orderDate);

  return orderDateTime >= thirtyDaysAgo;
}

export default function OrderList() {
  const navigate = useNavigate();

  const [orderLists, setOrderLists] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const paginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return orderLists.slice(startIndex, endIndex);
  };

  useEffect(() => {
    axios
      .get("/rscart/orderproductList")
      .then((response) => {
        setOrderLists(response.data);
        //console.log(`** checkdata 서버연결 성공 =>`, response.data);
      })
      .catch((err) => {
        alert(`** checkdata 서버연결 실패 => ${err.message}`);
      });
  }, []);

  function deleteOrder(order_key) {
    let url = "/rscart/deleteOrder/" + order_key;

    axios
      .delete(url)
      .then((response) => {
        alert("주문이 취소되었습니다.");
        navigate("/user/orderList");
      })
      .catch((err) => {
        if (err.response.status) alert(err.response.data);
        else alert("주문취소 실패 => " + err.message);
      });
  }

  return (
    <div className="OrderList">
      <div className="orderListtitleArea">
        <h1>주문내역조회</h1>
        <ul type="square" className="listTitle">
          <li>
            <h3>주문 상품 정보</h3>
          </li>
        </ul>
      </div>
      <div className="orderListArea">
        <div>
          <table className="orderListInfo">
            <colgroup>
              <col style={{ width: 140 }} />
              <col style={{ width: 160 }} />
              <col style={{ width: 150 }} />
              <col style={{ width: 170 }} />
              <col style={{ width: 130 }} />
              <col style={{ width: 140 }} />
              <col style={{ width: 140 }} />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">
                  주문일자
                  <br />
                  (주문번호)
                </th>
                <th scope="col">이미지</th>
                <th scope="col">상품정보</th>
                <th scope="col">수량</th>
                <th scope="col">상품별금액</th>
                <th scope="col">주문처리상태</th>
                <th scope="col">후기작성</th>
                <th scope="col">주문취소</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData().map((item) => (
                <tr>  
                  <td>
                    <span className="orderDate">
                      {new Date(item.order_date)
                        .toLocaleDateString("ko-KR", {
                          year: "2-digit",
                          month: "2-digit",
                          day: "2-digit",
                        })
                        .replace(/\./g, "")
                        .replace(/\s/g, "")}
                    </span>
                    <br />
                    <span className="orderNumber">({item.order_key})</span>
                  </td>
                  <td>
                    <div className="orderListImage">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          `/Images/products/${item.product_mainimagepath}`
                        }
                        alt={item.product_mainimagepath}
                      />
                    </div>
                  </td>
                  <td>
                    <span className="orderProduct">{item.product_name}</span>
                  </td>
                  <td>
                    <span className="orderQuantity">{item.product_cnt}</span>
                  </td>
                  <td>
                    <span className="orderPrice">
                      {(
                        item.product_kind_price * item.product_cnt
                      ).toLocaleString()}
                      원
                    </span>
                  </td>
                  <td>
                    <span className="orderState">{item.delivery_status}</span>
                  </td>
                  <td>
                    {item.delivery_status === '배송완료' ? (
                      item.product_review === 0 ? (
                        isWithin30Days(item.order_date) ? (
                          <Link to="/board/reviewWrite">
                            <input type="button" id="writeButton" value="후기쓰기" />
                          </Link>
                        ) : (
                          <span>작성일 만료</span>
                        )
                      ) : (
                        <input style={{ background: 'blue' }} type="button" id="writeButton" value="작성완료" readOnly />
                      )
                    ) : (
                      <input style={{ width: '80px', background: 'red' }} type="button" id="writeButton" value="배송 후 가능" />
                    )}
                  </td>
                  <td>
                    <input type="button" id="cancelButton" name="cancelButton"
                      onClick={() => {
                        deleteOrder(item.order_key);
                      }}
                      value="주문취소"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* 페이지네이션 UI */}
          <Pagination
            totalPages={Math.ceil(orderLists.length / itemsPerPage)}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}
