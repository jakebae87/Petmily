import { Link } from 'react-router-dom'
import { useState } from "react";

const ProductItem = ({ it, addCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleAddCart = () => {
        addCart({ ...it, quantity: quantity });
        setQuantity(1);
    };

    let discountedPrice = it.product_price;
    let discountStr = "";
    if (it.promotion_discount) {
        discountStr = `${it.promotion_discount}% 할인`;
        discountedPrice = Math.floor(it.product_price - (it.product_price * it.promotion_discount / 100));
    }

    return (
        <div className="ProductItem">
            <Link to={`/products/productdetail/${it.product_id}`}>
                <img src={process.env.PUBLIC_URL + `/Images/products/${it.product_mainimagepath}`} alt={it.product_mainimagepath} />
            </Link>
            <div>
                <div>
                    <p className="productName"><Link to={`/products/productdetail/${it.product_id}`}>{it.product_name}</Link></p>
                    <p className="productComments">{it.product_description}</p>
                    {it.promotion_discount ? (
                        <p className="productPrice">
                            <span className="originalPrice">{it.product_price.toLocaleString()}원</span>
                            <span>{discountedPrice.toLocaleString()}원</span>
                            <sup>{discountStr}</sup>
                        </p>
                    ) : (
                        <p className="productPrice">
                            <span>{it.product_price.toLocaleString()}원</span>
                        </p>
                    )}
                </div>
                <div className="gotoCart">
                    <button onClick={() => handleAddCart(it)} >
                        <Link to={`/user/cart`}>
                            <img src={process.env.PUBLIC_URL + '/Images/cart.png'} alt="장바구니사진" />
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;