import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from 'axios';

import ProductItem from "./ProductItem";

function SearchedProducts({ addCart }) {
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        axios.get('/rsproduct/productList')
            .then((response) => {
                setProductData(response.data);
                console.log(`** productList 서버연결 성공 =>`, response.data);
            })
            .catch((err) => {
                alert(`** productList 서버연결 실패 => ${err.message}`);
            });
    }, []);

    const [searchParams, setSearchParams] = useSearchParams("");
    const search = searchParams.get('search');

    const getSearchResult = () => {
        return search === "" ? []
            : productData.filter((item) => item.product_name.includes(search));
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