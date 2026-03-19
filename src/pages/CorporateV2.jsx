import React from "react";
import { motion } from "framer-motion";

const CorporateV2Page = () => {
  return (
    <div className="bg-[#121416] text-[#e2e2e5] font-['Inter'] selection:bg-[#c3f5ff] selection:text-[#00363d] min-h-screen">
      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .corner-bracket-tl { border-top: 2px solid #00E5FF; border-left: 2px solid #00E5FF; width: 12px; height: 12px; position: absolute; top: 0; left: 0; }
        .corner-bracket-tr { border-top: 2px solid #00E5FF; border-right: 2px solid #00E5FF; width: 12px; height: 12px; position: absolute; top: 0; right: 0; }
        .corner-bracket-bl { border-bottom: 2px solid #00E5FF; border-left: 2px solid #00E5FF; width: 12px; height: 12px; position: absolute; bottom: 0; left: 0; }
        .corner-bracket-br { border-bottom: 2px solid #00E5FF; border-right: 2px solid #00E5FF; width: 12px; height: 12px; position: absolute; bottom: 0; right: 0; }
        .glass-panel { background: rgba(26, 28, 30, 0.6); backdrop-filter: blur(12px); }
      `}</style>

      {/* TopAppBar */}
      <nav className="bg-[#0c0e10] flex justify-between items-center w-full px-6 h-16 border-b-2 border-[#849396] sticky top-0 z-50">
        <div className="text-xl font-black tracking-tighter text-[#00E5FF] uppercase font-['Manrope']">
          REXPLORE TECHNOLOGIES
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a className="text-[#00E5FF] border-b-2 border-[#00E5FF] pb-1 font-['Manrope'] font-bold tracking-tighter uppercase text-sm" href="#">SYSTEMS</a>
          <a className="text-[#849396] uppercase tracking-widest text-xs font-['Inter'] hover:text-[#c3f5ff] transition-colors duration-100" href="#">DATA</a>
          <a className="text-[#849396] uppercase tracking-widest text-xs font-['Inter'] hover:text-[#c3f5ff] transition-colors duration-100" href="#">ENGINE</a>
          <a className="text-[#849396] uppercase tracking-widest text-xs font-['Inter'] hover:text-[#c3f5ff] transition-colors duration-100" href="#">LOGS</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-[#849396] hover:text-[#00E5FF]"><span className="material-symbols-outlined">settings</span></button>
          <button className="text-[#849396] hover:text-[#00E5FF]"><span className="material-symbols-outlined">notifications</span></button>
          <div className="w-8 h-8 bg-[#333537] flex items-center justify-center overflow-hidden border border-[#849396]/30">
            <img alt="User Operator" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsMzt-82yz8IX1sW2nC-snGaE581Gli-SsWMySCDmqsz_8THTIxck0KmONmJEvSpHpyM98SKwOP4oxmtyRNOhZVf7oxRzDF6yK46xXa6yB6xMYHSrahaIlv5DVfhdoQRI6wgxanXelpO8wz6NM2ucIM1D2p0pdCrMyr2n34COlq-45uIL8I2-8eKU1CZ6vAh8HtAZpWU9w-YVf_3oRd2WE-Mab6bNfBNQTwdjUwBZRpAqMasjW0Y67kGwPjyxeKsTyFdUsKTYX9uIR" />
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* SideNavBar (Desktop Only) */}
        <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] flex flex-col z-40 bg-[#121416] border-r-2 border-[#849396] w-64 hidden lg:flex">
          <div className="p-6 border-b-2 border-[#3b494c]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-[#00e5ff] p-1">
                <div className="w-full h-full bg-[#00e5ff]/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#00e5ff]">deployed_code</span>
                </div>
              </div>
              <div>
                <div className="text-lg font-black text-[#00E5FF] font-['Manrope']">REXPLORE</div>
                <div className="font-['Inter'] font-bold tracking-widest uppercase text-[10px] text-[#849396]">KINETIC_ENGINE_V1</div>
              </div>
            </div>
          </div>
          <nav className="flex-1 py-4 overflow-y-auto">
            <a className="bg-[#00E5FF] text-[#00363d] flex items-center gap-4 px-6 py-4 w-full font-['Inter'] font-bold tracking-widest uppercase text-xs transition-all" href="#">
              <span className="material-symbols-outlined">terminal</span> TERMINAL
            </a>
            <a className="flex items-center gap-4 px-6 py-4 text-[#849396] w-full font-['Inter'] font-bold tracking-widest uppercase text-xs hover:bg-[#1e2022] hover:text-[#00E5FF] transition-all" href="#">
              <span className="material-symbols-outlined">altitude</span> FLIGHT_PATH
            </a>
            <a className="flex items-center gap-4 px-6 py-4 text-[#849396] w-full font-['Inter'] font-bold tracking-widest uppercase text-xs hover:bg-[#1e2022] hover:text-[#00E5FF] transition-all" href="#">
              <span className="material-symbols-outlined">sensors</span> SENSORS
            </a>
            <a className="flex items-center gap-4 px-6 py-4 text-[#849396] w-full font-['Inter'] font-bold tracking-widest uppercase text-xs hover:bg-[#1e2022] hover:text-[#00E5FF] transition-all" href="#">
              <span className="material-symbols-outlined">memory</span> RESOURCES
            </a>
            <a className="flex items-center gap-4 px-6 py-4 text-[#849396] w-full font-['Inter'] font-bold tracking-widest uppercase text-xs hover:bg-[#1e2022] hover:text-[#00E5FF] transition-all" href="#">
              <span className="material-symbols-outlined">hub</span> COMMS
            </a>
          </nav>
          <div className="p-4 mt-auto border-t-2 border-[#3b494c] space-y-2">
            <button className="w-full bg-[#00e5ff] text-[#00363d] py-3 font-['Inter'] font-bold tracking-widest uppercase text-xs transition-all active:scale-95">
              INITIALIZE_SCAN
            </button>
            <div className="flex flex-col">
              <a className="flex items-center gap-4 px-2 py-2 text-[#849396] uppercase text-[10px] hover:text-[#00E5FF]" href="#">
                <span className="material-symbols-outlined text-sm">help_center</span> SUPPORT
              </a>
              <a className="flex items-center gap-4 px-2 py-2 text-[#ffb4ab] uppercase text-[10px] hover:opacity-80" href="#">
                <span className="material-symbols-outlined text-sm">power_settings_new</span> LOGOUT
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="lg:ml-64 flex-1">
          {/* Hero Section */}
          <section className="relative h-[819px] flex items-center overflow-hidden border-b-2 border-[#849396]">
            <div className="absolute inset-0 z-0">
              <img alt="Industrial Tech" className="w-full h-full object-cover opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT9ath4OZOxYa5A3Z78KbLZU8Gel4IDwuxAQspmsQeWeY7N2_fiOeEpSH3oLq-Vb-VBcNXg2LzT36wFdXann3_3-EEx6Nc1QoR2FkmiBxb1pTPqv657qMkLlOXNJjSVaH5nZNqroj6Q-rrC0PrAW9oL990W5mc6EzuW3k5VU9Y5jJ8K5kVNfN9i0t270l3GDR_LIgFBYbU63Hck1KmX3W_SRGLeSQpHMkNSqScBQTEavoy_PaBZY5oQlyWsppkp6rYOILSpd6xAVRr" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#121416] via-transparent to-transparent"></div>
            </div>
            <div className="relative z-10 px-8 md:px-16 w-full max-w-5xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block px-3 py-1 bg-[#00e5ff] text-[#00363d] font-bold tracking-widest text-[10px] uppercase mb-6"
              >
                SYSTEM_STATUS: ACTIVE
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-6xl md:text-8xl font-['Manrope'] font-extrabold tracking-tighter text-white leading-[0.9] mb-8 uppercase"
              >
                Architecting <br/>
                <span className="text-[#00e5ff]">Next-Gen</span> <br/>
                Performance.
              </motion.h1>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="glass-panel border-l-4 border-[#00e5ff] p-8 max-w-xl relative"
              >
                <div className="corner-bracket-tr"></div>
                <div className="corner-bracket-bl"></div>
                <p className="text-[#bac9cc] font-['Inter'] text-lg leading-relaxed mb-6 uppercase tracking-tight">
                  Precision-engineered digital frameworks for REXPLORE TECHNOLOGIES. We deploy high-fidelity kinetic engines to accelerate corporate structural logistics.
                </p>
                <div className="flex gap-4">
                  <button className="bg-[#00e5ff] text-[#00363d] px-8 py-4 font-bold tracking-widest uppercase text-xs active:scale-95 transition-all">
                    DEPLOY_ENGINE
                  </button>
                  <button className="border-2 border-[#849396] text-[#c3f5ff] px-8 py-4 font-bold tracking-widest uppercase text-xs hover:border-[#00e5ff] transition-all">
                    SPEC_SHEET
                  </button>
                </div>
              </motion.div>
            </div>
            {/* Technical Overlay Element */}
            <div className="absolute right-0 bottom-0 p-8 hidden lg:block opacity-30">
              <div className="w-64 h-64 border-2 border-[#3b494c] relative">
                <div className="absolute inset-4 border border-[#3b494c] flex items-center justify-center">
                  <span className="material-symbols-outlined text-6xl text-[#3b494c]">grid_view</span>
                </div>
                <div className="corner-bracket-tl"></div>
                <div className="corner-bracket-br"></div>
              </div>
            </div>
          </section>

          {/* Expertise Grid */}
          <section className="py-24 px-8 md:px-16 bg-[#121416]">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-4xl font-['Manrope'] font-extrabold tracking-tighter uppercase">Expertise_Matrix</h2>
                <div className="w-24 h-1 bg-[#00e5ff] mt-2"></div>
              </div>
              <div className="text-[#849396] font-bold text-[10px] tracking-widest uppercase">
                GRID_REF: XT-094-ALPHA
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-[#849396]">
              {[
                { icon: "architecture", title: "Structural Logic", desc: "Modular architectural layering designed for infinite scalability across global enterprise nodes.", tag: "LVL_01_SECURED" },
                { icon: "dataset", title: "Data Ingestion", desc: "High-velocity data streams processed through the Kinetic V1 Engine for real-time visualization.", tag: "BUFFER_CLEAR" },
                { icon: "security", title: "Security Layers", desc: "Cryptographic hardening and automated threat neutralization protocols integrated at core level.", tag: "THREAT_0%" },
                { icon: "rocket_launch", title: "Engine Thrust", desc: "Propelling digital transformation through accelerated deployment cycles and kinetic workflows.", tag: "READY_FOR_LIFT" }
              ].map((item, idx) => (
                <div key={idx} className={`p-8 group hover:bg-[#1e2022] transition-all ${idx > 0 ? "lg:border-l-2 lg:border-[#849396]" : ""}`}>
                  <div className="text-[#00e5ff] mb-6">
                    <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-['Manrope'] font-bold uppercase mb-4 tracking-tighter">{item.title}</h3>
                  <p className="text-[#bac9cc] text-sm font-['Inter'] leading-relaxed mb-8">{item.desc}</p>
                  <div className="text-[10px] font-bold tracking-widest text-[#849396] group-hover:text-[#00e5ff] transition-colors">{item.tag}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Global Logistics Interactive Map */}
          <section className="bg-[#0c0e10] border-y-2 border-[#849396] p-0 flex flex-col lg:flex-row h-auto lg:h-[600px]">
            <div className="lg:w-1/3 p-12 flex flex-col justify-center border-r-0 lg:border-r-2 border-[#849396]">
              <div className="text-[#00e5ff] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">GLOBAL_FOOTPRINT</div>
              <h2 className="text-4xl font-['Manrope'] font-extrabold tracking-tighter uppercase mb-6 leading-none">Operational <br/> Network</h2>
              <p className="text-[#bac9cc] font-['Inter'] mb-8">REXPLORE maintains a presence in every high-density technical corridor globally. Tracking 42 active deployment clusters in real-time.</p>
              <div className="space-y-4">
                {[
                  { region: "North America", nodes: "12 NODES" },
                  { region: "Euro Zone", nodes: "18 NODES" },
                  { region: "Asia Pacific", nodes: "12 NODES" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between border-b border-[#3b494c] pb-2">
                    <span className="text-xs uppercase text-[#bac9cc]">{item.region}</span>
                    <span className="text-xs font-bold text-[#00e5ff]">{item.nodes}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-2/3 relative h-[400px] lg:h-full bg-[#1e2022]">
              <div className="absolute inset-0 opacity-60 overflow-hidden">
                <img alt="Satellite World Map" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVepgkpblJoMH70qFiB1rBfRUdgOKgKpfEzqByLtmq2oqT9DTzV_NJok4xYDZ1DPYiA475jUN4cUh_a6axPwcyiZyFJrkru--hnCLIB8VcRNV1LjdsJP1E1mt5oDR3foZ4RKJb5UikLwIdxghuU6ydQRiMD2BKjgyd1l35I7QMnG9aEFp4rB3X-aAmYEh0p6POdivdiVgUuv1zGIApg1gpMMDR8J0_6WP2t1rcViut_IlUnnucwmkXu_UXHdPjmK0lPLYWLKWG-cs0" />
              </div>
              <div className="absolute inset-0 bg-[#00e5ff]/10 mix-blend-overlay"></div>
              {/* UI Markers */}
              <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-[#00e5ff] rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-[#00e5ff] rounded-full animate-pulse shadow-[0_0_10px_#00E5FF]"></div>
              <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#00e5ff] rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 right-8 glass-panel p-4 border border-[#849396]">
                <div className="text-[10px] font-bold tracking-widest text-[#00e5ff] uppercase mb-2">LIVE_COORDINATES</div>
                <div className="font-mono text-xs text-[#bac9cc]">LAT: 37.7749 N | LONG: 122.4194 W</div>
              </div>
            </div>
          </section>

          {/* Leadership Section */}
          <section className="py-24 px-8 md:px-16 bg-[#121416]">
            <div className="mb-16">
              <h2 className="text-4xl font-['Manrope'] font-extrabold tracking-tighter uppercase mb-4">Core_Leadership</h2>
              <div className="text-[#849396] font-bold text-xs tracking-widest uppercase">The Architects Behind the Kinetic Engine</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Marcus Vane", role: "CHIEF_SYSTEMS_ARCHITECT", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkwuy1ysaX47o-XYoO8Gqwoh7vRY_4c3LerRZ3zxzr7cOfN3lbSsaLPJB_fEYRASqCO7AxT-afGJUlhau85SJW1EzQ5dmGDSvnGZ_kq6vKMOkov32sWU7h_NPtzY44pO5sk1lXXpjv_HxDkwMOMWwYdUPgWfmL1A2R0a79GgrwA6py4b57zRc2gQS5fRPFghXljX6wKWf6_IdJrhxfWjlfowv5xQwoFwNM2EuxrVT3VVztsVa0iNED2MtnEK9Aq9ctnvzDN9KqtyDb" },
                { name: "Sarah Kovic", role: "OPERATIONS_DIRECTOR", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCONoq5ZuscSILtPKZNJceVDe4iePytscq_1jAv0AwEXIwa9fctQk_nKfc7o_aVAxfeA9K13lxEjH1n34sSGvd410VGqwgTtcTe6BrYig9vRotKUovs1tlpl04Q82tBUhhkwtSCVCg11ffAUviMWQI_cXVi7Mu87aQ798VoI9WirqxKDwIACNExQf0dFZT-5PZ0UzLHaehPbRkFva6KejdyApaUMscWOuyldj5MjkDBn5pJ6xQ7tJh4QDzofJ9o1R8unypsSUn4JFQv" },
                { name: "Elena Rostova", role: "KINETIC_ENG_LEAD", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1xgng-tt87DCHpn77OZh6wbZ1cuwL-5zMxBjMGqJzj9NuEORPwGgYLJF8lHrUl_0VyxFM0VqB6fxusJ88lkgn6_myjQyX0gVBS3wWDvULNcF8MRtuNuNcmbEC19kV20NjPc_ZMApQD_qxG4orEj5-0xBaHVdfltF3uwg2KGdGvaNVQb9GBTrXh6mQKsSdOP028TW7blA_yOFwkC7Bk5tK-kWBTKqGsu548dQBAwFmhZYn6E1w131mE41FWsL0x2RVk3gDiUHrWvEb" }
              ].map((leader, idx) => (
                <div key={idx} className="relative group">
                  <div className="aspect-[4/5] bg-[#1e2022] overflow-hidden border-2 border-[#3b494c] group-hover:border-[#00e5ff] transition-all">
                    <img alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src={leader.img} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h4 className="text-2xl font-['Manrope'] font-extrabold text-white uppercase tracking-tighter mb-1">{leader.name}</h4>
                      <div className="text-[#00e5ff] font-bold text-[10px] tracking-widest uppercase">{leader.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="w-full py-8 px-8 flex flex-col md:flex-row justify-between items-center mt-auto bg-[#0c0e10] border-t-2 border-[#849396]">
            <div className="font-['Inter'] font-medium tracking-widest uppercase text-[10px] text-[#849396] mb-4 md:mb-0">
              © 2024 REXPLORE TECHNOLOGIES. ALL RIGHTS RESERVED.
            </div>
            <div className="flex gap-8">
              <a className="text-[#3b494c] font-medium tracking-widest uppercase text-[10px] hover:text-[#00E5FF] transition-colors" href="#">PRIVACY_PROTOCOL</a>
              <a className="text-[#3b494c] font-medium tracking-widest uppercase text-[10px] hover:text-[#00E5FF] transition-colors" href="#">TERMS_OF_ENGAGEMENT</a>
              <a className="text-[#3b494c] font-medium tracking-widest uppercase text-[10px] hover:text-[#00E5FF] transition-colors" href="#">SECURITY_LAYERS</a>
            </div>
          </footer>
        </main>
      </div>

      {/* Floating Action Button - Mobile Only */}
      <button className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-[#00e5ff] text-[#00363d] rounded-none flex items-center justify-center shadow-lg z-50 transition-all active:scale-90">
        <span className="material-symbols-outlined">bolt</span>
      </button>
    </div>
  );
};

export default CorporateV2Page;
