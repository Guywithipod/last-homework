const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const mongoose = require("mongoose");
const require = ("routes/api");
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(routes);
app.use("*", (req, res) =>
 res.sendFile(path.join(__dirname, "../client/build/index.html"))
);

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/last-homework";

mongoose.connect(MONGODB_URI);

app.listen(PORT,function(){
    console.log("Server is working, check it out on: http://localhost:" + PORT);
});