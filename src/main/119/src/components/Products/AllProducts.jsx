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

function AllProducts({ addCart }) {
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

    
    const { kind, category } = useParams();

    const filteredKind = productData.filter((item) => kind === "all" || item.product_kind === kind || item.product_kind === "all");
    const filteredData = filteredKind.filter((item) => category === "all" || item.product_category === category);

    const title1 = kindTitles[kind] || "";
    const title2 = categoryTitles[category] || "";

    // 페이지네이션
    useEffect(() => {
        setCurrentPage(1);
    }, [kind, category]);

    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="Products">
            <div className="cateTitle">
                <h1>{title1} {title2}</h1>
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

            <div className="productList">
                {currentItems.map((item) => (
                    <ProductItem key={item.product_id} it={item} addCart={addCart} />
                ))}
            </div>

            {/* 페이지네이션 컴포넌트 */}
            <div className="pagination">
                {currentPage > 1 && (
                    <a className="prev-page" onClick={() => paginate(currentPage - 1)}>
                        이전 페이지
                    </a>
                )}

                {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map((_, index) => (
                    <a
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={index + 1 === currentPage ? "active" : ""}
                    >
                        {index + 1}
                    </a>
                ))}

                {currentPage < Math.ceil(filteredData.length / itemsPerPage) && (
                    <a className="next-page" onClick={() => paginate(currentPage + 1)}>
                        다음 페이지
                    </a>
                )}
            </div>
        </div>
    );
}

export default AllProducts;