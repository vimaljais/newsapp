import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Categories from "../categories/categories.component";

import "./header.styles.scss";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Header = () => {
  const classes = useStyles();
  const [country, setCountry] = useState("in");

  useEffect(() => {
    //change headlines according to country
  }, [country]);

  const handleChange = (event) => {
    setCountry(event.target.value);
  };
  return (
    <div className="headers">
      <div className="category-change">
        <Categories />
      </div>
      <div className="country-change">
        <FormControl className={classes.formControl}>
          <InputLabel id="country">Country</InputLabel>
          <Select
            labelId="country"
            id="country-select"
            value={country}
            onChange={handleChange}
          >
            <MenuItem value={"us"}>US</MenuItem>
            <MenuItem value={"in"}>IN</MenuItem>
            <MenuItem value={"fr"}>FR</MenuItem>
            <MenuItem value={"au"}>AU</MenuItem>
            <MenuItem value={"ru"}>RU</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default Header;
