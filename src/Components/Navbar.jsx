import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Views/Home";
import AirQuality from "../Views/AirQuality";
import Safety from "../Views/Safety";
import FeatherIcon from "feather-icons-react";
import "../Views/Stylesheet.css";

function Navbar() {
	return (
		<Router>
			<div className="flex row">
				<nav>
					<ul>
						<li>
							<FeatherIcon
								className="icon-color"
								size="24"
								icon="Home"
								fill="#f39189"
							/>
							<i data-feather="circle"></i>
							<Link className="block" to="/home">
								Home
							</Link>
						</li>
						<li>
							<Link className="block" to="/air-quality">
								Air Quality
							</Link>
						</li>
						<li>
							<Link className="block" to="/safety-security">
								Safety and Security
							</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path="/air-quality">
						<AirQuality />
					</Route>
					<Route path="/safety-security">
						<Safety />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default Navbar;
