import React from "react";
import "./cardstyle.css";
import PropTypes from "prop-types";

function PicHolder({ character }) {
	return (
		<div style={{ zIndex: "1" }}>
			<img src={character} alt="environment character" />
		</div>
	);
}
PicHolder.propTypes = {
	character: PropTypes.object.isRequired,
};
export default PicHolder;
