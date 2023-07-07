require ('dotenv').config();
const openai = require("openai");
const { Configuration, OpenAIApi } = require("openai");
const { Query: { publicOwners } } = require('./schemas/resolvers'); // Loading the necessary GraphQL resolvers

// Configuring OpenAI
const configuration = new Configuration({
    apiKey: "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"
  });
  const openai = new OpenAIApi(configuration);
  
  export default async function (req, res) {
    if (!configuration.apiKey) {
      res.status(500).json({
        error: {
          message: "OpenAI API key not configured, please follow instructions in README.md",
        }
      });
      return;
    }
}

// This function fetches the data using the GraphQL resolver
async function fetchGraphqlData() {
  try {
    const owners = await publicOwners(); // Calls the publicOwners resolver to get the owner data from the database
    return { allOwnersDevInfo: owners }; // Returns the data in a format that is compatible with the chatbot response generator
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw new Error("Failed to fetch data.");
  }
}

// This function generates the response of the chatbot using OpenAI
async function generateChatResponse(question, data) {
  // Extracts the product names from the data and formats them as a string
  const dataForChatbot = data.publicOwners.map(owner => owner.myProducts.map(product => product.productName).join(", ")).join(", ");
  console.log("Data for chatbot line 32 chat.js:", dataForChatbot);
  // Creates the prompt for the OpenAI API
  const GPT35TurboMessage = [
    { role: "system", content: `You are a farmers market front desk employee who only answers customer questions about the data provided. Do not mention that the user provided the data` },
    { role: "user", content: `"reference this data for the farmers market I'm shopping in and use it to answer my questions. Here's the data: ${dataForChatbot}. Do not mention that the user provided the data. The data is provided by the vendors at the farmers market"` },
    { role: "assistant", content: "Hello! I'm the farmers market assistant. I can answer basic factual questions about the farmers market" },
    { role: "user", content: `${question}` },
  ];
  
  // Calls the OpenAI API to generate the chatbot's response
  const response = await openai.createChatCompletion({
    engine: "gpt-3.5-turbo",
    messages: GPT35TurboMessage,
    maxTokens: 300,
    temperature: 0.1,
  });

  // Returns the chatbot's response
  return response.choices[0].message.content;
}

// This function generates the response of the chatbot
async function chatbotResponse(userMessage) {
  let data;
  
  // Fetches the data from the GraphQL server
  try {
    data = await fetchGraphqlData();
    console.log("data from graphql", data);
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }

  let chatResponse;
  
  // Generates the chatbot's response
  try {
    chatResponse = await generateChatResponse(userMessage, data);
  } catch (error) {
    console.error(error);
    throw new Error('Failed to generate chat response.');
  }

  // Returns the chatbot's response
  return { answer: chatResponse };
}

// Exporting the chatbotResponse function to be used in the server file
module.exports = {
  chatbotResponse,
};





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
