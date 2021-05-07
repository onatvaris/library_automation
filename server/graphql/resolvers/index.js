// resolvers
const Query = require("./query/Query");
const Book = require("./query/Book");
const Publisher = require("./query/Publisher");
// const Movie = require("./query/Movie");

const Mutation = require("./mutation/index");
module.exports = {
  Query,
  Mutation,
  Book,
  Publisher
};
