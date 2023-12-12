import React, { useState, useEffect } from "react";
import axios from 'axios';

import ProductItem from "./ProductItem";

function DiscountedProducts({ calcProductPrice, sortProducts, addCart }) {
    const [discountedProductData, setDiscountedProductData] = useState([]);

    useEffect(() => {
        axios.get('/rsproduct/discountedProductList')
            .then((response) => {
                setDiscountedProductData(response.data);
                console.log(`** discountedProductList 서버연결 성공 =>`, response.data);
            })
            .catch((err) => {
                alert(`** discountedProductList 서버연결 실패 => ${err.message}`);
            });

        handleSort("newest");
    }, []);

    // 페이지네이션
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // 정렬
    const [sortOption, setSortOption] = useState("default");

    const handleSort = (option) => {
        setSortOption(option);
        setCurrentPage(1); // 페이지를 처음으로 리셋
    };

    const currentItems = sortProducts(discountedProductData, sortOption).slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="Products">
            <div className="cateTitle">
                <h1>할인상품</h1>
            </div>
            <hr />

            <div className="sortButtons">
                <button className={sortOption === "newest" ? "active" : ""} onClick={() => handleSort("newest")}>최신 등록일순</button>
                <button className={sortOption === "highToLow" ? "active" : ""} onClick={() => handleSort("highToLow")}>가격 높은순</button>
                <button className={sortOption === "lowToHigh" ? "active" : ""} onClick={() => handleSort("lowToHigh")}>가격 낮은순</button>
                <button className={sortOption === "HighAvgStar" ? "active" : ""} onClick={() => handleSort("HighAvgStar")}>평점 높은순</button>
                <button className={sortOption === "HighCntReview" ? "active" : ""} onClick={() => handleSort("HighCntReview")}>리뷰 많은순</button>
            </div>

            <div className="productList">
                {currentItems.map((item) => (<ProductItem key={item.id} it={item} calcProductPrice={calcProductPrice} addCart={addCart} />))}
            </div>

            {/* 페이지네이션 컴포넌트 */}
            <div className="pagination">
                {currentPage > 1 && (
                    <a className="first-page" onClick={() => paginate(1)}>
                        처음 페이지
                    </a>
                )}

                {Array.from({ length: Math.ceil(discountedProductData.length / itemsPerPage) }).map((_, index) => (
                    <a
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={index + 1 === currentPage ? "active" : ""}
                    >
                        {index + 1}
                    </a>
                ))}

                {currentPage < Math.ceil(discountedProductData.length / itemsPerPage) && (
                    <a className="last-page" onClick={() => paginate(Math.ceil(discountedProductData.length / itemsPerPage))}>
                        마지막 페이지
                    </a>
                )}
            </div>
        </div>
    );
}

export default DiscountedProducts;