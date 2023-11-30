import React from "react";

import ProductItem from "./ProductItem";

// Mock Data
import mockData from "../MockData/MockData_Products";

function PopularProducts({ addCart }) {
    const tempData = [...mockData];
    const filteredData = tempData.sort((max, min) => (min.cntOfsales - max.cntOfsales));

    return (
        <div className="Products">
            <div className="cateTitle">
                <h1>인기상품</h1>
            </div>
            <hr />

            <div className="productList">
                {filteredData.map((item, idx) => {
                    if (idx < 5) return (<ProductItem key={item.id} it={item} addCart={addCart} />);
                })}
            </div>
        </div>
    );
}

export default PopularProducts;