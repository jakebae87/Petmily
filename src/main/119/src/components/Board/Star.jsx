import React, { useRef } from 'react';
import { FaStar } from 'react-icons/fa';
import './Star.css';

const ARRAY = [0, 1, 2, 3, 4];

function Star({ onChangeScore }) {

  const score = useRef(0);

  const countClick = useRef([false, false, false, false, false]);

  const countStarClick = (index) => {
    let clickStates = [...countClick.current];
    for (let i = 0; i < ARRAY.length; i++) {
      clickStates[i] = (i) <= index ? true : false;
    }
    countClick.current = clickStates; // countClick 변수에 true,false로 구성된 배열을 저장한다.
    score.current = countClick.current.filter(Boolean).length;  //위 배열에서 true로만 구성된 배열을 return하고 그 length 값을 score 변수에 저장한다.
    onChangeScore(score.current); //ReviewWrite 컴포넌트에서 전달받은 함수를 실행하는데, 이 때 매개변수로 score 값을 넣는다.
  };

  return (  // 첫 화면에서는 클릭되지 않은 회색 별 5개가 렌더링된다.
    <div className='clickedStars'>
      {ARRAY.map((index) => {
        return (
          <FaStar
            key={index}
            size="25"
            onClick={() => countStarClick(index)} /* 클릭된 별의 인덱스 */
            className={countClick.current[index] && 'redStar'}
          />
        );
      })}
    </div>
  );
}

export default Star;