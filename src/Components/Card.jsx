import React from "react";
import "./cardstyle.css";
import PropTypes from "prop-types";

function Card({ content, color }) {
	const text = content;
	const styles = color;

	return (
		<div className="card" style={{ background: `${styles}` }}>
			{text}
		</div>
	);
}

Card.propTypes = {
	content: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
};

export default Card;
