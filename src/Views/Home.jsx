import React from "react";
import "./Stylesheet.css";
import Card from "../Components/Card";
import SubCard from "../Components/SubCard";
import ChaCard from "../Components/ChaCard";
import SquarCard from "../Components/SquarCard";
import WeatherCard from "../Components/WeatherCard";
import PicHolder from "../Components/PicHolder";
import WeatherIcon from "../Components/WeatherIcon";
import cha from "../Assets/RudramLogo.svg";
import demoImg from "../Assets/demo.jpg";

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
					<ChaCard charater={cha} width="80px" margin="auto" />
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
				<PicHolder character={demoImg} />
			</div>
		</div>
	);
}

export default Home;
