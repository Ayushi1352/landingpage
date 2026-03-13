import React from "react"
const Brand = () => {
    return (
        <section className="py-8 px-6 bg-[#F5F5F5] font-Wix Madefor Display overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 text-black leading-tight">
                    Building The Best Of <span className="text-black">E-Commerce</span>
                </h2>
                <p className="text-base md:text-lg text-black mb-8 max-w-2xl">
                    See what we've achieved for brands like yours
                </p>

                <div className="bg-[#F5F5F5]  relative w-full max-w-4xl mx-auto">
                    <img
                        src='/src/assets/Group 1171279631.png'
                        alt="Portfolio Achievement"
                        className="w-full h-auto rounded-2xl shadow-2xl "
                    />
                </div>
            </div>
        </section>
    );
};

export default Brand;