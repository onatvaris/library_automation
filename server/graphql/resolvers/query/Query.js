const Query = {
  // tüm yönetmenleri getir
  users: (source, args, { User }) => User.find({}),

  // id sini verdiğimiz yönetmeni getir
  // sorugu da girelen değerler(id) args adı altına düşer
  user: async (source, args, { User }) => {
    return await User.findById(args.id);
  },
  books: (source, args, { Book }) => Book.find({}),
  book: async (source, args, { Book }) => {
    return await Book.findById(args.id);
  },
  publishers: (source, args, { Publisher }) => Publisher.find({}),
  publisher: async (source, args, { Publisher }) => {
    return await Publisher.findById(args.id);
  },
  lenders: async (source, args, { Lending }) => Lending.find({}),
  lending: async (source, args, { Lending }) => {
    return await Lending.findById(args.id);
  },
};
module.exports = Query;
