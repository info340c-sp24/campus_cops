import { useState, useEffect } from "react";
import { ComposeForm } from "./ComposeForm";
import { auth } from "./FirebaseConfig";

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

  const [useruid, setUserUID] = useState<String | null>(null);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserUID(user.uid);
    }
  }, []);
  return (
    <>
      <div
        className="scrollable-pane pt-2 my-2"
        style={{ maxHeight: "300px", overflowY: "auto" }}
      >
        {messageArray.length === 0 && (
          <p>
            no messages yet...send the first message to start the conversation!
          </p>
        )}
        {messageItemArray}
      </div>

      {useruid ? (
        <ComposeForm
          currentUser={currentUser}
          addMessageFunction={addMessageFunction}
        />
      ) : (
        <p>Sign in to upload messages!</p>
      )}
    </>
  );
}

function MessageItem(props: any) {
  const { userName, userImg, text } = props.messageData;
  console.log(userName + userImg + text);

  useEffect(() => {
    console.log("Message received:", props.messageData);
  }, [props.messageData]);

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
      {/* <div className="me-2">
        <img src={props.messageData.userImg} alt={props.messageData.userName + "'s avatar"} />
      </div> */}
      <div className="flex-grow-1">
        <p className="user-name">{props.messageData.userName}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.messageData.text}</p>
        <button className="btn like-button" onClick={handleClick}>
          <span
            className="material-icons"
            style={{ color: buttonColor, padding: "10px" }}
          >
            Like!
          </span>
        </button>
      </div>
    </div>
  );
}
