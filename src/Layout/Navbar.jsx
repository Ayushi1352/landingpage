import React, { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white pt-5 pb-5 px-6 md:px-16 py-3 absolute top-0 left-0 w-full  z-50 border-b border-gray-100 font-Wix Madefor Display">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src='/techno/kushilogo.png' alt="Kushel Digi Logo" className="h-15 md:h-16" />
                </div>

                <div className="hidden md:flex items-center gap-20">
                    <ul className="flex gap-12 items-center text-black font-medium font-Wix Madefor Display text-[19px]">
                        <li className="text-white bg-brand-blue px-6 py-3 rounded-b-sm cursor-pointer transition-all">Home</li>
                        <li className="hover:text-brand-blue cursor-pointer transition-colors">About Us</li>
                        <li className="hover:text-brand-blue cursor-pointer transition-colors">Service</li>
                        <li className="hover:text-brand-blue cursor-pointer transition-colors">Portfolio</li>
                    </ul>

                    <button className="border-2 border-black text-black px-6 py-3  rounded-full font-medium hover:bg-black hover:text-white transition-all text-[19px]">
                        Contact Us
                    </button>
                </div>

                <button
                    className="md:hidden text-2xl text-gray-800"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 p-6 shadow-xl flex flex-col gap-4">
                    <li className="bg-brand-blue text-white px-6 py-3 rounded-md list-none font-bold">Home</li>
                    <li className="px-5 py-4 hover:bg-gray-50 rounded-md list-none text-gray-800 font-semibold">About Us</li>
                    <li className="px-5 py-3 hover:bg-gray-50 rounded-md list-none text-gray-800 font-semibold">Service</li>
                    <li className="px-5 py-3 hover:bg-gray-50 rounded-md list-none text-gray-800 font-semibold">Portfolio</li>
                    <button className="border-2 border-black text-black px-6 py-4 font-bold w-full rounded-full mt-2">
                        Contact Us
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
