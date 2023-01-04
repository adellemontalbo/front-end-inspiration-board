import PropTypes from "prop-types";

const Board = (props) => {
  return <li key={props.id}>{props.title}</li>;
};

Board.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default Board;
