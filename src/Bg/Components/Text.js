// import { useEffect } from "react";

// function Text() {




// export default Text;


import React, { useState, useEffect } from 'react';

function WordFlick() {
  const [words] = useState(['Present', '3D jewelry modeling', '3D game modeling and visualization', 'LLC']);
  const [wordIndex, setWordIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const [skipDelay] = useState(15);
  const [speed] = useState(70);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        if (offset >= words[wordIndex].length) {
          setSkipCount(skipCount + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        } else {
          setOffset(offset + 1);
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setWordIndex((wordIndex + 1) % words.length);
        } else {
          setOffset(offset - 1);
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [words, wordIndex, offset, forwards, skipCount]);

  const word = words[wordIndex];
  const part = word.substr(0, offset);

    return(
        <div className="bg_text">
            <h6>Welcome</h6>
            <div className='welcome'>Prime<div>{part}</div></div>
        </div>
    )
}


export default WordFlick;



