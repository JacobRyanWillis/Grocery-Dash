import { useState } from "react";

const ChatBot = ({ onClose }) => {
  const [questionInput, setQuestionInput] = useState("");
  const [conversation, setConversation] = useState([]);
  const [hasStarted, setHasStarted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: questionInput }),
      });

      const data = await response.json();
      console.log(data)
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setHasStarted(true);
      setConversation([
        ...conversation,
        { role: "user", text: questionInput },
        { role: "assistant", text: data.body.result },
      ]);
      setQuestionInput("");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <>
    <div className="fixed bottom-16 right-16 p-4 bg-white rounded-tl-md shadow-lg">
      <div>
    
        <main className="">
          <h3>Ask Me a Question About The Farmers Market</h3>
          <form onSubmit={onSubmit}>
            <textarea
              rows={4}
              className="w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6"
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
          
          {!hasStarted && (
            <p>
              Hello, I'm a chatbot that can answer questions about the farmers
              market. Ask me a question!
            </p>
          )}

          {conversation.map((message, index) => (
            <div key={index}>
              <strong>{message.role === 'user' ? 'You: ' : 'Assistant: '}
            {console.log(message)}
            </strong>
              <strong className={`${message.role === 'user' ? "user" : "assistant"}Message`}>{message.text}</strong> 

              {/* <strong className={`${checkIsUser ? "user" : "assistant"}message`}>{message.text}</strong> */}
            </div>
          ))}
        </main>
      </div>
      <button onClick={onClose}>Close</button>
    </div>
    </>
  );
};
export default ChatBot;
