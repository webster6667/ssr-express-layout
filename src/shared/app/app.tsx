import React from 'react'
import { Route, Switch } from "react-router-dom";
import {Layout} from "./components/layout"
import {routes} from "@routes"
import "./styles.scss"

export function App() {

	return (
		<Layout>
			<Switch>
				{routes.map((route, i) => <Route key={i} {...route} />)}
			</Switch>
		</Layout>
	)
}


