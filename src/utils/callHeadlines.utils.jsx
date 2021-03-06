import React, { useState, useEffect } from "react";
import HeadlinesArray from "../components/headlinesArray/headlinesArray.component";

const CallHeadlines = ({ category }) => {
  const [art, setArt] = useState([]);
  const [called, setCalled] = useState(false);
  const query = "bitcoin";
  useEffect(() => {
    fetch(`http://localhost:3001/getnews/${category}`)
      .then((response) => response.json())
      .then((response) => {
        setArt(response);
        setCalled(true);
      });
  }, [called, category]);

  const check = (arti) => {
    if (arti === undefined) {
      return <div>loading</div>;
    } else {
      return <HeadlinesArray key={1} articles={arti} />;
    }
  };

  return <div>{check(art.articles)}</div>;
};

export default CallHeadlines;
