import React from "react";

const Technologies = () => {
  const techData = [
    {
      id: 1,
      logo: (
        <div className="flex items-center h-12">
          <img src="techno/shopify.png" alt="Shopify Logo" />
        </div>
      ),
      description:
        "Over 4.4 million businesses are thriving on Shopify. Let's put your business right at the top with our powerful Shopify stores and mobile apps.",
    },
    {
      id: 2,
      logo: (
        <div className="flex items-center h-12">
          <img src="techno/magnento.png" alt="Magento Logo" />
        </div>
      ),
      description:
        "Big brands are thriving with Magento stores. Are you missing out? We can build a feature-rich Magento 2 store for you to lead and scale online!",
    },
    {
      id: 3,
      logo: (
        <div className="flex items-center h-12">
          <img src="techno/bigecommerce.png" alt="BigCommerce Logo" />
        </div>
      ),
      description:
        "Sell smarter, not harder with BigCommerce! We build easy-to-use stores that grab more attention and crush the competition.",
    },
    {
      id: 4,
      logo: (
        <div className="flex items-center h-12">
          <img src="techno/woocommerce.png" alt="WooCommerce Logo" />
        </div>
      ),
      description:
        "WooCommerce gives you full control over your store. We develop scalable WooCommerce solutions that help you grow faster.",
    },
    {
      id: 5,
      logo: (
        <div className="flex items-center h-12">
          <img src="techno/Custom.png" alt="Custom Commerce Logo" />
        </div>
      ),
      description:
        "Custom commerce solutions tailored to your business needs with flexibility, scalability, and powerful integrations.",
    },
    {
      id: 6,
      logo: (
        <div className="flex items-center h-12">
          <img src="techno/Headless.png" alt="Headless Logo" />
        </div>
      ),
      description:
        "Headless commerce transforms e-commerce by decoupling the front-end design from back-end functionality for maximum flexibility.",
    },
  ];

  return (
    <section className="w-full py-10 px-4 md:px-8 lg:px-12 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <h3 className="text-[17px] md:text-[25px] font-semibold text-[#111827] mb-3 relative inline-block">
            Technologies We Use
            <span className="absolute -bottom-2 left-[20%] right-[20%] h-[2px] bg-[#3B82F6]"></span>
          </h3>

          <h2 className="text-[28px] md:text-[35px] font-bold text-[#111827] mt-3">
            Building Tech-Driven Ecommerce Stores
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techData.map((tech) => (
            <div
              key={tech.id}
              className="bg-[#F8FAFC] border border-[#60A5FA] rounded-lg p-7 md:p-6 flex flex-col justify-between h-full hover:shadow-lg transition duration-300"
            >
              <div className="mb-5">{tech.logo}</div>

              <p className="text-[14px] md:text-[18px] leading-[1.7] text-black">
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