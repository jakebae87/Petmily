import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function OrderList() {

  const [orderLists, setOrderLists] = useState([]);

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
              <col style={{ width: 150 }} />
              <col style={{ width: 200 }} />
              <col style={{ width: "auto" }} />
              <col style={{ width: 170 }} />
              <col style={{ width: 140 }} />
              <col style={{ width: 150 }} />
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
              </tr>
            </thead>
            <tbody>
              {orderLists.map((item) => (
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
                  <td><Link to="/board/reviewWrite"><input
                    type="button"
                    id="writeButton"
                    name="writeButton"
                    value="글쓰기"
                  /></Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
