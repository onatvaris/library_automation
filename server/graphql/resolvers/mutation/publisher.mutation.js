module.exports = {
  addPublisher: async (source, { name }, { Publisher }) => {
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
