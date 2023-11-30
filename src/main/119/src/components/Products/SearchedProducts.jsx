import React from "react";
import { useSearchParams } from "react-router-dom";

import ProductItem from "./ProductItem";

// Mock Data
import mockData from "../MockData/MockData_Products";

function SearchedProducts({ addCart }) {
    const [searchParams, setSearchParams] = useSearchParams("");
    const search = searchParams.get('search');

    const getSearchResult = () => {
        return search === "" ? []
            : mockData.filter((item) => item.title.includes(search));
    }

    return (
        <div className="Products">
            <div className="cateTitle">
                <h1>검색된 상품</h1>
            </div>
            <hr />

            <div className="productList">
                {getSearchResult().map((item) => (<ProductItem key={item.id} it={item} addCart={addCart} />))}
            </div>
        </div>
    );
}

export default SearchedProducts;