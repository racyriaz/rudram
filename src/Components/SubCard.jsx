import React from "react";
function SubCard({ line1, line2, line3 }) {
	return (
		<div>
			<div className="mar-tb-10px">{line1}</div>
			<div className="mar-tb-10px">{line2}</div>
			<div className="mar-tb-10px">{line3}</div>
		</div>
	);
}

export default SubCard;
