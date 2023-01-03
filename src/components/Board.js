import PropTypes from "prop-types";

const Board = (props) => {
  
  return (
    <li>
   {props.title}
   </li>  
  );
};

Board.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
};

export default Board;
