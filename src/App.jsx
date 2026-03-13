import React from "react";
import Navbar from "./Layout/Navbar.jsx";
import Hero from "./component/Hero.jsx";
import Intro from "./component/Intro.jsx";
import Services from "./component/Services.jsx";
import BestWork from "./component/BestWork.jsx";
import Technologies from "./component/Technologies.jsx";
import CtaBanner from "./component/CtaBanner.jsx";
import OurProcess from "./component/OurProcess.jsx";
import Discover from "./component/Discover.jsx";
import FeaturedClients from "./component/FeaturedClients.jsx";
import Testimonials from "./component/Testimonials.jsx";
import ContactSection from "./component/Contact.jsx";
import Footer from "./component/Footer.jsx";




function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-blue/30 selection:text-brand-blue">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Services />
        <BestWork />
        <Technologies />
        <CtaBanner />
        <OurProcess />
        <Discover />
        <FeaturedClients />
        <Testimonials />
        <ContactSection />
        <Footer />

      </main>
    </div>
  );
}

export default App;