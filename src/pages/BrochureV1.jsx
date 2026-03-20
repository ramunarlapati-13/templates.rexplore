import React from "react";
import { motion } from "framer-motion";

const BrochureV1Page = () => {
    return (
        <div className="bg-[#121416] text-[#e2e2e5] font-['Inter'] selection:bg-[#c3f5ff] selection:text-[#00363d] min-h-screen">
            <style>{`
                .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                }
                .glass-panel {
                    background: rgba(26, 28, 30, 0.6);
                    backdrop-filter: blur(12px);
                }
                .cyan-glow {
                    box-shadow: 0 0 15px -5px #00e5ff;
                }
                .corner-bracket-tl { border-top: 2px solid #00e5ff; border-left: 2px solid #00e5ff; width: 12px; height: 12px; position: absolute; top: -2px; left: -2px; }
                .corner-bracket-tr { border-top: 2px solid #00e5ff; border-right: 2px solid #00e5ff; width: 12px; height: 12px; position: absolute; top: -2px; right: -2px; }
                .corner-bracket-bl { border-bottom: 2px solid #00e5ff; border-left: 2px solid #00e5ff; width: 12px; height: 12px; position: absolute; bottom: -2px; left: -2px; }
                .corner-bracket-br { border-bottom: 2px solid #00e5ff; border-right: 2px solid #00e5ff; width: 12px; height: 12px; position: absolute; bottom: -2px; right: -2px; }
            `}</style>

            {/* TopNavBar */}
            <nav className="flex justify-between items-center w-full px-6 h-16 bg-[#0c0e10] border-b-2 border-[#849396] fixed top-0 z-50">
                <div className="text-xl font-black tracking-tighter text-[#00E5FF] uppercase font-['Manrope']">
                    REXPLORE TECHNOLOGIES
                </div>
                <div className="hidden md:flex gap-8">
                    <a className="text-[#849396] uppercase tracking-widest text-xs font-bold hover:text-[#c3f5ff] transition-colors" href="#">SYSTEMS</a>
                    <a className="text-[#849396] uppercase tracking-widest text-xs font-bold hover:text-[#c3f5ff] transition-colors" href="#">DATA</a>
                    <a className="text-[#00E5FF] border-b-2 border-[#00E5FF] pb-1 uppercase tracking-widest text-xs font-bold" href="#">ENGINE</a>
                    <a className="text-[#849396] uppercase tracking-widest text-xs font-bold hover:text-[#c3f5ff] transition-colors" href="#">LOGS</a>
                </div>
                <div className="flex items-center gap-4">
                    <button className="material-symbols-outlined text-[#849396] hover:text-[#00E5FF]">settings</button>
                    <button className="material-symbols-outlined text-[#849396] hover:text-[#00E5FF]">notifications</button>
                    <div className="w-8 h-8 border-2 border-[#00E5FF] p-0.5">
                        <img alt="User Operator" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEZGVQFPlFNT5-PP2NgRstHFe1W5zwVLKQB-biO1o1ZejDlTstKqHWg0kAVSD2PZxRhrJ8LGB79xJ2rqGt2dG3g4HitjCzku3ns0UTmIJx4Y3x6cP-qbBLyoZB-xh77HIuNsy5wMKfyiERqbcAZzPrXNDRo17ofxbrT56xWXuDOQIJf7GEcHJL7ZylHJpRZgVIYtHTO6mV17DGveHwwcbyrkmNEdCeCJFqTXEgHVFY0S5Z8HQkCPMqvhxQ46VSaSrN8X8YUMDZCRkk" />
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-[600px] md:h-screen w-full flex items-center justify-center overflow-hidden bg-[#121416] pt-16">
                <div className="absolute inset-0 z-0">
                    <img alt="Industrial Architecture" className="w-full h-full object-cover opacity-40 grayscale scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC3ociGABdqReN63r8RNL2_HOdbCZNyqqjalD_lqyYQWytP968OfRDM5DMO9dFQVplC6oLKyjGwuDSvHUffpnakxVmo89WSzaXMYkxVtyh4LxKwszLo9WtUBH-LZDx942z_2LkEbvJAPMpGUi6j0e1kIxRj5NqXxgkO9N7jrJ6Fo3obtndfgCIRimYBzkHIdlLe2KS2WLxhhKih0h8CLnPJF1LzPAaH0VlbzRNW1Itk7LJUl4KQje-oMI23RcQCRYkp0tH3HPBhEvL" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0c0e10]/20 via-[#121416]/60 to-[#121416]"></div>
                </div>
                <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col md:flex-row items-center justify-between gap-16 py-20">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="w-full md:w-[55%]"
                    >
                        <p className="font-bold uppercase tracking-[0.4em] text-[#00e5ff] text-sm mb-4">PROJECT_ORIGIN: ALPHA_STATION</p>
                        <h1 className="font-['Manrope'] font-extrabold text-4xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tighter leading-[0.85] mb-8">
                            KINETIC<br/>
                            <span className="text-[#00e5ff]">ENGINE_V1</span>
                        </h1>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-[#00e5ff] text-[#00363d] px-8 py-4 font-bold tracking-widest uppercase text-xs active:scale-95 transition-all w-full sm:w-auto">
                                INITIALIZE_SCAN
                            </button>
                            <button className="border-2 border-[#849396] text-[#c3f5ff] px-8 py-4 font-bold tracking-widest uppercase text-xs hover:border-[#00e5ff] transition-all w-full sm:w-auto">
                                VIEW_DATA_SHEET
                            </button>
                        </div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="w-full md:w-1/3 flex flex-col gap-8 border-l-2 border-[#849396] pl-8"
                    >
                        {[
                            { val: "45.8%", label: "Thermal Efficiency Ratio" },
                            { val: "1.2GW", label: "Projected Power Output" },
                            { val: "STABLE", label: "Core Frequency Modulation" }
                        ].map((stat, idx) => (
                            <div key={idx}>
                                <span className="text-[#00e5ff] font-['Manrope'] font-black text-4xl">{stat.val}</span>
                                <p className="uppercase text-xs tracking-widest text-[#849396]">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
                {/* HUD Decorations */}
                <div className="absolute top-24 left-8 pointer-events-none">
                    <div className="text-[10px] font-mono text-[#849396]/40 leading-tight">
                        SYS_BOOT: OK<br/>
                        AUTH_LEVEL: OMNI<br/>
                        COORDS: 40.7128° N, 74.0060° W
                    </div>
                </div>
            </section>

            {/* Features Showcase */}
            <section className="bg-[#121416] py-32 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-16 border-b-2 border-[#849396] pb-8">
                        <h2 className="font-['Manrope'] font-extrabold text-5xl tracking-tighter uppercase">CORE_MODULES</h2>
                        <p className="text-[#849396] text-xs tracking-[0.2em] font-bold">INTEGRATED_SYSTEMS_OVERVIEW</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {/* Large Feature */}
                        <div className="md:col-span-8 group relative aspect-video md:aspect-auto md:h-[500px] overflow-hidden bg-[#1a1c1e] border-l-4 border-[#00e5ff] p-12">
                            <div className="absolute inset-0 z-0 opacity-40 grayscale group-hover:scale-105 transition-transform duration-700">
                                <img alt="Cyber Security" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1jR38l6BFF55MTX0dNKBDmKYfOXLHA-bDn__-CrzWQANyo2bdlyMrKIyAA0XSQD0kVjpHEy_cK9pS5pcIs_KE1_9ZbVeFCa0b5rK2Zs3aa5JG0tNDv4ovlueNRbTZopVLL420VTwlEOK90ywpDgafWT9joqgetKKGksOBc5HHY4SL2Sq2w9fiG7-FRU_9qrsvhyDXILJxV2y_-xFjLM97U4VoLEF32D7XynhiIBJq0LOaCZiPYh0SzFT0EOduXqW0myaoYmY22tgE" />
                            </div>
                            <div className="relative z-10 h-full flex flex-col justify-end">
                                <div className="corner-bracket-tl"></div>
                                <div className="corner-bracket-tr"></div>
                                <div className="corner-bracket-bl"></div>
                                <div className="corner-bracket-br"></div>
                                <div className="glass-panel p-8 cyan-glow border-[#849396]/20 border-2">
                                    <span className="text-[#00e5ff] text-xs tracking-widest font-bold uppercase">SYSTEM_01</span>
                                    <h3 className="font-['Manrope'] font-black text-4xl mb-4 tracking-tighter uppercase">NEURAL_NET_INTERFACE</h3>
                                    <p className="text-[#bac9cc] max-w-lg mb-6 leading-relaxed italic">Advanced synaptic mapping allows for millisecond latency between operator intent and mechanical execution. The Kinetic Engine responds before you even finish the command.</p>
                                    <a className="text-[#00e5ff] text-xs tracking-widest font-bold flex items-center gap-2 group/link uppercase" href="#">
                                        READ_TECHNICAL_WHITE_PAPER 
                                        <span className="material-symbols-outlined group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Vertical Feature */}
                        <div className="md:col-span-4 flex flex-col gap-6">
                            <div className="flex-1 glass-panel border-2 border-[#849396]/20 p-8 flex flex-col justify-between cyan-glow">
                                <span className="material-symbols-outlined text-[#00e5ff] text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>sensors</span>
                                <div>
                                    <h3 className="font-['Manrope'] font-bold text-2xl mb-2 tracking-tight uppercase">OMNI_SENSOR_ARRAY</h3>
                                    <p className="text-xs text-[#bac9cc] tracking-wide uppercase">360_degree spatial awareness and deep-layer scanning protocols.</p>
                                </div>
                            </div>
                            <div className="flex-1 bg-[#1e2022] border-2 border-[#849396] p-8 flex flex-col justify-between group">
                                <span className="material-symbols-outlined text-[#849396] group-hover:text-[#00e5ff] transition-colors text-4xl">memory</span>
                                <div>
                                    <h3 className="font-['Manrope'] font-bold text-2xl mb-2 tracking-tight uppercase">CRYSTAL_CORE</h3>
                                    <p className="text-xs text-[#849396] tracking-wide uppercase">High-density data storage using localized photonic lattice structures.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="bg-[#0c0e10] py-32 border-y-2 border-[#849396] relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-[#849396]/20 z-0"></div>
                <div className="max-w-7xl mx-auto px-8 relative z-10">
                    <div className="text-center mb-24">
                        <p className="uppercase tracking-[0.5em] text-[#849396] text-xs mb-2">MILESTONES</p>
                        <h2 className="font-['Manrope'] font-black text-6xl tracking-tighter uppercase">DEVELOPMENT_PATH</h2>
                    </div>
                    <div className="space-y-24">
                        {[
                            { date: "Q1 2024", title: "CONCEPTUAL_SEEDING", desc: "Initial theoretical modeling and computational simulations of the Kinetic Core architecture.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCobnb962oNcuzk0t3ooyJFEqjJgU2UAzwEXQhVsHiH1eBM68tqE0mJJHVZZt1EB1Jz8Hp68CXuK95SvOlxvbxWU4cyDdHjMcga90thS2vguwXCj-4zuc6OBmvzjnr-JVQMivuFDSjSQkplasdUQQD0Fi1_V8xB7lsZnXkEeKwT8WAgAZvYSsi5dviHNo78b3Mm5KoPeGzPoA8hVY1kSW87Xk-JhSsHmx4LLJ_wWXEbiVRUocR-KZKFP6l2zh3SOqwA8BmYhNSgDSVb", side: "left" },
                            { date: "Q3 2024", title: "KINETIC_ALPHA_PHASE", desc: "Physical assembly of the first prototype chassis. Energy throughput tests exceeded expectations by 14%.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKJjFzTbTQkOUceudSYPI-9lGnxDSXwTbXaiUlRI9GcoiwXwDMynsAJNmme_ZxHdd_e7mON52IlqU5Hi8y-cSuqjAMxEeDl85VwhEvUAdglNo7cs8bSsDK_eBtX0ntWBz0QsPZCneVGA7j_EF0R8Wl8kxR8kUTKp6PrVxD7RAyoSWcp8L0UmjVLKf_P542X1Y6X702fLBIWL4Gp3ubtakfKsLIQfKdzTuNK4Lk1dq9wymOYm-NrdTTg9xb-1YZJye9vdMPbAniDwyI", icon: "bolt", side: "right" },
                            { date: "Q4 2024", title: "GLOBAL_DEPLOYMENT", desc: "Final integration and initialization of the flagship unit. Real-world operational stress testing in progress.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJfKA0pWFUyjGee7HnZLsk9GGyj2_kDeODAkfqtZTI5Ux2Kso17Iokn6WV7XwrEXezo0CUZsOaaYjzE8zUsBaE1qj-eWhGK7dVW8pMnoUUsjY61URefHdy4w2ejcP_HXoGBN4o-5QG3FiQrd_XBoNu6Cyt4IGoCDi3Z9FK3NOiAORTxrznB1wjkqqZTe0wIK4LQGyRl4Y9Rt-dkJWE_2bWGJLnsi_ZJZ2azoCMn6uKLh5n6RokRCA8QDe-rrwT13zwTO1Mowaz37BG", side: "left" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col md:flex-row items-center gap-12 relative">
                                <div className={`flex-1 ${item.side === 'left' ? 'md:text-right' : 'order-last md:order-none'}`}>
                                    <span className="text-[#00e5ff] font-['Manrope'] font-bold text-xl">{item.date}</span>
                                    <h4 className="font-['Manrope'] font-black text-3xl mb-4 tracking-tight uppercase">{item.title}</h4>
                                    <p className={`text-[#bac9cc] max-w-md ${item.side === 'left' ? 'md:ml-auto' : ''}`}>{item.desc}</p>
                                </div>
                                <div className={`w-12 h-12 ${item.icon ? 'bg-[#00e5ff]' : 'bg-[#1e2022] border-2 border-[#00e5ff]'} flex items-center justify-center z-10 relative`}>
                                    {item.icon ? <span className="material-symbols-outlined text-[#00363d]">{item.icon}</span> : <div className="w-4 h-4 bg-[#00e5ff] animate-pulse"></div>}
                                </div>
                                <div className={`flex-1 ${item.side === 'right' ? 'order-last md:order-first' : 'order-last md:order-none'}`}>
                                    <div className="aspect-video bg-[#1e2022] border-2 border-[#849396]/40 grayscale p-1 group overflow-hidden">
                                        <img alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" src={item.img} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Footer */}
            <footer className="w-full py-6 px-8 flex flex-col md:flex-row justify-between items-center bg-[#0c0e10] border-t-2 border-[#849396] relative z-50">
                <div className="tracking-widest uppercase text-[10px] text-[#849396]">
                    © 2024 REXPLORE TECHNOLOGIES. ALL RIGHTS RESERVED.
                </div>
                <div className="flex gap-8 mt-4 md:mt-0">
                    <a className="tracking-widest uppercase text-[10px] text-[#3b494c] hover:text-[#00E5FF] transition-colors" href="#">PRIVACY_PROTOCOL</a>
                    <a className="tracking-widest uppercase text-[10px] text-[#3b494c] hover:text-[#00E5FF] transition-colors" href="#">TERMS_OF_ENGAGEMENT</a>
                    <a className="tracking-widest uppercase text-[10px] text-[#3b494c] hover:text-[#00E5FF] transition-colors" href="#">SECURITY_LAYERS</a>
                </div>
            </footer>
        </div>
    );
};

export default BrochureV1Page;
