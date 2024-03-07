import React from "react";
import { ThemeToogle } from "../components/theme-toogle";

const Navbar = () => {
    return (
        <div className="mx-auto flex h-16 w-full items-center justify-end px-2">
            <ThemeToogle />
        </div>
    );
};

export default Navbar;
