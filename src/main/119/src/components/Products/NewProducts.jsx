import React, { useState, useEffect } from "react";
import axios from 'axios';

import ProductItem from "./ProductItem";

function NewProducts({ addCart }) {
    const [newProductData, setNewProductData] = useState([]);

    useEffect(() => {
        axios.get('/rsproduct/newProductList')
            .then((response) => {
                setNewProductData(response.data);
                console.log(`** newProductList 서버연결 성공 =>`, response.data);
            })
            .catch((err) => {
                alert(`** newProductList 서버연결 실패 => ${err.message}`);
            });
    }, []);

    return (
        <div className="Products">
            <div className="cateTitle">
                <h1>신상품</h1>
            </div>
            <hr />

            <div className="productList">
                {newProductData.map((item) => (<ProductItem key={item.id} it={item} addCart={addCart} />))}
            </div>
        </div>
    );
}

export default NewProducts;