import React from "react";
import styled from "styled-components";

const Chat = () => {
  return (
    <StyledWrapper>
      <div className="card-container">
        <div className="card-header">
          <div className="img-avatar" />
          <div className="text-chat">Chat</div>
        </div>
        <div className="card-body">
          <div className="messages-container">
            <div className="message-box left">
              <p>Hello, How are you?</p>
            </div>
            <div className="message-box right">
              <p>I&apos;m good, thanks for asking! How about you?</p>
            </div>
          </div>
          <div className="message-input">
            <form>
              <textarea
                placeholder="Type your message here"
                className="message-send"
              />
              <button type="submit" className="button-send">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card-container {
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  width: 280px;
}

.card-header {
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}

.card-header .img-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 20px;
  background-color: #333;
}

.card-header .text-chat {
  color: black;
  margin: 0;
  font-size: 20px;
}

.card-body {
  flex: 1;
  overflow-y: auto;
}

.messages-container {
  padding: 15px;
}

.message-box {
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 10px;
}

.message-box.left {
  background-color: #f1f1f1;
  color: black;
  font-size: 13px;
  left: 0;
}

.message-box.right {
  background-color: #333;
  color: #fff;
  font-size: 13px;
  right: 0;
}

.message-input {
  padding: 5px;
  border-top: 1px solid #ccc;
}

.message-input .message-send {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  resize: none;
}

.message-input .button-send {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 10px;
  font-size: 13px;
}

.message-input .button-send:hover {
  background-color: #f1f1f1;
  color: #333;
}

`;

export default Chat;
