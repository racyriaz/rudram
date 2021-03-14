import React from "react";
import "./cardstyle.css";
import PropTypes from "prop-types";

function WeatherCard({ content, color }) {
	return (
		<div className="weather-card" style={{ background: `${color}` }}>
			{content}
		</div>
	);
}
WeatherCard.propTypes = {
	content: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
};
export default WeatherCard;
