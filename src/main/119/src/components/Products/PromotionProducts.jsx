import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import ProductItem from "./ProductItem";

function PromotionProducts({ calcProductPrice, sortProducts, addCart }) {
    const { id } = useParams();
    const [promotionInfoData, setPromotionInfoData] = useState([]);
    const [promotionProductData, setPromotionProductData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const infoResponse = await axios.get('/rsproduct/promotionInfoList');
                setPromotionInfoData(infoResponse.data);
                console.log(`** promotionInfoList 서버연결 성공 =>`, infoResponse.data);

                const productResponse = await axios.get(`/rsproduct/promotionProductList/${id}`);
                setPromotionProductData(productResponse.data);
                console.log(`** promotionProductList 서버연결 성공 =>`, productResponse.data);
            } catch (err) {
                console.log(`** 서버연결 실패 => ${err.message}`);
                alert(`서버연결 실패: ${err.message}`);
            }
        };

        fetchData();
        handleSort("newest");

    }, [id]);

    // 정렬
    const [sortOption, setSortOption] = useState("default");

    const handleSort = (option) => {
        setSortOption(option);
    };

    const currentItems = sortProducts(promotionProductData, sortOption);

    return (
        <div className="Products">
            <div className="cateTitle">
                <h1>{promotionInfoData.length > 0 && promotionInfoData[id - 1].promotion_name}</h1>
            </div>
            <hr />

            <div className="sortButtons">
                <button className={sortOption === "newest" ? "active" : ""} onClick={() => handleSort("newest")}>최신 등록일순</button>
                <button className={sortOption === "highToLow" ? "active" : ""} onClick={() => handleSort("highToLow")}>가격 높은순</button>
                <button className={sortOption === "lowToHigh" ? "active" : ""} onClick={() => handleSort("lowToHigh")}>가격 낮은순</button>
                <button className={sortOption === "HighAvgStar" ? "active" : ""} onClick={() => handleSort("HighAvgStar")}>평점 높은순</button>
            </div>

            <div className="productList">
                {currentItems.map((item) => (<ProductItem key={item.product_id} it={item} calcProductPrice={calcProductPrice} addCart={addCart} />))}
            </div>
        </div>
    );
}

export default PromotionProducts;