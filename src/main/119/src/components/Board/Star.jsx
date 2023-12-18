import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import './Star.css';

const ARRAY = [0, 1, 2, 3, 4];

function Star({ star, onChangeScore }) {
  const [clickedStars, setClickedStars] = useState(1);

  useEffect(() => {
    setClickedStars(star);
  }, [star]);

  const countStarClick = (index) => {
    setClickedStars(index + 1);
    onChangeScore(index + 1);
  };

  return (
    <div className='clickedStars'>
      {ARRAY.map((index) => (
        <FaStar
          key={index}
          size="25"
          onClick={() => countStarClick(index)}
          className={index < clickedStars ? 'redStar' : ''}
        />
      ))}
    </div>
  );
}

export default Star;