import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';  // 리액트 아이콘 사용하기 위함
import './Star.css';

const Array = [0, 1, 2, 3, 4];

function Star({ star }) { // 정수 타입의 매개변수를 Review.js로부터 받는다.

  const receivedStar = star;

  const [starPackage, setStarPackage] = useState([false, false, false, false, false]);  // flase 5개를 담는 배열이 초기값으로 clicked 변수에 저장된다.

  const showStars = (number) => {
    let starContainer = [...starPackage];
    for (let i = 0; i < Array.length; i++) {
      starContainer[i] = i < number ? true : false;
    }
    setStarPackage(starContainer);
  }

  useEffect(() => {
    showStars(receivedStar);
  }, []); //첫 렌더링 이후 업데이트시 리랜더링 금지

  return (
    <div>
      {Array.map((index) => {
        return (
          <FaStar
            key={index}
            size="20"
            className={starPackage[index] && 'redStar'}
          />
        );
      })}
    </div>
  );
}

export default Star;