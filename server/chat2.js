// const { graphql, buildSchema } = require('graphql');
// const { typeDefs, resolvers } = require('./schemas');

// const schema = buildSchema(typeDefs);

// async function executeQuery(query, variables) {
//   const result = await graphql(schema, query, resolvers, null, variables);
//   if (result.errors) {
//     console.error(result.errors);
//     throw new Error('Failed to execute GraphQL query.');
//   }
//   return result.data;
// }

// async function generateChatResponse(question) {
//   const query = `
//     query ($question: String!) {
//       getResponse(question: $question) {
//         response
//       }
//     }
//   `;  // This should be your actual GraphQL query
  
//   // variables used in the query
//   const variables = {
//     question: question
//   }

//   try {
//     const data = await executeQuery(query, variables);
//     // Use data to generate chat response...
//     // Assuming getResponse is the resolver that returns the data you need, and response is the field that contains the response
//     const response = data.getResponse.response;
//     return response;

//   } catch (error) {
//     console.error(error);
//     return 'An error occurred while fetching data.';
//   }
// }

// module.exports = {
//   generateChatResponse
// };