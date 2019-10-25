import React, {  useEffect, useState } from 'react';
import axios from 'axios';
import { Input, TextArea, FormBtn } from "../Form/index";




const ContactUs = props => {
    useEffect(()=> {
        axios.post('/api/submit', {
            firstName:'Bob',
            lastName:'Sagget',
            phoneNumber:'555-555-5555',
            description:'hello world'
        })
        .then(response =>{
            console.log(response);
            
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    return (
      <div> 
            <Input />
            <TextArea />
            <FormBtn />   
      
      
        </div>
    )
  }

  export default ContactUs;