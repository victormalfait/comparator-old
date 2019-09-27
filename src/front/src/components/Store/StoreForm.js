import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Grid,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function StoreForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    store: {
      compagny: ""
    }
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <React.Fragment>
      <form className={classes.root} autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <TextField
              variant="outlined"
              id="name"
              label="Store name"
              name="name"
              fullWidth
            />
          </Grid>
          <Grid container spacing={3}>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                Store Compagny
              </InputLabel>
              <Select
                value={values.store.compagny}
                labelWidth={labelWidth}
                inputProps={{
                  name: "Store Compagny",
                  id: "outlined-age-simple"
                }}
                fullWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              variant="outlined"
              id="address"
              label="Address"
              name="address"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              variant="outlined"
              id="zip_code"
              label="Zip Code"
              name="zip_code"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="primary" fullWidth>
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}
