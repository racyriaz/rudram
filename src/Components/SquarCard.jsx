import React from "react";
import "./cardstyle.css";

function SquarCard({ w, content }) {
	return (
		<div className="sq-card" style={{ width: `${w}`, height: `${w}` }}>
			{content}
		</div>
	);
}

export default SquarCard;

/* SquarCard.propTypes = {
	content: PropTypes.string.isRequired,
	w: PropTypes.string.isRequired,
};
 */
