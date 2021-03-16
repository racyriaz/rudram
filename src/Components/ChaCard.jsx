import React from "react";
import "./cardstyle.css";
import PropTypes from "prop-types";

function ChaCard({ charater, width, margin, moving }) {
	return (
		<div className="cha-card">
			<div
				style={{
					position: "relative",
					left: "8%",
					bottom: "42%",
					zIndex: "10",
					display: "flex",
					animation: "3s linear 1s infinite alternate slidein",
				}}
			>
				<object
					type="image/svg+xml"
					data={moving}
					width={width}
					height="auto"
					style={{ margin: { margin }, position: "absolute" }}
				>
					Your browser does not support SVG.
				</object>
			</div>
			<div style={{ zIndex: "0", position: "relative", top: "10%" }}>
				<object
					type="image/svg+xml"
					data={charater}
					width={width}
					height="auto"
					style={{ margin: { margin } }}
				>
					Your browser does not support SVG.
				</object>
			</div>
		</div>
	);
}

ChaCard.propTypes = {
	charater: PropTypes.object.isRequired,
	width: PropTypes.string.isRequired,
	style: PropTypes.string.isRequired,
	moving: PropTypes.object.isRequired,
};

export default ChaCard;
