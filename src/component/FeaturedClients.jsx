import React from "react";

const clients = [
    { name: "Auxible India", image: "/logo.png" },
    { name: "Madfish Solutions", image: "/70904_228x204 1 (2).png" },
    { name: "Slides 365", image: "/Slide365 Logo 1.png" },
    { name: "CodePxl", image: "/CodePXL_Web_Logo 1.png" },
    { name: "Hindware", image: "/1692766815 1 copy.png" },
    { name: "Deloitte", image: "/Deloitte_Logo 1.png" },
    { name: "Usha Fasteners", image: "/Layer 0 2 1.png" },
    { name: "Cronus", image: "/Layer 0 1.png" },
    { name: "Havells", image: "/Havells-Logo.wine 1.png" },
    { name: "Instacertify", image: "/inta logo 1 (1) 1.png" },
];

const Row = ({ clients, directionClass }) => (
    <div className="flex overflow-hidden marquee-mask py-4">
        <div className={`flex flex-nowrap shrink-0 gap-8 ${directionClass}`}>
            {[...clients, ...clients, ...clients, ...clients].map((client, index) => (
                <div
                    key={index}
                    speed={10}
                    className="flex items-center justify-center bg-white px-10 py-6 shadow-sm min-w-[200px] h-24 transition-transform hover:scale-105"
                >
                    <img
                        src={client.image}
                        alt={client.name}
                        className="h-10 w-auto object-contain hover:grayscale-0  hover:opacity-100 transition-all duration-300"
                    />
                </div>
            ))}
        </div>
    </div>
);

const FeaturedClients = () => {

    const row1 = clients.slice(0, 5);
    const row2 = clients.slice(5, 10);

    return (
        <section className="bg-[#F5F3EF] py-20 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto text-center mb-15">
                <h2 className="text-4xl md:text-4xl font-Wix Madefor Display font-semibold text-black ">
                    Featured Clients
                </h2>
         
                <p className="text-black mt-3 text-xl font-normal">
             
                    We have worked with amazing business 
                </p>
            </div>

            <div className="space-y-8 ">
                <Row clients={row1} directionClass="animate-marquee-left" />
                <Row clients={row2} directionClass="animate-marquee-right" />
            </div>
        </section>
    );
};

export default FeaturedClients;