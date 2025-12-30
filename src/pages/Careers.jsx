import { useState } from "react";

const Careers = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <div className="bg-white">
      {/* HERO - Split Screen Design */}
      <section className="min-h-screen grid md:grid-cols-2">
        <div className="bg-black text-white flex items-center justify-center p-12">
          <div className="max-w-xl">
            <div className="text-sm font-bold tracking-widest mb-6 text-gray-400">CAREERS AT DYNAMIC</div>
            <h1 className="text-6xl md:text-7xl font-black leading-none mb-8">
              WE HIRE<br/>PEOPLE WHO<br/>GIVE A DAMN
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Building an operating system for electric vehicles isn't just a job. It's a mission that requires obsession, integrity, and relentless execution.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 flex items-center justify-center p-12">
          <div className="space-y-8 max-w-lg">
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-2xl font-bold mb-3">Not a Corporate Ladder</h3>
              <p className="text-gray-600">We don't have hierarchies for the sake of it. We have people solving hard problems together.</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-6">
              <h3 className="text-2xl font-bold mb-3">Not Resume-Driven</h3>
              <p className="text-gray-600">We care about what you've built and how you think, not where you went to school.</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-6">
              <h3 className="text-2xl font-bold mb-3">Not Playing It Safe</h3>
              <p className="text-gray-600">If you want stability and predictability, we're not the place. We're building something that doesn't exist yet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE - Manifesto Style */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-black mb-16 text-center">What We Stand For</h2>
          <div className="space-y-12">
            <div className="border-b-2 border-gray-200 pb-8">
              <h3 className="text-3xl font-bold mb-4">01 → Talent Is Everything</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                A mediocre team with a great idea will fail. A great team with a mediocre idea will figure it out. We obsess over finding the right people because everything else flows from that.
              </p>
            </div>
            <div className="border-b-2 border-gray-200 pb-8">
              <h3 className="text-3xl font-bold mb-4">02 → Speed Matters</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                The EV industry is moving fast. We move faster. Decisions in days, not weeks. Prototypes in weeks, not months. We bias toward action.
              </p>
            </div>
            <div className="border-b-2 border-gray-200 pb-8">
              <h3 className="text-3xl font-bold mb-4">03 → Ownership Over Everything</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                No one here says "that's not my job." If you see a problem, you own it. If you start something, you finish it. Accountability is non-negotiable.
              </p>
            </div>
            <div className="pb-8">
              <h3 className="text-3xl font-bold mb-4">04 → Build For The Long Term</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're not optimizing for next quarter's metrics. We're building infrastructure that will power transportation for decades. Think in years, not months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE NEED - Card Expansion */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-black mb-4 text-center">The People We Need</h2>
          <p className="text-center text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
            We don't hire for specific skills. We hire for mindset and ability to learn.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Systems Thinkers",
                desc: "You see how pieces fit together. You understand second-order effects. You build for scale from day one.",
                details: "We need people who can architect complex systems, anticipate failure modes, and design for reliability at scale."
              },
              {
                title: "Problem Solvers",
                desc: "You don't wait for instructions. You see a gap and you fill it. You're resourceful and relentless.",
                details: "The best people we've hired didn't wait to be told what to do. They saw problems and fixed them."
              },
              {
                title: "Fast Learners",
                desc: "You don't need to know everything. You need to learn anything. Quickly. Independently.",
                details: "Technology changes fast. We need people who can pick up new tools, languages, and concepts on the fly."
              },
              {
                title: "Clear Communicators",
                desc: "You explain complex ideas simply. You write clearly. You listen actively. No jargon, no fluff.",
                details: "Great engineers who can't communicate their ideas are half as effective. Communication is a core skill."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 border-2 border-gray-200 cursor-pointer transition-all duration-300 hover:border-black"
                onMouseEnter={() => setExpandedCard(i)}
                onMouseLeave={() => setExpandedCard(null)}
              >
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <div className={`overflow-hidden transition-all duration-300 ${expandedCard === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500">{item.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT OPENINGS */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-8">Current Openings</h2>
          <div className="bg-white border-4 border-black p-12">
            <p className="text-2xl font-bold mb-4">We're Not Actively Hiring Right Now</p>
            <p className="text-lg text-gray-600 mb-6">
              We're focused on building the foundation of Dynamic OS. When we scale, we'll open specific roles.
            </p>
            <p className="text-gray-600">
              That said—if you think you'd be exceptional here, reach out anyway. We create opportunities around great people, not job descriptions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;