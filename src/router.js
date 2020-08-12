import React from "react";
import { Switch, Route } from "react-router";
import Landing from "./components/landing";
import Dashboard from "./components/dashboard";
import Quiz from "./components/quiz";

// const ProtectedRoute = ({ component: Component, ...rest }) => {
// 	const { isAuthenticated } = useAuth0();
// 	return (
// 		<Route
// 		{...rest}
// 		render={(props) =>
// 			isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
// 		}
// 		/>
// 		);
// 	};

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/quiz" component={Quiz} />
    </Switch>
  );
};

export default Router;
