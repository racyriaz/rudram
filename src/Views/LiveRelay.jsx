import axios from "axios";
import React, { useEffect, useState } from "react";
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
import BounceLoader from "react-spinners/BounceLoader";

function LiveRelay() {
	const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
		new Date().getDay()
	];
	const [param, setparam] = useState(null);
	const [aqi, setaqi] = useState(null);
	const [trigger, settrigger] = useState(false);
	const [loaded, setLoaded] = useState(false);

	function callApi() {
		axios
			.get("http://6a75b3fbad9c.ngrok.io/live-relay-data")
			.then((res) => {
				setparam(res.data.parameter);
				setaqi(res.data.aqi_value);
				setLoaded(true);
			})
			.catch((error) => {
				console.log("error", error);
				setLoaded(false);
			});
	}
	useEffect(() => {
		callApi();
	}, [trigger]);
	console.log("params tabel ", param, "aqi tabel", aqi);
	function HitDatabase() {}
	setInterval(() => {
		settrigger(!trigger);
	}, 60000);
	const override = {
		display: "block",
		margin: "8rem auto 0",
		borderColor: "black",
	};

	return (
		<div className="flex col">
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
										line3={
											param && param[6] && param[6].name == "room_temp"
												? param[6].value
												: null
										}
									/>
								}
							/>
							<SquarCard
								w={"8.2rem"}
								content={
									<SubCard
										line1={aqi ? aqi.category : null}
										line2="AQI value"
										line3={aqi ? aqi.score : null}
									/>
								}
							/>
						</div>
						<WeatherCard color="#9ecca4" content={aqi ? aqi.advice : null} />
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
			<div
				className="flex row justify-evenly"
				style={{ flexWrap: "wrap", width: "85%", margin: "auto" }}
			>
				{loaded ? (
					param ? (
						param.map((x, index) => {
							return (
								<ParamsCard key={index} value={x.value} parameter={x.name} />
							);
						})
					) : (
						console.log("param not found")
					)
				) : (
					<BounceLoader
						color={"#86E7D4"}
						loading={true}
						css={override}
						size={150}
					/>
				)}
			</div>
		</div>
	);
}

export default LiveRelay;
