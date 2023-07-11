import React, { useState } from "react";
import Chatbot from "./chatbot";
import chatboticon from "../assets/chatboticon.png"

const ChatbotIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-10 m-2 p-2">
      <img
        className= "flex items-center justify-center hover:cursor-pointer transition-transform transform hover:scale-105"
        src= {chatboticon}
        alt= "Chatbot"
       onClick={toggleChatbot}
      >
        
      </img>
      {isOpen && <Chatbot onClose={toggleChatbot} />}
    </div>
  );
};

export default ChatbotIcon;
