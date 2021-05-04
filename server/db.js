const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.db_user}:${process.env.db_password}@cluster0.59nh2.mongodb.net/${process.env.db_host}?retryWrites=true&w=majority`;

module.exports = () => {
  mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  });

  mongoose.connection.on("open", () => {
    console.log("connected.");
  });

  mongoose.connection.on("error", (err) => {
    console.log(err);
  });
};
