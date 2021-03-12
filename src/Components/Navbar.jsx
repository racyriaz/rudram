import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Views/Home";
import AirQuality from "../Views/AirQuality";
import Safety from "../Views/Safety";

function Navbar() {
	function NavItem({ content, icon }) {
		return (
			<>
				<img src={"../Assets/icons/" + `${icon}` + ".svg"} alt={`${icon}`} />
				{/* <i className={"../Assets/icons/" + `${icon}` + ".svg"}></i> */}
				<Link className="block" to="/">
					{content}
				</Link>
			</>
		);
	}

	return (
		<Router>
			<div className="flex row">
				<nav>
					<ul>
						<li>
							<NavItem content="Home" icon="bi bi-house-fill" />
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
