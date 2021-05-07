const Publisher = {
  // yayıncının yayınladığı kitapları bulmak için tetiklenir
  // Book modelinde publisher_id(yayıncı id'si) ile yayıncının idsi eşleştiğinde o yayıncıya ait bir kitap olduğu anlaşılır
  // burda da Book modelinde ki publisher_id ile parent tan gelen Publisher id karşılaştırılıyor

  // bir yayıncının birden fazla kitabı olabilir
  // eğer bir array dönme ihtimali varsa find() yoksa findOne()
  books: async (parent, args, { Book }) => {
    return Book.find({ publisher_id: parent._id });
  },
};

module.exports = Publisher;
