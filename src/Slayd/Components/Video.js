import React, { useState} from 'react';

function Video() {
    const [slideIndex, setSlideIndex] = useState(1);
  
    const plusDivs = (n) => {         
    const x = document.getElementsByClassName("mySlides");
    let currentIndex= (slideIndex + n);
    if (currentIndex > x.length) {currentIndex = 1}
    if (currentIndex < 1) {currentIndex = x.length}

    for (let i = 0; i < x.length; i++) {
       x[i].style.display = "none";        
    }
      x[slideIndex-1].style.display = "block";

    setSlideIndex(currentIndex);
    console.log(currentIndex)



    };

  return (
    <div>
        <embed className="mySlides" src="https://www.youtube.com/embed/eJL0JYnzFSs" title="PRIME 3D G&amp;V" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
        <embed className="mySlides active-sl" src="https://www.youtube.com/embed/ljM6vezb4zI" title="PRIME 3D I&amp;ED" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
        <embed className="mySlides" src="https://www.youtube.com/embed/OWcqzQCQutE" title="PRIME" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
        <div className='btn_video'>
          <button className='btn' onClick={() => plusDivs(-1)}>&#10094;</button>
          <button className='btn' onClick={() => plusDivs(1)}>&#10095;</button>
        </div>
    </div>
  );
}

export default Video;