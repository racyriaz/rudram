import React from "react";
import SplitChart from "../../Components/Dashboard/SplitChart";
import Gauge from "../../Components/Dashboard/Gauge";
import ChartPlaceHolder from "../../Components/ChartPlaceHolder";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "../Stylesheet.css";

function Dashboard() {
	const animatedComponents = makeAnimated();
	function HandleChange(params) {
		console.log(params.value);
	}

	const options = [
		{ value: "chocolate", label: "Chocolate" },
		{ value: "strawberry", label: "Strawberry" },
		{ value: "vanilla", label: "Vanilla" },
	];
	return (
		<div className="flex col mg-lr-1rem">
			<div className="flex row">
				<h4 className="flex justify-center pad-10px font-2-5rem">AQI</h4>
				<div className="pad-10px">
					An air quality index (AQI) is parameter that used while communicating
					on how polluted the air currently is or how polluted it is forecast to
					become. Public health risks increase as the AQI rises. Different
					countries have their own air quality indices, corresponding to
					different national air quality standards.
				</div>
				<div className="flex col mg-lr-1rem/">
					<Gauge id="1" percentage={0.8} />
					<h6 style={{ display: "block", textAlign: "center" }}>
						POLLUTION LEVEL
					</h6>
				</div>
			</div>
			<div className="flex row justify-evenly">
				<SplitChart />
			</div>
			<div className="flex col justify-evenly">
				<ChartPlaceHolder content="AQI historical chart for 7 days" />
			</div>
			<div className="flex col justify-center">
				<div className="flex full-width row justify-between ">
					<div>
						<h1>Pollutant wise history for 7 days</h1>
					</div>
					<Select
						closeMenuOnSelect={true}
						components={animatedComponents}
						defaultValue={options[0]}
						isSearchable
						options={options}
						onChange={(e) => HandleChange(e)}
						className="dropdown"
					/>
				</div>

				<ChartPlaceHolder content="Pollutant wise history for 7 days with pollutant as dropdown" />
			</div>
			<div className="flex row justify-evenly">
				<ChartPlaceHolder content="comparison of pollutants with respect to timeFrame with mulitple selection checkbox" />
			</div>
		</div>
	);
}

export default Dashboard;
