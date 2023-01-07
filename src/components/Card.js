import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ id, message, likesCount, likeCard, deleteCardData }) => {
  return (
    <div className="card">
      <p className="card-message">{message}</p>
      <ul className="card-actions">
        <li>{likesCount}🫀</li>
        <li onClick={() => likeCard(id)}>+1</li>
        <li className="card-delete" onClick={() => deleteCardData(id)}>
          Delete
        </li>
      </ul>
    </div>
  );
};

// Card.propTypes = {
//   id: PropTypes.number.isRequired,
//   likesCount: PropTypes.number.isRequired,
//   message: PropTypes.string.isRequired,
// };

export default Card;
