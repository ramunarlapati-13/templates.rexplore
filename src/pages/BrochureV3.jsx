import React from "react";
import { motion } from "framer-motion";

const BrochureV3Page = () => {
    return (
        <div className="bg-[#111415] text-[#e2e2e5] font-['Inter'] selection:bg-[#faf600] selection:text-[#333200] min-h-screen overflow-x-hidden">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;600;800&display=swap');
                
                .technical-grid {
                    background-image: radial-gradient(circle, #4c4634 1px, transparent 1px);
                    background-size: 40px 40px;
                    opacity: 0.15;
                }
                .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                }
            `}</style>

            {/* TopNavBar */}
            <nav className="fixed top-0 w-full border-b border-neutral-800 bg-neutral-950 z-50 flex justify-between items-center px-6 py-4">
                <div className="text-2xl font-black tracking-tighter text-yellow-400 font-['Space_Grotesk'] uppercase">
                    REXPLORE TECHNOLOGIES
                </div>
                <div className="hidden md:flex items-center space-x-8 font-['Space_Grotesk'] tracking-tighter uppercase font-bold">
                    <a className="text-yellow-400 border-b-2 border-yellow-400 pb-1" href="#">Portfolio</a>
                    <a className="text-neutral-400 hover:text-white transition-colors" href="#">Timeline</a>
                    <a className="text-neutral-400 hover:text-white transition-colors" href="#">Engineering</a>
                    <a className="text-neutral-400 hover:text-white transition-colors" href="#">Contact</a>
                </div>
                <div className="flex items-center">
                    <button className="material-symbols-outlined text-yellow-400 hover:bg-yellow-400 hover:text-black p-2 transition-all">menu</button>
                </div>
            </nav>

            {/* SideNavBar (Desktop Only) */}
            <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-64 border-r border-neutral-800 bg-neutral-900 flex-col z-40 pt-20 shadow-2xl">
                <div className="px-6 py-8">
                    <h2 className="text-xl font-black text-yellow-400 font-['Space_Grotesk'] tracking-tighter uppercase">REXPLORE</h2>
                    <p className="font-['Space_Grotesk'] text-xs tracking-widest uppercase text-neutral-500 font-bold">INDUSTRIAL KINETICS</p>
                </div>
                <nav className="flex-1 px-4 space-y-2 font-['Space_Grotesk'] text-xs tracking-widest uppercase font-bold">
                    <a className="flex items-center px-4 py-4 bg-yellow-400 text-black shadow-[0_0_20px_rgba(250,246,0,0.2)]" href="#">
                        <span className="material-symbols-outlined mr-3">folder_open</span>
                        Portfolio
                    </a>
                    {[
                        { icon: "timeline", label: "Timeline" },
                        { icon: "precision_manufacturing", label: "Engineering" },
                        { icon: "alternate_email", label: "Contact" }
                    ].map((item, idx) => (
                        <a key={idx} className="flex items-center px-4 py-4 text-neutral-500 hover:text-yellow-400 hover:bg-neutral-800 transition-all" href="#">
                            <span className="material-symbols-outlined mr-3">{item.icon}</span>
                            {item.label}
                        </a>
                    ))}
                </nav>
                <div className="p-6 border-t border-neutral-800">
                    <div className="w-full aspect-square bg-[#282a2c] border border-[#4c4634] flex items-center justify-center overflow-hidden">
                        <img alt="REXPLORE Detail" className="w-full h-full object-cover grayscale opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5BfZp1_s1KDfXAH04K7jurKi7ZHMF3q-WlnawwRs0QNxfVDt-zaR0L7U7Mb68FQ8g-1ymr3zba9bPrNpwUWF1mqZknrMvvfOla2ktgcQbEH0fwBZdTh2fIxhcTIvhpr_qEhrGeYWAjb54esERZsTUiL66V4cwB_-Z4me197-EJYhOIXZsgpVWz5OyNBP2DKAoRih7RBth6GDjhhKupLJOtAeZ_IVBN-E4ITF5_WKLjs8yiBOqaIfZYqn7tk7ro32capc2V3Ovll6s" />
                    </div>
                </div>
            </aside>

            <main className="lg:ml-64 pt-16">
                {/* Hero Section */}
                <section className="relative min-h-[600px] md:h-[921px] flex items-end px-6 md:px-12 pb-24 overflow-hidden border-b border-neutral-800">
                    <div className="absolute inset-0 technical-grid pointer-events-none"></div>
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-0 right-0 w-[800px] h-[800px] border border-[#98907a] opacity-10 rotate-12 -translate-y-1/2 translate-x-1/4"></div>
                        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] border border-[#98907a] opacity-05 -rotate-45 translate-y-1/2 -translate-x-1/4"></div>
                    </div>
                    <div className="relative z-10 w-full grid grid-cols-12 gap-4">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="col-span-12 lg:col-span-10"
                        >
                            <span className="block font-bold text-sm tracking-[0.3em] uppercase text-[#faf600] mb-4">EST. 1984 // KINETIC FRAMEWORK</span>
                            <h1 className="font-['Space_Grotesk'] text-[clamp(3.5rem,10vw,8rem)] leading-[0.85] font-black uppercase tracking-tighter text-white mb-8">
                                REXPLORE<br/>TECHNOLOGIES
                            </h1>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="col-span-12 lg:col-span-5 lg:col-start-7"
                        >
                            <p className="text-lg text-[#cfc6ae] mb-10 border-l-2 border-[#faf600] pl-6 font-medium italic">
                                Engineering industrial-grade digital architectures. Our kinetic blueprints prioritize precision, high-density data visualization, and absolute structural integrity.
                            </p>
                            <button className="bg-[#faf600] text-[#333200] px-12 py-5 font-black uppercase tracking-widest hover:bg-white active:scale-95 transition-all shadow-[0_10px_30px_rgba(250,246,0,0.3)]">
                                EXECUTE PROTOCOL
                            </button>
                        </motion.div>
                    </div>
                </section>

                {/* Modular Systems Grid */}
                <section className="px-6 md:px-12 py-32 bg-[#1a1c1e] border-b border-neutral-800">
                    <div className="mb-20">
                        <span className="font-bold text-xs tracking-[0.3em] text-neutral-500 uppercase">SECTION 02 // SYSTEMS ARCHITECTURE</span>
                        <h2 className="font-['Space_Grotesk'] text-5xl font-black uppercase tracking-tighter mt-4">KINETIC MODULES</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-neutral-800">
                        {[
                            { id: "M-01", icon: "precision_manufacturing", title: "ADVANCED ROBOTICS", desc: "Precision-engineered mechanical systems designed for REXPLORE TECHNOLOGIES high-frequency environments." },
                            { id: "M-02", icon: "terminal", title: "CORE COMPILER", desc: "Optimized low-level logic architectures providing a stable foundation for REXPLORE TECHNOLOGIES digital assets." },
                            { id: "M-03", icon: "hub", title: "NEURAL NETWORKS", desc: "Distributed cognitive processing modules integrated directly into the REXPLORE TECHNOLOGIES kinetic framework." }
                        ].map((module, idx) => (
                            <div key={idx} className={`p-10 bg-[#111415] group hover:bg-[#1e2022] transition-all cursor-default ${idx < 2 ? 'md:border-r border-neutral-800' : ''} ${idx < 1 ? 'border-b md:border-b-0' : ''}`}>
                                <div className="flex justify-between items-start mb-20">
                                    <span className="font-black text-xs text-[#faf600]">{module.id}</span>
                                    <span className="material-symbols-outlined text-5xl text-neutral-700 group-hover:text-[#faf600] transition-colors">{module.icon}</span>
                                </div>
                                <h3 className="font-['Space_Grotesk'] text-2xl font-black uppercase mb-4 text-[#ffeebb] tracking-tight">{module.title}</h3>
                                <p className="text-[#cfc6ae] text-sm leading-relaxed mb-10 font-medium">
                                    {module.desc}
                                </p>
                                <div className="h-1 w-12 bg-neutral-800 group-hover:w-full group-hover:bg-[#faf600] transition-all duration-700"></div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Project Timeline */}
                <section className="px-6 md:px-12 py-32 bg-[#111415]">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                        <div>
                            <span className="font-bold text-xs tracking-[0.3em] text-neutral-500 uppercase">SECTION 03 // TEMPORAL LOGS</span>
                            <h2 className="font-['Space_Grotesk'] text-5xl font-black uppercase tracking-tighter mt-4">PROJECT TIMELINE</h2>
                        </div>
                        <div className="text-right font-['Space_Grotesk'] font-bold text-xs tracking-widest uppercase italic">
                            <p className="text-neutral-500 mb-1">ACTIVE STATUS: <span className="text-green-500">NOMINAL</span></p>
                            <p className="text-[#faf600]">LOCATION: HELVETIA DISTRICT</p>
                        </div>
                    </div>
                    <div className="border border-neutral-800 divide-y divide-neutral-800">
                        {[
                            { year: "1984", title: "FOUNDATION PROTOCOL", desc: "Establishment of REXPLORE TECHNOLOGIES main research facility in Zurich industrial sector.", status: "STABLE", color: "neutral" },
                            { year: "2008", title: "KINETIC INTEGRATION", desc: "Migration of core logic systems to modular kinetic framework for REXPLORE TECHNOLOGIES assets.", status: "MIGRATED", color: "neutral" },
                            { year: "2024", title: "SHOWCASE DEPLOYMENT", desc: "Public unveiling of REXPLORE TECHNOLOGIES kinetic blueprint in the Helvetia district.", status: "ACTIVE NOW", color: "yellow" }
                        ].map((row, idx) => (
                            <div key={idx} className="grid grid-cols-12 bg-transparent hover:bg-white/5 transition-colors group">
                                <div className="col-span-12 md:col-span-2 p-8 border-b md:border-b-0 md:border-r border-neutral-800 flex items-center">
                                    <span className={`font-['Space_Grotesk'] text-6xl font-black ${row.color === 'yellow' ? 'text-yellow-400' : 'text-neutral-800 group-hover:text-neutral-600'}`}>
                                        {row.year}
                                    </span>
                                </div>
                                <div className="col-span-12 md:col-span-7 p-8 border-b md:border-b-0 md:border-r border-neutral-800">
                                    <h4 className="font-['Space_Grotesk'] text-xl font-bold uppercase mb-2 text-white">{row.title}</h4>
                                    <p className="text-xs text-[#cfc6ae] uppercase tracking-widest font-bold leading-relaxed">{row.desc}</p>
                                </div>
                                <div className="col-span-12 md:col-span-3 p-8 flex items-center justify-end">
                                    <span className={`px-4 py-2 text-[10px] font-black tracking-widest uppercase ${row.color === 'yellow' ? 'bg-yellow-400 text-black' : 'bg-neutral-800 text-neutral-400'}`}>
                                        {row.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Asymmetric Feature */}
                <section className="px-6 md:px-12 py-32 bg-[#0c0e10] overflow-hidden">
                    <div className="grid grid-cols-12 gap-12 items-center">
                        <div className="col-span-12 lg:col-span-7 h-[600px] border border-neutral-800 relative overflow-hidden group">
                            <img alt="Industrial Detail" className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlp_xVpTimE1Z7fscmWW-v78NA6R5v5uJxzCIkiOJlTts7XoVa6T-Bb_Ye_6EuOecIxaoVNLGbUmKntj_KSNCPN-maZZO57coBME34lAhiCzEA7kzY24wLYhH2gnAw5o0zspTjjwiVf-7mfNvP06wH08ecKiood_4cD6-q3VIfb8X6p0mLu22WFgCL52uYZMV88qEPrunJ-eijHKh9x8GVIdtCXb2_zWu1GlfP6oV4AHLkIc6bqJFI-RKqz5HEpEYUdlW8-V4HAtdo" />
                            <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
                            <div className="absolute top-8 right-8 bg-yellow-400 text-black p-8 max-w-xs shadow-2xl skew-x-[-2deg]">
                                <h5 className="font-['Space_Grotesk'] text-xl font-black uppercase mb-3">HARDWARE LAYER</h5>
                                <p className="text-xs uppercase tracking-tight font-bold">Direct sensor integration for real-time REXPLORE TECHNOLOGIES monitoring.</p>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-5 flex flex-col justify-center">
                            <span className="font-black text-sm text-[#faf600] tracking-[0.3em] uppercase mb-6">DATA DENSITY PROTOCOL</span>
                            <h2 className="font-['Space_Grotesk'] text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9] text-white">
                                INFORMATION OVERLOAD AS A FEATURE
                            </h2>
                            <p className="text-[#cfc6ae] mb-12 leading-relaxed text-lg font-medium italic">
                                In the REXPLORE TECHNOLOGIES ecosystem, we reject the minimal to embrace the meaningful. Every pixel serves a purpose, every layout is a calculation. Our interfaces are designed for the high-octane operator.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="border border-neutral-800 p-6 bg-[#111415]">
                                    <span className="block font-['Space_Grotesk'] text-4xl font-black text-[#faf600]">0.02ms</span>
                                    <span className="text-[10px] text-neutral-500 uppercase font-black tracking-widest mt-1 block">Latency Target</span>
                                </div>
                                <div className="border border-neutral-800 p-6 bg-[#111415]">
                                    <span className="block font-['Space_Grotesk'] text-4xl font-black text-[#faf600]">99.9%</span>
                                    <span className="text-[10px] text-neutral-500 uppercase font-black tracking-widest mt-1 block">Uptime Metric</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="w-full border-t border-neutral-800 bg-neutral-950 flex flex-col md:flex-row justify-between items-center px-6 py-12 gap-8 relative z-50">
                    <div className="flex flex-col gap-2">
                        <span className="text-yellow-400 font-black font-['Space_Grotesk'] text-xl tracking-tighter uppercase">REXPLORE TECHNOLOGIES</span>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-600 font-bold">© 2024 REXPLORE TECHNOLOGIES // KINETIC BLUEPRINT</span>
                    </div>
                    <div className="flex gap-10 text-[10px] uppercase tracking-widest font-black text-neutral-600">
                        <a className="hover:text-yellow-400 transition-colors" href="#">Terms</a>
                        <a className="hover:text-yellow-400 transition-colors" href="#">Privacy</a>
                        <a className="hover:text-yellow-400 transition-colors" href="#">Status</a>
                    </div>
                    <div className="text-[11px] font-['Space_Grotesk'] text-[#faf600] tracking-widest font-black flex items-center gap-3 uppercase italic">
                        <span className="w-3 h-3 rounded-full bg-[#faf600] animate-pulse shadow-[0_0_10px_rgba(250,246,0,0.5)]"></span>
                        SYSTEMS OPERATIONAL
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default BrochureV3Page;
