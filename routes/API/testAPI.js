import axios from "axios";

export default {
  getCustomers: function() {
    return axios.get("/api/Customers");
  },
  saveCustomer: function(customerData) {
    return axios.post("/api/Customers", customerData);
  }
};
