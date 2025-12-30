const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 space-y-32">

        {/* ================= HEADER ================= */}
        <div className="space-y-8 text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tight">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Dynamic provides a unified EV Operating System and supporting services that help OEMs, fleets, and mobility innovators build faster, operate smarter, and scale with confidence.
          </p>
        </div>

        {/* ================= CORE SERVICES ================= */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center">
            Core Services
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "EV Operating System",
                desc: "A standardized, modular EV Operating System designed to power electric two-wheelers, three-wheelers, and fleets across brands. Dynamic OS acts as the intelligence layer between vehicle hardware and cloud applications."
              },
              {
                title: "Vehicle Data & Telemetry",
                desc: "Real-time vehicle data ingestion, normalization, and analytics across batteries, motors, location, range, and diagnostics — all unified into a single, consistent data model."
              },
              {
                title: "Fleet Intelligence",
                desc: "A centralized fleet management layer that enables operators to monitor, analyze, and optimize mixed-brand EV fleets from one intelligent dashboard."
              }
            ].map((service, idx) => (
              <div 
                key={idx}
                className="bg-gray-50 p-8 rounded-2xl border-2 border-transparent transition-all duration-500 hover:border-black hover:shadow-2xl hover:-translate-y-2 cursor-pointer group"
              >
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-gray-300 group-hover:text-black transition-all duration-300">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-black">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= ADVANCED SERVICES ================= */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center">
            Advanced Solutions
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Charging & Energy Integration",
                desc: "Intelligent coordination between vehicles and charging infrastructure, enabling optimized charging behavior, energy insights, and grid-aware power management."
              },
              {
                title: "OEM & Platform Enablement",
                desc: "Technical integration, system design, and platform support to help OEMs and mobility startups adopt Dynamic OS as their core software foundation."
              }
            ].map((service, idx) => (
              <div 
                key={idx}
                className="bg-white p-10 rounded-2xl border-2 border-gray-200 transition-all duration-500 hover:border-black hover:shadow-2xl hover:scale-105 cursor-pointer group"
              >
                <div className="space-y-4">
                  <div className="text-5xl font-bold text-gray-300 group-hover:text-black transition-all duration-300">
                    0{idx + 4}
                  </div>
                  <h3 className="text-2xl font-bold text-black">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= FEATURES GRID ================= */}
        <div className="bg-gray-200 text-black rounded-3xl p-12 md:p-16">
          <div className="max-w-5xl mx-auto space-y-12">
            <h2 className="text-3xl md:text-5xl font-bold text-center">
              What We Deliver
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Standardized EV Software",
                "Real-time Analytics",
                "Fleet Management",
                "Energy Optimization",
                "Cross-brand Integration",
                "Scalable Architecture"
              ].map((feature, idx) => (
                <div 
                  key={idx}
                  className="bg-white bg-opacity-10 p-6 rounded-xl transition-all duration-500 hover:bg-opacity-20 hover:scale-105 cursor-pointer border border-white border-opacity-20 hover:border-opacity-40"
                >
                  <p className="text-lg font-semibold">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= VALUE PROPOSITION ================= */}
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-black">
            Why Choose Dynamic
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            By providing a unified EV Operating System, Dynamic reduces software duplication, accelerates time-to-market, and enables interoperability across the electric mobility ecosystem.
          </p>

        </div>

        {/* ================= CTA SECTION ================= */}
        <div className="text-center space-y-8 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Ready to Transform Your EV Platform?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let's discuss how Dynamic OS can power your electric mobility vision.
          </p>
          <button 
            onClick={() => window.location.href = "/contact"}
            className="px-8 py-4 bg-black text-white text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
          >
            Contact Us
          </button>
        </div>

      </div>
    </div>
  );
};

export default Services;