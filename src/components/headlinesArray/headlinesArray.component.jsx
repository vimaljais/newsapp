import React, { useState, useEffect } from "react";

const HeadlinesArray = () => {
  const query = "bitcoin";
  useEffect(() => {
    fetch(`http://localhost:3001/getnews/${query}`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  });
  return <div></div>;
};

export default HeadlinesArray;
