import React from "react";
import { ThemeToogle } from "../components/theme-toogle";

const Navbar = () => {
	return (
		<div className="w-full h-16 flex justify-end items-center mx-auto px-2">
			<ThemeToogle />
		</div>
	);
};

export default Navbar;
