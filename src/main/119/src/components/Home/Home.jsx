import "./Home.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ImageSlider from "./ImageSlider";
import Introduce from "./Introduce";

const IntroduceData = [
    {
        id: 0,
        title: '신상품',
        content: '펫밀리에서 새롭게 선보이는 제품을 소개합니다.',
        url: "/products/newproducts"
    },
    {
        id: 1,
        title: '인기상품',
        content: '펫밀리에서 가장 많이 판매되는 제품을 소개합니다.',
        url: "/products/popularproducts"
    },
    {
        id: 2,
        title: '할인상품',
        content: '할인 중인 상품입니다.',
        url: "/products/discountedproducts"
    }
];

function Home({ addCart }) {

    return (
        <div className="Home">
            <ImageSlider />

            <div id="mainWrap">
                {IntroduceData.map((item, index) => (<Introduce props={[item, index]} addCart={addCart} />))}
            </div>
        </div>
    );
}

export default Home;
