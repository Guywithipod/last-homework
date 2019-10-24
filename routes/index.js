const db = require('../models');
const express = require("express");


module.exports = () => {
    const app = express();

    app.get("/", (res, req) => {
        console.log("route hit")
    });


    db.Library.create({ name: "Customer Library" })
    .then(function(dbLibrary) {

      console.log(dbLibrary);
    })
    .catch(function(err) {
   
      console.log(err.message);
    });

    app.post("/api/submit", function(req, res) {
        // Create a new Customers in the database
        db.Customers.create(req.body)
          .then(function(dbCustomers) {
            return db.Library.findOneAndUpdate({}, { $push: { Customers: dbCustomers._id } }, { new: true });
          })
          .then(function(dbLibrary) {
            
            res.json(dbLibrary);
          })
          .catch(function(err) {
        
            res.json(err);
          });
      });

    app.get("/api/Customers", function(req, res) {
        db.Customers.find({})
          .then(function(Customers) {
            res.json(Customers);
          })
          .catch(function(err) {
            res.json(err);
          });
      });
    }