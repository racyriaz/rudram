import React from "react";
import SplitChart from "../../Components/Dashboard/SplitChart";
import Gauge from "../../Components/Dashboard/Gauge";
import ChartPlaceHolder from "../../Components/ChartPlaceHolder";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "../Stylesheet.css";

function Dashboard() {
	const animatedComponents = makeAnimated();
	function HandleSingleDropdown(params) {
		console.log(params.value);
	}
	function HandleMultiDropdown(params) {
		params.map((p) => {
			console.log(p.value);
		});
	}

	const options = [
		{ value: "chocolate", label: "Chocolate" },
		{ value: "strawberry", label: "Strawberry" },
		{ value: "vanilla", label: "Vanilla" },
		{ value: "gold", label: "Gold" },
		{ value: "silver", label: "Silver" },
		{ value: "iron", label: "Iron" },
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
				<div className="full-width">
					<div className="flex mg-lr-2rem row justify-between">
						<h1>Pollutant wise history for 7 days</h1>
						<Select
							closeMenuOnSelect={true}
							components={animatedComponents}
							defaultValue={options[0]}
							isSearchable
							options={options}
							onChange={(e) => HandleSingleDropdown(e)}
							className="dropdown"
						/>
					</div>
				</div>

				<ChartPlaceHolder content="Pollutant wise history for 7 days with pollutant as dropdown" />
			</div>
			<div className="flex col justify-center">
				<div className="full-width">
					<div className="flex  mg-lr-2rem row justify-between">
						<h1>Comparison of Pollutants </h1>
						<Select
							closeMenuOnSelect={false}
							className="multiDropdown"
							components={animatedComponents}
							defaultValue={[options[0], options[1]]}
							isSearchable
							isMulti
							options={options}
							onChange={(e) => HandleMultiDropdown(e)}
						/>
					</div>
				</div>
				<ChartPlaceHolder content="Comparison of pollutants with respect to timeFrame with mulitple selection checkbox" />
			</div>
		</div>
	);
}

export default Dashboard;
