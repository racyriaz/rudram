import React from "react";
import "../Views/Stylesheet.css";
import "./cardstyle.css";

function WeatherCard({ content, color }) {
	var cont = content ? content : "loading . . .";
	cont = cont[0].toUpperCase() + cont.slice(1);
	return (
		<div
			className="weather-card flex justify-center"
			style={{ background: `${color}` }}
		>
			{cont}
		</div>
	);
}
/* WeatherCard.propTypes = {
	content: PropTypes.object.isRequired,
	color: PropTypes.string.isRequired,
}; */
export default WeatherCard;
