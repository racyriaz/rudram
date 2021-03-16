import React from "react";
import cloud from "../Assets/cloud.svg";
import polluted1 from "../Assets/polluted1.svg";
import world from "../Assets/world.svg";
import Card from "../Components/Card";
import ChaCard from "../Components/ChaCard";
import ParamsCard from "../Components/ParamsCard";
import PicHolder from "../Components/PicHolder";
import SquarCard from "../Components/SquarCard";
import SubCard from "../Components/SubCard";
import WeatherCard from "../Components/WeatherCard";
import WeatherIcon from "../Components/WeatherIcon";
import "./Stylesheet.css";

function Home() {
	const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
		new Date().getDay()
	];
	return (
		<div className="view-container">
			<div className="flex row justify-evenly">
				<div className="flex row justify-center">
					<Card
						color="linear-gradient(0.15turn, rgba(0, 23, 162, 0.70), rgba(125, 0, 134, 0.70))"
						content="Live Relay"
					/>
					<Card
						color="linear-gradient(0.15turn, rgba(252, 74, 26, 0.70), rgba(247, 183, 51, 0.70))"
						content="Dashboard Views"
					/>
				</div>

				<div className="flex row justify-center">
					<Card
						color="linear-gradient(0.65turn, rgba(8, 185, 132, 0.70), rgba(25, 113, 214, 0.70))"
						content="Predictions"
					/>
					<Card
						color="linear-gradient(0.13turn, rgba(114, 2, 114, 0.70), rgba(255, 38, 76, 0.70))"
						content="Know your Air Quality"
					/>
				</div>
			</div>
			<div className="flex row justify-between">
				<div
					className="flex row sub-container justify-center"
					style={{ width: "50%" }}
				>
					<ChaCard
						charater={world}
						moving={cloud}
						width="220px"
						margin="auto"
					/>
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
							// color="linear-gradient(0.13turn, rgba(114, 2, 114, 0.70), rgba(255, 38, 76, 0.70))"
							color="#9ecca4"
							content="Air Quality is considered sastisfactory, and air pollution is at little or no risk"
						/>
					</div>
				</div>
				{/* <PicHolder character={polluted1} /> */}
				<object
					type="image/svg+xml"
					data={polluted1}
					width="28%"
					height="auto"
					style={{ position: "relative", right: "10%", paddingBottom: "1rem" }}
				>
					Your browser does not support SVG.
				</object>
				{/* <img src={polluted1} alt="polluted pic 1" /> */}
			</div>
			<div className="flex row justify-evenly">
				<ParamsCard value="0.75" parameter="CO2" />
				<ParamsCard value="0.75" parameter="CO2" />
				<ParamsCard value="0.75" parameter="CO2" />
				<ParamsCard value="0.75" parameter="CO2" />
				<ParamsCard value="0.75" parameter="CO2" />
				<ParamsCard value="0.75" parameter="CO2" />
			</div>
			<div className="flex row justify-between" style={{ margin: "3rem" }}>
				<ParamsCard value="0.1" parameter="Temperature" />
				<ParamsCard value="0.1" parameter="Temperature" />
				<ParamsCard value="0.1" parameter="Temperature" />
				<ParamsCard value="0.1" parameter="Temperature" />
				<ParamsCard value="0.1" parameter="Temperature" />
			</div>
		</div>
	);
}

export default Home;
