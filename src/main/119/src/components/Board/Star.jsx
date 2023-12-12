import React, { useRef, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import './Star.css';

const ARRAY = [0, 1, 2, 3, 4];

function Star({ onChangeScore, star }) {
  const score = useRef(0);
  const countClick = useRef([false, false, false, false, false]);

  useEffect(() => {
    // review.review_point 값이 변경될 때마다 별 색상을 업데이트합니다.
    let clickStates = [...countClick.current];
    for (let i = 0; i < ARRAY.length; i++) {
      clickStates[i] = i < star; // review.review_point 값보다 작은 인덱스는 색상을 변경합니다.
    }
    countClick.current = clickStates;
    score.current = star; // 별 개수도 업데이트합니다.
  }, [star]);

  const countStarClick = (index) => {
    let clickStates = [...countClick.current];
    for (let i = 0; i < ARRAY.length; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    countClick.current = clickStates;
    score.current = countClick.current.filter(Boolean).length;
    onChangeScore(score.current);
  };

  return (
    <div className='clickedStars'>
      {ARRAY.map((index) => (
        <FaStar
          key={index}
          size="25"
          onClick={() => countStarClick(index)}
          className={countClick.current[index] ? 'redStar' : ''}
        />
      ))}
    </div>
  );
}

export default Star;