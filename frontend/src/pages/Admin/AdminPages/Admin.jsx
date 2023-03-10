import React from 'react'
import { useEffect } from 'react';
import axios from 'axios';

// get the token from the cookie
const getAuthToken = () => {
    const name = 'token=';
    const cookieArr = document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
      let cookie = cookieArr[i].trim();
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return null;
  };
  

const tokenRequired = () =>{
     // get the token from the cookie
     const token = getAuthToken();

     // use the token in an axios request
     axios.post('http://127.0.0.1:3070/tokenRequired/',  { token })
     .then((response) => {
         console.log(response.data);
     })
     .catch((error) => {
         console.log(error);
         window.location.href = '/admin/adminlogin'; // replace with your dashboard or home page URL
 
     });
}

const Admin = () => {
  
    tokenRequired()

    
    useEffect(() => {
        
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, [])
    return (
        <>
            <h1>WELCOME</h1>

        </>
    )
}

export default Admin
