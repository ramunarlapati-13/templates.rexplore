import React from "react";
import { motion } from "framer-motion";

const CorporateV1Page = () => {
    return (
        <div className="bg-[#121416] text-[#e2e2e5] font-['Inter'] selection:bg-[#00e5ff] selection:text-[#00363d] min-h-screen">
            {/* Custom Styles for brackets and glass */}
            <style>{`
                .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                }
                .corner-bracket-tl { border-top: 2px solid #00E5FF; border-left: 2px solid #00E5FF; width: 12px; height: 12px; position: absolute; top: 0; left: 0; }
                .corner-bracket-tr { border-top: 2px solid #00E5FF; border-right: 2px solid #00E5FF; width: 12px; height: 12px; position: absolute; top: 0; right: 0; }
                .corner-bracket-bl { border-bottom: 2px solid #00E5FF; border-left: 2px solid #00E5FF; width: 12px; height: 12px; position: absolute; bottom: 0; left: 0; }
                .corner-bracket-br { border-bottom: 2px solid #00E5FF; border-right: 2px solid #00E5FF; width: 12px; height: 12px; position: absolute; bottom: 0; right: 0; }
                .glass-panel { background: rgba(26, 28, 30, 0.6); backdrop-filter: blur(12px); }
                
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee-fast {
                    animation: marquee 15s linear infinite;
                }
            `}</style>

            {/* Top Navigation */}
            <nav className="bg-[#0c0e10] flex justify-between items-center w-full px-6 h-16 border-b-2 border-[#849396] sticky top-0 z-50">
                <div className="text-xl font-black tracking-tighter text-[#00E5FF] uppercase font-['Manrope']">
                    ARCHI-CORE
                </div>
                <div className="hidden md:flex items-center gap-8">
                    <a className="text-[#00E5FF] border-b-2 border-[#00E5FF] pb-1 font-['Manrope'] font-bold tracking-tighter uppercase text-sm" href="#">CAPABILITIES</a>
                    <a className="text-[#849396] uppercase tracking-widest text-xs font-['Inter'] hover:text-[#c3f5ff] transition-colors" href="#">PROJECTS</a>
                    <a className="text-[#849396] uppercase tracking-widest text-xs font-['Inter'] hover:text-[#c3f5ff] transition-colors" href="#">NETWORK</a>
                    <a className="text-[#849396] uppercase tracking-widest text-xs font-['Inter'] hover:text-[#c3f5ff] transition-colors" href="#">REPORTS</a>
                </div>
                <div className="flex items-center gap-4">
                    <button className="text-[#849396] hover:text-[#00E5FF]"><span className="material-symbols-outlined">settings</span></button>
                    <button className="text-[#849396] hover:text-[#00E5FF]"><span className="material-symbols-outlined">notifications</span></button>
                    <div className="w-8 h-8 bg-[#333537] flex items-center justify-center overflow-hidden border border-[#849396]/30">
                        <img 
                            alt="Operator" 
                            className="w-full h-full object-cover" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsMzt-82yz8IX1sW2nC-snGaE581Gli-SsWMySCDmqsz_8THTIxck0KmONmJEvSpHpyM98SKwOP4oxmtyRNOhZVf7oxRzDF6yK46xXa6yB6xMYHSrahaIlv5DVfhdoQRI6wgxanXelpO8wz6NM2ucIM1D2p0pdCrMyr2n34COlq-45uIL8I2-8eKU1CZ6vAh8HtAZpWU9w-YVf_3oRd2WE-Mab6bNfBNQTwdjUwBZRpAqMasjW0Y67kGwPjyxeKsTyFdUsKTYX9uIR" 
                        />
                    </div>
                </div>
            </nav>

            <div className="flex">
                {/* Side Navigation */}
                <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-20 hover:w-64 transition-all duration-300 group bg-[#121416] border-r-2 border-[#849396] z-40 flex flex-col overflow-hidden">
                    <div className="p-4 border-b-2 border-[#3b494c]">
                        <div className="flex items-center gap-4">
                            <div className="min-w-[40px] h-10 border-2 border-[#00e5ff] p-1">
                                <div className="w-full h-full bg-[#00e5ff]/20 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-[#00e5ff]">deployed_code</span>
                                </div>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                <div className="text-lg font-black text-[#00E5FF] font-['Manrope']">PORTAL</div>
                                <div className="text-[10px] font-bold text-[#849396]">v2.4.0_STABLE</div>
                            </div>
                        </div>
                    </div>
                    <nav className="flex-1 py-4">
                        {[
                            { icon: "terminal", label: "TERMINAL" },
                            { icon: "altitude", label: "TRAJECTORY" },
                            { icon: "sensors", label: "TELEMETRY" },
                            { icon: "memory", label: "INFRASTRUCTURE" },
                            { icon: "hub", label: "NODE_MGMT" }
                        ].map((item, idx) => (
                            <a key={idx} href="#" className="flex items-center gap-6 px-6 py-4 text-[#849396] hover:bg-[#1e2022] hover:text-[#00E5FF] transition-all">
                                <span className="material-symbols-outlined">{item.icon}</span>
                                <span className="font-bold tracking-widest text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{item.label}</span>
                            </a>
                        ))}
                    </nav>
                    <div className="p-4 mt-auto border-t-2 border-[#3b494c] space-y-2">
                        <button className="w-12 h-12 group-hover:w-full bg-[#00e5ff] text-[#00363d] flex items-center justify-center font-bold tracking-widest text-xs transition-all">
                            <span className="material-symbols-outlined group-hover:mr-2">bolt</span>
                            <span className="hidden group-hover:inline">START_INIT</span>
                        </button>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="ml-20 flex-1 min-h-screen">
                    {/* Hero Section */}
                    <section className="relative h-[800px] flex items-center px-12 border-b-2 border-[#849396] overflow-hidden">
                        <div className="absolute inset-0 z-0">
                            <img alt="Industrial" className="w-full h-full object-cover opacity-30" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT9ath4OZOxYa5A3Z78KbLZU8Gel4IDwuxAQspmsQeWeY7N2_fiOeEpSH3oLq-Vb-VBcNXg2LzT36wFdXann3_3-EEx6Nc1QoR2FkmiBxb1pTPqv657qMkLlOXNJjSVaH5nZNqroj6Q-rrC0PrAW9oL990W5mc6EzuW3k5VU9Y5jJ8K5kVNfN9i0t270l3GDR_LIgFBYbU63Hck1KmX3W_SRGLeSQpHMkNSqScBQTEavoy_PaBZY5oQlyWsppkp6rYOILSpd6xAVRr" />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#121416] via-transparent to-transparent"></div>
                        </div>

                        <div className="relative z-10 max-w-4xl">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }} 
                                animate={{ opacity: 1, x: 0 }} 
                                className="inline-block px-3 py-1 bg-[#00e5ff] text-[#00363d] font-bold tracking-widest text-[10px] uppercase mb-8"
                            >
                                KINETIC_BLUEPRINT_ACTV
                            </motion.div>
                            <motion.h1 
                                initial={{ opacity: 0, y: 30 }} 
                                animate={{ opacity: 1, y: 0 }} 
                                className="text-7xl md:text-9xl font-['Manrope'] font-black tracking-tighter leading-[0.85] mb-12 uppercase"
                            >
                                Structural <br /> Stability <br /> <span className="text-[#00e5ff]">Globalized.</span>
                            </motion.h1>
                            
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }} 
                                animate={{ opacity: 1, scale: 1 }} 
                                transition={{ delay: 0.3 }}
                                className="glass-panel border-l-4 border-[#00e5ff] p-10 max-w-2xl relative"
                            >
                                <div className="corner-bracket-tr"></div>
                                <div className="corner-bracket-bl"></div>
                                <p className="text-xl text-[#bac9cc] leading-relaxed mb-8 font-medium italic">
                                    "Redefining industrial foundations through hyper-precise engineering and scalable digital architecture."
                                </p>
                                <div className="flex gap-6">
                                    <button className="bg-[#00e5ff] text-[#00363d] px-10 py-5 font-bold tracking-widest uppercase text-xs hover:scale-105 transition-all">DOWNLOAD_SPEC</button>
                                    <button className="border-2 border-[#849396] px-10 py-5 font-bold tracking-widest uppercase text-xs hover:border-[#00e5ff] transition-all">VIEW_INFRA</button>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Partner Marquee */}
                    <div className="bg-[#0c0e10] border-b-2 border-[#849396] py-8 overflow-hidden">
                        <div className="flex animate-marquee-fast gap-20 items-center whitespace-nowrap px-10">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="flex items-center gap-4 text-[#3b494c] grayscale hover:grayscale-0 transition-all cursor-pointer">
                                    <span className="material-symbols-outlined text-4xl">architecture</span>
                                    <span className="font-['Manrope'] font-black text-2xl tracking-tighter">PARTNER_NODE_0{i}</span>
                                </div>
                            ))}
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i+6} className="flex items-center gap-4 text-[#3b494c] grayscale hover:grayscale-0 transition-all cursor-pointer">
                                    <span className="material-symbols-outlined text-4xl">architecture</span>
                                    <span className="font-['Manrope'] font-black text-2xl tracking-tighter">PARTNER_NODE_0{i}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Capabilities Grid */}
                    <section className="py-32 px-12 bg-[#121416]">
                        <div className="flex justify-between items-end mb-20">
                            <h2 className="text-5xl font-['Manrope'] font-black tracking-tighter uppercase">Operational_Core</h2>
                            <span className="text-[#849396] font-mono text-sm tracking-widest">SEQ_A_9942</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-[#849396]">
                            {[
                                { title: "Heavy Framing", icon: "architecture", desc: "Reinforced structural foundations for extreme industrial workloads." },
                                { title: "Nexus Routing", icon: "hub", desc: "Automated logistics pathing through neural-link infrastructure." },
                                { title: "Cryo Cooling", icon: "ac_unit", desc: "Zero-latency thermal management for high-density compute clusters." }
                            ].map((cap, idx) => (
                                <div key={idx} className={`p-10 group hover:bg-[#1e2022] transition-colors ${idx !== 0 ? "md:border-l-2 md:border-[#849396]" : ""}`}>
                                    <div className="text-[#00e5ff] mb-8 scale-125 origin-left">
                                        <span className="material-symbols-outlined text-5xl">{cap.icon}</span>
                                    </div>
                                    <h3 className="text-2xl font-['Manrope'] font-black uppercase mb-4">{cap.title}</h3>
                                    <p className="text-[#849396] leading-relaxed mb-10">{cap.desc}</p>
                                    <div className="text-[10px] font-bold tracking-widest text-[#3b494c] group-hover:text-[#00e5ff]">ACTV_08</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="p-10 bg-[#0c0e10] border-t-2 border-[#849396] flex flex-col md:flex-row justify-between items-center text-[10px] font-bold tracking-[0.3em] text-[#3b494c]">
                        <div className="mb-4 md:mb-0">© 2024 ARCHI-CORE GLOBAL SYSTEMS. ALL RIGHTS RESERVED.</div>
                        <div className="flex gap-10">
                            <a href="#" className="hover:text-[#00e5ff]">PRIVACY</a>
                            <a href="#" className="hover:text-[#00e5ff]">TERMS</a>
                            <a href="#" className="hover:text-[#00e5ff]">LEGAL</a>
                        </div>
                    </footer>
                </main>
            </div>
        </div>
    );
};

export default CorporateV1Page;
