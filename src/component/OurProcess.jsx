import React, { useState } from "react";
import { FiArrowRight, FiSearch } from "react-icons/fi";

const phases = [
    {
        id: 1,
        title: "Discovery Phase",
        icon: <FiSearch className="text-[#2563EB] text-[28px]  " />,
        description: [
            "A discovery phase is necessary to align business goals with an engineering team, avoid costly mistakes, and plan a smooth start of actual product development.",
            "Our experienced business analysts and software architects map user journeys, conduct technical analyses, and define requirements and project scope for precise cost estimation. After the discovery phase, you'll receive a team composition plan, vision and scope document, technical and cost proposal with estimates, UX/UI prototype, and project plan based on your business objectives.",
        ],
    },
    {
        id: 2,
        title: "Strategy Phase",
        icon: <FiSearch className="text-[#2563EB] text-[28px]" />,
        description: [
            "We develop a comprehensive strategy that aligns with your business goals and market opportunities.",
            "Our strategists work closely with your team to define key objectives, identify target audiences, map the competitive landscape, and establish a clear roadmap for success.",
        ],
    },
    {
        id: 3,
        title: "Design Phase",
        icon: <FiSearch className="text-[#2563EB] text-[28px]" />,
        description: [
            "We create intuitive designs that deliver exceptional user experiences and reflect your brand identity.",
            "Our designers craft high-fidelity wireframes, interactive prototypes, and pixel-perfect UI components that balance aesthetics with usability across all devices.",
        ],
    },
    {
        id: 4,
        title: "Development Phase",
        icon: <FiSearch className="text-[#2563EB] text-[28px]" />,
        description: [
            "Our engineers transform approved designs into high-performance, scalable solutions using industry-best technologies.",
            "We follow agile methodologies with iterative sprints, regular demos, and transparent progress updates to ensure on-time delivery without compromising quality.",
        ],
    },
    {
        id: 5,
        title: "Quality Assurance Phase",
        icon: <FiSearch className="text-[#2563EB] text-[28px]" />,
        description: [
            "We conduct thorough testing to ensure your product is bug-free, secure, and performs optimally under varying conditions.",
            "Our QA engineers perform functional, performance, and security testing across multiple environments and devices to guarantee a flawless launch.",
        ],
    },
    {
        id: 6,
        title: "Launch & Post-Launch Support Phase",
        icon: <FiSearch className="text-[#2563EB] text-[28px]" />,
        description: [
            "We manage a smooth deployment process and provide ongoing support to ensure your product runs seamlessly after going live.",
            "Our team monitors system performance, resolves issues proactively, and delivers continuous improvements to help your business grow.",
        ],
    },
];

const OurProcess = () => {
    const [activeId, setActiveId] = useState(1);
    const active = phases.find((p) => p.id === activeId);

    return (
        <section className="w-full bg-white py-14 md:py-20 px-4 md:px-10 lg:px-16 font-wix ">
            <div className="max-w-[1200px] mx-auto">
                <h2 className="text-[26px] md:text-[36px] font-[600] text-[#111827] text-center mb-10 tracking-tight">
                    Our Process
                </h2>

                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

                    <div className="lg:w-[38%] flex flex-col">
                        {phases.map((phase) => (
                            <button
                                key={phase.id}
                                onClick={() => setActiveId(phase.id)}
                                className={`text-left py-4 px-1 border-b border-gray-200 text-[15px] md:text-[22px] font-[420] transition-all duration-200
                                    ${activeId === phase.id
                                        ? "text-[#2563EB] font-[600] border-t-[2px] border-t-[#2563EB]"
                                        : "text-[#374151] hover:text-[#2563EB]"
                                    }`}
                            >
                                {phase.title}
                            </button>
                        ))}
                    </div>


                    <div className="lg:w-[62%]">
                        <div className="mb-8">
                            {active.icon}
                        </div>
                        <h3 className="text-[22px] md:text-[33px] font-[700] text-[#111827] mb-5">
                            {active.title}
                        </h3>
                        <div className="flex flex-col gap-4">
                            {active.description.map((para, i) => (
                                <p key={i} className="text-[24px] md:text-[17px] text-black leading-[1.85]">
                                    {para}
                                </p>
                            ))}
                        </div>
                        <div className="mt-38">
                            <button className="flex items-center gap-2 border-[2px] border-[#2563EB] text-[#2563EB] px-3 py-3 rounded-full text-[16px] font-[550] tracking-widest hover:bg-blue-50 transition-all">
                                LET'S CONNECT <FiArrowRight className="text-[16px]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurProcess;
