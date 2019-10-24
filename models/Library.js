const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LibrarySchema = new Schema({
   Customers: [
       {
           type: Schema.Types.ObjectId,
           ref: "Customers"
       }
   ]
});

const Library = mongoose.model("Library", LibrarySchema);

module.exports = Library;