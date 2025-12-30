import { useState } from "react";

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 space-y-32">

        {/* ================= HERO INTRO ================= */}
        <section className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tight">
            About Dynamic
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            A universal Electric Vehicle Operating System designed to unify the fragmented EV software ecosystem.
          </p>
        </section>

        {/* ================= CORE DESCRIPTION ================= */}
        <section className="max-w-4xl mx-auto space-y-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Dynamic acts as a standardized software layer that connects vehicles, components, cloud intelligence, and user applications into one cohesive platform. Today, every EV manufacturer builds isolated systems, creating inefficiencies across development, fleet operations, and data interoperability.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            We solve this by creating a common operating foundation for electric mobility.
          </p>

          <div className="bg-black text-white p-8 rounded-2xl transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer">
            <p className="text-2xl md:text-3xl font-semibold text-center">
              "Android for Electric Vehicles"
            </p>
          </div>
        </section>

        {/* ================= PRODUCTS GRID ================= */}
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Dynamic Core OS", desc: "Vehicle intelligence & system orchestration" },
            { title: "Dynamic Telemetry", desc: "Real-time vehicle data & analytics" },
            { title: "Dynamic Grid", desc: "Charging, energy & power coordination" },
            { title: "Dynamic Fleet", desc: "Multi-vehicle & logistics management" }
          ].map((item, idx) => (
            <div 
              key={idx}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className="bg-gray-50 p-8 rounded-2xl border-2 border-transparent transition-all duration-500 hover:border-black hover:shadow-2xl hover:-translate-y-3 cursor-pointer group"
            >
              <div className="text-xl font-bold text-black mb-3 transition-all duration-300 group-hover:scale-110 inline-block">
                {item.title}
              </div>
              <p className="text-sm text-gray-600 transition-all duration-300 group-hover:text-black">
                {item.desc}
              </p>
            </div>
          ))}
        </section>

        {/* ================= VISION SECTION ================= */}
        <section className="bg-gray-50 rounded-3xl p-12 md:p-20">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl md:text-6xl font-bold text-center text-black">
              Our Vision
            </h2>

            <p className="text-xl md:text-2xl text-center text-gray-700 leading-relaxed">
              To become the foundational operating system powering the future of electric mobility.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              {[
                "Build India's first universal EV Operating System that seamlessly connects vehicles, components, OEMs, and energy infrastructure on a single intelligent platform.",
                "Bridge the gap between hardware and software in electric mobility through adaptive, data-driven communication.",
                "Accelerate India's transition toward sustainable mobility by empowering OEMs, fleets, and startups with world-class EV software.",
                "Position India as a global leader in EV software and operating system innovation."
              ].map((text, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-6 rounded-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer group border-2 border-gray-200 hover:border-black"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl font-bold text-gray-400 group-hover:text-black transition-all duration-300">
                      0{idx + 1}
                    </span>
                    <p className="text-gray-700 leading-relaxed">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= MISSION SECTION ================= */}
        <section className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-black">
              Our Mission
            </h2>
            <p className="text-xl md:text-2xl text-gray-600">
              Turning complex EV systems into simple, scalable software.
            </p>
          </div>

          <div className="space-y-6">
            {[
              "Create a standardized operating system that reduces development cost and complexity for EV manufacturers.",
              "Enable interoperability across vehicles, fleets, and charging infrastructure through a common software language.",
              "Build a future-ready EV software platform that evolves with technology, regulations, and user needs."
            ].map((text, idx) => (
              <div 
                key={idx}
                className="bg-gray-50 p-8 rounded-2xl border-l-4 border-black transition-all duration-500 hover:bg-white hover:shadow-2xl hover:border-l-8 cursor-pointer group"
              >
                <div className="flex items-start gap-6">
                  <span className="text-4xl font-bold text-black transition-all duration-300 group-hover:scale-125">
                    0{idx + 1}
                  </span>
                  <p className="text-lg text-gray-700 leading-relaxed pt-2">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CLOSING STATEMENT ================= */}
        <section className="max-w-4xl mx-auto text-center py-16">
          <p className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed">
            A modular, scalable, and secure EV OS built for cross-brand interoperability.
          </p>
        </section>

      </div>
    </div>
  );
};

export default About;