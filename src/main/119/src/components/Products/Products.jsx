import './Products.css'
import './ProductItem.css';
import './ProductDetail.css';
import { Route, Routes } from "react-router-dom";

import AllProducts from './AllProducts';
import NewProducts from './NewProducts';
import PopularProducts from './PopularProducts';
import DiscountedProducts from './DiscountedProducts';
import PromotionProducts from './PromotionProducts';
import SearchedProducts from './SearchedProducts';
import ProductDetail from './ProductDetail';

function Products({ calcProductPrice, addCart, increQuantity, decreQuantity, addOrder, setCartItems }) {
    const sortProducts = (products, option) => {
        switch (option) {
            case "newest":
                return products.slice().sort((a, b) => new Date(b.product_regdate) - new Date(a.product_regdate));
            case "highToLow":
                return products.slice().sort((a, b) => calcProductPrice(b.product_price, b.promotion_discount) - calcProductPrice(a.product_price, a.promotion_discount));
            case "lowToHigh":
                return products.slice().sort((a, b) => calcProductPrice(a.product_price, a.promotion_discount) - calcProductPrice(b.product_price, b.promotion_discount));
            case "HighAvgStar":
                return products.slice().sort((a, b) => b.product_rating - a.product_rating);
            case "HighCntReview":
                return products.slice().sort((a, b) => b.review_cnt - a.review_cnt);
            default:
                return products;
        }
    };

    return (
        <Routes>
            <Route path="/:kind/:category" element={<AllProducts calcProductPrice={calcProductPrice} sortProducts={sortProducts} addCart={addCart} setCartItems={setCartItems} />} />
            <Route path="/promotionproducts/:id" element={<PromotionProducts calcProductPrice={calcProductPrice} sortProducts={sortProducts} addCart={addCart} />} />
            <Route path="/searchedproducts" element={<SearchedProducts calcProductPrice={calcProductPrice} sortProducts={sortProducts} addCart={addCart} />} />
            <Route path="/newproducts" element={<NewProducts calcProductPrice={calcProductPrice} sortProducts={sortProducts} addCart={addCart} />} />
            <Route path="/popularproducts" element={<PopularProducts calcProductPrice={calcProductPrice} sortProducts={sortProducts} addCart={addCart} />} />
            <Route path="/discountedproducts" element={<DiscountedProducts calcProductPrice={calcProductPrice} sortProducts={sortProducts} addCart={addCart} />} />
            <Route path="/productdetail/:id" element={<ProductDetail
                calcProductPrice={calcProductPrice}
                addCart={addCart}
                addOrder={addOrder}
                setCartItems={setCartItems}
                increQuantity={increQuantity}
                decreQuantity={decreQuantity} />}
            />
        </Routes >
    )
}

export default Products;