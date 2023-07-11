import { useState } from "react";
import pear from '../assets/pear.png';

const ChatBot = ({ onClose }) => {
  const [questionInput, setQuestionInput] = useState("");
  const [conversation, setConversation] = useState([]);
  const [hasStarted, setHasStarted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsTyping(true);

      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: questionInput }),
      });

      const data = await response.json();
      console.log(data);
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setHasStarted(true);
      setConversation((prevConversation) => [
        ...prevConversation,
        { role: "user", text: questionInput },
      ]);

      setTimeout(() => {
        setConversation((prevConversation) => [
          ...prevConversation,
          { role: "assistant", text: data.body.result },
        ]);
        setIsTyping(false);
      }, 2000);

      setQuestionInput("");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const handleClose = () => {
    onClose(); // Call the onClose function passed as a prop from the parent component
  };
  return (
    <>
<<<<<<< HEAD
    <div className="fixed bottom-16 right-16 p-4 bg-white rounded-tl-md shadow-lg">
      <div>
    
        <main className="">
          <h3>Ask Me a Question About The Farmers Market</h3>
=======
      <div className="fixed bottom-20 right-20 bg-white rounded-tl-md drop-shadow-xl shadow-class">
        <div className="bg-tan h-10 flex justify-between">
          <div className="flex">
            <img className="p-2" src={pear} alt="pear"></img>
            <div className="flex flex-col text-sm">
              <p>Market Dash</p>
              <p className="text-xs">24/7 Support</p>
            </div>
          </div>
          <button className="px-4 bg-white rounded-full transition-transform transform hover:scale-95" onClick={handleClose}>
            x
          </button>
        </div>
        <div className="max-w-sm max-h-lg p-4">
          <div className="h-96 overflow-y-auto overflow-x-auto">
            <div className="text-left mb-4">
              {conversation.map((message, index) => (
                <div
                  key={index}
                  className={`${
                    message.role === "user"
                      ? "bg-gray-200 p-2 rounded-md mb-2 text-right"
                      : "bg-blue-500 text-white p-2 rounded-md mb-2 text-left"
                  }`}
                >
                  <p className={`${message.role === 'user' ? "user" : "assistant"}Message`}>
                    {message.text}
                  </p>
                </div>
              ))}
              {isTyping && (
                <div className="bg-blue-500 text-white p-2 rounded-md mb-2 text-left">
                  <p className="assistantMessage">Zesty is typing...</p>
                </div>
              )}
            </div>
          </div>
          {!hasStarted && (
            <p>
              Hello, I'm Zesty! Ask me a question!
            </p>
          )}
>>>>>>> 062c4d8717000028b546fbe9be2b0fdf86d8d443
          <form onSubmit={onSubmit}>
            <textarea
              rows={1}
              className="w-full resize-none rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
              placeholder="Enter a question"
              value={questionInput}
              onChange={(e) => setQuestionInput(e.target.value)}
            />
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-grass px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 max-w-xs"
            >
              Generate Answer
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
