import React from "react";
import GaugeChart from "react-gauge-chart";
import "../../Views/Stylesheet.css";

function Gauge({ id, percentage }) {
	const chartStyle = {
		height: "auto",
		width: "150px",
		color: "black",
		zIndex: 5,
	};
	return (
		<div className="flex col justify-center">
			<GaugeChart
				id={id}
				nrOfLevels={5}
				style={chartStyle}
				colors={["#FF5F6D", "#FFC371", "#3de260"]}
				textColor="#d49d42"
				percent={percentage}
				animate={true}
				marginInPercent="0.025"
				cornerRadius="5"
			/>
		</div>
	);
}

export default Gauge;
