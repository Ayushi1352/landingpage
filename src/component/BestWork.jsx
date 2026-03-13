import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiArrowUpRight } from "react-icons/fi";
import group2 from "../assets/Group 1171279631.png";

const cases = [
  {
    id: 1,
    name: "2ndamendmentguns",
    tag: "Store Design & Development",
    stats: [
      { value: "80%", label: "Increase in Sales" },
      { value: "120%", label: "Increase in Conversion Rate" },
      { value: "140%", label: "Increase in Order Value" },
    ],
  },
  {
    id: 2,
    name: "TopBrass Tactical",
    tag: "Store Design & Development",
    stats: [
      { value: "65%", label: "Increase in Sales" },
      { value: "95%", label: "Increase in Conversion Rate" },
      { value: "110%", label: "Increase in Order Value" },
    ],
  },
];

const BestWork = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((p) => (p === 0 ? cases.length - 1 : p - 1));

  const next = () =>
    setCurrent((p) => (p === cases.length - 1 ? 0 : p + 1));

  const c = cases[current];

  return (
    <section className="w-full py-10 px-4 md:px-8 lg:px-16 bg-white font-wix">
      <div className="max-w-[1420px] mx-auto">
        
        <div className="text-center mb-6">
          <h2 className="text-[28px] md:text-[36px] font-[600] text-[#111827]">
            Building The Best Of E-Commerce
          </h2>

          <p className="text-[20px] md:text-[21px] text-black mt-2 font-medium">
            See What we've achieved for brands like yours
          </p>
        </div>

     
        <div className="relative flex items-center gap-4">

      
          <button
            onClick={prev}
            className="hidden md:flex flex-shrink-0 w-11 h-15 items-center justify-center rounded-full border border-gray-300 text-gray-500 hover:bg-gray-100 transition bg-white shadow-sm"
          >
            <FiChevronLeft className="text-[22px]" />
          </button>

      
          <div className="flex-1 bg-[#F5F4F0] rounded-[10px] overflow-hidden flex flex-col mt-5 lg:flex-row min-h-[420px]">

         
            <div className="w-full lg:w-1/2 p-8 md:p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-200">

              <h3 className="text-[22px] md:text-[26px] font-[700] text-[#111827] mb-4">
                {c.name}
              </h3>

              <span className="bg-[#DBEAFE] text-[#1E3A5F] text-[18px] font-[500] px-8 py-4 rounded-full w-fit mb-8">
                {c.tag}
              </span>

       
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-0 sm:divide-x divide-gray-300 mb-8">
                {c.stats.map((s) => (
                  <div key={s.label} className="sm:px-6 first:pl-0 text-left">
                    <div className="text-[26px] md:text-[30px]  font-[550] text-[#1E40AF]">
                      {s.value}
                    </div>
                    <div className="text-[15px] gap-5 w-35 font-Wix Madefor Display font-semibold">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <button className="flex items-center gap-2 border border-[#3B82F6] text-[#3B82F6] px-6 py-2.5 rounded-full text-[13px] font-[600] tracking-wider hover:bg-blue-50 transition w-fit">
                VIEW CASE STUDY
                <FiArrowUpRight className="text-[16px]" />
              </button>

            </div>

        
            <div className="w-full lg:w-1/2 p-6 md:p-8 flex items-center justify-center bg-[#F9F9F8]">
              <img
                src={group2}
                alt="Case study preview"
                className="w-full max-w-[1200px] object-contain drop-shadow-xl"
              />
            </div>

          </div>

      
          <button
            onClick={next}
            className="hidden md:flex flex-shrink-0 w-11 h-11 items-center justify-center rounded-full bg-[#2563EB] text-white hover:bg-blue-700 transition shadow-md shadow-blue-400/30"
          >
            <FiChevronRight className="text-[22px]" />
          </button>

        </div>

    
        <div className="flex md:hidden justify-center gap-4 mt-5">
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-500"
          >
            <FiChevronLeft className="text-[20px]" />
          </button>

          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#2563EB] text-white"
          >
            <FiChevronRight className="text-[20px]" />
          </button>
        </div>

    
        <div className="flex items-center justify-center mt-8 gap-3">
          <span className="text-[14px] font-[500] text-[#111827]">
            0{current + 1}
          </span>

          <div className="w-[100px] h-[3px] bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#2563EB] rounded-full transition-all duration-300"
              style={{
                width: `${((current + 1) / cases.length) * 100}%`,
              }}
            ></div>
          </div>

          <span className="text-[14px] font-[500] text-[#111827]">
            0{cases.length}
          </span>
        </div>

    
        <div className="flex justify-center mt-7">
          <button className="flex items-center gap-2 border border-[#3B82F6] text-[#3B82F6] px-8 py-3 rounded-full text-[13px] font-[600] tracking-wider hover:bg-blue-50 transition">
            VIEW ALL WORK
            <FiArrowUpRight className="text-[16px]" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default BestWork;