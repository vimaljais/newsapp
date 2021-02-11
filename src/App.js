import React, { useState, useEffect } from "react";

import Header from "./components/header/header.component.jsx";
import CryptoScroller from "./components/CryptoScroller/CryptoScroller.component";
import CallHeadlines from "./utils/callHeadlines.utils";
import CallTopHeadlines from "./utils/callTopHeadlines.utils";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
}));

function App() {
  const classes = useStyles();

  const [country, setCountry] = useState("in");
  const [category, setCategory] = useState("General");

  useEffect(() => {
    console.log("country change has been done");
  }, [country]);

  useEffect(() => {
    console.log("category change");
    //change headlines according to category
  }, [category]);

  return (
    <div className="App">
      <Header
        country={country}
        setCountry={setCountry}
        category={category}
        setCategory={setCategory}
      />
      <CryptoScroller />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs>
            <h2 style={{ textAlign: "center" }}>Top Headlines</h2>
            <CallTopHeadlines country={country} />
          </Grid>
          <Grid item xs={6}>
            <h2 style={{ textAlign: "center" }}>{category} News</h2>
            <CallHeadlines category={category} />
          </Grid>
          <Grid item xs></Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
