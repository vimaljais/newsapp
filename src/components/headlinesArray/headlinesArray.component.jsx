import React, { useState, useEffect } from "react";
import Headlines from "../headlines/headlines.components";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

const HeadlinesArray = ({ articles }) => {
  const classes = useStyles();

  useEffect(() => {
    console.log(articles);
  });
  const cardArray = articles.map((user, i) => {
    return (
      <div className={classes.root}>
        <Headlines
          key={i}
          title={articles[i].title}
          url={articles[i].url}
          urlToImage={articles[i].urlToImage}
          desc={articles[i].description}
          publishedAt={articles[i].publishedAt}
        />
      </div>
    );
  });

  return <div> {cardArray}</div>;
};

export default HeadlinesArray;
