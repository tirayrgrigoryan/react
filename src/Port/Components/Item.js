// function Item(){
//     return(
//         <>
//           <div className="about_img">
//               {/* <img src="./image/1.jpg"/> */}
//           </div>
//         </>
//     );
// };

// export default Item;


import { useState } from "react";

const CardLimit = 100;
const CardIncrease = 7;
const PageCount = Math.ceil(CardLimit / CardIncrease);
const ImgList = [
  "./image/1.jpg",
  "./image/2.jpg",
  "./image/3.jpg",
  "./image/4.jpg",
  "./image/5.jpg",
  "./image/6.jpg",
  "./image/7.jpg",
  "./image/8.png",
  "./image/9.png",
  "./image/10.png",
  "./image/11.png",
  "./image/12.png",
  "./image/13.jpg",
  "./image/14.jpg",
  "./image/15.png",
  "./image/16.png",
  "./image/17.png",
  "./image/18.jpg",
  "./image/19.png",
  "./image/20.png",
];

const Card = ({ imgSrc }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt="card" />
    </div>
  );

  };

const CardList = ({ cards }) => {
  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <Card key={index} imgSrc={card} />
      ))}
    </div>
  );
};

const LoadMoreButton = ({ handleClick, disabled }) => {
  return (
    <button
      className="load-more-button"
      onClick={handleClick}
      disabled={disabled}
    >
      Load More
    </button>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cards, setCards] = useState(ImgList.slice(0, CardIncrease));

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const startRange = currentPage * CardIncrease;
    const endRange =
      nextPage * CardIncrease > CardLimit
        ? CardLimit
        : nextPage * CardIncrease;
    const newCards = [...cards, ...ImgList.slice(startRange, endRange)];
    setCurrentPage(nextPage);
    setCards(newCards);
  };
  const loadMoreDisabled = currentPage === PageCount;

  return (
    <div className="app">
      <CardList cards={cards} />
      {!loadMoreDisabled && (
        <LoadMoreButton handleClick={handleLoadMore} disabled={false} />
      )}
    </div>
  );
};

export default App;


