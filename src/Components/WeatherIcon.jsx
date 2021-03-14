import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

function WeatherIcon({ icon_name }) {
	const defaults = {
		icon: icon_name ? icon_name : "CLEAR_DAY",
		color: "white",
		size: "40px",
		animate: true,
	};
	return (
		<ReactAnimatedWeather
			icon={defaults.icon}
			color={defaults.color}
			size={defaults.size}
			animate={defaults.animate}
		/>
	);
}

export default WeatherIcon;
