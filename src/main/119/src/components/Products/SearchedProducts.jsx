import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from 'axios';

import ProductItem from "./ProductItem";

function SearchedProducts({ addCart }) {
    const [searchedData, setSearchedData] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams("");
    const search = searchParams.get('search');

    useEffect(() => {
        axios.get(`/rsproduct/searchedProductList/${search}`)
            .then((response) => {
                setSearchedData(response.data);
                console.log(`** searchedProductList  서버연결 성공 =>`, response.data);
            })
            .catch((err) => {
                alert(`** searchedProductList  서버연결 실패 => ${err.message}`);
            });
    }, []);

    return (
        <div className="Products">
            <div className="cateTitle">
                <h1>검색된 상품</h1>
            </div>
            <hr />

            <div className="productList">
                {searchedData.map((item) => (<ProductItem key={item.id} it={item} addCart={addCart} />))}
            </div>
        </div>
    );
}

export default SearchedProducts;