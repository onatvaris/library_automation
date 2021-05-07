module.exports = {
  addPublisher: async (source, { name }, { Publisher }) => {
    // her yayıncının kitabı olmak zorunda =>  book_id
    const newPublisher = await new Publisher({
      name,
    }).save();

    return newPublisher;
  },

  deletePublisher: async (source, { id, title }, { Publisher }) => {
    const publisher = await Publisher.findById(id);
    await Publisher.deleteOne({ _id: id });

    return publisher;
  },
};
