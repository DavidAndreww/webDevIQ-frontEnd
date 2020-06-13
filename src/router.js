import React from 'react'
import { Switch, Route } from 'react-router'
import Landing from './components/landing'
import Dashboard from './containers/dashboard'

const Router = () => {
		return (
			<Switch>
				<Route exact path ="/" component={Landing}/>
				<Route exact path ="/dashboard" component={Dashboard}/>
			</Switch>
		)

}

export default Router;