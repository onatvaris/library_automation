module.exports = {
  getBook: async (source, { book_id, user_id }, { Lending }) => {
    const expectedReturnDate = Date.now();
    const getBook = await new Lending({
      book_id,
      user_id,
      expectedReturnDate,
    }).save();

    return getBook;
  },

  deleteLending: async (source, { book_id, user_id }, { Lending }) => {
    return await Lending.findOneAndDelete(
      { book_id, user_id },
      function (err, docs) {
        console.log(`docs`, docs);
      }
    );
  },
};
