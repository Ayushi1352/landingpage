import React from "react";
import { FaShopify } from "react-icons/fa";

const Technologies = () => {
    const techData = [
        {
            id: 1,
            logo: (
                <div className="flex items-center gap-1.5 h-12  font-Wix Madefor Display">
    
                    <img src='src/assets/Shopify_Logo 1 (1).png'></img>
                    <span className="font-[800] text-[39px] tracking-tight-italic  text-[#111]"></span>
                </div>
            ),
            description: "Over 4.4 million businesses are thriving on shopify. Let's put your business right at the top with our powerful shopify stores and mobile Apps",
        },
        {
            id: 2,
            logo: (
                <div className="flex items-center gap-1.5 h-12 relative w-fit font-Wix Madefor Display">
                    
                    
                      
                  <img src='src/assets/magento-1-logo-png-transparent 1 copy.png'></img>

                </div>
            ),
            description: "Big brand are thriving with magento stores are you missing out? We can build a feature - rich Magento 2 store for you the lead and scale online!",
        },
        {
            id: 3,
            logo: (
                <div className="flex items-center h-12 font-Wix Madefor Display">
                    <div className="relative flex items-center">
                        <img src='src/assets/png-transparent-bigcommerce-e-commerce-business-shopping-cart-software-sales-ecommerce-payment-system-text-retail-logo 1.png'></img>
                    </div>
                </div>
            ),
            description: "Sell Smarter, not harder with Bigcomerce! We build easy-to-use stores that grab more attention and crush the competition.",
        },
        {
            id: 4,
            logo: (
                <div className="flex items-center h-12 font-Wix Madefor Display">
                   
                       
                          
                       <img src='dist/assets/woo commerce 1.png'></img>
                    </div>
              
            ),
            description: "Over 4.4 million businesses are thriving on shopify. Let's put your business right at the top with our powerful shopify stores and mobile Apps",
        },
        {
            id: 5,
            logo: (
                <div className="flex items-center h-12 font-Wix Madefor Display">
                <img src='dist/assets/Custom Commerce.png'></img>
                </div>
            ),
            description: "Headless commerce transforms e-commerce by decoupling the front-end design from back-end functionality.",
        },
        {
            id: 6,
            logo: (
                <div className="flex items-center h-12 font-Wix Madefor Display">
                   <img src='dist/assets/Headless.png'></img>
                </div>
            ),
            description: "Headless commerce transforms e-commerce by decoupling the front-end design from back-end functionality.",
        }
    ];

    return (
        <section className="w-full py-10 px-4 md:px-8 lg:px-12 bg-[#FAFAFA] font-wix">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center text-center mb-12">
                    <h3 className="text-[17px] md:text-[25px] font-[550] text-[#111827] mb-3 relative inline-block">
                        Technologies We Use
                        <span className="absolute -bottom-2 left-[20%] right-[20%] h-[2px] bg-[#3B82F6]"></span>
                    </h3>
                    <h2 className="text-[28px] md:text-[35px] font-[600] text-[#111827] mt-3">
                        Building Tech-Driven Ecommerce Stores
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mr-10 items-center w-310"  >
                    {techData.map((tech) => (
                        <div key={tech.id} className="bg-[#F8FAFC] border border-[#60A5FA] rounded-[8px] p-7 md:p-8 flex flex-col hover:shadow-lg transition-shadow duration-300">
                            <div className="mb-5 relative z-10">
                                {tech.logo}
                            </div>
                            <p className="text-[14px] md:text-[18px] leading-[1.8] text-black font-[400]">
                                {tech.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
