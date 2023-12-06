import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import ProductItem from "./ProductItem";

function PromotionProducts({ addCart }) {
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

    const sortProducts = (products, option) => {
        switch (option) {
          case "highToLow":
            return products.slice().sort((a, b) => b.product_price - a.product_price);
          case "lowToHigh":
            return products.slice().sort((a, b) => a.product_price - b.product_price);
          case "newest":
            return products.slice().sort((a, b) => new Date(b.product_created) - new Date(a.product_created));
          default:
            return products;
        }
    };
    
    const handleSort = (option) => {
        setSortOption(option);
    };

    const sortItems = sortProducts(promotionProductData, sortOption);

    return (
        <div className="Products">
            <div className="cateTitle">
                <h1>{promotionInfoData.length > 0 && promotionInfoData[id-1].promotion_name}</h1>
            </div>
            <hr />

            <div className="sortButtons">
                <button className={sortOption === "newest" ? "active" : ""} onClick={() => handleSort("newest")}>등록일순</button>
                <button className={sortOption === "highToLow" ? "active" : ""} onClick={() => handleSort("highToLow")}>가격 높은순</button>
                <button className={sortOption === "lowToHigh" ? "active" : ""} onClick={() => handleSort("lowToHigh")}>가격 낮은순</button>
            </div>

            <div className="productList">
                {sortItems.map((item) => (<ProductItem key={item.product_id} it={item} addCart={addCart} />))}
            </div>
        </div>
    );
}

export default PromotionProducts;