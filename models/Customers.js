const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customersSchema = new Schema({
    firstName:{
        type: String,
        required: true  
    },
    lastName:{
        type: String,
        required: true 
    },
    phoneNumber:{
        type: String,
        required: true 
    },
    description:{
        type: String,
    },
    date: { type: Date, default: Date.now }
});

const Customers = mongoose.model("Customers", customersSchema);

module.exports = Customers;