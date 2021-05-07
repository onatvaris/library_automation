const User = {
  // kitaba ait yayıncının bilgilerini almak için tetikleniyor
  books: async (parent, args, { Book }) => {
      console.log(`parentq`, parent)
    return Book.findOne({ user_id: parent._id });
  },
};

module.exports = User;
