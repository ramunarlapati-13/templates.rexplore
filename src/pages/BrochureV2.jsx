import React from "react";
import { motion } from "framer-motion";

const BrochureV2Page = () => {
    return (
        <div className="bg-[#0d0f0b] text-[#e3e3dc] font-['Inter'] selection:bg-[#abd600]/30 selection:text-[#abd600] min-h-screen overflow-x-hidden">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
                
                .notoSerif { font-family: 'Noto Serif', serif; }
                .spaceGrotesk { font-family: 'Space Grotesk', sans-serif; }
                .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
                }
                .text-glow {
                    text-shadow: 0 0 15px rgba(171, 214, 0, 0.4);
                }
            `}</style>

            {/* TopAppBar */}
            <header className="fixed top-0 w-full z-50 bg-[#1e201c]/60 backdrop-blur-xl flex justify-between items-center px-6 md:px-16 h-24 bg-gradient-to-b from-black/40 to-transparent">
                <div className="text-2xl font-bold text-[#abd600] tracking-tighter notoSerif italic">
                    REXPLORE TECHNOLOGIES
                </div>
                <nav className="hidden md:flex items-center space-x-12">
                    <a className="text-[#abd600] border-b-2 border-[#abd600] pb-1 font-bold notoSerif italic tracking-tight" href="#">Eco-Systems</a>
                    <a className="text-[#909288] font-medium hover:text-white transition-colors notoSerif italic tracking-tight" href="#">Timeline</a>
                    <a className="text-[#909288] font-medium hover:text-white transition-colors notoSerif italic tracking-tight" href="#">Biometrics</a>
                    <a className="text-[#909288] font-medium hover:text-white transition-colors notoSerif italic tracking-tight" href="#">Contact</a>
                </nav>
                <div className="flex items-center space-x-6">
                    <button className="p-2 rounded-full hover:bg-[#abd600]/10 transition-all">
                        <span className="material-symbols-outlined text-[#abd600]">account_circle</span>
                    </button>
                    <button className="p-2 rounded-full hover:bg-[#abd600]/10 transition-all">
                        <span className="material-symbols-outlined text-[#abd600]">notifications</span>
                    </button>
                </div>
            </header>

            {/* Main Content Canvas */}
            <main className="pt-32 pb-40 px-6 md:px-16 max-w-screen-2xl mx-auto">
                {/* Hero Section */}
                <section className="mb-32 relative">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="md:col-span-8"
                        >
                            <span className="spaceGrotesk text-[#77dd6a] uppercase tracking-[0.2em] text-xs mb-4 block font-bold">System Designation // 001</span>
                            <h1 className="notoSerif text-4xl md:text-8xl italic tracking-tight leading-[0.9] text-white mb-8 overflow-visible">
                                The Future is <span className="text-[#abd600] text-glow">Bioluminescent</span>.
                            </h1>
                            <p className="max-w-xl text-lg text-[#c6c7bd] font-light leading-relaxed">
                                REXPLORE TECHNOLOGIES merges primordial biological wisdom with crystalline digital architectures. We archive the glow of life through automated neural synthesis.
                            </p>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                            animate={{ opacity: 1, scale: 1, rotate: 3 }}
                            className="md:col-span-4 flex justify-end"
                        >
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-[#abd600]/20 blur-3xl rounded-full group-hover:bg-[#abd600]/30 transition-all duration-700"></div>
                                <div className="relative w-64 h-64 rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:rotate-0">
                                    <img alt="Bioluminescent Forest" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFQ5izYl4PFbLEbyZayJBDNSgavj3YZVbM6NW9c_hPtfjjCeKf37-gmA1TpHUerl8MpjA4nLKPrly-6AcTfHuV0rS-qef35QJJwGeZGSEOwVur5OOa__FqUHw7nro4PNwz7MYwdYHEa4iZbgD27m7QDjuS3_hAzgRSWG2k47DAc2S41U5VJa9C7cZzKZZDXgsoqe7jC5HSCdWlGqucdRRRJ5MLvhnX4mplrHtannc-70D2TkkOLIR5eOFnkdj95WAGGrLFB3WkWgfu" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Core Systems: Bento Grid */}
                <section className="mb-32">
                    <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-4">
                        <h2 className="notoSerif text-4xl italic text-white md:w-auto">Core Systems</h2>
                        <div className="h-px flex-grow mx-8 bg-[#464840]/30 hidden md:block"></div>
                        <span className="spaceGrotesk text-[#77dd6a] text-sm font-bold uppercase tracking-widest">REXPLORE TECHNOLOGIES // FRAMEWORK</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-2 gap-6 h-auto md:h-[600px]">
                        {/* Large Feature Card */}
                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="md:col-span-2 md:row-span-2 bg-[#1a1c18] rounded-xl p-10 relative overflow-hidden group border border-white/5"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#abd600]/5 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-[#abd600]/10 transition-colors"></div>
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <span className="spaceGrotesk text-[#77dd6a] text-xs uppercase tracking-widest mb-4 block font-bold">Module A</span>
                                    <h3 className="notoSerif text-3xl mb-4 italic">Neural Mycelium</h3>
                                    <p className="text-[#c6c7bd] font-light max-w-sm leading-relaxed">Global communication networks modeled after underground fungal architectures. Decentralized, resilient, and inherently organic.</p>
                                </div>
                                <div className="flex items-center gap-4 mt-8 md:mt-0">
                                    <button className="px-6 py-3 rounded-full bg-gradient-to-tr from-[#abd600] to-[#77dd6a] text-[#283500] spaceGrotesk text-sm font-bold shadow-lg shadow-[#abd600]/20 active:scale-95 transition-all">
                                        INITIALIZE
                                    </button>
                                    <span className="spaceGrotesk text-[10px] text-[#909288] font-bold tracking-widest uppercase">STATUS: ACTIVE // STABLE</span>
                                </div>
                            </div>
                        </motion.div>
                        {/* Medium Image Card */}
                        <div className="md:col-span-2 bg-[#292b26] rounded-xl overflow-hidden relative group border border-white/5">
                            <img alt="Cybernetic Pattern" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_RkmXwk9pdHbqGOZjzGQRR7OJqgXiRqU-FePfPxuCzBwcfbekQ7JhhCjmrjm7tj1Hia0zrNpkQPUKur0eYb45t1-M6GIx5DRsaR8slJKnofqAqt7AXsujOwQnsLCx_GEQ0PgIESJ-6mvuPl35n7mtzdBLUYgEyNH37v4N2NXvMzaLCrUDG8H--qZ5LNn3x_Qc4Vx1YcaqfUtl7M7ALIj98I5Mu4q36WXa_WTWBUDkXz0HHXQGDu9YGBTGTSNZrEYPRu0Zuyuurg6f" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#292b26] via-transparent to-transparent"></div>
                            <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                                <h3 className="notoSerif text-2xl italic">Synthetic Photosynthesis</h3>
                            </div>
                        </div>
                        {/* Glassmorphic Cards */}
                        <div className="md:col-span-1 bg-[#333531]/60 backdrop-blur-2xl rounded-xl p-8 flex flex-col justify-center border border-[#abd600]/10 text-center">
                            <span className="material-symbols-outlined text-[#abd600] text-4xl mb-4">fingerprint</span>
                            <div className="spaceGrotesk text-4xl font-bold text-white mb-1">98.4%</div>
                            <div className="spaceGrotesk text-[10px] text-[#77dd6a] tracking-widest uppercase font-bold">Bio-Sync Rate</div>
                        </div>
                        <div className="md:col-span-1 bg-[#333531]/60 backdrop-blur-2xl rounded-xl p-8 flex flex-col justify-center border border-[#abd600]/10 text-center">
                            <span className="material-symbols-outlined text-[#abd600] text-4xl mb-4">eco</span>
                            <div className="spaceGrotesk text-4xl font-bold text-white mb-1">1.2kW</div>
                            <div className="spaceGrotesk text-[10px] text-[#77dd6a] tracking-widest uppercase font-bold">Organic Yield</div>
                        </div>
                    </div>
                </section>

                {/* Timeline */}
                <section className="mb-32">
                    <div className="max-w-4xl mx-auto md:mx-0">
                        <h2 className="notoSerif text-4xl italic text-white mb-16">Archival Timeline</h2>
                        <div className="space-y-24 relative">
                            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#464840]/20 -translate-x-1/2 hidden md:block"></div>
                            
                            {[
                                { era: "ERA 01 // ORIGIN", title: "Digital Spore Dispersion", desc: "The first algorithmic lifeforms were released into the stone-950 void, establishing the foundational REXPLORE TECHNOLOGIES protocol.", icon: "potted_plant", side: "left" },
                                { era: "ERA 02 // GROWTH", title: "Bioluminescent Uplink", desc: "Interfacing biological glowing agents with optical fiber nodes. High-speed data transmission through liquid light channels.", icon: "timeline", side: "right" },
                                { era: "ERA 03 // MATURITY", title: "The Great Integration", desc: "REXPLORE TECHNOLOGIES completes the unification of forest logic and neural processing. A global bio-archive is born.", icon: "fingerprint", side: "left" }
                            ].map((item, idx) => (
                                <div key={idx} className={`relative flex flex-col md:flex-row items-center justify-between gap-12 ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                                    <div className={`md:w-[45%] ${item.side === 'left' ? 'md:text-right' : 'text-left'}`}>
                                        <span className="spaceGrotesk text-[#77dd6a] text-xs mb-2 block font-bold">{item.era}</span>
                                        <h4 className="notoSerif text-2xl italic mb-4">{item.title}</h4>
                                        <p className="text-[#c6c7bd] font-light">{item.desc}</p>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-[#333531] border-4 border-[#abd600] flex items-center justify-center relative z-10 shrink-0 shadow-[0_0_20px_rgba(171,214,0,0.3)]">
                                        <span className="material-symbols-outlined text-[#abd600] text-sm">{item.icon}</span>
                                    </div>
                                    <div className="md:w-[45%] hidden md:block"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="bg-[#1a1c18] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden border border-white/5">
                    <div className="absolute inset-0 opacity-10">
                        <img alt="Mountain Aurora" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL1E49svTf_m-XzqWCGgt73fH77tgrzcyMToawXULSNJ3UHXsODr4w-Reu4GoB02KeZ90Gg-dm402SZdjPGv7fipchsx9OGvqA0NnQrVlyV-yF_Aul-DpgZeNmkq3VKieNF4OmaBgOK_Ri4sjm2SP1b9XsGhTPaR9dJQ-MnGo5GOtSofLZz-4Mq15dA79drbXDkGCHnkl7KnV0e4Jg3rHKGnbjvxWB2mQhkxYLVZJ-N5DEsIErkcRQoNq_2QQgVfEOPR6YzYWKGNKJ" />
                    </div>
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 bg-[#027910] px-4 py-1.5 rounded-full mb-8 border border-white/10">
                            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                            <span className="spaceGrotesk text-[10px] text-white uppercase tracking-widest font-bold">Live Transmission</span>
                        </div>
                        <h2 className="notoSerif text-4xl md:text-6xl italic mb-8 max-w-3xl text-white">Ready to Archive the <span className="text-[#abd600] italic">Infinite</span>?</h2>
                        <button className="bg-gradient-to-tr from-[#abd600] to-[#77dd6a] text-[#283500] px-12 py-5 rounded-2xl spaceGrotesk text-lg font-bold hover:scale-105 active:scale-95 transition-all duration-300">
                            COMMENCE REXPLORE
                        </button>
                        <div className="mt-12 spaceGrotesk text-[10px] text-[#909288] uppercase tracking-widest font-bold">
                            © 2024 REXPLORE TECHNOLOGIES. ALL RIGHTS RESERVED.
                        </div>
                    </div>
                </section>
            </main>

            {/* BottomNavBar (Mobile Only) */}
            <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex justify-around items-center bg-black/70 backdrop-blur-2xl border border-[#abd600]/10 shadow-[0_0_40px_rgba(171,214,0,0.15)] w-[90%] rounded-full px-6 py-3">
                <a className="flex flex-col items-center justify-center bg-gradient-to-tr from-[#abd600] to-[#77dd6a] text-black rounded-full px-5 py-2 scale-110" href="#">
                    <span className="material-symbols-outlined">eco</span>
                    <span className="spaceGrotesk text-[8px] uppercase tracking-tighter font-bold">Eco-Systems</span>
                </a>
                <a className="flex flex-col items-center justify-center text-[#909288] px-4 py-2" href="#">
                    <span className="material-symbols-outlined">timeline</span>
                    <span className="spaceGrotesk text-[8px] uppercase tracking-tighter font-bold">Timeline</span>
                </a>
                <a className="flex flex-col items-center justify-center text-[#909288] px-4 py-2" href="#">
                    <span className="material-symbols-outlined">fingerprint</span>
                    <span className="spaceGrotesk text-[8px] uppercase tracking-tighter font-bold">Biometrics</span>
                </a>
            </nav>
        </div>
    );
};

export default BrochureV2Page;
