import { useEffect, useState } from "react";

const Home = () => {
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });
  const [smoothPos, setSmoothPos] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);
  const [spotlightOpacity, setSpotlightOpacity] = useState(0);

  // Handle actual mouse position
  const handleMouseMove = (e) => {
    setTargetPos({ x: e.clientX, y: e.clientY });
  };

  // Smooth delayed movement
  useEffect(() => {
    const duration = 500;
    const frames = 30;
    const stepTime = duration / frames;

    let frame = 0;

    const startX = smoothPos.x;
    const startY = smoothPos.y;

    const deltaX = targetPos.x - startX;
    const deltaY = targetPos.y - startY;

    const interval = setInterval(() => {
      frame++;
      const progress = frame / frames;

      setSmoothPos({
        x: startX + deltaX * progress,
        y: startY + deltaY * progress,
      });

      if (frame === frames) clearInterval(interval);
    }, stepTime);

    return () => clearInterval(interval);
  }, [targetPos]);

  // Spotlight fade-in
  const handleMouseEnter = () => {
    setIsInside(true);
    setSpotlightOpacity(0);
    setTimeout(() => setSpotlightOpacity(1), 20);
  };

  // Spotlight fade-out
  const handleMouseLeave = () => {
    setSpotlightOpacity(0);
    setIsInside(false);
  };

  // Navigation handlers
  const navigateTo = (path) => {
    window.location.href = path;
  };

  return (
    <div
      className="relative bg-white overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Spotlight */}
      {isInside && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-500"
          style={{
            opacity: spotlightOpacity,
            maskImage: `radial-gradient(
              480px 480px at ${smoothPos.x}px ${smoothPos.y}px,
              black 60%,
              rgba(0,0,0,0.5) 80%,
              transparent 100%
            )`,
            WebkitMaskImage: `radial-gradient(
              480px 480px at ${smoothPos.x}px ${smoothPos.y}px,
              black 60%,
              rgba(0,0,0,0.5) 80%,
              transparent 100%
            )`,
          }}
        >
          <div className="w-full h-full bg-[linear-gradient(to_right,#d4d4d4_1px,transparent_1px),linear-gradient(to_bottom,#d4d4d4_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        </div>
      )}

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="relative text-center max-w-3xl px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-black tracking-tight transform transition-all duration-700 hover:scale-105">
            DYNAMIC
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mt-2 transition-all duration-500 hover:text-black">
            One OS. Endless Possibilities.
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed transition-all duration-500 hover:text-gray-800">
            Driving the Future, Dynamically! Dynamic positions itself as the
            standardized backbone connecting the verticals between hardware &
            software of EV's.
          </p>
        </div>
      </section>

      {/* ================= PROBLEM ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-black transition-all duration-500 hover:tracking-wide">
            The EV Ecosystem Is Fragmented
          </h3>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed transition-all duration-500 hover:text-gray-800">
            Every electric vehicle brand operates on a closed software stack.
            OEMs rebuild the same systems, fleets manage multiple platforms, and
            innovation slows due to lack of standardization.
          </p>
        </div>
      </section>

      {/* ================= SOLUTION ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-black transition-all duration-500 hover:tracking-wide">
              Dynamic OS Solves This
            </h3>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed transition-all duration-500 hover:text-gray-800">
              Dynamic OS is a unified operating system for electric vehicles,
              designed to work across brands and platforms. It standardizes
              vehicle data, enables interoperability, and unlocks intelligent
              EV experiences.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:scale-105 hover:bg-gray-50">
            <ul className="space-y-4 text-gray-700 text-lg">
              <li className="transition-all duration-300 hover:translate-x-2 hover:text-black">• Unified vehicle telemetry & diagnostics</li>
              <li className="transition-all duration-300 hover:translate-x-2 hover:text-black">• Real-time analytics & insights</li>
              <li className="transition-all duration-300 hover:translate-x-2 hover:text-black">• OTA workflows & system intelligence</li>
              <li className="transition-all duration-300 hover:translate-x-2 hover:text-black">• Secure, scalable EV architecture</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= WHO IT'S FOR ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-black transition-all duration-500 hover:tracking-wide">
            Built for the EV Ecosystem
          </h3>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group">
              <h4 className="text-xl font-semibold transition-all duration-300 group-hover:text-black">OEMs</h4>
              <p className="mt-4 text-gray-600 transition-all duration-300 group-hover:text-gray-800">
                Launch faster with a standardized EV operating system instead
                of building everything from scratch.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group">
              <h4 className="text-xl font-semibold transition-all duration-300 group-hover:text-black">Fleets</h4>
              <p className="mt-4 text-gray-600 transition-all duration-300 group-hover:text-gray-800">
                Manage mixed-brand electric fleets through a single unified
                dashboard.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group">
              <h4 className="text-xl font-semibold transition-all duration-300 group-hover:text-black">Developers</h4>
              <p className="mt-4 text-gray-600 transition-all duration-300 group-hover:text-gray-800">
                Build applications and services on top of a common EV software
                layer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VISION ================= */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-bold transition-all duration-500 hover:tracking-wide">
            The Android of Electric Vehicles
          </h3>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed transition-all duration-500 hover:text-white">
            Our vision is to make Dynamic OS the default operating system for
            electric vehicles — enabling cross-brand compatibility, faster
            innovation, and a truly connected EV future.
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20 bg-white">
        <div className="text-center px-6">
          <h3 className="text-3xl font-bold text-black transition-all duration-500 hover:tracking-wide">
            Join the Future of Electric Mobility
          </h3>
          <p className="mt-4 text-lg text-gray-600 transition-all duration-500 hover:text-gray-800">
            We're building the software foundation for the next generation of EVs.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <button 
              onClick={() => navigateTo("/careers")}
              className="px-6 py-3 bg-black text-white rounded-xl transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Explore Careers
            </button>
            <button 
              onClick={() => navigateTo("/contact")}
              className="px-6 py-3 border-2 border-black rounded-xl transition-all duration-300 hover:bg-black hover:text-white hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;