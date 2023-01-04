import PropTypes from "prop-types";
import Card from "./Card";

const CardList = (props) => {
  return (
    <div>
      {props.cardsData.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          likesCount={card.likesCount}
          message={card.message}
        />
      ))}
    </div>
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
