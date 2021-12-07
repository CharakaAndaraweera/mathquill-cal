import React from "react";
import { Button, Grid } from "@mui/material";
const ButtonsSetThreeComponent = (props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\sqrt")}
          style={{ textTransform: "lowercase" }}
        >
          &forall;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\mp")}
          style={{ textTransform: "lowercase" }}
        >
          &#8723;
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.onClick("\\cup")}
          style={{ textTransform: "lowercase" }}
        >
          &cup;
        </Button>
      </Grid>
    </Grid>
  );
};

export default ButtonsSetThreeComponent;
