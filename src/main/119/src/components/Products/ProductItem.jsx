import { Link } from 'react-router-dom'
import { useState } from "react";

// 이미지
import CartImg from '../../assets/Images/cart.png';

const ProductItem = ({ it, addCart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleAddCart = () => {
        addCart({ ...it, quantity: quantity });
        setQuantity(1);
    };

    let discountStr = "";
    if (it.discount) {
        discountStr = `${it.discount}% 할인`
    }

    return (
        <div className="ProductItem">
            <Link to={`/products/productdetail/${it.id}`}>
                <img src={it.img} alt="상품사진" />
            </Link>
            <div>
                <div>
                    <p className="productName"><Link to={`/products/productdetail/${it.id}`}>{it.title}</Link></p>
                    <p className="productComments">{it.content}</p>
                    <p className="productPrice"><span>{it.price.toLocaleString()}원</span><sup>{discountStr}</sup></p>
                </div>
                <div className="gotoCart">
                    <button onClick={() => handleAddCart(it)} >
                        <Link to={`/user/cart`}>
                            <img src={CartImg} alt="장바구니사진" />
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;