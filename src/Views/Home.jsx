import React from "react";
import "./Stylesheet.css";
import Card from "../Components/Card";
import SubCard from "../Components/SubCard";
import ChaCard from "../Components/ChaCard";
import "../Assets/RudramLogo.svg";

function Home() {
	return (
		<div className="view-container">
			<div className="flex row justify-evenly">
				<Card
					color="linear-gradient(0.15turn, rgba(0, 23, 162, 0.70), rgba(125, 0, 134, 0.70))"
					content="Live Relay"
				/>
				<Card
					color="linear-gradient(0.15turn, rgba(252, 74, 26, 0.70), rgba(247, 183, 51, 0.70))"
					content="Dashboard Views"
				/>
				<Card
					color="linear-gradient(0.65turn, rgba(8, 185, 132, 0.70), rgba(25, 113, 214, 0.70))"
					content="Predictions"
				/>
				<Card
					color="linear-gradient(0.13turn, rgba(114, 2, 114, 0.70), rgba(255, 38, 76, 0.70))"
					content="Know your Air Quality"
				/>
			</div>
			<div className="flex row justify-between">
				<div
					className="flex row sub-container"
					style={{ margin: "0 2rem", width: "46.5%" }}
				>
					{/* <Card color="wheat" content="Character" /> */}
					<ChaCard charater="RudramLogo.svg" width="80px" margin="auto" />
					<Card
						color="green"
						content={<SubCard line1="1" line2="2" line3="3" />}
					/>
					<Card
						color="green"
						content={<SubCard line1="1" line2="2" line3="3" />}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
