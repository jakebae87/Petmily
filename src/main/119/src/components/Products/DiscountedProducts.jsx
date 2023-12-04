import React, { useState, useEffect } from "react";
import axios from 'axios';

import ProductItem from "./ProductItem";

function DiscountedProducts({ addCart }) {
    const [discountedProductData, setDiscountedProductData] = useState([]);

    useEffect(() => {
        axios.get('/rsproduct/discountedProductList')
            .then((response) => {
                setDiscountedProductData(response.data);
                console.log(`** discountedProductList 서버연결 성공 =>`, response.data);
            })
            .catch((err) => {
                alert(`** discountedProductList 서버연결 실패 => ${err.message}`);
            });
    }, []);

    return (
        <div className="Products">
            <div className="cateTitle">
                <h1>할인상품</h1>
            </div>
            <hr />

            <div className="productList">
                {discountedProductData.map((item) => (<ProductItem key={item.id} it={item} addCart={addCart} />))}
            </div>
        </div>
    );
}

export default DiscountedProducts;