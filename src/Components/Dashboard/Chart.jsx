import React from "react";
import "../../Views/Stylesheet.css";
import Thermometer from "react-thermometer-ecotropy";

function Chart() {
	const chart1 = {
		border: "2px solid #387c6d",
		borderRadius: "0.75rem",
		height: "22rem",
		width: "44rem",
		textAlign: "center",
		margin: "2rem 1.5rem",
	};
	const chart2 = {
		border: "2px solid #387c6d",
		borderRadius: "0.75rem",
		height: "22rem",
		width: "18rem",
		textAlign: "center",
		margin: "2rem 1.5rem",
	};
	return (
		<div className="flex row justify-between">
			<div className="flex justify-center" style={chart1}>
				<h1>Today's chart</h1>
			</div>
			<div className="flex justify-center" style={chart2}>
				<h1>Next 5 days AQI</h1>
			</div>
			<div style={{ cursor: "grab" }}>
				<Thermometer
					theme="light"
					value="28"
					max="60"
					steps="2"
					format="°C"
					size="small"
					height={360}
				/>
			</div>
		</div>
	);
}

export default Chart;
