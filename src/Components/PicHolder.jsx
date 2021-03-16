import React from "react";
import "./cardstyle.css";
import PropTypes from "prop-types";

function PicHolder({ character }) {
	return (
		<div style={{ zIndex: "-2" }}>
			{/* <div style={{backgroundImage:`${charater}`}} className="pic-card">
			<object type="image/svg+xml" data={charater} width={width} height="auto">
				Your browser does not support SVG.
			</object>
		</div> */}
			<img style={{ overflow: "hidden" }} src={character} alt="place holder" />
		</div>
	);
}
PicHolder.propTypes = {
	character: PropTypes.object.isRequired,
	width: PropTypes.string.isRequired,
};
export default PicHolder;
