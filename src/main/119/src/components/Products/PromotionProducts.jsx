import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import ProductItem from "./ProductItem";

function PromotionProducts({ addCart }) {
    const { id } = useParams();
    const [promotionProductData, setPromotionProductData] = useState([]);

    useEffect(() => {
        axios.get(`/rsproduct/promotionProductList/${id}`)
            .then((response) => {
                setPromotionProductData(response.data);
                console.log(`** promotionProductList 서버연결 성공 =>`, response.data);
            })
            .catch((err) => {
                alert(`** promotionProductList 서버연결 실패 => ${err.message}`);
            });
    }, []);

    return (
        <div className="Products">
            <div className="cateTitle">
                <h1>프로모션 상품</h1>
            </div>
            <hr />

            <div className="productList">
                {promotionProductData.map((item) => (<ProductItem key={item.id} it={item} addCart={addCart} />))}
            </div>
        </div>
    );
}

export default PromotionProducts;