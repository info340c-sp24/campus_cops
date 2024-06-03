import ChatHeader from "./components/ChatHeader.tsx";
import { ChatPane } from "./components/ChatPane.tsx";

function CommunityChat() {
  return (
    <>
      <h1>UW Seattle Community Chat Forum</h1>
      <div className="row flex-grow-1">
        <div className="col d-flex flex-column">
          <ChatPane />
        </div>
      </div>
    </>
  );
}

export default CommunityChat;
