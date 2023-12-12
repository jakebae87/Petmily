import React from "react";

const OrderItem = ({ orderItems, deleteOrder, calcProductPrice }) => {

  return (
    <tbody>
      {orderItems.map((item) => (
        <tr>
          <td>
            <div className="orderImage">
              <img src={process.env.PUBLIC_URL +`/Images/products/${item.product_mainimagepath}`}
                alt={item.product_mainimagepath}
              />
            </div>
          </td>
          <td>
            <span>{item.product_name}</span>
          </td>
          <td>
            <span>{calcProductPrice(item.product_price, item.promotion_discount) ? `${calcProductPrice(item.product_price, item.promotion_discount).toLocaleString()}원` : "가격 정보 없음"}</span>
          </td>
          <td>
            <span>{item.product_cnt}</span>
          </td>
          <td>
            <span>{calcProductPrice(item.product_price, item.promotion_discount) * item.product_cnt ? `${(calcProductPrice(item.product_price, item.promotion_discount) * item.product_cnt).toLocaleString()}원` : "가격 정보 없음"}</span>
          </td>
          <td>
            <button
              type="button"
              id="deleteCartProduct"
              name="deleteCartProduct"
              onClick={() => {
                deleteOrder(item);
              }}
            >
              삭제
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default OrderItem;
