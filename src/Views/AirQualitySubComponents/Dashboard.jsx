import React from "react";
import "../Stylesheet.css";

function Dashboard() {
	return (
		<div className="flex row mg-lr-2rem">
			<h4 className="flex justify-center pad-10px font-2-5rem">AQI</h4>
			<div className="pad-10px">
				An air quality index (AQI) is parameter that used while communicating on
				how polluted the air currently is or how polluted it is forecast to
				become. Public health risks increase as the AQI rises. Different
				countries have their own air quality indices, corresponding to different
				national air quality standards.
			</div>
		</div>
	);
}

export default Dashboard;
