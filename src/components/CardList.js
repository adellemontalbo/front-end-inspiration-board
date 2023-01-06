import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";
import CardForm from "./CardForm";


const CardList = ({ boardId }) => {
  // current cards of current board
  const [cardsData, setCardsData] = useState([]);


  // TO COMPLETE: We need to know what to put in our dependency array, board? cardsData?
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${boardId}/cards`)
      .then((response) => {
        setCardsData(response.cards)
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  
  const addCardData = (newCard) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/boards/${boardId}`, newCard)
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
      <div>
        <CardForm addCardData={addCardData} boardId={boardId} />
      </div>
      <div>
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

CardList.propTypes = {
  cardsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      likesCount: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
    })
  ),
};

export default CardList;
