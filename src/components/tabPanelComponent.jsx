import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ButtonsComponent from "./button-setOne";
import ButtonsSetTwoComponent from "./button-setTwo";
import ButtonsSetThreeComponent from "./button-setThree";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <React.Fragment>
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    </React.Fragment>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function MathematicTypesTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Tab 1" {...a11yProps(0)} />
          <Tab label="Tab 2" {...a11yProps(1)} />
          <Tab label="Tab 3" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ButtonsComponent onClick={props.onClick} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ButtonsSetTwoComponent onClick={props.onClick} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ButtonsSetThreeComponent onClick={props.onClick} />
      </TabPanel>
    </Box>
  );
}
