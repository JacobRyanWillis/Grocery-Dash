const { Configuration, OpenAIApi } = require("openai");
const { chatbotData } = require("./schemas/resolvers");
const { ApolloClient, InMemoryCache, HttpLink } = require('@apollo/client');
const gql = require('graphql-tag');
const fetch = require('cross-fetch');

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NODE_ENV === 'production' ? 
      'https://our-domain.com/graphql' : // replace with your actual domain
      'http://localhost:3001/graphql', fetch
  }),
  cache: new InMemoryCache(),
});


const configuration = new Configuration({
  apiKey: "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"
});
const openai= new OpenAIApi(configuration);


// Define your GraphQL query
const PUBLIC_OWNERS_QUERY = gql`
  query GetPublicOwners {
    publicOwners {
      _id
    myProducts {
      category
      feature
      image
      price
      productName
      quantity
      weight
    }
    ownerImage
    ownerName
    ownerStory
    zipCode
    }
  }
`;



// Fetch data from your GraphQL server
async function fetchGraphqlData() {
  try {
    const { data } = await client.query({ query: PUBLIC_OWNERS_QUERY });
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw new Error("Failed to fetch data.");
  }
}

async function chatbotResponse(question) {
  // Fetch data from your GraphQL server
  let data = await fetchGraphqlData();
  console.log(data);
  data = JSON.stringify(data);


// set up the chatbot response
// async function chatbotResponse(question) {
//   if (!configuration.apiKey) {
//     return {
//       status: 500,
//       body: {
//         error: {
//           message: "OpenAI API key not configured, please follow instructions in README.md",
//         }
//       }
//     };
//   }

  

//   trim the question down and make sure it's not empty
  if (question.trim().length === 0) {
    return {
      status: 400,
      body: {
        error: {
          message: "Please enter a valid question.",
        }
      }
    };
  }

//   pull from the resolver. This is missing the thing from graphql that determines what data to pull. the big object
// const data = {};
// async function fetchGraphqlData() {
//     try {
//       const data = chatbotData(); // Calls the publicOwners resolver to get the owner data from the database
//       return { data }; // Returns the data in a format that is compatible with the chatbot response generator
//     } catch (error) {
//       console.error("Failed to fetch data:", error);
//       throw new Error("Failed to fetch data.");
//     }
//   }



//   this is the first set of messages that informs the chatbot what to do and feeds it the data
  const GPT35TurboMessage = [
    { role: "system", content: `You are a farmers market front desk employee who only answers customer questions about the data provided. Do not mention that the user provided the data` },
    {
      role: "user",
      content: `"reference this data for the farmers market I'm shopping in and use it to answer my questions. Here's the data ${data}. Do not mention that the user provided the data. The data is provided by the vendors at the farmers market"`,
    },
    {
      role: "assistant",
      content: "Hello! I'm the farmers market assistant. I can answer basic factual questions about the farmers market",
    },
    { role: "user", content: question},
  ];
  
//   this is from openAI npm package and it sets up the chatbot response and sends it the message above
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: GPT35TurboMessage,
      max_tokens: 150,
      temperature: 0.1,
    });

    // return the chatbot response if it worked
    return {
      status: 200,
      body: { result: completion.data.choices[0].message.content }
    };

    // otherwise return an error. couldn't use res.status because of something to do with express and how it handles async functions
  } catch(error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
      return {
        status: error.response.status,
        body: error.response.data
      };
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      return {
        status: 500,
        body: {
          error: {
            message: 'An error occurred during your request.',
          }
        }
      };
    }
  }
}

module.exports = { chatbotResponse };






















// import needed libraries
// const { Configuration, OpenAIApi } = require("openai");
// const publicOwners = require('../schemas/resolvers');

// const configuration = new Configuration({
//   apiKey: "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"
// });
// const openai= new OpenAIApi(configuration);

// async function chatbotResponse (req, res) {
//   if (!configuration.apiKey) {
//     res.status(500).json({
//       error: {
//         message: "OpenAI API key not configured, please follow instructions in README.md",
//       }
//     });
//     return;
//   }

// const question = req.body.question || '';
//   if (question.trim().length === 0) {
//     res.status(400).json({
//       error: {
//         message: "Please enter a valid question.",
//       }
//     });
//     return;
//   }







// // get all the data needed to provide to the chatbot

// // This function fetches the data using the GraphQL resolver
// async function fetchGraphqlData() {
//   try {
//     const owners = await publicOwners(); // Calls the publicOwners resolver to get the owner data from the database
//     return { publicOwners: owners }; // Returns the data in a format that is compatible with the chatbot response generator
//   } catch (error) {
//     console.error("Failed to fetch data:", error);
//     throw new Error("Failed to fetch data.");
//   }
// }

