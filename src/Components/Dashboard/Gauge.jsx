import React from "react";
import GaugeChart from "react-gauge-chart";
import "../../Views/Stylesheet.css";

function Gauge({ id, percent }) {
	const chartStyle = {
		height: 250,
	};
	return (
		<div className="flex col">
			<h6>Air Quality Gauge Chart</h6>
			<GaugeChart id={id} style={chartStyle} percent={percent} animDelay={0} />
		</div>
	);
}

export default Gauge;
