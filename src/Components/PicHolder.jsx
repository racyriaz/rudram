import React from "react";
import "./cardstyle.css";
import PropTypes from "prop-types";

function PicHolder({ charater, width, margin }) {
	return (
		<div>
			<div className="pic-card">
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
PicHolder.propTypes = {
	charater: PropTypes.string.isRequired,
	width: PropTypes.string.isRequired,
	margin: PropTypes.string.isRequired,
};
export default PicHolder;
