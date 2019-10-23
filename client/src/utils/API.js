import axios from "axios"

// here are the all functions that i'll be using for the app. 
export default {

    getBooks: function(){
        return axios.get("/api/books");
    },
//here when we call get book we pass in the key id and use it in our call.
    getBook: function(id){
        return axios.get("api/books/" + id);
    },
    deleteBook: function(id){
        return axios.delete("api/books/" + id);
    },
    saveBook: function(bookData){
        return axios.post("/api/books/" + bookData);
    }

}