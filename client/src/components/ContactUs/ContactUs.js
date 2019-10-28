import React, { Component } from "react";
import axios from 'axios';
import { Input, FormBtn, TextArea } from "../Form"


class Customerlog extends Component {



    state = {
        customers: [],
        firstName: "",
        lastName: "",
        phoneNumber: "",
        description: "",
    }

    loadBooks = () => {
        axios.getBooks()
            .then(res =>
                this.setState({
                    customers: res.data,
                    firstName: "",
                    lastName: "",
                    phoneNumber: "",
                    description: "",
                })
            )
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,

        });
    };

    handleFormSubmit = event => {

        event.preventDefault();

        axios.post('/api/submit', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber,
            description: this.state.description
        })
            .then(response => {
                console.log(response);

            })
            .catch(err => console.log(err));
    }


    render() {
        return (
            <div>

                <Input
                    name = "firstName"
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                    placeholder={"First Name"}
                />
                <Input
                name = "lastName"
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                    placeholder={"Last Name"}
                />
                <Input
                name = "phoneNumber"
                    value={this.state.phoneNumber}
                    onChange={this.handleInputChange}
                    placeholder={"Phone Number"} />
                <TextArea
                name = "description"
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    placeholder={"Description of job"}
                />
                <FormBtn
                    onClick={this.handleFormSubmit}
                     >Submit</FormBtn>

            </div>
        );
    }
}

export default Customerlog;