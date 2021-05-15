module.exports = {
  addBook: async (
    source,
    { title, description, year, publisher_id, user_id },
    { Book }
  ) => {
    const newBook = await new Book({
      title,
      description,
      year,
      publisher_id,
    }).save();

    return newBook;
  },

  deleteBook: async (source, { id, title }, { Book }) => {
    const book = await Book.findById(id);
    await Book.deleteOne({ _id: id });

    return book;
  },
};
