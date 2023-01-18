import axios from "axios";
import { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import Card from "./Card";
import CardForm from "./CardForm";
import "./CardList.css";

const CardList = ({ currentBoard }) => {
  // current cards of current board
  const [cardsData, setCardsData] = useState([]);

  const convertFromApi = (apiCard) => {
    const { likes_count, ...rest } = apiCard;
    const newCard = { likesCount: likes_count, ...rest };
    return newCard;
  };

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/boards/${currentBoard.id}/cards`
      )
      .then((response) => {
        setCardsData(response.data.cards.map(convertFromApi));
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, [currentBoard]);

  const addCardData = (newCard) => {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/boards/${currentBoard.id}/cards`,
        newCard
      )
      .then((response) => {
        const newCardsList = [...cardsData];
        const newCardConverted = convertFromApi(response.data);
        newCardsList.push(newCardConverted);
        setCardsData(newCardsList);
      })
      .catch((error) => {
        console.log(("Error:", error));
      });
  };

  const deleteCardData = (id) => {
    axios
      .delete(
        `${process.env.REACT_APP_BACKEND_URL}/boards/${currentBoard.id}/cards/${id}`
      )
      .then((response) => {
        const newCardsList = cardsData.filter((filterCard) => {
          return filterCard.id !== id;
        });
        setCardsData(newCardsList);
      })
      .catch((error) => {
        console.log(("Error:", error));
      });
  };

  const likeCard = (id) => {
    axios
      .patch(
        `${process.env.REACT_APP_BACKEND_URL}/boards/${currentBoard.id}/cards/${id}`,
        { id }
      )
      .then((response) => {
        const newCardsData = cardsData.map((currentCard) => {
          return currentCard.id !== response.data.id
            ? currentCard
            : { ...currentCard, likesCount: response.data.likes_count };
        });
        setCardsData(newCardsData);
      })
      .catch((error) => {
        console.log(("Error:", error));
      });
  };

  //  TODO: Test with backend
  const sortCards = (sortBy) => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/boards/${currentBoard.id}/cards?sort=${sortBy}`
      )
      .then((response) => {
        setCardsData(response.data.cards.map(convertFromApi));
      })
      .catch((error) => {
        console.log("Error:", error);
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
        <label htmlFor="sortcards">Sort by:</label>
        <select name="sortcards" onChange={(e) => sortCards(e.target.value)}>
          <option value="id">ID</option>
          <option value="message">Alphabetically</option>
          <option value="likes_count">Likes</option>
        </select>
      </div>
      <div className="cards-display">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            likesCount={card.likesCount}
            message={card.message}
            deleteCardData={deleteCardData}
            likeCard={likeCard}
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
