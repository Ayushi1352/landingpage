import React from 'react';
import { FiArrowUpRight } from "react-icons/fi";

const Intro = () => {
    return (
        <section className="relative w-full flex flex-col items-center pt-16 pb-12 px-4 md:px-6 overflow-hidden bg-white text-center font-wix">
        
            <div className="absolute left-0 top-0 w-32 md:w-48 lg:w-64 opacity-80 pointer-events-none -translate-x-1/4 -translate-y-1/4">
                <img src="/Img/shape.png" alt="pattern left" className="w-full h-auto" />
            </div>
            <div className="absolute right-0 top-10  w-40  lg:w-42 opacity-90 pointer-events-none">
                <img src="/Img/Ellipse.png" alt="pattern right" className="w-full h-auto" />
            </div>

            <div className="relative z-10 max-w-[1100px] mx-auto flex flex-col items-center w-full">
          
                <div className="flex items-center gap-2 bg-gray-200/90 px-4 py-2 rounded-full mb-8">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#2563EB]"></span>
                    <span className="text-black text-sm md:text-xl font-medium tracking-tight">
                        Plan It. Design It. Build it. Get found. Make them buy.
                    </span>
                </div>

           
                <h1 className="text-[24px] md:text-[26px] font-medium text-gray-900 max-w-[900px] mb-8 leading-[1.2] tracking-tight">
                    Revolutionize Your E-Commerce With Expert Consulting And Redesigned <br className="hidden lg:block" />
                    Websites That Will <span className="text-[#2563EB] font-bold"  >Grow Your Business</span>
                </h1>

                <div className="text-xl md:text-xl text-black max-w-[1100px] flex flex-col gap-8 mb-12  font-Wix Madefor Display">
                    <p className='text-center'>
                        Is Your Website Working Hard For You? A Good Website Or E-Commerce Site Is Only As Good As Its Conversion Rate. No
                        Matter What Your Business Is, Your Website Should Be Selling For You. Whether Driving Customers Through A Checkout
                        Process Or Getting Them To Fill Out A Lead Form, It's All About Converting Browsers Into Buyers.
                    </p>
                    <p className='text-center'>
                        The Days Of Simple Brochure Sites Are Gone. It Is Time To Increase Conversion Rates And Generate More Leads. Kushel
                        Digi Solutions Will Work With You To Ensure That Your Site Is Doing The Work It Should Be Doing. We Provide Website
                        Design And Programming, Search Engine Optimization And Conversion Optimization Services To Companies Of Any Size
                        And Any Type.
                    </p>
                </div>

             
                <div className="flex flex-col sm:flex-row items-center gap-6">
                    <button className="flex items-center justify-center gap-2 border border-blue-600 text-blue-600 bg-white hover:bg-blue-50 px-2 py-3 rounded-full text-sm font-semibold uppercase transition-all duration-300 tracking-wider">
                        CONTACT US <FiArrowUpRight className="text-3xl" />
                    </button>
                    <button className="flex items-center justify-center gap-2 border border-gray-400 text-gray-800 bg-white hover:bg-gray-50 px-6 py-3 rounded-full text-sm font-semibold uppercase transition-all duration-300 tracking-wider">
                        OUR PORTFOLIO <FiArrowUpRight className="text-3xl" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Intro;
