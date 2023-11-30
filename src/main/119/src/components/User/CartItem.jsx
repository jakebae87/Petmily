import React from "react";


const CartItem = ({ cartItems, onDelete, checkedItems, checkChange, increQuantity, decreQuantity }) => {
  return (
    <tbody>
      {cartItems.map((item) => (
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
                <img src={item.img} alt="product1" />
              </div>
            </td>
            <td>
              <span>{item.title}</span>
            </td>
            <td>
              <span>{item.price.toLocaleString()}</span>
            </td>
          <td>
            <button className="decreQuantity" onClick={()=>{decreQuantity(item)}}>▽</button>
              <span>{item.quantity}</span>
            <button className="increQuantity" onClick={()=>{increQuantity(item)}}>△</button>
            </td>
            <td>
              <span>{(item.price*item.quantity).toLocaleString()}</span>
            </td>
            <td>
              <button
                type="button"
                id="deleteCartProduct"
                name="deleteCartProduct"
                onClick={() => {
                  onDelete(item);
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
