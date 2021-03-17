import React from "react";
import "../Views/Stylesheet.css";
import "./cardstyle.css";

function WeatherCard({ content, color }) {
	return (
		<div
			className="weather-card flex justify-center"
			style={{ background: `${color}` }}
		>
			{content}
		</div>
	);
}
/* WeatherCard.propTypes = {
	content: PropTypes.object.isRequired,
	color: PropTypes.string.isRequired,
}; */
export default WeatherCard;
