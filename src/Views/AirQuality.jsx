import React from "react";
import {
	BrowserRouter as Router,
	Link,
	NavLink,
	Route,
	Switch,
} from "react-router-dom";
import Card from "../Components/Card";
import LiveRelay from "./LiveRelay";
import "./Stylesheet.css";

function AirQuality() {
	return (
		<Router>
			<div className="flex col">
				<nav className="flex row justify-evenly">
					<div className="flex row justify-center">
						<NavLink to="/air-quality">
							<Card
								color="linear-gradient(0.15turn, rgba(0, 23, 162, 0.70), rgba(125, 0, 134, 0.70))"
								content="Live Relay"
							/>
						</NavLink>
						<NavLink to="/air-quality/dashboard">
							<Card
								color="linear-gradient(0.15turn, rgba(252, 74, 26, 0.70), rgba(247, 183, 51, 0.70))"
								content="Dashboard Views"
							/>
						</NavLink>
					</div>
					<div className="flex row justify-center">
						<Link className="block" to="/air-quality/predictions">
							<Card
								color="linear-gradient(0.65turn, rgba(8, 185, 132, 0.70), rgba(25, 113, 214, 0.70))"
								content="Predictions"
							/>
						</Link>
						<Link className="block" to="/air-quality/know-aq">
							<Card
								color="linear-gradient(0.13turn, rgba(114, 2, 114, 0.70), rgba(255, 38, 76, 0.70))"
								content="Know your Air Quality"
							/>
						</Link>
					</div>
				</nav>
				<Switch>
					<Route path="/air-quality/dashboard">{/* <LiveRelay /> */}</Route>
					<Route path="/air-quality/predictions">{/* <LiveRelay /> */}</Route>
					<Route path="/air-quality/know-aq">{/* <LiveRelay /> */}</Route>
					<Route exact path="/air-quality">
						<LiveRelay />
					</Route>
					<Route>
						<LiveRelay />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default AirQuality;
