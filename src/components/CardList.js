import PropTypes from "prop-types";
import Card from "./Card";

const CardList = (props) => {
  return (
    <>
      {props.cardsData.map((card) => (
        <Card
          id={card.id}
          likesCount={card.likesCount}
          message={card.message}
          key={card.id}
        />
      ))}
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
