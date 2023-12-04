import React, { useState, useEffect } from "react";
import axios from 'axios';

import ProductItem from "./ProductItem";

function NewProducts({ addCart }) {
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

     // 날짜를 기반으로 주(week)를 계산하는 함수
     const getWeek = (date) => {
        const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        const dayNum = d.getUTCDay() || 7;
        d.setUTCDate(d.getUTCDate() + 4 - dayNum);
        const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
        return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    };

    // 이번 주의 제품만 필터링하는 함수
    const filterProductsForCurrentWeek = (data) => {
        const currentDate = new Date();
        const currentWeek = getWeek(currentDate);

        const filteredData = data.filter(item => {
            const productDate = new Date(item.product_regdate);
            const productWeek = getWeek(productDate);
            return productWeek === currentWeek;
        });

        return filteredData;
    };

    // 현재 주에 해당하는 제품을 필터링
    const filteredData = filterProductsForCurrentWeek(productData);

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