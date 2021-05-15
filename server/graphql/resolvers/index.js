// resolvers
const Query = require("./query/Query");
const Book = require("./query/Book");
const Publisher = require("./query/Publisher");
const User = require("./query/User");
// const Movie = require("./query/Movie");

const Mutation = require("./mutation/index");
module.exports = {
  Query,
  Mutation,
  Book,
  Publisher,
  User,
};
