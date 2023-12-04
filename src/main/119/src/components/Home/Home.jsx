import "./Home.css";
//import React from "react";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ImageSlider from "./ImageSlider";
import Introduce from "./Introduce";

import mockData from "../MockData/MockData_Home";

function Home({ addCart }) {
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

  return (
    <div className="Home">
      <ImageSlider />
      
      <div id="mainWrap">
        {mockData.map((item, index) => (
          <Introduce props={[item, index]} addCart={addCart} />
        ))}
      </div>
    </div>
  );
}

export default Home;
