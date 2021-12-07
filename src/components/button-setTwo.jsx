import React from "react";
import { Button, Grid } from "@mui/material";
const ButtonsSetTwoComponent = (props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\in")}
          style={{ textTransform: "lowercase" }}
        >
          &isin;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\approx")}
          style={{ textTransform: "lowercase" }}
        >
          &asymp;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\notin")}
          style={{ textTransform: "lowercase" }}
        >
          &notin;
        </Button>
      </Grid>
    </Grid>
  );
};

export default ButtonsSetTwoComponent;
