import "./Home.css";
//import React from "react";
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import axios from 'axios';
=======
import React, { useState, useEffect } from "react";
import axios from "axios";
>>>>>>> 51a11fd129897a089fbfb01d894228caf502a48a

import ImageSlider from "./ImageSlider";
import Introduce from "./Introduce";

import mockData from "../MockData/MockData_Home";

function Home({ addCart }) {
<<<<<<< HEAD

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
}

export default Home;
=======
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
>>>>>>> 51a11fd129897a089fbfb01d894228caf502a48a
