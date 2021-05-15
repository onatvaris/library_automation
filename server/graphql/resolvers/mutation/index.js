const user = require("./user.mutation");
const book = require("./book.mutation");
const publisher = require("./publisher.mutation");
const lending = require("./lending.mutation");
const Mutation = {
  ...user,
  ...book,
  ...publisher,
  ...lending,
};
module.exports = Mutation;
