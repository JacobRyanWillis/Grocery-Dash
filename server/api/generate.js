require('dotenv').config();
const openai = require("openai");
const { ApolloClient, InMemoryCache, HttpLink } = require("@apollo/client");
const fetch = require("node-fetch");

openai.apiKey = process.env.OPENAI_KEY;

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:3001/graphql", fetch }),
  cache: new InMemoryCache()
});

const query = `
AllOwnersDevInfo {
    allOwnersDevInfo {
      _id
      myProducts {
        _id
        category
        description
        feature
        price
        productName
        quantity
        weight
        image
      }
      ownerName
      ownerStory
      ownerImage
      username
    }
  }
`;

async function fetchGraphqlData() {
  try {
    const response = await client.query({ query });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    throw new Error("Failed to fetch data.");
  }
}

async function generateChatResponse(question, data) {
  const productNames = data.allOwnersDevInfo.map(owner => owner.myProducts.map(product => product.productName).join(", ")).join(", ");
  const GPT35TurboMessage = [
    { role: "system", content: `You are a farmers market front desk employee who only answers customer questions about the data provided. Do not mention that the user provided the data` },
    {
      role: "user",
      content: `"reference this data for the farmers market I'm shopping in and use it to answer my questions. Here's the data: ${productNames}. Do not mention that the user provided the data. The data is provided by the vendors at the farmers market"`,
    },
    {
      role: "assistant",
      content: "Hello! I'm the farmers market assistant. I can answer basic factual questions about the farmers market",
    },
    { role: "user", content: `${ question }`},
  ];
  
  const response = await openai.Completion.create({
    engine: "text-davinci-002",
    messages: GPT35TurboMessage,
  });

  return response.choices[0].message.content;
}

module.exports = async function (req, res) {
  let data;
  try {
    data = await fetchGraphqlData();
    console.log("data from graphql", data);
  } catch (error) {
    res.status(500).json({
      error: {
        message: error.message,
      }
    });
    return;
  }

  let chatResponse;
  try {
    chatResponse = await generateChatResponse(req.body.question, data);
  } catch (error) {
    res.status(500).json({
      error: {
        message: 'Failed to generate chat response.',
      }
    });
    return;
  }

  res.json({ answer: chatResponse });
};
