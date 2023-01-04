import { useState } from "react";

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
      ownerData: formFields.owner,
      titleData: formFields.title,
    });

    setFormFields({
      owner: "",
      title: "",
    });
  };

  return (
    <>
      <h2>Create New Board</h2>
      <form onSubmit={onSubmitBoard}>
        <label>Title</label>
        <input
          type="text"
          value={formFields.title}
          onChange={handleTitleChange}
          className={
            formFields.title.length === 0 || formFields.title.length > 40
              ? "invalid-input"
              : ""
          }
        ></input>
        <label>Owner</label>
        <input
          type="text"
          value={formFields.owner}
          onChange={handleOwnerChange}
          className={
            formFields.owner.length === 0 || formFields.owner.length > 40
              ? "invalid-input"
              : ""
          }
        ></input>
        <input type="submit" value="Create new board" />
      </form>
    </>
  );
};

export default BoardForm;
