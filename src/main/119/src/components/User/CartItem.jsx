import React from "react";
import axios from "axios";

const CartItem = ({
  promotion_discount,
  checkedItems,
  cartItems,
  nothing,
  setNothing,
  checkChange,
  calcProductPrice,
}) => {

  // 장바구니 상품 삭제
  function cDelete(user_id, product_id) {
    let url = "/rscart/cdelete/" + user_id + "/" + product_id;

    axios
      .delete(url)
      .then((response) => {
        setNothing(nothing + 1);
      })
      .catch((err) => {
        if (err.response.status) alert(err.response.data);
        else alert("삭제 실패 => " + err.message);
      });
  }

  // cartCntUp(장바구니 수량 +1)
  function upCnt(product_id, item) {
    let url = "/rscart/cartCntUp/" + product_id;

    if (item.product_cnt < 100) {
      axios
        .post(url)
        .then((response) => {
          setNothing(nothing + 1);
        })
        .catch((err) => {
          if (err.response.status) alert(err.response.data);
          else alert("~~ 시스템 오류, 잠시후 다시하세요 => " + err.message);
        });
    } else {
      alert("최대 수량은 100입니다");
    }
  }

  // cartCntDown(장바구니 수량 -1)
  function downCnt(product_id, item) {
    let url = "/rscart/cartCntDown/" + product_id;

    if (item.product_cnt > 1) {
      axios
        .post(url)
        .then((response) => {
          setNothing(nothing + 1);
        })
        .catch((err) => {
          if (err.response.status) alert(err.response.data);
          else alert("~~ 시스템 오류, 잠시후 다시하세요 => " + err.message);
        });
    } else {
      alert("최소 수량은 1입니다");
    }
  }

  return (
    <tbody>
      {cartItems.map((item) => (
        <tr>
          <td>
            <input
              type="checkbox"
              checked={checkedItems.includes(item.product_id)}
              onChange={(e) => checkChange(e, item.product_id)}
            />
          </td>
          <td>
            <div className="cartImage">
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
            <span>{item.product_name}</span>
          </td>
          <td>
            <span>
              {calcProductPrice(item.product_price, item.promotion_discount).toLocaleString()}
            </span>
          </td>
          <td>
            <button
              className="decreQuantity"
              onClick={() => {
                downCnt(item.product_id, item);
              }}
            >
              ▽
            </button>
            <span>{item.product_cnt}</span>
            <button
              className="increQuantity"
              onClick={() => {
                upCnt(item.product_id, item);
              }}
            >
              △
            </button>
          </td>
          <td>
            <span>
              {(calcProductPrice(item.product_price, item.promotion_discount) *item.product_cnt).toLocaleString()}
            </span>
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


// import React, { useState } from "react";
// import axios from "axios";

// const CartItem = ({
//   user_id,
//   product_id,
//   product_cnt,
//   product_name,
//   product_price,
//   product_mainimagepath,
//   promotion_discount,
//   checkedItems,
//   nothing,
//   setNothing,
//   checkChange,
//   calcProductPrice,
// }) => {
//   const [quantity, setQuantity] = useState(product_cnt);

//   // 장바구니 상품 삭제
//   function cDelete(user_id, product_id) {
//     let url = "/rscart/cdelete/" + user_id + "/" + product_id;

//     axios
//       .delete(url)
//       .then((response) => {
//         setNothing(nothing + 1);
//       })
//       .catch((err) => {
//         if (err.response.status) alert(err.response.data);
//         else alert("삭제 실패 => " + err.message);
//       });
//   }

//   // cartCntUp(장바구니 수량 +1)
//   function upCnt(product_id) {
//     let url = "/rscart/cartCntUp/" + product_id;

//     if (quantity < 100) {
//       setQuantity(quantity + 1);
//       axios
//         .post(url)
//         .then((response) => {
//           setNothing(nothing + 1);
//         })
//         .catch((err) => {
//           if (err.response.status) alert(err.response.data);
//           else alert("~~ 시스템 오류, 잠시후 다시하세요 => " + err.message);
//         });
//     } else {
//       alert("최대 수량은 100입니다");
//     }
//   }

//   // cartCntDown(장바구니 수량 -1)
//   function downCnt(product_id) {
//     let url = "/rscart/cartCntDown/" + product_id;

//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//       axios
//         .post(url)
//         .then((response) => {
//           setNothing(nothing + 1);
//         })
//         .catch((err) => {
//           if (err.response.status) alert(err.response.data);
//           else alert("~~ 시스템 오류, 잠시후 다시하세요 => " + err.message);
//         });
//     } else {
//       alert("최소 수량은 1입니다");
//     }
//   }

//   return (
//     <tr>
//       <td>
//         <input
//           type="checkbox"
//           checked={checkedItems.includes(product_id)}
//           onChange={(e) => checkChange(e, product_id)}
//         />
//       </td>
//       <td>
//         <div className="cartImage">
//           <img
//             src={
//               process.env.PUBLIC_URL +
//               `/Images/products/${product_mainimagepath}`
//             }
//             alt={product_mainimagepath}
//           />
//         </div>
//       </td>
//       <td>
//         <span>{product_name}</span>
//       </td>
//       <td>
//         <span>
//           {calcProductPrice(product_price, promotion_discount).toLocaleString()}
//         </span>
//       </td>
//       <td>
//         <button
//           className="decreQuantity"
//           onClick={() => {
//             downCnt(product_id);
//           }}
//         >
//           ▽
//         </button>
//         <span>{quantity}</span>
//         <button
//           className="increQuantity"
//           onClick={() => {
//             upCnt(product_id);
//           }}
//         >
//           △
//         </button>
//       </td>
//       <td>
//         <span>
//           {(
//             calcProductPrice(product_price, promotion_discount) * product_cnt
//           ).toLocaleString()}
//         </span>
//       </td>
//       <td>
//         <button
//           type="button"
//           id="deleteCartProduct"
//           name="deleteCartProduct"
//           class="textlink"
//           onClick={() => {
//             cDelete(user_id, product_id);
//           }}
//         >
//           삭제
//         </button>
//       </td>
//     </tr>
//   );
// };

// export default CartItem;
