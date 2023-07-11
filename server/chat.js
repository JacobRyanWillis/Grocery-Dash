const { Configuration, OpenAIApi } = require("openai");
const getWholeMarketData = require("./utils/WholeMarketData");
const getProfileData = require("./utils/chatbotProfile");
const { ApolloClient, InMemoryCache, HttpLink } = require('@apollo/client');
const gql = require('graphql-tag');
const fetch = require('cross-fetch');


const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NODE_ENV === 'production' ? 
      'https://our-domain.com/graphql' : // replace with our actual domain
      'http://localhost:3001/graphql', fetch
  }),
  cache: new InMemoryCache(),
});

const configuration = new Configuration({
  apiKey: process.env.OPENAIAPIKEY,
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

const ALL_PRODUCTS_QUERY = gql`
query AllProducts {
  publicOwners {
    myProducts {
      category
      feature
      description
      image
      price
      productName
      quantity
      weight
    }
  }
}
`;

// Fetch data from your GraphQL server
async function fetchGraphqlData() {
  try {
    const { data } = await client.query({ query: PUBLIC_OWNERS_QUERY }, { query: ALL_PRODUCTS_QUERY });
    // console.log("data: ", data)
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw new Error("Failed to fetch data.");
  }
}

async function chatbotResponse(question) {
  // Fetch data from your GraphQL server
  let data = await fetchGraphqlData();
  data = JSON.stringify(data);


// console.log(process.env.OPENAIAPIKEY)
  


//   this is the first set of messages that informs the chatbot what to do and feeds it the data
  const GPT35TurboMessage = [
    { role: "system", content: `You are a farmers market front desk employee who only answers customer questions about the data provided. Do not mention that the user provided the data. If a user asks you a question about yourself then reference this information ${getProfileData()}. Do not make things up and do no deviate from the information.` },
    {
      role: "user",
      content: `"reference this data for the farmers market I'm shopping in and use it to answer my questions. Here's the data for all the owners their products ${data}. Here is all the data for the market as a whole ${getWholeMarketData()}Do not mention that the user provided the data. The data is provided by the vendors at the farmers market"`,
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
      max_tokens: 200,
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