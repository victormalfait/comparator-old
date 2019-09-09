import React, { useState, useEffect } from "react";
import { Container, TextField } from "@material-ui/core";

export default function ProductForm() {
  return (
    <Container component="main">
      <TextField
        variant="outlined"
        id="name"
        label="Product name"
        name="name"
      />
    </Container>
  );
}
