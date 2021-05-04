const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  birth: {
    type: Number,
  },
  type: {
    type: String,
    required: true,
  },
  books: {
    type: Array
  }
});

// üye kayıt olurken tetikleniyor
userSchema.pre("save", function (next) {
  bcrypt.hash(this.password, 10).then((hash) => {
    // Store hash in your password DB.
    this.password = hash;
    next();
  });
});

// kullanıcı silindiğinde tetiklenir
userSchema.pre("deleteOne", function (next) {
  return next();
});

// kullanıcı bir güncelleme yaptığında tetikleniyor
userSchema.pre("updateOne", function (next) {
  return next();
});

module.exports = mongoose.model("user", userSchema);
