import React from "react";
import Headlines from "../headlines/headlines.components";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
}));

const HeadlinesArray = ({ articles }) => {
  const classes = useStyles();

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
