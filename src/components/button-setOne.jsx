import React from "react";
import { Button, Grid } from "@mui/material";
const ButtonsComponent = (props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\sqrt")}
          style={{ textTransform: "lowercase" }}
        >
          &radic;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("|")}
          style={{ textTransform: "lowercase" }}
        >
          |x|
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\nthroot")}
          style={{ textTransform: "lowercase" }}
        >
          n√x
        </Button>
      </Grid>
    </Grid>
  );
};

export default ButtonsComponent;
