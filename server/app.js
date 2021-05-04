const { ApolloServer, gql } = require("apollo-server");
const { importSchema } = require("graphql-import");
require("dotenv").config();

//models
const User = require("./models/User");
const Book = require("./models/Book");
const Publisher = require("./models/Publisher");

const resolvers = require("./graphql/resolvers");

const dbconnect = require("./db")();

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs: importSchema("./graphql/schema.graphql"),
  resolvers,
  context: {
    User,
    Book,
    Publisher,
  },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
