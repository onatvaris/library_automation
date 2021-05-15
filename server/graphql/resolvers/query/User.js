const User = {
  // kitaba ait yayıncının bilgilerini almak için tetikleniyor
  books: async (parent, args, { Lending, Book }) => {
    // Lending modelinde user_id si sorguyu yapan user_id(parent_id) ile eşleşen verileri getir
    const query = await Lending.find({ user_id: parent._id }).exec();
    console.log(query);
    return query.map((v, i, a) => {
      // query den gelen verilerde book_id leri Book modelinde arayıp döndür
      return Book.findById(v.book_id);
    });
  },
};

module.exports = User;
