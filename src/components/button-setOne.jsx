import React from "react";
import { Button, Grid } from "@mui/material";
const ButtonsComponent = () => {
  return (
    <React.Fragment>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="primary"
              style={{ textTransform: "lowercase" }}
            >
              1
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="primary"
              style={{ textTransform: "lowercase" }}
            >
              2
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="primary"
              style={{ textTransform: "lowercase" }}
            >
              3
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="primary"
              style={{ textTransform: "lowercase" }}
            >
              4
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="primary"
              style={{ textTransform: "lowercase" }}
            >
              5
            </Button>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
};

export default ButtonsComponent;
