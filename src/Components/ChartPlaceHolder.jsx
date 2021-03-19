import React from "react";

function ChartPlaceHolder({ content }) {
	return (
		<div
			style={{
				height: "24rem",
				width: "96%",
				margin: "1rem",
				border: "2px solid black",
				borderRadius: "0.5rem",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<h1>{content}</h1>
		</div>
	);
}

export default ChartPlaceHolder;
