import React, { useState, useEffect } from "react";
import HeadlinesArray from "../components/headlinesArray/headlinesArray.component";

const CallHeadlines = () => {
  const [art, setArt] = useState([]);
  const [called, setCalled] = useState(false);
  const query = "bitcoin";
  useEffect(() => {
    fetch(`http://localhost:3001/getnews/${query}`)
      .then((response) => response.json())
      .then((response) => {
        setArt(response);
        setCalled(true);
      })
      .then(console.log(art));
  }, [called]);

  const check = (arti) => {
    if (art === undefined) {
      return <div>loading</div>;
    } else {
      return <HeadlinesArray key={1} articles={arti} />;
    }
  };

  return <div>{check(art.articles)}</div>;
};

export default CallHeadlines;
