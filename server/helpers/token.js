const jwt = require("jsonwebtoken");

const token = {
  generete: (data, expiresIn) => {
    return jwt.sign(
      {
        data,
      },
      process.env.secret_key,
      { expiresIn }
    );
  },
};

module.exports = token;
