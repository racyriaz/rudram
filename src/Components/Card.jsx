import React from "react";
import "./cardstyle.css";

function Card({ content, color }) {
	const text = content;
	const styles = color;

	return (
		<div className="card" style={{ background: `${styles}` }}>
			{text}
		</div>
	);
}

/* Card.propTypes = {
	content: PropTypes.object.isRequired,
	color: PropTypes.object.isRequired,
};
 */
export default Card;
