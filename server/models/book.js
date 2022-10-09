const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: String,
  genre: String,
  authorId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Author",
  },
});

module.exports = mongoose.model("Book", bookSchema);
