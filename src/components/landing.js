import React from "react";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { CreateAccountButton } from "../components/authButtons";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
    width: "90%",
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  paper: {
    margin: theme.spacing(1),
    height: "120px",
    width: "100%",
  },
  svg: {
    width: "100%",
    height: 100,
  },
}));

const Landing = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className="landingRoot">
      <div id="welcomeText">
        <h2>Welcome to DevIQ.</h2>
        <h4>
          We created this website in efforts to help entry level job seekers
          practice interviewing. Our goal was to make a study resource based on
          the non-whiteboarding based questions you are likely to be asked in an
          interview.{" "}
        </h4>
        
          <CreateAccountButton />
        
      </div>

      <div className={classes.root}>
        <div className="buttonDiv">
          <FormControlLabel
            control={
              <Switch
                id="welcomeSwitch"
                checked={checked}
                onChange={handleChange}
                color="default"
              />
            }
            label="Show more information"
          />
        </div>
        <div className={classes.container}>
          <Grow in={checked}>
            <Paper elevation={4} className={classes.paper}>
              Some really convincing information
            </Paper>
          </Grow>
          {/* Conditionally applies the timeout prop to change the entry speed. */}
          <Grow
            in={checked}
            style={{ transformOrigin: "0 0 0" }}
            {...(checked ? { timeout: 1000 } : {})}
          >
            <Paper elevation={4} className={classes.paper}>
              some stuff, also convincing, maybe with a photo of a yaht
            </Paper>
          </Grow>
          <Grow
            in={checked}
            style={{ transformOrigin: "0 0 0" }}
            {...(checked ? { timeout: 2000 } : {})}
          >
            <Paper elevation={4} className={classes.paper}>
              some stuff, mildly convincing, lets be honest, we are getting
              desperate by now.
            </Paper>
          </Grow>
        </div>
      </div>
    </div>
  );
};

export default Landing;
