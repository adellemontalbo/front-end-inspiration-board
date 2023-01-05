import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ id, message, likesCount }) => {
  return (
    <div className="card">
      <p className="card-message">{message}</p>
      <ul className="card-actions">
        <li>
          <p>{likesCount} 🫀</p>
        </li>
        <li>+1</li>
        <li>Delete</li>
        {/* <li><p onClick={() => props.plusOneCardItem(card)}>+1</p></li> */}
        {/* <li><p className='card-delete' onClick={() => props.deleteCardItem(props.card)}>Delete</p></li> */}
      </ul>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  likesCount: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};

export default Card;
