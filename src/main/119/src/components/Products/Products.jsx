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

function Products({ addCart, increQuantity, decreQuantity, addOrder, setCartItems }) {
    return (
        <Routes>
            <Route path="/:kind/:category" element={<AllProducts addCart={addCart} />} />
            <Route path="/promotionproducts/:id" element={<PromotionProducts addCart={addCart} />} />
            <Route path="/searchedproducts" element={<SearchedProducts addCart={addCart} />} />
            <Route path="/newproducts" element={<NewProducts addCart={addCart} />} />
            <Route path="/popularproducts" element={<PopularProducts addCart={addCart} />} />
            <Route path="/discountedproducts" element={<DiscountedProducts addCart={addCart} />} />
            <Route path="/productdetail/:id" element={<ProductDetail
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