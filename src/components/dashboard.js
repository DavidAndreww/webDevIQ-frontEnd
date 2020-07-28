import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import FormDialog from "../components/submission";
import { Link } from "react-router-dom";

//essentially we are creating our own api. what are we supposed to do about storing the headlilne and a basic overview of the article on the dashboard? I just realized this is going to be an issue. In my mind when i was thinking about the suggestions spot it was just thinking like we were accessing an api that would have lik "headline" "summary" "link"

// wuddya think? hard for me to style without thinking about this. maybe we just create an api!!!!

//6/22/20
// Touche, that is a problem. I just googled, and maybe I'm just tired, but I can't figure out how a rest API is different from what we have as far as creating the API and storing data. Could we add a new table for resource data? I know we can use the foreign key to tie each resource in the resource table to the corresponding question in the question table. The resource table could have id, name, description, link, and we could store multiple (article, video) for each question. Let me know if this is anywhere near what you were thinking, lol.

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 182,
    margin: 40,
    backgroundColor: "#e0fbfc",
  },
  root2: {
    marginTop: 20,
    minWidth: 225,
    minHeight: 225,
    backgroundColor: "#e0fbfc",
  },
  title: {
    fontSize: 14,
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  link: {
    textDecoration: "none",
  },
});

const Dashboard = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    javaScript: true,
    react: true,
    node: true,
    angular: false,
  });
  // pass into fetch request to use in body, dynamically passes in state keys that are true
  const questionSelector = () => {
    let arr = Object.entries(state);
    let selected = [];
    arr.map((keyVal) => {
      keyVal[1] === true && selected.push(keyVal[0]);
    });
    return selected;
  };

  const startQuiz = () => {
	  console.log(questionSelector())
    fetch("http://localhost:3030/quiz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        questions: questionSelector(),
      }),
    })
      .then((response) => response.json())
      .then((res) => console.log(res));
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  // redux hook, how you doin?
  const username = useSelector((state) => state.username);
  const dispatch = useDispatch(); //pass action in here

  return (
    <div className="dashRoot">
      <div id="welcomeUser">Welcome, David and John.</div>
      <div className="userCards">
        <Card className={classes.root}>
          <CardContent>
            <div id="scoreCard">
              <div className="cardTitle">DevIQ Scorecard</div>
              {/* let percentage = (userObject.correctAttempts / userObject.attempts * 100).toFixed(1) + '%' */}
              <div id="scoreNum">67.8%</div>
              <p>
                This is your score based on your correct answers. Practice more
                to raise your score.
              </p>
            </div>
          </CardContent>
          <CardActions className={classes.actions}>
            {/* <Link className={classes.link} to="/quiz"> */}
              <Button
                onClick={startQuiz}
                variant="contained"
                id="practiceButton"
              >
                Practice More!
              </Button>
            {/* </Link> */}
          </CardActions>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <div className="cardTitle">Question Options</div>
            <div id="questOptCard">
              <div id="questOptCardLeft">
                <p>
                  Turn on or off topics you would like to appear in your
                  questions.
                </p>
                <CardActions className={classes.actions}>
                  <div id="suggestionsButtonArea">
                    Have suggesions on topics or questions?
                    <FormDialog />
                  </div>
                </CardActions>
              </div>
              <div id="questOptCardRight">
                <div className="optionsList">
                  JavaScript
                  <Switch
                    checked={state.javaScript}
                    onChange={handleChange}
                    color="primary"
                    name="javaScript"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </div>
                <div className="optionsList">
                  React
                  <Switch
                    checked={state.react}
                    onChange={handleChange}
                    color="primary"
                    name="react"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </div>
                <div className="optionsList">
                  Node.JS
                  <Switch
                    checked={state.node}
                    onChange={handleChange}
                    color="primary"
                    name="node"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </div>
                <div className="optionsList">
                  Angular
                  <Switch
                    checked={state.angular}
                    onChange={handleChange}
                    color="primary"
                    name="angular"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div id="suggestionCardHeading">Suggested for you.</div>
      <div id="articleContainer">
        <Card className={classes.root2}>
          <div className="articleCardTitle">article headline here</div>
        </Card>

        <Card className={classes.root2}>
          {" "}
          <div className="articleCardTitle">article headline here</div>
        </Card>

        <Card className={classes.root2}>
          <div className="articleCardContainer">
            <div className="articleCardTitle">article headline here</div>
            <Button>Go to article</Button>
          </div>
        </Card>
      </div>
      <div id="weAreDesperate">
        As many old and new developers know, projects like these take time and
        money for us to provide them as a service. If you find this site useful
        or just want to support us in our journey through the development world,
        please consider donating.
        <div>
          <Button variant="contained" id="donateButton">
            Donate!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
