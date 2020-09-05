import React, { useState, useEffect } from "react";
import { TextField, Typography, Grid } from "@material-ui/core";

export default function ProductForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Product Form
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            id="name"
            label="Product name"
            name="name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="outlined"
            id="price"
            label="Price"
            name="price"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
