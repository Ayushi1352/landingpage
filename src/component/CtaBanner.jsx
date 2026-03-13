import React from "react";
import { FiArrowRight } from "react-icons/fi";

const CtaBanner = () => {
    return (
        <section className="relative w-full bg-[#0D1B4B] overflow-hidden font-wix">
            <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-16 py-16 md:py-20 flex flex-col items-center text-center">
                <h2 className="text-[24px] md:text-[32px] lg:text-[30px] font-[700] text-white leading-[1.3] mb-4">
                    Ready to{" "}
                    <span className="text-[#FFC000]">Partner</span>{" "}
                    with You for Success
                </h2>
                <p className="text-[14px] md:text-[16px]  text-white/70 max-w-[700px] leading-[1.7] mb-8">
                    We're here to help turn your entrepreneurial dreams into reality, quickly and
                    efficiently. Share your needs with us and let's get started!
                </p>
                <button className="flex bg-white text-[#3464FD] items-center gap-2 border-[1.5px] border-white px-4 py-4 rounded-full text-[17px] font-[600] font-Wix Madefor Display cursor-pointer transition-all">
                    LET'S GET STARTED <FiArrowRight className="text-[16px]" />
                </button>
            </div>

   
        
            <div className="absolute left-0 top-0 h-full w-[200px] md:w-[280px] lg:w-[350px] pointer-events-none">
                <img src="/cta/netleft.png" alt="pattern left" className="w-full h-full object-cover" />
            </div>

           
            <div className="absolute right-0 top-0 h-full w-[200px] md:w-[280px] lg:w-[350px] pointer-events-none">
                <img src="/cta/netright.png" alt="pattern right" className="w-full h-full object-cover" />
            </div>
        </section>
    );
};

export default CtaBanner;
