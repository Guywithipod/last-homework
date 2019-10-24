const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);


const bookSeed = [
    {
      firstName: "John",
      lastName: "Doe",
      phoneNumber: "000-000-0000",
      description: "looking for a retaining wall",
      date: new Date(Date.now())
    }
]