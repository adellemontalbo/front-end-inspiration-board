import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import CardForm from "./CardForm";
import "./CardList.css";

const CardList = ({ currentBoard }) => {
  // current cards of current board
  const [cardsData, setCardsData] = useState([]);

  // TO COMPLETE: We need to know what to put in our dependency array, board? cardsData?
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/boards/${currentBoard.id}/cards`
      )
      .then((response) => {
        setCardsData(response.cards);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [currentBoard]);

  const addCardData = (newCard) => {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/boards/${currentBoard.id}`,
        newCard
      )
      .then((response) => {
        const newCardsList = [...cardsData];
        newCardsList.push(response);
        setCardsData(newCardsList);
      })
      .catch((error) => {
        console.log(("Error:", error));
      });
  };

  // rendering a card form and rendering the cards themselves
  return (
    <>
      <div className="card-header">
        <h2>
          {currentBoard.title} - {currentBoard.owner}
        </h2>
        <h2>Add New Card</h2>
        <CardForm addCardData={addCardData} boardId={currentBoard.id} />
      </div>
      <div className="cards-display">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            likesCount={card.likesCount}
            message={card.message}
          />
        ))}
      </div>
    </>
  );
};

// CardList.propTypes = {
//   cardsData: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       likesCount: PropTypes.number.isRequired,
//       message: PropTypes.string.isRequired,
//     })
//   ),
// };

export default CardList;
