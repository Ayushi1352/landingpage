import { useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";

function ContactSection() {
  const [service, setService] = useState("");

  return (
    <section className="w-full bg-white py-10 px-4 md:px-10 lg:px-20 min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto rounded-[40px] overflow-hidden grid lg:grid-cols-[1.2fr_1.8fr] shadow-2xl">
  
        <div className="bg-[#0047E0] text-white p-6 md:p-12 flex flex-col justify-between border-r border-white/10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              Ready to Build Next-<br />Level Custom Digital Solutions?
            </h2>
            <p className="mt-6 text-white/80 text-base font-medium leading-relaxed max-w-md">
              Please fill in the form and let's chat<br />
              understand how we can help you better
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="bg-[#6B8AFF] p-6 rounded-[25px] transition-transform hover:scale-[1.02] cursor-default">
              <p className="text-xs font-semibold text-white/90 Poppins">Call Us</p>
              <p className="text-3xl font-bold mt-1">+91 9015457012</p>
              <p className="text-[15px] mt-4 font-bold text-white/70 Poppins">INDIA</p>
            </div>

            <div className="bg-[#6B8AFF] p-6 rounded-[25px] transition-transform hover:scale-[1.02] cursor-default">
              <p className="text-xs font-semibold text-white/90 Poppins">Call Us</p>
              <p className="text-3xl font-bold mt-1">+1-585-566-2070</p>
              <p className="text-[15px] mt-4 font-bold text-white/70 Poppins">UNITED STATES</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1A5AE5] p-6 md:p-12">
          <h3 className="text-white text-2xl md:text-4xl font-Raleway font-bold mb-8">
            Get Answers to your Questions
          </h3>

          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name*"
                className="w-full bg-[#6B8AFF]/70 placeholder-white/90 text-white px-5 py-3 rounded-xl outline-none focus:ring-2 focus:ring-white/30 transition-shadow font-medium text-sm"
              />
              <input
                type="text"
                placeholder="Last name*"
                className="w-full bg-[#6B8AFF]/70 placeholder-white/90 text-white px-5 py-3 rounded-xl outline-none focus:ring-2 focus:ring-white/30 transition-shadow font-medium text-sm"
              />
            </div>

            <div className="flex gap-3">
              <div className="bg-[#6B8AFF]/70 px-3 rounded-xl flex items-center justify-center text-white cursor-pointer hover:bg-[#6B8AFF]/80 transition-colors">
                <span className="text-xl mr-2">🇮🇳</span>
                <span className="text-[10px] opacity-70">▼</span>
              </div>
              <input
                type="tel"
                placeholder="+91"
                className="w-full bg-[#6B8AFF]/70 placeholder-white/90 text-white px-5 py-3 rounded-xl outline-none focus:ring-2 focus:ring-white/30 transition-shadow font-medium text-sm"
              />
            </div>

            <input
              type="email"
              placeholder="Business email*"
              className="w-full bg-[#6B8AFF]/70 placeholder-white/90 text-white px-5 py-3 rounded-xl outline-none focus:ring-2 focus:ring-white/30 transition-shadow font-medium text-sm"
            />

            <div className="relative">
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full bg-[#6B8AFF]/70 text-white px-5 py-3 rounded-xl outline-none focus:ring-2 focus:ring-white/30 transition-shadow font-medium appearance-none cursor-pointer text-sm"
              >
                <option value="" disabled className="text-black">
                  Services*
                </option>
                <option className="text-black">Web Development</option>
                <option className="text-black">Mobile App Development</option>
                <option className="text-black">UI/UX Design</option>
                <option className="text-black">Digital Marketing</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/60">
                <span className="text-[10px]">▼</span>
              </div>
            </div>

            <textarea
              rows="4"
              placeholder="Message*"
              className="w-full bg-[#6B8AFF]/70 placeholder-white/90 text-white px-5 py-3 rounded-xl outline-none focus:ring-2 focus:ring-white/30 transition-shadow font-medium resize-none text-sm"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-white text-[#1A5AE5] py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-all active:scale-[0.98] shadow-lg group"
            >
              let's connect
              <HiOutlineChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;