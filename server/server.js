const { ApolloServer, gql } = require("apollo-server");
const axios = require("axios");

const typeDefs = gql`
  type Query {
    getCategories: [String]
    getJoke(category: String): String
  }
`;

const resolvers = {
  Query: {
    getCategories: async () => {
      const { data } = await axios.get(
        "https://api.chucknorris.io/jokes/categories"
      );
      return data;
    },
    getJoke: async (_, { category }) => {
      const { data } = await axios.get(
        `https://api.chucknorris.io/jokes/random?category=${category}`
      );
      return data.value;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`); // eslint-disable-line no-console
});
