const { Configuration, OpenAIApi } = require("openai");
// const { chatbotData } = require("./schemas/resolvers");
const { publicOwners } = require("./schemas/resolvers");
const configuration = new Configuration({
  apiKey: "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"
});
const openai= new OpenAIApi(configuration);

async function chatbotResponse(question) {
  if (!configuration.apiKey) {
    return {
      status: 500,
      body: {
        error: {
          message: "OpenAI API key not configured, please follow instructions in README.md",
        }
      }
    };
  }

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

  const data = await publicOwners({}); // Using model directly to query database

  const GPT35TurboMessage = [
    { role: "system", content: `You are a farmers market front desk employee who only answers customer questions about the data provided. Do not mention that the user provided the data` },
    {
      role: "user",
      content: `"reference this data for the farmers market I'm shopping in and use it to answer my questions. Here's the data ${JSON.stringify(data)}. Do not mention that the user provided the data. The data is provided by the vendors at the farmers market"`,
    },
    {
      role: "assistant",
      content: "Hello! I'm the farmers market assistant. I can answer basic factual questions about the farmers market",
    },
    { role: "user", content: question},
  ];
  
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: GPT35TurboMessage,
      max_tokens: 200,
      temperature: 2,
    });

    return {
      status: 200,
      body: { result: completion.data.choices[0].message.content }
    };

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
