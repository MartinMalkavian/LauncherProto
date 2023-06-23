import React from "react";
import ReactDOM from "react-dom";

export default React.memo(function ModalPortal({
	children,
}: {
	children?: React.ReactNode;
}) {
	const node = document.querySelector("#root")!;
	return ReactDOM.createPortal(children, node);
});
