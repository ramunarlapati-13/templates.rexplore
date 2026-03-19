import React from "react";
import { motion } from "framer-motion";

const CatalogV3Page = () => {
    return (
        <div className="bg-[#131312] text-[#e5e2e0] font-['Manrope'] selection:bg-[#ffc191] selection:text-[#4d2600] min-h-screen">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;500;700;800&display=swap');
                
                .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                    vertical-align: middle;
                }
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #1c1c1b;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #decd99;
                }
            `}</style>

            {/* Top Navigation */}
            <nav className="bg-[#131312] border-b-4 border-[#c2b280] flex justify-between items-center w-full px-8 h-[5.5rem] sticky top-0 z-50">
                <div className="text-2xl font-black tracking-tighter text-[#c2b280]">REXPLORE</div>
                <div className="hidden md:flex gap-12 items-center h-full">
                    {["PORTFOLIO", "TIMELINE"].map(link => (
                        <a key={link} className="font-['Manrope'] font-black uppercase tracking-tighter text-[#c2b280] opacity-80 hover:bg-[#c2b280] hover:text-[#131312] transition-colors duration-100 px-4 h-full flex items-center" href="#">{link}</a>
                    ))}
                    <a className="font-['Manrope'] font-black uppercase tracking-tighter text-[#ff9a3c] border-l-4 border-[#ff9a3c] pl-4 h-full flex items-center" href="#">SPECS</a>
                    <a className="font-['Manrope'] font-black uppercase tracking-tighter text-[#c2b280] opacity-80 hover:bg-[#c2b280] hover:text-[#131312] transition-colors duration-100 px-4 h-full flex items-center" href="#">CONTACT</a>
                </div>
                <button className="bg-[#decd99] text-[#3a3009] font-black px-8 py-3 tracking-tighter hover:scale-95 transition-transform duration-75 border-b-4 border-[#c2b280]">
                    INQUIRE
                </button>
            </nav>

            {/* Main Content Layout */}
            <div className="flex flex-col md:flex-row min-h-screen">
                {/* Sidebar Filter */}
                <aside className="w-full md:w-80 bg-[#1c1c1b] p-8 md:sticky md:top-[5.5rem] md:h-[calc(100vh-5.5rem)] overflow-y-auto custom-scrollbar border-r border-white/5">
                    <div className="mb-12">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="w-3 h-3 bg-[#ffc191] animate-pulse"></span>
                            <h2 className="text-[#decd99] font-black uppercase tracking-widest text-sm">Deployment Filters</h2>
                        </div>
                        
                        {/* Facet: Category */}
                        <div className="mb-10">
                            <label className="block text-[#decd99] font-bold text-xs tracking-[0.2em] uppercase mb-4">Category</label>
                            <div className="space-y-3">
                                {["Tactical Gear", "Navigation Modules", "Field Diagnostics"].map((cat, i) => (
                                    <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                        <input defaultChecked={i===0} className="w-5 h-5 bg-[#131312] border-2 border-[#969083] focus:ring-0 accent-[#ffc191]" type="checkbox" />
                                        <span className="text-[#cdc6b7] font-medium text-sm group-hover:text-[#decd99] transition-colors">{cat}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Facet: Material */}
                        <div className="mb-10">
                            <label className="block text-[#decd99] font-bold text-xs tracking-[0.2em] uppercase mb-4">Material Grade</label>
                            <div className="space-y-3">
                                {["Aeronautical Carbon", "Reinforced Titanium", "Ballistic Polymer"].map((mat, i) => (
                                    <label key={mat} className="flex items-center gap-3 cursor-pointer group">
                                        <input defaultChecked={i===1} className="w-5 h-5 bg-[#131312] border-2 border-[#969083] focus:ring-0 accent-[#ffc191]" name="material" type="radio" />
                                        <span className="text-[#cdc6b7] font-medium text-sm group-hover:text-[#decd99] transition-colors">{mat}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Facet: Scale */}
                        <div className="mb-10">
                            <label className="block text-[#decd99] font-bold text-xs tracking-[0.2em] uppercase mb-4">Operational Scale</label>
                            <div className="relative">
                                <select className="w-full bg-[#131312] border-2 border-[#969083] text-[#e5e2e0] py-3 px-4 focus:border-[#ffc191] outline-none appearance-none font-bold text-sm tracking-tighter">
                                    <option>Individual (1:1)</option>
                                    <option>Squad (1:5)</option>
                                    <option>Platoon (1:20)</option>
                                    <option>Theatre (Global)</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#decd99]">
                                    <span className="material-symbols-outlined text-sm">expand_more</span>
                                </div>
                            </div>
                        </div>

                        <button className="w-full bg-[#3b4f16] text-[#a8c17b] font-black py-4 tracking-widest text-xs uppercase hover:bg-[#b6d088] hover:text-[#233600] transition-colors">
                            Reset Modules
                        </button>
                    </div>

                    {/* Status HUD Component */}
                    <div className="bg-[#353533] p-5 mt-auto border border-white/5">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] text-[#ffc191] font-black uppercase">System Health</span>
                            <span className="w-2 h-2 rounded-full bg-[#ffc191] shadow-[0_0_8px_#ff9a3c]"></span>
                        </div>
                        <div className="h-1.5 w-full bg-[#1c1c1b]">
                            <div className="h-full w-[88%] bg-[#ffc191]"></div>
                        </div>
                        <p className="text-[10px] text-[#969083] mt-3 font-mono">LAT: 25.0443° N / LON: 121.5090° E</p>
                    </div>
                </aside>

                {/* Product Grid */}
                <main className="flex-1 p-8 md:p-16">
                    <header className="mb-16">
                        <div className="flex items-baseline gap-4 mb-4">
                            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase text-[#decd99] leading-none">Catalog</h1>
                            <span className="text-[#ffc191] font-black text-xl">[024]</span>
                        </div>
                        <p className="text-[#cdc6b7] max-w-2xl text-lg leading-relaxed">
                            Precision-engineered assets for extreme environments. Every unit is calibrated for peak performance under tactical stress.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8">
                        {/* Product Card 1 */}
                        <div className="group relative bg-[#20201f] overflow-hidden border border-white/5">
                            <div className="aspect-square relative overflow-hidden bg-[#2a2a29]">
                                <img alt="Tactical Red Footwear" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8nuoRcLjLVy6Xl5kDg_NhJIZlz44uwzxNkbb-YFCXo4HisjoDpNNEEyeOM-GCqfYfkAMOpFtcVgdeClD5vPBfyZ8vgeE_9bb6piAXoOV0FhQK3VM25vF3dgWnj0vvsjC3RLyW0OUEYTTbWqF5xtzPeX4us56Qo1nw6YMm8MnepDQQKA4dDORNIVm-2snKZ4SqExnXZJDTMT5E8kMLVmx1N11H0JWVVBPIJmftGVQq5VJ10_dztdTGq22xl1gHn3Nj9UWiSajRpLNm" />
                                {/* Hover Specs Overlay */}
                                <div className="absolute inset-0 bg-[#131312]/95 p-8 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                                    <h4 className="text-[#ffc191] font-black text-xs tracking-[0.3em] uppercase mb-6">Technical Specs</h4>
                                    <div className="space-y-4 border-l-2 border-[#4b463b] pl-6">
                                        {[
                                            { label: "Weight", val: "0.82 KG" },
                                            { label: "Resist", val: "9.5 ATM" },
                                            { label: "Thread", val: "Kevlar-Reinforced" }
                                        ].map(spec => (
                                            <div key={spec.label} className="flex justify-between">
                                                <span className="text-[#969083] text-xs uppercase font-bold">{spec.label}</span>
                                                <span className="text-[#e5e2e0] text-xs font-black">{spec.val}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="mt-8 bg-[#decd99] text-[#3a3009] font-black py-4 uppercase text-xs tracking-[0.2em] border-b-4 border-[#c2b280] hover:bg-white transition-colors">
                                        Configuration Matrix
                                    </button>
                                </div>
                            </div>
                            <div className="p-8 border-t-4 border-[#3b4f16] group-hover:border-[#ff9a3c] transition-colors">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="font-black text-2xl tracking-tighter uppercase text-[#e5e2e0]">VANGUARD X-1</h3>
                                    <span className="bg-[#ffc191] text-[#4d2600] text-[10px] font-black px-3 py-1">NEW OPS</span>
                                </div>
                                <p className="text-[#969083] text-xs uppercase font-bold tracking-widest">Footwear / Support Module</p>
                            </div>
                        </div>

                        {/* Product Card 2 */}
                        <div className="group relative bg-[#20201f] overflow-hidden border border-white/5">
                            <div className="aspect-square relative overflow-hidden bg-[#2a2a29]">
                                <img alt="Advanced Chronometer" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR2NHPjmtrd6aKtdAz4oPFynGKTAKlqawCT3oC6opXnNqQJD9xsZj--T6z08OMv3XrppUIFP1HG-nkZ9a2FD94L1ofechjJg9nLFf_pMAv1acqmTx6vpS_OyLIyDx-5_6_izY5H9sESKkD1HLiF7_NYp6NvhpwQVa9Ya_xSbvMnLgJyL9w2yq51j4gUeAf567JViEt-0O5r2_VIkU2SywPM7fTPN-DWFMQd0O_4R_wnLddPeVlcZj_1mJbz25kP4h7vpmGiVKxeEJ9" />
                                <div className="absolute inset-0 bg-[#131312]/95 p-8 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                                    <h4 className="text-[#ffc191] font-black text-xs tracking-[0.3em] uppercase mb-6">Technical Specs</h4>
                                    <div className="space-y-4 border-l-2 border-[#4b463b] pl-6">
                                        {[
                                            { label: "Range", val: "50 KM (UHF)" },
                                            { label: "Accuracy", val: "+/- 0.001s" },
                                            { label: "Uptime", val: "720 HRS" }
                                        ].map(spec => (
                                            <div key={spec.label} className="flex justify-between">
                                                <span className="text-[#969083] text-xs uppercase font-bold">{spec.label}</span>
                                                <span className="text-[#e5e2e0] text-xs font-black">{spec.val}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="mt-8 bg-[#decd99] text-[#3a3009] font-black py-4 uppercase text-xs tracking-[0.2em] border-b-4 border-[#c2b280] hover:bg-white transition-colors">
                                        View Schematic
                                    </button>
                                </div>
                            </div>
                            <div className="p-8 border-t-4 border-[#3b4f16] group-hover:border-[#ff9a3c] transition-colors">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="font-black text-2xl tracking-tighter uppercase text-[#e5e2e0]">CHRONOS DELTA</h3>
                                    <span className="bg-[#969083] text-[#131312] text-[10px] font-black px-3 py-1">IN STOCK</span>
                                </div>
                                <p className="text-[#969083] text-xs uppercase font-bold tracking-widest">Diagnostics / Temporal Unit</p>
                            </div>
                        </div>

                        {/* Product Card 3 (Bento-style tall) */}
                        <div className="group relative bg-[#20201f] overflow-hidden lg:row-span-2 border border-white/5">
                            <div className="h-full min-h-[600px] relative overflow-hidden bg-[#2a2a29]">
                                <img alt="Tactical Backpack" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEIIPdJaeI8VMJz7e56hUQNGz5cSBW2r_1GodDFCQZfP489sHpqQRJmhiTxd2obmKY7M5CQfGZPCBsajGBdMctMPozxqvQ5x_rXOJ3d8WapWCwYWLJxt8jLRcgQktILiut9ptMoKZdDvCq2J2ODxTci_F1mcI0ShVSOhnYYCVHy8xZzGcnSEWY0cRtUootmfNn5kM2ooPWXXVd8YGh1P0yQL2rjJyOJL2tOMYstxH2Mzr4m7XTFV_PYid7OMVfh3FuY4PoQpPU0P3T" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#131312] via-[#131312]/40 to-transparent p-10 flex flex-col justify-end">
                                    <div className="bg-[#ffc191] w-fit px-4 py-1.5 mb-6">
                                        <span className="text-[#4d2600] font-black text-xs uppercase tracking-widest">Special Edition</span>
                                    </div>
                                    <h3 className="font-black text-5xl tracking-tighter uppercase text-[#e5e2e0] mb-4 leading-none">MULE-7 HAULER</h3>
                                    <p className="text-[#decd99] font-bold text-sm mb-8 max-w-xs leading-relaxed opacity-90">High-capacity logistic containment system with reinforced structural exoskeleton.</p>
                                    
                                    <div className="grid grid-cols-2 gap-4 mb-10">
                                        <div className="bg-[#353533]/80 backdrop-blur-md p-5 border border-white/5">
                                            <span className="text-[#969083] text-[10px] uppercase font-bold block mb-2">Volume</span>
                                            <span className="text-[#e5e2e0] text-xl font-black">65L</span>
                                        </div>
                                        <div className="bg-[#353533]/80 backdrop-blur-md p-5 border border-white/5">
                                            <span className="text-[#969083] text-[10px] uppercase font-bold block mb-2">Armor</span>
                                            <span className="text-[#e5e2e0] text-xl font-black">NIJ IIIA</span>
                                        </div>
                                    </div>
                                    <button className="w-full bg-[#decd99] text-[#3a3009] font-black py-5 uppercase text-sm tracking-[0.3em] border-b-4 border-[#c2b280] hover:bg-white transition-all shadow-2xl">
                                        Deploy Request
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Product Card 4 */}
                        <div className="group relative bg-[#20201f] overflow-hidden border border-white/5">
                            <div className="aspect-square relative overflow-hidden bg-[#2a2a29]">
                                <img alt="Tactical Tablet" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBReDBIJdz50xlLykOIx6V0k2WdITgst4Sb9Onm4d_1ebt-S0jkLpi3eWaH-7oPex-aYbw88H--G49WEinQFEpmqICDpasj0bhvaQZWG6yj-YYPPEKLTFUZAcKxHYJlUl7qiTt0LR9oGwkbslEd_66tyhJlagK-qFu2ay8eV3BR3M0Pj-Yy083FIIdMbR-Mhe8JVuDRi6tNaSCS5ofkHgi0XPb0zjZw881U8m7GLqS-rVOPSr4kev8qCh0nnsNTk_H3AAneRZYUax-R" />
                                <div className="absolute inset-0 bg-[#131312]/95 p-8 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                                    <h4 className="text-[#ffc191] font-black text-xs tracking-[0.3em] uppercase mb-6">Technical Specs</h4>
                                    <div className="space-y-4 border-l-2 border-[#4b463b] pl-6">
                                        {[
                                            { label: "Processor", val: "X8 Octa-Core" },
                                            { label: "Encryption", val: "AES-256 Quantum" }
                                        ].map(spec => (
                                            <div key={spec.label} className="flex justify-between">
                                                <span className="text-[#969083] text-xs uppercase font-bold">{spec.label}</span>
                                                <span className="text-[#e5e2e0] text-xs font-black">{spec.val}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="mt-8 bg-[#decd99] text-[#3a3009] font-black py-4 uppercase text-xs tracking-[0.2em] border-b-4 border-[#c2b280] hover:bg-white transition-colors">
                                        Access Protocol
                                    </button>
                                </div>
                            </div>
                            <div className="p-8 border-t-4 border-[#3b4f16] group-hover:border-[#ff9a3c] transition-colors">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="font-black text-2xl tracking-tighter uppercase text-[#e5e2e0]">COBALT TABLET</h3>
                                    <span className="bg-[#93000a] text-[#ffdad6] text-[10px] font-black px-3 py-1 uppercase tracking-widest">Backorder</span>
                                </div>
                                <p className="text-[#969083] text-xs uppercase font-bold tracking-widest">Interface / Field Intel</p>
                            </div>
                        </div>

                        {/* Product Card 5 */}
                        <div className="group relative bg-[#20201f] overflow-hidden border border-white/5">
                            <div className="aspect-square relative overflow-hidden bg-[#2a2a29]">
                                <div className="w-full h-full flex flex-col items-center justify-center bg-[#353533] opacity-60 group-hover:opacity-100 transition-opacity">
                                    <span className="material-symbols-outlined text-[#969083] text-8xl mb-4 group-hover:text-[#decd99] transition-colors">settings_input_antenna</span>
                                    <span className="text-[#969083] font-black text-[10px] tracking-[0.5em] uppercase">No Vis Available</span>
                                </div>
                                <div className="absolute inset-0 bg-[#131312]/95 p-8 flex flex-col justify-end translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                                    <h4 className="text-[#ffc191] font-black text-xs tracking-[0.3em] uppercase mb-6">Technical Specs</h4>
                                    <div className="space-y-4 border-l-2 border-[#4b463b] pl-6">
                                        {[
                                            { label: "Range", val: "350 NM" },
                                            { label: "Band", val: "Sat-Com X" }
                                        ].map(spec => (
                                            <div key={spec.label} className="flex justify-between">
                                                <span className="text-[#969083] text-xs uppercase font-bold">{spec.label}</span>
                                                <span className="text-[#e5e2e0] text-xs font-black">{spec.val}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="mt-8 bg-[#decd99] text-[#3a3009] font-black py-4 uppercase text-xs tracking-[0.2em] border-b-4 border-[#c2b280] hover:bg-white transition-colors">
                                        Link Station
                                    </button>
                                </div>
                            </div>
                            <div className="p-8 border-t-4 border-[#3b4f16] group-hover:border-[#ff9a3c] transition-colors">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="font-black text-2xl tracking-tighter uppercase text-[#e5e2e0]">NEXUS LINK-4</h3>
                                    <span className="bg-[#ffc191] text-[#4d2600] text-[10px] font-black px-3 py-1 uppercase tracking-widest">Live</span>
                                </div>
                                <p className="text-[#969083] text-xs uppercase font-bold tracking-widest">Comms / Satellite Array</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Footer Section */}
            <footer className="bg-[#131312] border-t-4 border-[#c2b280] flex flex-col md:flex-row justify-between items-center w-full px-8 py-16 gap-10 relative z-10">
                <div className="flex flex-col gap-3">
                    <span className="font-['Manrope'] text-sm font-black uppercase tracking-[0.3em] text-[#c2b280]">© 2024 REXPLORE TECHNOLOGIES. ALL RIGHTS RESERVED.</span>
                    <div className="flex gap-4">
                        <span className="h-1.5 w-16 bg-[#3b4f16]"></span>
                        <span className="h-1.5 w-8 bg-[#ffc191]"></span>
                    </div>
                </div>
                <div className="flex gap-12 font-black text-[10px] tracking-[0.4em] uppercase">
                    <a className="text-[#c2b280] hover:text-[#ff9a3c] transition-all" href="#">Hardware</a>
                    <a className="text-[#c2b280] hover:text-[#ff9a3c] transition-all" href="#">Privacy</a>
                    <a className="text-[#ff9a3c] hover:opacity-80 transition-all underline decoration-2 underline-offset-8" href="#">Status: Optimal</a>
                </div>
                <div className="flex gap-8">
                    {["share", "language", "security"].map(icon => (
                        <span key={icon} className="material-symbols-outlined text-[#c2b280] hover:text-[#ffc191] cursor-pointer transition-colors text-2xl">{icon}</span>
                    ))}
                </div>
            </footer>
        </div>
    );
};

export default CatalogV3Page;
