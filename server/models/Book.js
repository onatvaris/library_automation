const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  year: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
  publisher_id: {
    type: Schema.ObjectId,
  },
});

module.exports = mongoose.model("book", bookSchema);
