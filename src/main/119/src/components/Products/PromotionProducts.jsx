import React from "react";
import { useParams } from "react-router-dom";
import ProductItem from "./ProductItem";

// Mock Data
import mockData from "../MockData/MockData_Products";

function PromotionProducts({ addCart }) {
    const { id } = useParams();
    const product = mockData.filter((item) => item.promotion === parseInt(id));

    console.log(id);

    return (
        <div className="Products">
            <div className="cateTitle">
                <h1>프로모션 상품</h1>
            </div>
            <hr />

            <div className="productList">
                {product.map((item) => (<ProductItem key={item.id} it={item} addCart={addCart} />))}
            </div>
        </div>
    );
}

export default PromotionProducts;