import React from "react";
import "../../Views/Stylesheet.css";
/* import Thermometer from "react-thermometer-ecotropy";
<Thermometer
theme="light"
value="28"
max="60"
steps="2"
format="°C"
size="small"
height={360}
/> */

function SplitChart() {
	const chart_1_css = {
		border: "2px solid #387c6d",
		borderRadius: "0.75rem",
		height: "22rem",
		width: "48rem",
		textAlign: "center",
		margin: "2rem 1.5rem",
	};
	const chart_2_css = {
		border: "2px solid #387c6d",
		borderRadius: "0.75rem",
		height: "22rem",
		width: "22rem",
		textAlign: "center",
		margin: "2rem 1.5rem",
	};
	return (
		<div className="flex row justify-between">
			<div className="flex justify-center" style={chart_1_css}>
				<h1>Todays Hourly AQi predictions</h1>
			</div>
			<div className="flex justify-center" style={chart_2_css}>
				<h1>Next 5 days AQI Predictions</h1>
			</div>
		</div>
	);
}

export default SplitChart;
