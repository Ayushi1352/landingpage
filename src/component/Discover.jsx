import { FaMobileAlt,FaPeopleArrows, FaGraduationCap, FaChartLine, FaTrophy, FaFilter } from "react-icons/fa";
import { HiTrendingUp } from "react-icons/hi";

export default function WhyChoose() {
  const data = [
    {
      icon: <FaMobileAlt className="text-[#2563EB] text-4xl" />,
      title: "Responsive Web Design",
      desc: "All of our sites are built with a mobile first approach. We make sure your site will be viewable by all.",
    },
    {
    icon: <FaPeopleArrows className="text-[#2563EB] text-4xl" />,
     
      title: "Consultive Approach",
      
      desc: "We work with our clients to truly understand their business and their sales goals to build a solution perfect for them.",
    },

    {
      icon: <FaGraduationCap className="text-[#2563EB] text-4xl" />,
      title: "Expert Advice",
      desc: "With more than 20 years in web development and e-commerce there is nothing we have not seen.",
    },
    {
      icon: < FaFilter className="text-[#2563EB] text-4xl" />,
      title: "Built For Conversion",
      desc: "Our focus is driving more sales and leads. We build your site to optimize these conversions.",
    },
    {

       icon: <FaChartLine className="text-[#2563EB] text-4xl" />,

      title: "Marketing Strategies",
      desc: "We will help you develop the perfect strategy to get more clients, and will setup all the tools you need.",
    },
    
      {
      icon: <FaTrophy className="text-[#2563EB] text-4xl" />,
      title: "Marketing Strategies",
     

      desc: "We look at what the leaders in your industry are doing so that you are sure to compete with the best.",
    },
  ];

  return (
    <section className="py-20 bg-white font-wix">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-normal text-[#111827]">
            Discover why{" "}
            <span className="text-[#2563EB] font-bold">
              Kushel Digi Solutions
            </span>{" "}
            Stands Out
          </h2>

          <p className="text-gray-700 text-[15px] md:text-xl mt-5 font-medium max-w-5xl mx-auto">
            Discover why Kushel Digi Solutions stands out with innovative strategies and personalized service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
          {data.map((item, index) => (
            <div key={index} className="relative group">
          
              <div className="mb-6">
                {item.icon}
              </div>

        
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-800 text-[19px] leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

           

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


