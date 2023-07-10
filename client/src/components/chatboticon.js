import React, { useState } from "react";
import Chatbot from "./chatbot";

const ChatbotIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="fixed bottom-4 right-4 z-10 bg-gray-500 text-white rounded-full p-3"
        onClick={toggleChatbot}
      >
        Chat
      </button>
      {isOpen && <Chatbot onClose={toggleChatbot} />}
    </div>
  );
};

export default ChatbotIcon;
