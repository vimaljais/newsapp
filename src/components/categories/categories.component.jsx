import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

import "./categories.styles.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Categories = ({ setCategory }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className={classes.root}>
      <ButtonGroup
        variant="contained"
        size="large"
        color="primary"
        aria-label="large outlined primary button group"
      >
        <Button onClick={handleChange} color="secondary" value={"Business"}>
          Business
        </Button>
        <Button onClick={handleChange} value={"Sports"}>
          Sports
        </Button>
        <Button onClick={handleChange} value={"Entertainment"}>
          Entertainment
        </Button>
        <Button onClick={handleChange} value={"General"}>
          General
        </Button>
        <Button onClick={handleChange} value={"Health"}>
          Health
        </Button>
        <Button onClick={handleChange} value={"Science"}>
          Science
        </Button>
        <Button onClick={handleChange} value={"Technology"}>
          Technology
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Categories;
