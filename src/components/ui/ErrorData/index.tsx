import { ErrorType } from "interface/errorTypes";
import React from "react";

type PropsType = {
	error: ErrorType;
};

export default function Error({ error }: PropsType) {
	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
			className="bigTitle"
		>
			{error.message}
		</div>
	);
}
