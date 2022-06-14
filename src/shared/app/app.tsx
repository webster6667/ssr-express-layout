import React from 'react'
import { Route } from "react-router-dom";
import {Layout} from "./components/layout"
import {routes} from "@routes"

export function App() {

	return (
		<Layout>
			{routes.map((route, i) => <Route {...route} />)}
		</Layout>
	)
}


