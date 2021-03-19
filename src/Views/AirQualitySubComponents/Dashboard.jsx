import React from "react";
import "../Stylesheet.css";
import Gauge from "../../Components/Dashboard/Gauge";
import Chart from "../../Components/Dashboard/Chart";

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
			<div className="flex row"></div>
			<Chart />
		</div>
	);
}

export default Dashboard;
