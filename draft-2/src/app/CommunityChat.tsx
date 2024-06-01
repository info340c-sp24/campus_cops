import ChatHeader from './components/ChatHeader.tsx';
import { ChatPane } from './components/ChatPane.tsx';

function CommunityChat() {

  return (
    <div className="container-fluid d-flex flex-column">
      <ChatHeader/>
      <div className="row flex-grow-1">
        <div className="col d-flex flex-column">
          <ChatPane/>
        </div>
      </div>
    </div>
  );
}

export default CommunityChat;