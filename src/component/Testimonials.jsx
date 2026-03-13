import React from "react";

const testimonials = [
    {
        logo: "/cta/slideone.png",
        text: "Extremely satisfied with the website developed by Kushel Digi Solutions. The new site effectively presents our diverse slide offerings and makes it easy for users to find and purchase what they need. The sleek design and intuitive navigation have significantly improved engagement with our users.",
        name: "Anu Koteshwara",
        company: "Slide 365",
    },
    {
        logo: "/cta/slidetwo.png",
        text: "Extremely satisfied with the website developed by Kushel Digi Solutions. The new site effectively presents our diverse slide offerings and makes it easy for users to find and purchase what they need. The sleek design and intuitive navigation have significantly improved engagement with our users.",
        name: "Shikhar Mithal",
        company: "Mithal Industries",
    },
    {
        logo: "/cta/slidethree.png",
        text: "Extremely satisfied with the website developed by Kushel Digi Solutions. The new site effectively presents our diverse slide offerings and makes it easy for users to find and purchase what they need. The sleek design and intuitive navigation have significantly improved engagement with our users.",
        name: "Matt Reeder",
        company: "Madfish Solutions",
    },
];

const Testimonials = () => {
    return (
        <section className="bg-[#0B2A5B]  py-20 px-6 font-wix">
            <div className="max-w-7xl mx-auto text-center">


                <h2 className="text-3xl md:text-4xl font-semibold mt-[-15px] text-white">
                    Hear from our <span className="text-yellow-400">Satisfied</span> Clients
                </h2>

                <p className="text-gray-300 text-xl mt-3 mb-16">
                    We have Worked With Amazing Businesses
                </p>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 w-330 mr-10 items-center ">

                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="relative  bg-gray-100 rounded-lg p-8 pt-14 text-left shadow-md hover:shadow-xl transition group duration-300"
                        >


                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center border-2 border-blue-500 shadow-lg overflow-hidden">
                                    <img
                                        src={item.logo}
                                        alt="logo"
                                        className="w-full h-full p-3 object-cover transition duration-300"

                                    />


                                </div>
                            </div>


                            <p className="text-black text-m leading-relaxed mb-6">
                                "{item.text}"
                            </p>

                            <hr className="mb-6  border-gray-300" />


                            <div>
                                <h4 className="font-bold text-xl  text-gray-900">{item.name}</h4>
                                <p className="text-sm text-black font-medium">{item.company}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Testimonials;