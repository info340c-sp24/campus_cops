import React, { useState } from 'react';

import { ComposeForm } from './ComposeForm.js';

import INITIAL_CHAT_LOG from '../data/chat_log.json'

export function ChatPane(props) {
  const { currentChannel, currentUser } = props;

  const [msgStateArray, setMsgStateArray] = useState(INITIAL_CHAT_LOG); 

  const addMessage = function(messageText, channel) {
    const newMessage = {
      "text": messageText,
      "timestamp": Date.now(),
      "channel": channel,
      "isCurrentUser": true
    }
    const newArray = [...msgStateArray, newMessage];
    setMsgStateArray(newArray);
  }


  const orderedMessageArray = msgStateArray
    .sort((m1, m2) => m2.timestamp - m1.timestamp);

  //filter for only channel stuff
  const channelMessages = orderedMessageArray.filter((msgObj) => {
    return msgObj.channel === currentChannel;
  })


  const messageItemArray = channelMessages.map((chatObj) => {
      const elem = <MessageItem messageData={chatObj} key={chatObj.timestamp} />
      return elem; 
  });

  return (
    <> {/* fake div */}
      <div className="scrollable-pane pt-2 my-2">
          {/* conditional rendering */}
          { messageItemArray.length === 0 && 
            <p>no messages yet...send the first message to start the conversation!</p>
          }
          {messageItemArray}
        </div>

        <ComposeForm currentChannel={currentChannel} addMessageFunction={addMessage}/>
    </>
  )
}

function MessageItem(props) {
  const { text, isCurrentUser } = props.messageData;

  const [isLiked, setIsLiked] = useState(false);

  const handleClick = function(event) {
    setIsLiked(!isLiked);
  }

  const textColor = isCurrentUser ? "#b0deee" : "black";

  //decide what it looks like
  let buttonColor = "grey";
  if(isLiked) {
    buttonColor = "red"; //filled in
  }

  return (
   <div className="message d-flex mb-3">
    <div className="flex-grow-1">
      <p style={{color: textColor }}>{text}</p>
      <button className="btn like-button" onClick={handleClick}>
          <span className="material-icons" style={{ color: buttonColor }}>like</span>
      </button>
    </div>
   </div> 
  )
}