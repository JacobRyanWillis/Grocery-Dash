const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const bodyParser = require('body-parser'); // New
const { authMiddleware } = require('./utils/auth');
const chatRoute = require('../server/chat'); // New

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: '*', // adjust this to your needs
    credentials: true
  },
  context: authMiddleware
});


// For the chatbot++++++++++++++++++++++++++++++++++++++++++++++++
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/api/chatbot", async (req, res) => {
  try {
    const question = req.body.question; 
    const botResponse = await chatRoute.chatbotResponse(question); 
    res.status(200).json(botResponse);
  } catch (error) {
    console.error(`Error in chatbot: ${error}`);
    res.status(500).json({ error: "An error occurred in the chatbot.", errorDetails: error });
  }
});


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
};

// Call the async function to start the server
startApolloServer(typeDefs, resolvers);
