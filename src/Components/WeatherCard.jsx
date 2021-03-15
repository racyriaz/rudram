import React from "react";
import "./cardstyle.css";
import PropTypes from "prop-types";
import "../Views/Stylesheet.css";

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
WeatherCard.propTypes = {
	content: PropTypes.object.isRequired,
	color: PropTypes.string.isRequired,
};
export default WeatherCard;
