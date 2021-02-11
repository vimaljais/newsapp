import React, { useState, useEffect } from "react";
import TopHeadlinesArray from "../components/TopHeadlinesArray/TopHeadlinesArray.component";

const CallTopHeadlines = ({ country }) => {
  const [art, setArt] = useState([]);
  const [called, setCalled] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:3001/Top/${country}`)
      .then((response) => response.json())
      .then((response) => {
        setArt(response);
        console.log(response);
        setCalled(true);
      });
  }, [called, country]);

  const check = (arti) => {
    if (arti === undefined) {
      return <div>loading</div>;
    } else {
      return <TopHeadlinesArray key={1} articles={arti} />;
    }
  };

  return <div>{check(art.articles)}</div>;
};

export default CallTopHeadlines;
