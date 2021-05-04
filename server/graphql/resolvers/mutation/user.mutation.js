const bcrypt = require("bcrypt");
const token = require("../../../helpers/token");

module.exports = {
  addUser: async (source, { name, password, birth, type }, { User }) => {
    const newUser = await new User({
      name,
      password,
      birth,
      type,
    }).save();

    return { token: token.generete(newUser, "1h") };
  },

  deleteUser: async (source, { id }, { User }) => {
    const user = await User.findById(id);
    await User.deleteOne({ _id: id });

    return user;
  },

  updateUserName: async (source, { name, id }, { User }) => {
    const update = await User.updateOne({ _id: id }, { name });
    update;
    return await User.findById(id);
  },

  signIn: async (source, { name, password }, { User }) => {
    const user = await User.findOne({ name });

    const result = await bcrypt.compare(password, user.password);

    if (!result) {
      throw new Error("Wrong Password");
    }

    return { token: token.generete(user, "1h") };
  },

  getBook: async (source, { book_id, user_id }, { User, Book }) => {
    // user döndürücek
    // id = bookid
    const book = Book.findById(book_id);
    const user = User.findById(user_id);
  },
};
