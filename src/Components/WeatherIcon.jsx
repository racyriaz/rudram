import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

function WeatherIcon() {
	const timeString = new Date().getHours().toString();

	let hours = timeString.substring(0, 2);
	let partOfDay = "";
	let icon_name = "";

	if (hours >= 0 && hours <= 5) {
		partOfDay = "Mid Night";
		icon_name = "PARTLY_CLOUDY_NIGHT";
	} else if (hours > 5 && hours < 9) {
		partOfDay = "Early Morning";
		icon_name = "PARTLY_CLOUDY_DAY";
	} else if (hours >= 9 && hours < 17) {
		partOfDay = "afternoon";
		icon_name = "CLEAR_DAY";
	} else if (hours >= 17 && hours < 20) {
		partOfDay = "evening";
		icon_name = "PARTLY_CLOUDY_DAY";
	} else {
		partOfDay = "night";
		icon_name = "CLEAR_NIGHT";
	}

	const defaults = {
		icon: icon_name ? icon_name : "CLEAR_DAY",
		color: "white",
		size: 50,
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
