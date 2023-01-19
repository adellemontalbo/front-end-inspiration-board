import { useState } from "react";
import "./BoardForm.css";

const BoardForm = (props) => {
  const [formFields, setFormFields] = useState({
    title: "",
    owner: "",
  });

  const handleOwnerChange = (event) => {
    setFormFields({
      ...formFields,
      owner: event.target.value,
    });
  };

  const handleTitleChange = (event) => {
    setFormFields({
      ...formFields,
      title: event.target.value,
    });
  };

  // Change this once database is ready
  const onSubmitBoard = (event) => {
    event.preventDefault();

    props.addBoardData({
      owner: formFields.owner,
      title: formFields.title,
    });

    setFormFields({
      owner: "",
      title: "",
    });
  };

  return (
    <>
      <h3>Create New Board</h3>
      <form onSubmit={onSubmitBoard}>
        <label>Title</label>
        <input
          type="text"
          required
          value={formFields.title}
          onChange={handleTitleChange}
          maxLength="40"
          minLength="1"
          className="board-field"
        ></input>
        <label>Owner</label>
        <input
          type="text"
          required
          value={formFields.owner}
          onChange={handleOwnerChange}
          maxLength="40"
          minLength="1"
          className="board-field"
        ></input>
        <input type="submit" value="Submit" className="board-button" />
      </form>
    </>
  );
};

export default BoardForm;
