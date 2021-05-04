module.exports = {
  addBook: async (source, { title, description, year }, { Book }) => {
    const newBook = await new Book({
      title,
      description,
      year,
    }).save();

    return newBook;
  },

  deleteBook: async (source, {id, title}, {Book}) => {
    const book = await Book.findById(id);
    await Book.deleteOne({ _id: id });

    return book;
  }
};
