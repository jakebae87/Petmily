import { Link } from 'react-router-dom'
import { useState } from "react";
import axios from "axios";

const ProductItem = ({ it, addCart }) => {
    // 장바구니 추가
    function cartInsertP(a) {    
	let url="/rscart/cartInsertP/" + a;
	
    axios.post(url)
        .then((response) => {
				alert(`** response.data:${response.data}`);
				window.location.reload(); // 화면 새로고침
	}).catch( err => {
				if ( err.response.status ) alert(err.response.data);  				
				else alert("~~ 시스템 오류, 잠시후 다시하세요 => " + err.message);
	});
}
    // const [quantity, setQuantity] = useState(1);

    // const handleAddCart = () => {
    //     addCart({ ...it, quantity: quantity });
    //     setQuantity(1);
    // };

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
                    <button onClick={() => cartInsertP(it.product_id)} >
                        <img src={process.env.PUBLIC_URL + '/Images/cart.png'} alt="장바구니사진" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;