import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [questionInput, setQuestionInput] = useState("");
  const [conversation, setConversation] = useState([]);
  const [hasStarted, setHasStarted] = useState(false);
  // const [messageRole, setMessageRole] = useState("Assistant");
  // const [checkIsUser, setCheckIsUser] = useState("user");

  async function onSubmit(event) {
    event.preventDefault();
    
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: questionInput }),
      });

      const data = await response.json();
      
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }



      setHasStarted(true);
      setConversation([...conversation, { role: "user", text: questionInput }, { role: "assistant", text: data.result }]);
      setQuestionInput("");
    
    

    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        <h3>Ask Me a Question About The Farmers Market</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="question"
            placeholder="Enter a question"
            value={questionInput}
            onChange={(e) => setQuestionInput(e.target.value)}
          />
          <input type="submit" value="Generate answer" />
        </form>
        
        {!hasStarted && <p>Hello, I'm a chatbot that can answer questions about the farmers market. Ask me a question!</p>}
        
        {conversation.map((message, index) => (
          
          <div  key={index}>
            {/* <strong>{message.role === 'user' ? 'You: ' : 'Assistant: '}
            
            </strong>{message.text} */}
            <strong className={styles[`${message.role === 'user' ? "user" : "assistant"}Message`]}>{message.text}</strong>

            {/* <strong className={`${checkIsUser ? "user" : "assistant"}message`}>{message.text}</strong> */}
          </div>
        ))}
        
      </main>
    </div>
  );
}