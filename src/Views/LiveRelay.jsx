import React from "react";
import cloud from "../Assets/cloud.svg";
import polluted1 from "../Assets/polluted1.svg";
import world from "../Assets/world.svg";
import ChaCard from "../Components/ChaCard";
import ParamsCard from "../Components/ParamsCard";
import SquarCard from "../Components/SquarCard";
import SubCard from "../Components/SubCard";
import WeatherCard from "../Components/WeatherCard";
import WeatherIcon from "../Components/WeatherIcon";
import "./Stylesheet.css";

function LiveRelay() {
	const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
		new Date().getDay()
	];
	return (
		<div>
			<div className="flex row justify-between">
				<div
					className="flex row sub-container justify-center"
					style={{ width: "50%" }}
				>
					<ChaCard charater={world} width="220px" moving={cloud} />
					<div className="flex col justify-center">
						<div className="flex row justify-evenly">
							<SquarCard
								w={"8rem"}
								content={
									<SubCard
										line1={<WeatherIcon icon_name="PARTLY_CLOUDY_DAY" />}
										line2={day}
										line3="30°C"
									/>
								}
							/>
							<SquarCard
								w={"8rem"}
								content={<SubCard line1="Good" line2="AQI value" line3="27" />}
							/>
						</div>
						<WeatherCard
							color="#9ecca4"
							content="Air Quality is considered sastisfactory, and air pollution is at little or no risk"
						/>
					</div>
				</div>
				<object
					type="image/svg+xml"
					data={polluted1}
					width="28%"
					height="auto"
					style={{ position: "relative", right: "10%", paddingBottom: "1rem" }}
				>
					Your browser does not support SVG.
				</object>
			</div>
			<div className="flex row justify-evenly">
				<ParamsCard value="0.75" parameter="CO2" />
				<ParamsCard value="0.75" parameter="CO" />
				<ParamsCard value="0.75" parameter="PM2.5" />
				<ParamsCard value="0.75" parameter="CO2" />
				<ParamsCard value="0.75" parameter="CO2" />
				<ParamsCard value="0.75" parameter="CO2" />
			</div>
			<div className="flex row justify-evenly" style={{ margin: "3rem" }}>
				<ParamsCard value="0.1" parameter="Temperature" />
				<ParamsCard value="0.1" parameter="Temperature" />
				<ParamsCard value="0.1" parameter="Temperature" />
				<ParamsCard value="0.1" parameter="Temperature" />
				<ParamsCard value="0.1" parameter="Temperature" />
			</div>
		</div>
	);
}

export default LiveRelay;
