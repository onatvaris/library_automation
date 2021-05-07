const Book = {
  // kitaba ait yayıncının bilgilerini almak için tetikleniyor
  publisher: async (parent, args, { Publisher }) => {
    return Publisher.findById(parent.publisher_id);
  },
};

module.exports = Book;
