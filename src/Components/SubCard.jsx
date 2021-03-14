import React from "react";
import "../Views/Stylesheet.css";
function SubCard({ line1, line2, line3 }) {
	return (
		<div className="flex col justify-center">
			<div className="mar-tb-10px">{line1}</div>
			<div className="flex justify-center">
				{line2}, {line3}
			</div>
		</div>
	);
}

export default SubCard;
