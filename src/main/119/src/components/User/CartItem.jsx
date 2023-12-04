import React, { useState, useEffect } from "react";
import axios from "axios";

const CartItem = ({
  cartItems,
  onDelete,
  checkedItems,
  checkChange,
  increQuantity,
  decreQuantity,
}) => {
  // SpringBoot test
  const [Data, setData] = useState([]);

  // 장바구니 리스트 불러오기
  useEffect(() => {
    axios
      .get("/rscart/cartList")
      .then((response) => {
        setData(response.data);
        console.log(`** checkdata 서버연결 성공 =>`, response.data);
      })
      .catch((err) => {
        alert(`** checkdata 서버연결 실패 => ${err.message}`);
      });
  }, []);

  // 장바구니 상품 삭제
  // cartDelete(장바구니 삭제)
  function cDelete(user_id, product_id) {
    let url = "/rscart/cdelete/" + user_id + "/" + product_id;

    axios
      .delete(url)
      .then((response) => {
        alert(response.data);
        // 페이지 새로고침
        window.location.reload();
      })
      .catch((err) => {
        if (err.response.status) alert(err.response.data);
        else alert("~~ 시스템 오류, 잠시후 다시하세요 => " + err.message);
      });
  }

  return (
    <tbody>
      {Data.map((item) => (
        <tr>
          <td>
            <input
              type="checkbox"
              checked={checkedItems.includes(item.id)}
              onChange={(e) => checkChange(e, item.id)}
            />
          </td>
          <td>
            <div className="cartImage">
              <img
                src={process.env.PUBLIC_URL + `/Images/products/${item.product_mainimagepath}`}
                alt={item.product_mainimagepath}
              />
            </div>
          </td>
          <td>
            <span>{item.product_name}</span>
          </td>
          <td>
            <span>{item.product_price.toLocaleString()}</span>
          </td>
          <td>
            <button
              className="decreQuantity"
              onClick={() => {
                decreQuantity(item);
              }}
            >
              ▽
            </button>
            <span>{item.product_cnt}</span>
            <button
              className="increQuantity"
              onClick={() => {
                increQuantity(item);
              }}
            >
              △
            </button>
          </td>
          <td>
            <span>{(item.product_price * item.product_cnt).toLocaleString()}</span>
          </td>
          <td>
            <button
              type="button"
              id="deleteCartProduct"
              name="deleteCartProduct"
              class="textlink"
              onClick={() => {
                cDelete(item.user_id, item.product_id);
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

export default CartItem;
