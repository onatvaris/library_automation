const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lendingSchema = new Schema({
  book_id: {
    type: Schema.ObjectId,
    required: true,
  },
  user_id: {
    type: Schema.ObjectId,
    required: true,
  },
  lendDate: {
    type: Date,
    default: Date.now,
    require: true,
  },
  expectedReturnDate: {
    type: Date,
  },
  returnDate: {
    type: Date,
    default: null,
  },
});

lendingSchema.pre("save", function (next) {
  // this.lendDate = kitap alış tarihi
  // this.expectedReturnDate = tahmini kitap iade tarihi (1 ay)

  const lendDate = new Date(this.lendDate);
  const newMonth = lendDate.getMonth() + 1;

  lendDate.setMonth(newMonth);
  this.expectedReturnDate = lendDate;

  return next();
});

module.exports = mongoose.model("lending", lendingSchema);
