import React from "react";
import "./cardstyle.css";

function ChaCard({ charater, width, moving }) {
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
					style={{ position: "absolute" }}
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
				>
					Your browser does not support SVG.
				</object>
			</div>
		</div>
	);
}

/* ChaCard.propTypes = {
	charater: PropTypes.object.isRequired,
	width: PropTypes.string.isRequired,
	moving: PropTypes.object.isRequired,
}; */

export default ChaCard;
