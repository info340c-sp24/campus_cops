import React, {useEffect, useState} from 'react';

import ChatPage from '../components/ChatPage';

import INITIAL_HISTORY from './data/chat_log.json'
import DEFAULT_USERS from './data/users.json';

import { getDatabase, onValue, push, ref } from 'firebase/database';

function CommunityChat() {
  const [messageStateArray, setMessageStateArray] = useState([]);
  // const [messageStateArray, setMessageStateArray] = useState(INITIAL_HISTORY);
  const [currentUser] = useState(DEFAULT_USERS[1]);

  useEffect(() => {
    const db = getDatabase()
    const msgRef = ref(db, 'allMessages');

    onValue(msgRef, (snapshot) => {
      const allMessages = snapshot.val()

      // const allMessagesArray = keyArray.map((key) => {
      //   const transform = allMessages[key];
      //   transform.firebaseKey = key;
      //   return transform
      // })

      setMessageStateArray(allMessages);
    })

  }, [])

  const addMessage = function(userObj, messageText) {
    const newMessage = {
      "userId": userObj.userId,
      "userName": userObj.userName,
      "userImg": userObj.userImg,
      "text": messageText,
      "timestamp": Date.now()
    }
    // const newArray = [...messageStateArray, newMessage];
    // setMessageStateArray(newArray);
    const db = getDatabase();
    const msgRef = ref(db, 'allMessages');

    push(msgRef, newMessage)

  }

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
