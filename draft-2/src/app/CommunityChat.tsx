function CommunityChat() {
  return (
    <>
      <main>
        <div className="container">
          <div className="msg-header">
            <h1>UW Seattle Chat</h1>
          </div>

          <div className="chat-page">
            <div className="msg-inbox">
              <div className="chats">
                <div className="msg-page">
                  <div className="received-chats">
                    <div className="received-msg">
                      <div className="received-msg-inbox">
                        <p>Hi User 1, *something about campus safety*</p>
                        <span className="time">8:36 PM | April 21</span>
                      </div>
                    </div>
                  </div>

                  <div className="outgoing-chats">
                    <div className="outgoing-msg">
                      <div className="outgoing-chats-msg">
                        <p className="multi-msg">
                          Hi User 2, *something else about campus safety*
                        </p>
                        <p className="multi-msg">
                          Something else about campus safety again
                        </p>
                        <span className="time">8:39 PM | April 21</span>
                      </div>
                    </div>
                  </div>

                  <div className="received-chats">
                    <div className="received-msg">
                      <div className="received-msg-inbox">
                        <p>Hi User 1, *something about campus safety*</p>
                        <span className="time">8:42 PM | April 21</span>
                      </div>
                    </div>
                  </div>

                  <div className="outgoing-chats">
                    <div className="outgoing-msg">
                      <div className="outgoing-chats-msg">
                        <p className="multi-msg">
                          Hi User 2, *something else about campus safety*
                        </p>
                        <p className="multi-msg">
                          Something else about campus safety again
                        </p>
                        <span className="time">8:50 PM | April 21</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="msg-bottom">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Write message, press Enter to send..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CommunityChat;