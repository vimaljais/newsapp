import React from "react";
import TopHeadlines from "../TopHeadlines/TopHeadlines.component";
import { makeStyles } from "@material-ui/core/styles";

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

const TopHeadlinesArray = ({ articles }) => {
  const classes = useStyles();

  const cardArray = articles.map((user, i) => {
    return (
      <div className={classes.root}>
        <TopHeadlines
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

export default TopHeadlinesArray;
