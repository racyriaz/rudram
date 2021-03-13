import React from "react";
import "./cardstyle.css";
import PropTypes from "prop-types";

function ChaCard({ charater, width, margin }) {
	return (
		<div className="cha-card">
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
	);
}

ChaCard.propTypes = {
	charater: PropTypes.string.isRequired,
	width: PropTypes.string.isRequired,
	style: PropTypes.string.isRequired,
};

export default ChaCard;
