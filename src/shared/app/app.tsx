import React from 'react'
import { Route, Switch } from "react-router-dom";
import {Layout} from "./components/layout"
import {routes} from "@routes"

export function App() {

	return (
		<div>
			<Switch>
				{routes.map((route, i) => <Route key={i} {...route} />)}
			</Switch>
		</div>
	)
}


