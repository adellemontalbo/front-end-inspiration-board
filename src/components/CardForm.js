import { useState } from "react";

const CardForm = ({ id, addCardData }) => {
  const [messageData, setMessageData] = useState({
    message: "",
    likesCount: 0,
  });

  const handleMessageChange = (event) => {
    setMessageData({ ...messageData, message: event.target.value });
  };

  // Change this once database is ready
  const onSubmitCard = (event) => {
    event.preventDefault();

    addCardData({
      message: messageData.message,
    });

    setMessageData({
      message: "",
      likesCount: "",
    });
  };

  return (
    <>
      <h2>Create New Message</h2>
      <form onSubmit={onSubmitCard}>
        <label>Message</label>
        <input
          type="text"
          value={messageData.message}
          onChange={handleMessageChange}
          className={
            messageData.message.length === 0 || messageData.message.length > 40
              ? "invalid-input"
              : ""
          }
        ></input>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default CardForm;