// // This function generates the response of the chatbot using OpenAI
// async function generateChatResponse(question, data) {
//   // Extracts the product names from the data and formats them as a string
//   const dataForChatbot = data.publicOwners.map(owner => owner.myProducts.map(product => product.productName).join(", ")).join(", ");
//   console.log("Data for chatbot line 32 chat.js:", dataForChatbot);
//   // Creates the prompt for the OpenAI API
//   const GPT35TurboMessage = [
//     { role: "system", content: `You are a farmers market front desk employee who only answers customer questions about the data provided. Do not mention that the user provided the data` },
//     { role: "user", content: `"reference this data for the farmers market I'm shopping in and use it to answer my questions. Here's the data: ${dataForChatbot}. Do not mention that the user provided the data. The data is provided by the vendors at the farmers market"` },
//     { role: "assistant", content: "Hello! I'm the farmers market assistant. I can answer basic factual questions about the farmers market" },
//     { role: "user", content: `${question}` },
//   ];
  
//   // Calls the OpenAI API to generate the chatbot's response
//   const response = await openai.createChatCompletion({
//     engine: "gpt-3.5-turbo",
//     messages: GPT35TurboMessage,
//     maxTokens: 300,
//     temperature: 0.1,
//   });

//   // Returns the chatbot's response
//   console.log("Chatbot response:", response.choices[0].message.content)
//   return response.choices[0].message.content;
// }


//   // Fetches the data from the GraphQL server
//   try {
//     data = await fetchGraphqlData();
//     console.log("data from graphql", data);
//   } catch (error) {
//     console.error(error);
//     throw new Error(error.message);
//   }

//   let chatResponse;
  
//   // Generates the chatbot's response
//   try {
//     chatResponse = await generateChatResponse(userMessage, data);
//   } catch (error) {
//     console.error(error);
//     throw new Error('Failed to generate chat response.');
//   }

//   // Returns the chatbot's response
//   return { answer: chatResponse };
// }

// // Exporting the chatbotResponse function to be used in the server file
// module.exports = {
//   chatbotResponse,
// };
























// require('dotenv').config();
// const openai = require("openai");
// const express = require('express'); 
// const router = express.Router(); 

// openai.apiKey = process.env.OPENAI_KEY;



// const query = `
// AllOwnersDevInfo {
//     allOwnersDevInfo {
//       _id
//       myProducts {
//         _id
//         category
//         description
//         feature
//         price
//         productName
//         quantity
//         weight
//         image
//       }
//       ownerName
//       ownerStory
//       ownerImage
//       username
//     }
//   }
// `;

// // 
// const { Query: { publicOwners } } = require('./resolvers');

// async function fetchGraphqlData() {
//   try {
//     const owners = await publicOwners();
//     return { publicOwners: owners };
//   } catch (error) {
//     console.error("Failed to fetch data:", error);
//     throw new Error("Failed to fetch data.");
//   }
// }


// async function generateChatResponse(question, data) {
//   const localMarketData = data.allOwnersDevInfo.map(owner => owner.myProducts.map(product => product.productName).join(", ")).join(", ");
//   const GPT35TurboMessage = [
//     { role: "system", content: `You are a farmers market front desk employee who only answers customer questions about the data provided. Do not mention that the user provided the data` },
//     {
//       role: "user",
//       content: `"reference this data for the farmers market I'm shopping in and use it to answer my questions. Here's the data: ${localMarketData}. Do not mention that the user provided the data. The data is provided by the vendors at the farmers market"`,
//     },
//     {
//       role: "assistant",
//       content: "Hello! I'm the farmers market assistant. I can answer basic factual questions about the farmers market",
//     },
//     { role: "user", content: `${ question }`},
//   ];
  
//   const response = await openai.createChatCompletion({
//     engine: "gpt-3.5-turbo",
//     messages: GPT35TurboMessage,
//     maxTokens: 250,
//     temperature: 0.1,
//   });

//   return response.choices[0].message.content;
// }

// // Define the POST endpoint
// router.post('/', async function (req, res) {
//   let data;
//   try {
//     data = await fetchGraphqlData();
//     console.log("data from graphql", data);
//   } catch (error) {
//     res.status(500).json({
//       error: {
//         message: error.message,
//       }
//     });
//     return;
//   }

//   let chatResponse;
//   try {
//     chatResponse = await generateChatResponse(req.body.question, data);
//   } catch (error) {
//     res.status(500).json({
//       error: {
//         message: 'Failed to generate chat response.',
//       }
//     });
//     return;
//   }

//   res.json({ answer: chatResponse });
// });

// module.exports = router;
