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
import { loadQuestions } from "../redux/actions";
import { useAuth0 } from '@auth0/auth0-react'


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
  const { user, isAuthenticated } = useAuth0()
  const classes = useStyles();
  const [state, setState] = React.useState({
    javaScript: true,
    react: true,
    node: true,
    angular: false,
  });

  const userObject = useSelector((state) => state.userObject);
  const resources = useSelector((state) => state.resources);
  const dispatch = useDispatch();

  function questionSelector(array) {
    let arr = Object.entries(array);
    let selected = [];
    arr.map((keyVal) => {
      keyVal[1] === true && selected.push(keyVal[0]);
    });
    return selected;
  }

  const questionRequest = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      questions: questionSelector(state),
    }),
  };

  const startQuiz = () => {
    fetch("http://localhost:3030/quiz", questionRequest)
      .then((response) => response.json())
      .then((res) => dispatch(loadQuestions(res)));
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div className="dashRoot">
      {isAuthenticated && (
        
          <div id="welcomeUser">Welcome, {user.name}</div> 
        
        
      )}
      {/* <div id="welcomeUser">Welcome, {userObject.username}</div> */}
      <div className="userCards">
        <Card className={classes.root}>
          <CardContent>
            <div id="scoreCard">
              <div className="cardTitle">DevIQ Scorecard</div>
              <div id="scoreNum">
                {(
                  (userObject.correctAttempts / userObject.totalAttempts) *
                  100
                ).toFixed(1)}
                %
              </div>
              <p>
                This is your score based on your correct answers. Practice more
                to raise your score.
              </p>
            </div>
          </CardContent>
          <CardActions className={classes.actions}>
            <Link className={classes.link} to="/quiz">
              <Button
                onClick={startQuiz}
                variant="contained"
                id="practiceButton"
              >
                Practice More!
              </Button>
            </Link>
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
      {resources !== null && (
        <div>
          <div id="suggestionCardHeading">Suggested for you.</div>
          <div id="articleContainer">
            {resources.map((resource) => {
              return (
                <Card className={classes.root2} id={resource.question_id}>
                  <div className="articleCardTitle">{resource.heading1}</div>
                  <button onClick={() => window.open(resource.link1)}>
                    Go to article
                  </button>
                  <div className="articleCardTitle">{resource.heading2}</div>
                  <button onClick={() => window.open(resource.link2)}>
                    Go to video
                  </button>
                </Card>
              );
            })}
          </div>
        </div>
      )}
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
