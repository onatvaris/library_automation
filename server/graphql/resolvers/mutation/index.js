const user = require("./user.mutation");
const book = require("./book.mutation");
const publisher = require("./publisher.mutation");

const Mutation = {
  ...user,
  ...book,
  ...publisher,
};
module.exports = Mutation;
