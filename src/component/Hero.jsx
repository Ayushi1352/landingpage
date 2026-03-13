import React from 'react';
import { FaStar, FaShoppingCart, FaImage, FaEyeDropper } from "react-icons/fa";
import { BsTypeBold } from "react-icons/bs";
import laptopImg from "../assets/Group 1171279524.png";

const Hero = () => {
    return (
        <section
            className="relative w-full  flex flex-col items-center pt-24 pb-0 px-6 overflow-hidden text-white text-center font-wix"
        >
         
            <img
                src="/Img/bgimg.jpg"
                alt="rtuuiii"
                className="absolute opacity-40 w-[2020px] h-[1200px] object-center top-0 right-0 z-0"
            />

        
            <div className="absolute inset-0 bg-gradient-to-br from-[#026c71]/80 via-[#014f54]/70 to-[#002f33]/80 z-5"></div>

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center w-full mt-6">
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full">
                    <div className="flex text-[#FBAE5F] text-[25px] gap-1.5 mt-2">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} />
                        ))}
                    </div>
                    <p className="text-white text-[16px] md:text-[19px] font-[500] tracking-normal ml-1 mt-2">4.8 (80+ Reviews)</p>
                </div>

                <h1 className="text-[26px] md:text-[50px] lg:text-[48px] font-[500] max-w-5xl mb-3 leading-[1.15] Wix Madefor Display mb-5 font-bold text-white mt-2">
                    Crafting exceptional <br />
                    ecommerce <span className="bg-[#FFC000] text-[#111] px-[12px] py-[2px] rounded-[2px] inline-block font-[700]    ">experiences</span>
               
                </h1>

                <p className="text-[16px] md:text-[20px] lg:text-[22px] text-white/95 max-w-3xl mx-auto mb-6 font-[400] tracking-normal">
                    Partner with our real people agency for <span className="font-[800]">shopify</span> and <span className="font-[800]">bigcommerce</span> solution
                </p>

                <div className="relative w-full max-w-[900px] z-20 mx-auto flex justify-center mb-[-12px]">
                    <img
                        src={laptopImg}
                        alt="MacBook Pro"
                        className="relative z-20 w-full object-contain"
                    />






                </div>
            </div>
        </section>
    );
};

export default Hero;
