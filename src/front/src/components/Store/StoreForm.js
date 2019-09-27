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
import ButtonAutocompletePlaces from "../Map/ButtonAutocompletePlaces";
import Map from "../Map/MapContainer";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
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
      name: "",
      company: ""
    }
  });
  const companies = [
    { id: 1, name: "Carrefour" },
    { id: 2, name: "Franprix" },
    { id: 3, name: "Monoprix" },
    { id: 4, name: "Casino" }
  ];

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
          <Grid container direction="column" xs={6}>
            <Grid item xs>
              <TextField
                variant="outlined"
                id="name"
                label="Store name"
                name="name"
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs>
              <FormControl
                variant="outlined"
                className={classes.formControl}
                fullWidth
              >
                <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                  Store Company
                </InputLabel>
                <Select
                  value={values.store.compagny}
                  onChange={handleChange}
                  labelWidth={labelWidth}
                  inputProps={{
                    name: "Store Company",
                    id: "outlined-age-simple"
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {companies.map(company => (
                    <MenuItem value={company.id}>{company.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs>
              <TextField
                variant="outlined"
                id="address"
                label="Address"
                name="address"
                fullWidth
              />
            </Grid>
            <Grid item xs>
              <TextField
                variant="outlined"
                id="zip_code"
                label="Zip Code"
                name="zip_code"
                fullWidth
              />
            </Grid>
            <Grid item xs>
              <Button variant="contained" color="primary" fullWidth>
                Add
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="column" xs={6}>
            <Grid item xs>
              <Map />
            </Grid>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}
