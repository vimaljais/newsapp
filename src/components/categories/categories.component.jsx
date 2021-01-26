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

const Categories = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup
        variant="contained"
        size="large"
        color="primary"
        aria-label="large outlined primary button group"
      >
        <Button color="secondary">Business</Button>
        <Button>Sports</Button>
        <Button>Entertainment</Button>
        <Button>General</Button>
        <Button>Health</Button>
        <Button>Science</Button>
        <Button>Technology</Button>
      </ButtonGroup>
    </div>
  );
};

export default Categories;
