import { useState } from "react";
import { ComposeForm } from "./ComposeForm";

export function ChatPane(props: any) {
  const { messageArray, addMessageFunction, currentUser } = props;

  const messagesToShow = messageArray.sort(
    (m1: any, m2: any) => m2.timestamp - m1.timestamp
  );

  const messageItemArray = messagesToShow.map((messageObj: any) => {
    const elem = (
      <MessageItem messageData={messageObj} key={messageObj.timestamp} />
    );
    return elem;
  });

  return (
    <>
      <div className="scrollable-pane pt-2 my-2">
        {messageArray.length === 0 && (
          <p>
            no messages yet...send the first message to start the conversation!
          </p>
        )}

        {messageItemArray}
      </div>

      <ComposeForm
        currentUser={currentUser}
        addMessageFunction={addMessageFunction}
      />
    </>
  );
}

function MessageItem(props: any) {
  const { userName, userImg, text } = props.messageData;

  const [isLiked, setIsLiked] = useState(false);

  const handleClick = function () {
    setIsLiked(!isLiked);
  };

  let buttonColor = "grey";
  if (isLiked) {
    buttonColor = "red";
  }

  return (
    <div className="message d-flex mb-3">
      <div className="me-2">
        <img src={userImg} alt={userName + "'s avatar"} />
      </div>
      <div className="flex-grow-1">
        <p className="user-name">{userName}</p>
        <p>{text}</p>
        <button className="btn like-button" onClick={handleClick}>
          <span className="material-icons" style={{ color: buttonColor }}>
            like
          </span>
        </button>
      </div>
    </div>
  );
}
