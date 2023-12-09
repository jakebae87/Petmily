import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from 'axios';

import ProductItem from "./ProductItem";

const kindTitles = {
    all: "",
    dog: "강아지",
    cat: "고양이"
};

const categoryTitles = {
    all: "전체상품",
    feed: "사료",
    snackNutrient: "간식/영양제",
    hygiene: "위생용품",
    beautyCare: "미용/케어용품",
    living: "리빙용품",
    walkPlay: "산책/놀이용품",
    clothesAccessorie: "의류/악세사리"
};

function AllProducts({ calcProductPrice, sortProducts, addCart, setCartItems }) {
    const { kind, category } = useParams();
    const [productData, setProductData] = useState([]);

    const fetchData = () => {
        axios.get(`/rsproduct/productList/${kind}/${category}`)
            .then((response) => {
                setProductData(response.data);
                console.log(`** productList 서버연결 성공 =>`, response.data);
            })
            .catch((err) => {
                alert(`** productList 서버연결 실패 => ${err.message}`);
            });
    };

    useEffect(() => {
        fetchData();
        setCurrentPage(1);
        handleSort("newest");
    }, [kind, category]);

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

    const currentItems = sortProducts(productData, sortOption).slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="Products">
            <div className="cateTitle">
                <h1>{kindTitles[kind] || ""} {categoryTitles[category] || ""}</h1>
            </div>

            <hr />
            <div className="productClassification">
                <ul>
                    <li><NavLink to={`/products/all/${category}`}>전체</NavLink></li>
                    <li><NavLink to={`/products/dog/${category}`}>강아지</NavLink></li>
                    <li><NavLink to={`/products/cat/${category}`}>고양이</NavLink></li>
                </ul>
                <ul>
                    <li><NavLink to={`/products/${kind}/all`}>전체상품</NavLink></li>
                    <li><NavLink to={`/products/${kind}/feed`}>사료</NavLink></li>
                    <li><NavLink to={`/products/${kind}/snackNutrient`}>간식/영양제</NavLink></li>
                    <li><NavLink to={`/products/${kind}/hygiene`}>위생</NavLink></li>
                    <li><NavLink to={`/products/${kind}/beautyCare`}>미용/케어</NavLink></li>
                    <li><NavLink to={`/products/${kind}/living`}>리빙</NavLink></li>
                    <li><NavLink to={`/products/${kind}/walkPlay`}>산책/놀이</NavLink></li>
                    <li><NavLink to={`/products/${kind}/clothesAccessorie`}>의류/악세사리</NavLink></li>
                </ul>
            </div>

            <div className="sortButtons">
                <button className={sortOption === "newest" ? "active" : ""} onClick={() => handleSort("newest")}>최신 등록일순</button>
                <button className={sortOption === "highToLow" ? "active" : ""} onClick={() => handleSort("highToLow")}>가격 높은순</button>
                <button className={sortOption === "lowToHigh" ? "active" : ""} onClick={() => handleSort("lowToHigh")}>가격 낮은순</button>
                <button className={sortOption === "HighAvgStar" ? "active" : ""} onClick={() => handleSort("HighAvgStar")}>평점 높은순</button>
            </div>

            <div className="productList">
                {currentItems.map((item) => (
                    <ProductItem key={item.product_id} it={item} calcProductPrice={calcProductPrice} addCart={addCart} setCartItems={setCartItems} />
                ))}
            </div>

            {/* 페이지네이션 컴포넌트 */}
            <div className="pagination">
                {currentPage > 1 && (
                    <a className="first-page" onClick={() => paginate(1)}>
                        처음 페이지
                    </a>
                )}

                {Array.from({ length: Math.ceil(productData.length / itemsPerPage) }).map((_, index) => (
                    <a
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={index + 1 === currentPage ? "active" : ""}
                    >
                        {index + 1}
                    </a>
                ))}

                {currentPage < Math.ceil(productData.length / itemsPerPage) && (
                    <a className="last-page" onClick={() => paginate(Math.ceil(productData.length / itemsPerPage))}>
                        마지막 페이지
                    </a>
                )}
            </div>
        </div>
    );
}

export default AllProducts;