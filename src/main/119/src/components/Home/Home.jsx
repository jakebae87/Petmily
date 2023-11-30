import "./Home.css";
//import React from "react";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import axios from "axios";

import ImageSlider from "./ImageSlider";
import Introduce from "./Introduce";

import mockData from "../MockData/MockData_Home";

function Home({ addCart }) {

    const [data, setData] = useState('');

    // => 실행과 동시에 처음 한번 서버요청
    useEffect(() => {
        axios
        .get('/rsproduct/checkdata') 
        .then((response) => {
            setData(response.data);
            console.log(`** checkdata 서버연결 성공 => ${response.data}`);
        }).catch((err) => {
                alert(`** checkdata 서버연결 실패 => ${err.message}`);
        });
    }, []);

    return (
        <div className="Home">
            from Server Data : {data}

            <ImageSlider />
            
            <div id="mainWrap">
                {mockData.map((item, index) => (<Introduce props={[item, index]} addCart={addCart} />))}
            </div>
        </div>
    );
  const [data, setData] = useState("");

  // => 실행과 동시에 처음 한번 서버요청
  useEffect(() => {
    axios
      .get("/rsproduct/checkdata")
      .then((response) => {
        setData(response.data);
        console.log(`** checkdata 서버연결 성공 => ${response.data}`);
      })
      .catch((err) => {
        alert(`** checkdata 서버연결 실패 => ${err.message}`);
      });
  }, []);

  return (
    <div className="Home">
      from Server Data : {data}
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
