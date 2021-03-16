import React from "react";
import cloud from "../Assets/cloud.svg";
import polluted1 from "../Assets/polluted1.svg";
import world from "../Assets/world.svg";
import Card from "../Components/Card";
import ChaCard from "../Components/ChaCard";
import ParamsCard from "../Components/ParamsCard";
import PicHolder from "../Components/PicHolder";
import SquarCard from "../Components/SquarCard";
import SubCard from "../Components/SubCard";
import WeatherCard from "../Components/WeatherCard";
import WeatherIcon from "../Components/WeatherIcon";
import "./Stylesheet.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LiveRelay from "./LiveRelay";

function AirQuality() {
	return (
		<Router>
			<nav className="view-container">
				<div className="flex row justify-evenly">
					<div className="flex row justify-center">
						<Link className="block" to="live"><Card color="linear-gradient(0.15turn, rgba(0, 23, 162, 0.70), rgba(125, 0, 134, 0.70))" content="Live Relay" /></Link>
						<Link to="dashboard"><Card color="linear-gradient(0.15turn, rgba(252, 74, 26, 0.70), rgba(247, 183, 51, 0.70))" content="Dashboard Views" /></Link>
					</div>
					<div className="flex row justify-center">
						<Link className="block" to="predictions"><Card color="linear-gradient(0.65turn, rgba(8, 185, 132, 0.70), rgba(25, 113, 214, 0.70))" content="Predictions" /></Link>
						<Link className="block" to="air-quality"><Card color="linear-gradient(0.13turn, rgba(114, 2, 114, 0.70), rgba(255, 38, 76, 0.70))" content="Know your Air Quality"/></Link>
					</div>
				</div>
			</nav>
			<Switch>
				<Route path="/view-container">
					<LiveRelay />
				</Route>
			</Switch>
		</Router>
	);
}

export default AirQuality;
