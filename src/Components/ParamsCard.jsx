import React from "react";
import "../Components/cardstyle.css";
function ParamsCard({ parameter, value }) {
	var pollutant = parameter.toUpperCase();
	if (pollutant === "PM2_5") {
		pollutant = "PM 2.5";
	} else if (pollutant === "ROOM_TEMP") {
		pollutant = "TEMPERATURE ";
		value = value + " °C";
	}

	return (
		<div className="paramsCard">
			<div className="subParam1">{value}</div>
			<div className="subParam2">{pollutant}</div>
		</div>
	);
}

export default ParamsCard;
