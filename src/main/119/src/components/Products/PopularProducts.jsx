import React, { useState, useEffect } from "react";
import axios from 'axios';

import ProductItem from "./ProductItem";

function PopularProducts({ addCart }) {
    const [popularProductData, setPopularProductData] = useState([]);

    useEffect(() => {
        axios.get('/rsproduct/popularProductList')
            .then((response) => {
                setPopularProductData(response.data);
                console.log(`** popularProductList 서버연결 성공 =>`, response.data);
            })
            .catch((err) => {
                alert(`** popularProductList 서버연결 실패 => ${err.message}`);
            });
    }, []);

    return (
        <div className="Products">
            <div className="cateTitle">
                <h1>인기상품</h1>
            </div>
            <hr />

            <div className="productList">
                {popularProductData.map((item) => (<ProductItem key={item.id} it={item} addCart={addCart} />))}
            </div>
        </div>
    );
}

export default PopularProducts;