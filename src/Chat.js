import './Chat.css'
import React from "react";

const Chat = () => {
  return (
    <>
      <div class="card-container">
        <div class="card-header">
          <div class="img-avatar" />
          <div class="text-chat">Chat</div>
        </div>
        <div class="card-body">
          <div class="messages-container">
            <div class="message-box left">
              <p>Hello, How are you?</p>
            </div>
            <div class="message-box right">
              <p>I&apos;m good, thanks for asking! How about you?</p>
            </div>
          </div>
          <div class="message-input">
            <form>
              <textarea
                placeholder="Type your message here"
                class="message-send"
              />
              <button type="submit" class="button-send">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
