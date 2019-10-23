const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
app.use(express.static(path.join(__dirname, "../client/build")));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(routes);


const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/last-homework";

mongoose.connect(MONGODB_URI);

app.listen(PORT,function(){
    console.log("Server is working, check it out on: http://localhost:" + PORT);
});