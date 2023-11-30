import React from "react";

import ProductItem from "./ProductItem";

// Mock Data
import mockData from "../MockData/MockData_Products";

function NewProducts({ addCart }) {
    const filteredData = mockData.filter(item => {
        return item.new;
    });

    return (
        <div className="Products">
            <div className="cateTitle">
                <h1>신상품</h1>
            </div>
            <hr />

            <div className="productList">
                {filteredData.map((item) => (<ProductItem key={item.id} it={item} addCart={addCart} />))}
            </div>
        </div>
    );
}

export default NewProducts;