import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from 'axios';

import ProductItem from "./ProductItem";

function SearchedProducts({ calcProductPrice, sortProducts, addCart }) {
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

        setCurrentPage(1);
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

    const currentItems = sortProducts(searchedData, sortOption).slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="Products">
            <div className="cateTitle">
                <h1>검색된 상품</h1>
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

                {Array.from({ length: Math.ceil(searchedData.length / itemsPerPage) }).map((_, index) => (
                    <a
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={index + 1 === currentPage ? "active" : ""}
                    >
                        {index + 1}
                    </a>
                ))}

                {currentPage < Math.ceil(searchedData.length / itemsPerPage) && (
                    <a className="last-page" onClick={() => paginate(Math.ceil(searchedData.length / itemsPerPage))}>
                        마지막 페이지
                    </a>
                )}
            </div>
        </div>
    );
}

export default SearchedProducts;