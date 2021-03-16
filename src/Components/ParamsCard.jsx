import React from "react";
import "../Components/cardstyle.css";
function ParamsCard({ parameter, value }) {
	return (
		<div className="paramsCard">
			<div className="subParam1">{value}</div>
			<div className="subParam2">{parameter}</div>
		</div>
	);
}

export default ParamsCard;
