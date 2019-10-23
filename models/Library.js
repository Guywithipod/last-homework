const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LibrarySchema = new Schema({
   Books: [
       {
           type: Schema.Types.ObjectId,
           ref: "Books"
       }
   ]
});

const Library = mongoose.model("Library", LibrarySchema);

module.exports = Library;