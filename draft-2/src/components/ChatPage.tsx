import { ChatPane } from "./ChatPane";

export default function ChatPage(props: any) {
  const { currentUser, messageArray, addMessageFunction } = props;

  return (
    <div className="row flex-grow-1">
      {/* <div className="col d-flex flex-column"> */}

        <ChatPane
          currentUser={currentUser}
          messageArray={messageArray}
          addMessageFunction={addMessageFunction}
        />

    </div>
  );
}
