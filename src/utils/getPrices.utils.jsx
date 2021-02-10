import React, { useState, useEffect } from 'react'

const GetPrices = () => {

    var Crypto = [];

    useEffect(() => {
        fetch("http://localhost:3001/crypto")
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            Crypto = response;
          });
      }, []);
    return (
        
    );
}

export default GetPrices;