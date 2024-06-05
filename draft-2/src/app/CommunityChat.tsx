import { useState } from "react";

import ChatPage from "../components/ChatPage";

import INITIAL_HISTORY from "./data/chat_log.json";
import DEFAULT_USERS from "./data/users.json";

function CommunityChat() {
  const [messageStateArray, setMessageStateArray] = useState(INITIAL_HISTORY);
  const [currentUser] = useState(DEFAULT_USERS[1]);

  const addMessage = function (userObj: any, messageText: any) {
    const newMessage = {
      userId: userObj.userId,
      userName: userObj.userName,
      userImg: userObj.userImg,
      text: messageText,
      timestamp: Date.now(),
    };
    const newArray = [...messageStateArray, newMessage];
    setMessageStateArray(newArray);
  };

  return (
    <div className="container-fluid d-flex flex-column">
      <h1>UW Seattle Community Chat Forum</h1>
      <ChatPage
        currentUser={currentUser}
        messageArray={messageStateArray}
        addMessageFunction={addMessage}
      />
    </div>
  );
}

export default CommunityChat;
