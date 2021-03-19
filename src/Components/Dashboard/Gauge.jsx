import React from "react";
import GaugeChart from "react-gauge-chart";
import "../../Views/Stylesheet.css";

function Gauge({ id, percentage }) {
	const chartStyle = {
		height: "auto",
		width: "135px",
		zIndex: 5,
		fontFamily: "",
		fontWeight: 800,
	};
	return (
		<div className="flex col justify-center">
			<GaugeChart
				id={id}
				nrOfLevels={5}
				style={chartStyle}
				colors={["#3de260", "#FFC371", "#FF5F6D"]}
				textColor="#007580"
				hideText={true}
				percent={percentage}
				animate={true}
				marginInPercent={0.025}
				cornerRadius={3}
			/>
		</div>
	);
}

export default Gauge;
