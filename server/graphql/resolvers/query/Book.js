const Book = {
  // Kitabı alan kullanıcılar bir array olabilir
  users: async (parent, args, { User, Lending }) => {
    // parent._id => kitabın id si
    // Lending modelinde book_id si ile parent_id si eşleşiyorsa,
    // bu kitaba ait bir satın alma işlemi olmuş demektir
    const query = await Lending.find({ book_id: parent._id }).exec();
    // Lending modelinde eşleşen veri ile gelen kitabı alan kişinin id sini
    // User modelinde sorgulayıp eşleşen verileri Book modelinin altına yazdırıyoruz
    return query.map((v, i, a) => {
      return User.findById(v.user_id);
    });
  },

  // kitaba ait yayıncının bilgilerini almak için tetikleniyor
  publisher: async (parent, args, { Publisher }) => {
    return Publisher.findById(parent.publisher_id);
  },
};

module.exports = Book;
