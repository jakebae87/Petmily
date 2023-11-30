import React from "react";

// 이미지
import product1 from "../../assets/Images/product1.jpg";
import product2 from "../../assets/Images/products/clothes_dog.jpg";

export default function OrderList() {
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
              <col style={{ width: 100 }} />
              <col style={{ width: 180 }} />
              <col style={{ width: "auto" }} />
              <col style={{ width: 150 }} />
              <col style={{ width: 120 }} />
              <col style={{ width: 130 }} />
              <col style={{ width: 130 }} />
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
                <th scope="col">상품구매금액</th>
                <th scope="col">주문처리상태</th>
                <th scope="col">취소/교환/반품</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="orderDate">230526</span><br/>
                  <span className="orderNumber">(13135)</span>
                </td>
                <td>
                  <div className="orderListImage">
                    <img src={product1} alt="" />
                  </div>
                </td>
                <td>
                  <span className="orderProduct">강아지 사료</span>
                </td>
                <td>
                  <span className="orderQuantity">2</span>
                </td>
                <td>
                  <span className="orderPrice">71,000원</span>
                </td>
                <td>
                  <span className="orderState">배송완료</span>
                </td>
                <td>
                  <span className="orderCancel">-</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="orderDate">230623</span><br/>
                  <span className="orderNumber">(14536)</span>
                </td>
                <td>
                  <div className="orderListImage">
                    <img src={product2} alt="" />
                  </div>
                </td>
                <td>
                  <span className="orderProduct">강아지 옷</span>
                </td>
                <td>
                  <span className="orderQuantity">3</span>
                </td>
                <td>
                  <span className="orderPrice">60,000원</span>
                </td>
                <td>
                  <span className="orderState">배송완료</span>
                </td>
                <td>
                  <span className="orderCancel">-</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
