import React from "react";
import Card from "../../Components/Card";
import Chart from "../../Components/Dashboard/Chart";
import Gauge from "../../Components/Dashboard/Gauge";
import "../Stylesheet.css";

function Dashboard() {
	return (
		<div className="flex col mg-lr-2rem">
			<div className="flex row">
				<h4 className="flex justify-center pad-10px font-2-5rem">AQI</h4>
				<div className="pad-10px">
					An air quality index (AQI) is parameter that used while communicating
					on how polluted the air currently is or how polluted it is forecast to
					become. Public health risks increase as the AQI rises. Different
					countries have their own air quality indices, corresponding to
					different national air quality standards.
				</div>
				<div className="flex col mg-lr-1rem">
					<Gauge id="1" percentage="0.9" />
					<h6 style={{ display: "block", textAlign: "center" }}>
						POLLUTION LEVEL
					</h6>
				</div>
			</div>
			<div className="flex row justify-evenly">
				<Chart />
			</div>
			<div className="flex col justify-evenly">
				<div className="flex row justify-evenly mg-1rem">
					<Card content={<h1>Pollutant 1</h1>} />
					<Card content={<h1>Pollutant 2</h1>} />
					<Card content={<h1>Pollutant 3</h1>} />
					<Card content={<h1>Pollutant 4</h1>} />
				</div>
				<div className="flex row justify-evenly mg-1rem">
					<Card content={<h1>Pollutant 5</h1>} />
					<Card content={<h1>Pollutant 6</h1>} />
					<Card content={<h1>Pollutant 7</h1>} />
					<Card content={<h1>Pollutant 8</h1>} />
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
