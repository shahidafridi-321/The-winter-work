import React from "react";
import { Outlet } from "react-router-dom";

export const Mainlayout = () => {
	return (
		<div>
			<h1>This is Mainlayout</h1>
			<hr />
			<Outlet />
		</div>
	);
};
