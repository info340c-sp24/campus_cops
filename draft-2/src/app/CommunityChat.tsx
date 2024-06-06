import { useEffect, useState } from 'react';
import ChatPage from '../components/ChatPage';
import DEFAULT_USERS from './data/users.json';
import { getDatabase, ref, push, onValue } from 'firebase/database';
import { db } from '../components/FirebaseConfig'; // Assuming you have firebase.js setup properly

function CommunityChat() {
  const [messageStateArray, setMessageStateArray] = useState([]);
  const [currentUser] = useState(DEFAULT_USERS[1]);

  useEffect(() => {
    const msgRef = ref(db, 'allMessages');

    const handleSnapshot = (snapshot) => {
      const allMessages = snapshot.val();

      if (allMessages) {
        const allMessagesArray = Object.keys(allMessages).map((key) => ({
          ...allMessages[key],
          firebaseKey: key,
        }));
        setMessageStateArray(allMessagesArray);
      }
    };

    // Listen for changes in the database
    const unsubscribe = onValue(msgRef, handleSnapshot);

    return () => {
      // Clean up listener when component unmounts
      unsubscribe();
    };
  }, []);

  const addMessage = (userObj, messageText) => {
    const newMessage = {
      userId: userObj.userId,
      userName: userObj.userName,
      userImg: userObj.userImg,
      text: messageText,
      timestamp: Date.now(),
    };

    const msgRef = ref(db, 'allMessages');

    // Push the new message to the database
    push(msgRef, newMessage)
      .then(() => {
        console.log('Message added successfully');
      })
      .catch((error) => {
        console.error('Error adding message: ', error);
      });
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
