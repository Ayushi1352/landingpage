import { FiArrowRight } from "react-icons/fi";
import { TbChevronsRight } from "react-icons/tb";

const Services = () => {
    const services = [
        {
            id: "01",
            title: "Digital Transformation",
            features: ["Ecommerce Audit & Strategy", "Scalability Roadmap", "Ecommerce Platform Selection", "Streamlined Tech Stack"],
            img: "/service/six.png"
        },
        {
            id: "02",
            title: "Store Design & Development",
            features: ["Ecommerce Store UI/UX", "Theme-Based Development", "Custom Shopify Development", "Custom BigCommerce Development"],
            img: "/service/five.png"
        },
        {
            id: "03",
            title: "Platform Migration",
            features: ["Magento to Shopify", "Shopify to BigCommerce", "BigCommerce to Shopify", "Shopify to Magento"],
            img: "/service/four.png"
        },
        {
            id: "04",
            title: "Custom Tech Stack Development",
            features: ["Checkout Customisation", "Custom Tech Stack", "Operations Automation", "Cloud Migration"],
            img: "/service/three.png"
        },
        {
            id: "05",
            title: "Third Party Integration",
            features: ["Payment Gateways", "Shipping Solutions", "Customer Support Tools", "Accounting Software"],
            img: "/service/two.png"
        },
        {
            id: "06",
            title: "App Development",
            features: ["iOS App Development", "Android App Development", "Cross Platform App Development", "API Integrations"],
            img: "/service/one.png"
        }
    ]

    return (
        <section className="relative py-16 px-6 bg-white font-wix overflow-hidden">
         
            <div className="absolute left-[-6%] hidden lg:block top-1 scale-x-[-1.2]">
                <img src="/Img/vectorpn.png" alt="" className="w-41 object-cover" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight">
                        Our <span className="relative inline-block">
                            Services
                            <span className="absolute bottom-[-10px] left-[-30px]  w-30  h-1 bg-blue-600 "></span>
                        </span>
                    </h2>
                    <p className="text-base md:text-xl text-black max-w-3xl mx-auto leading-relaxed">
                        We build exceptional <span className="font-semibold text-gray-900">ecommerce</span> stores for ambitious mid-market brands and enterprises that <span className="font-semibold text-gray-900">accelerate conversions</span>. We are widely regarded as the best commerce transformation company.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-310  items-center">
                    {services.map((service) => (
                        <div key={service.id} className="service-card-bg p-4  rounded-md relative overflow-hidden group hover:shadow-xl transition-all duration-500 flex flex-col  min-h-[420px]">
                
                            <div className="flex justify-between items-start mb-10">
                                <div className="w-20 h-20 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                                    <img src={service.img} alt={service.title} className="w-full h-full object-cover" />
                                </div>
                                <span className="text-white font-bold text-xl ">
                                    {service.id}
                                </span>
                            </div>

                            <h3 className="text-2xl font-semibold text-white mb-8 leading-snug  Wix Madefor Display">
                                {service.title}
                            </h3>

                            <ul className="space-y-4 mb-auto">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-white/80 text-[19px] font-medium group/item hover:text-white transition-colors duration-200">
                                        <img src="/service/arrow.png" alt="" className="w-5 h-5 object-cover" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-20 flex justify-center">
                    <button className="px-3 py-4 bg-[#F4FAFE] text-blue-600 font-bold rounded-full border border-blue-600/20 flex items-center gap-3 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-300 text-md  font-Wix Madefor Display">
                        START YOUR PROJECT
                        <FiArrowRight className="text-xl" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Services;
