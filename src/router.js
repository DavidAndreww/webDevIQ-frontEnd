import React from "react";
import { Switch, Route } from "react-router";
import Landing from "./components/landing";
import Dashboard from "./components/dashboard";
import Quiz from "./components/quiz";
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from "react-router";

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const { isAuthenticated } = useAuth0();
	return (
		<Route
		{...rest}
		render={(props) =>
			isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
		}
		/>
		);
	};
	
	const Router = () => {
		const { isAuthenticated } = useAuth0();
		console.log('protected?: ',isAuthenticated)
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <ProtectedRoute exact path="/dashboard" component={Dashboard} />
      <Route exact path="/quiz" component={Quiz} />
    </Switch>
  );
};

export default Router;
