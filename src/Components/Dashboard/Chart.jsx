import React from "react";
import "../../Views/Stylesheet.css";

function Chart() {
	const chart1 = {
		border: "5px solid #387c6d",
		borderRadius: "0.75rem",
		height: "22rem",
		width: "45rem",
		textAlign: "center",
		margin: "2rem 0",
	};
	const chart2 = {
		border: "5px solid #387c6d",
		borderRadius: "0.75rem",
		height: "22rem",
		width: "21rem",
		textAlign: "center",
		margin: "2rem 0",
	};
	return (
		<div className="flex row justify-evenly">
			<div className="flex justify-center" style={chart1}>
				<h1>chart</h1>
			</div>
			<div className="flex justify-center" style={chart2}>
				<h1>chart</h1>
			</div>
		</div>
	);
}

export default Chart;
