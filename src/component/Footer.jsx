import React from "react";
import { FaInstagram, FaPinterest, FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="bg-[#f4f4f4] pt-16">

        
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 md:grid-cols-2 gap-10">

           
                <div>
                    <div className="flex items-center gap-3 mb-6">
                       <img src='src/assets/Kds logo 2.png'></img>
                       
                       
                    </div>

                    <p className="text-gray-800 text-xl mb-4 font-Wix Madefor Display">
                        <span className="underline font-medium">Home Address:</span> First Floor,
                        D242, F-32B, Sector 63 Rd,
                        Noida, 201301 Uttar Pradesh
                    </p>

                    <p className="text-gray-800 mb-4">
                        <span className="underline font-medium">Phone:</span> +1-585-566-2070
                    </p>

                    <p className="text-gray-800">
                        <span className="underline font-medium">Email:</span> info@kusheldigi.com
                    </p>
                </div>

           
                <div>
                    <h3 className="font-semibold text-lg ml-10 mb-5">Quick Links</h3>
                    <ul className="space-y-3 text-gray-800">
                        <li className="hover:text-blue-600 cursor-pointer ml-10">Home</li>
                        <li className="hover:text-blue-600 cursor-pointer ml-10">About</li>
                        <li className="hover:text-blue-600 cursor-pointer ml-10">Service</li>
                        <li className="hover:text-blue-600 cursor-pointer ml-10">Portfolio</li>
                        <li className="hover:text-blue-600 cursor-pointer ml-10">Contact Us</li>
                    </ul>
                </div>

           
                <div>
                    <h3 className="font-semibold text-lg mb-5">Our Services</h3>
                    <ul className="space-y-3 text-gray-800">
                        <li>Digital Transformation</li>
                        <li>Store Design & Development</li>
                        <li>Platform Migration</li>
                        <li>Custom Tech Stack Development</li>
                        <li>Third Party Integration</li>
                        <li>App Development</li>
                    </ul>
                </div>

            
                <div>
                    <h3 className="font-semibold text-lg mb-5">Company</h3>
                    <ul className="space-y-3 text-gray-800">
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Refund Policy</li>
                        <li>NDA Policy</li>
                    </ul>
                </div>
            </div>

      
            <div className="bg-[#e9ecef] mt-12 py-6 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                
                    <div className="flex gap-5 text-gray-700">
                        <FaInstagram className="cursor-pointer hover:text-blue-600" />
                        <FaPinterest className="cursor-pointer hover:text-blue-600" />
                        <FaLinkedinIn className="cursor-pointer hover:text-blue-600" />
                        <FaFacebookF className="cursor-pointer hover:text-blue-600" />
                        <FaTwitter className="cursor-pointer hover:text-blue-600" />
                    </div>

                 
                    <button
                        onClick={scrollToTop}
                        className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
                    >
                        Back to top 
                    </button>

              
                    <p className="text-gray-500 text-sm text-center md:text-right">
                        @2023 Kusheldigi. All Rights Reserved.
                    </p>

                </div>
            </div>

        </footer>
    );
};

export default Footer;