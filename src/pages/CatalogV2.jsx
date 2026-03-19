import React from "react";
import { motion } from "framer-motion";

const CatalogV2Page = () => {
    return (
        <div className="bg-[#161212] text-[#eae0e0] font-['Inter'] selection:bg-[#AC3D3D] selection:text-white min-h-screen">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&family=Inter:wght@400;600;700&display=swap');
                
                .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                }
                .glass-panel {
                    backdrop-filter: blur(20px);
                    background-color: rgba(35, 31, 31, 0.8);
                }
                .structural-grid {
                    background-image: radial-gradient(circle, #574240 1px, transparent 1px);
                    background-size: 24px 24px;
                    opacity: 0.1;
                }
                .reveal-specs {
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }
                .product-card:hover .reveal-specs {
                    opacity: 1;
                }
            `}</style>

            {/* TOP NAVIGATION SHELL */}
            <nav className="sticky top-0 z-50 flex justify-between items-center w-full px-6 py-4 bg-[#161212] border-b-2 border-[#AC3D3D]">
                <div className="flex items-center gap-8">
                    <span className="text-2xl font-black text-[#AC3D3D] tracking-tighter font-['Manrope'] uppercase">REXPLORE TECH</span>
                    <div className="hidden md:flex gap-6">
                        <a className="text-[#FFE35D] border-b-2 border-[#FFE35D] pb-1 font-['Manrope'] tracking-tighter uppercase font-bold text-sm" href="#">CATALOG</a>
                        {["Projects", "Support"].map(link => (
                            <a key={link} className="text-[#a58a89] hover:text-[#AC3D3D] font-['Manrope'] tracking-tighter uppercase font-bold transition-colors duration-200 text-sm" href="#">{link}</a>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="relative px-3 py-1 bg-[#2d2929] border-2 border-[#a58a89] flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#e0c643] text-sm">shopping_cart</span>
                        <span className="text-xs font-bold font-['Inter']">08</span>
                        <span className="text-[10px] text-[#a58a89] uppercase font-bold tracking-widest ml-2">BULK INQUIRY</span>
                    </div>
                    <button className="material-symbols-outlined text-[#a58a89] hover:text-white transition-colors">contrast</button>
                    <button className="material-symbols-outlined text-[#a58a89] hover:text-white md:hidden">menu</button>
                </div>
            </nav>

            <div className="flex min-h-screen relative">
                {/* STRUCTURAL GRID OVERLAY */}
                <div className="fixed inset-0 pointer-events-none structural-grid"></div>

                {/* SIDEBAR FILTER SHELL */}
                <aside className="fixed left-0 top-16 h-[calc(100vh-64px)] w-64 flex flex-col pt-8 bg-[#161212] border-r-2 border-[#a58a89]/30 z-40 hidden md:flex">
                    <div className="px-6 mb-8">
                        <span className="text-[10px] text-[#e0c643] font-bold tracking-[0.3em] uppercase block mb-1">SYSTEM PARAMETERS</span>
                        <h2 className="font-['Manrope'] font-extrabold text-xl text-[#eae0e0] tracking-tighter">INVENTORY</h2>
                        <p className="text-[8px] font-['Inter'] text-[#a58a89] opacity-50 tracking-[0.2em]">v4.0.2-STABLE</p>
                    </div>
                    <nav className="flex flex-col flex-grow overflow-y-auto">
                        <a className="bg-[#AC3D3D] text-white font-bold border-l-4 border-[#FFE35D] px-6 py-4 flex items-center gap-3 transition-all hover:translate-x-1" href="#">
                            <span className="material-symbols-outlined text-sm">grid_view</span>
                            <span className="font-['Inter'] text-xs tracking-widest uppercase">ALL PRODUCTS</span>
                        </a>
                        {[
                            { icon: "sensors", label: "SENSORS" },
                            { icon: "precision_manufacturing", label: "DRILLING" },
                            { icon: "settings_input_component", label: "AUTOMATION" },
                            { icon: "vertical_shades_closed", label: "SAFETY" }
                        ].map(item => (
                            <a key={item.label} className="text-[#a58a89] px-6 py-4 flex items-center gap-3 hover:bg-[#231f1f] hover:text-[#FFE35D] transition-all hover:translate-x-1 border-l-4 border-transparent" href="#">
                                <span className="material-symbols-outlined text-sm">{item.icon}</span>
                                <span className="font-['Inter'] text-xs tracking-widest uppercase">{item.label}</span>
                            </a>
                        ))}
                        
                        {/* FACETED FILTERS */}
                        <div className="mt-8 px-6 space-y-6">
                            <div>
                                <span className="text-[9px] font-bold text-[#574240] tracking-widest uppercase block mb-3">MATERIAL SCALE</span>
                                <div className="space-y-2">
                                    {["TITANIUM ALLOY (G5)", "REINFORCED CARBON", "STEEL REINFORCED"].map((mat, i) => (
                                        <label key={mat} className="flex items-center gap-2 group cursor-pointer">
                                            <div className={`w-4 h-4 border-2 ${i === 2 ? 'border-[#e0c643] bg-[#e0c643]' : 'border-[#a58a89] bg-[#161212]'} group-hover:border-[#e0c643] transition-colors`}></div>
                                            <span className={`text-[10px] ${i === 2 ? 'text-[#e0c643]' : 'text-[#dec0bd]'} font-bold tracking-tighter`}>{mat}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <span className="text-[9px] font-bold text-[#574240] tracking-widest uppercase block mb-3">OPERATIONAL SCALE</span>
                                <input className="w-full accent-[#ffb3af] bg-[#393433] h-1 appearance-none" type="range" />
                                <div className="flex justify-between mt-2">
                                    <span className="text-[8px] text-[#a58a89] font-bold">100 PSI</span>
                                    <span className="text-[8px] text-[#a58a89] font-bold">5000 PSI</span>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="p-6 mt-auto">
                        <button className="w-full py-3 bg-[#e0c643] text-[#393000] font-['Manrope'] font-black text-xs tracking-widest uppercase hover:opacity-90 active:scale-[0.98] transition-all">
                            BULK INQUIRY
                        </button>
                    </div>
                </aside>

                {/* MAIN CONTENT CANVAS */}
                <main className="flex-grow md:ml-64 p-6 md:p-10 relative z-10 overflow-x-hidden">
                    {/* HEADER SECTION */}
                    <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <span className="inline-block px-2 py-1 bg-[#ac3d3d] text-[#ffd7d4] text-[10px] font-bold tracking-widest mb-4">DEPLOYMENT READY</span>
                            <h1 className="text-4xl md:text-5xl font-['Manrope'] font-extrabold tracking-tighter uppercase leading-none">
                                INDUSTRIAL <span className="text-[#ffb3af] italic">CORE</span> ASSETS
                            </h1>
                        </div>
                        <div className="flex gap-2">
                            <div className="px-4 py-2 bg-[#231f1f] border-2 border-[#a58a89] flex items-center gap-3">
                                <span className="text-[10px] font-bold text-[#a58a89] tracking-widest uppercase">SORT BY:</span>
                                <select className="bg-transparent border-none text-[10px] font-bold text-[#eae0e0] focus:ring-0 uppercase tracking-tighter p-0">
                                    <option>THERMAL RATING</option>
                                    <option>PRESSURE MAX</option>
                                    <option>DENSITY</option>
                                </select>
                            </div>
                        </div>
                    </header>

                    {/* PRODUCT GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { 
                                model: "SENSOR-X9", status: "STABLE", name: "CRYOGENIC FLOW ANALYZER", price: "$12,450.00", 
                                color: "#AC3D3D", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBO8S4Kc4Rvgun8DCAyr0rGxWn4JrwpX9p-BVTjg7ySs1P1wjacDffOcnIY1TtgHScRfRjepHQb0SsLo3jtRfpoPAkEWzeLhDI_3S8HknpKUQNyATm2zyabgYayHjaKF4KuXo5_sDZGM-ar8Zp2RNVSbP8KZV-Eo0vND-r1d6K9bubuHE8GtmgklV3La81YPVQ9_vlqo4iybt8sRYMLfLSXd1HOQb2L76D_84oFLhwchm22khfhtDf7YD6QhmxqiLkGMWvihR8UTwBW",
                                specs: [["OP-TEMP", "-40°C | +120°C"], ["LATENCY", "0.002ms"], ["SIGNAL", "X-BAND RF"]]
                            },
                            { 
                                model: "MECH-DRV", status: "HD-DUTY", name: "VORTEX GEAR ASSEMBLY", price: "$8,200.00", 
                                color: "#e0c643", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAz0Cf1JW0wOE3vnANySOCfmnz7k2wC1ixYU6NWyNJgTREllYjgV_zmXpATNYDyJxEVVAVXxLvbr_Wcq2LNZPcsXzf4Fu6o3KvZ39y6umlm4FT820nmCQwS1EcJV-mWj9lf5xY23OxwWP9DGFkKNkc2sCQ28T2R0WaEsPKXkHyrEloTrWLLIWbE53I6koXpQfSsABJ_77TbX-G2WX5Ye-pJHlyu6uywLlXyaFsglDvMrlzz7uhvWMSLmWTXm2lnCd3F5UykZoqjygHX",
                                specs: [["MAX-TORQUE", "4500 Nm"], ["RPM MAX", "12,000"], ["LUBRICATION", "SYNTHETIC V4"]]
                            },
                            { 
                                model: "LAS-MOD", status: "PRECISE", name: "OPTIC-WELD HEAD UNIT", price: "$45,900.00", 
                                color: "#AC3D3D", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9ke1HoriWU-9xUh6K0dqss8PMKGmYuwy7B91btJAR_pB5f09kkg4hp4EivdOSRp0PZiqc6k4vbplCFy5afNXLluSvUxCrqyBO41_nSW1PaOhGDT96BYK9rtxDsL0p1WLvfBaQeJ0cqGX8YnrL8Nf71G5R0gtB2aZksboh7342Uuz14MXjCUPSzawwYR4Ldtb86CtRlZkmc9oxVUaYyYkfbmIY2o_HSXHz37OoAyyKMEr3Z7Mjv787RYAk_2kcHlIaBj08dHR0h5Z1",
                                specs: [["POWER", "50.0 KW"], ["WAVELENGTH", "1064 nm"], ["SPOT SIZE", "0.01 mm"]]
                            },
                            { 
                                model: "AUTO-C", status: "MASTER", name: "TITAN LOGIC CONTROLLER", price: "$2,300.00", 
                                color: "#e0c643", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGfZaLlT3dosGke9tyuKwIKEF5NEg050FSVT_LJ9ZBUNOS2GzNQC9BCzG75bLENFu_PnAn6a4NbuLOtg9Uv2jZDvoM3PfcT0koFykwql6XrZNqMdzOO8yJpgFTuSA_TyddR1ho0ToIZV61WJzYDqDNMJ2fRgxa9jH33Y5rsUVEDVRScG7biLQJaMMcKNeXk3yFAiUu0Yk-V1y09eZSqrNmgJHe0DXc7PC-OGsH5jewCwU-IDuqWlAOydRiRkdi3x-fiWf5paCkUq6k",
                                specs: [["CORE FREQ", "3.2 GHZ"], ["I/O CHANNELS", "256 ANALOG"], ["REDUNDANCY", "DUAL-SYNC"]]
                            },
                            { model: "ROBO-AX", status: "ALPHA", name: "COBOT-7 PRECISION ARM", price: "$112,000.00", color: "#AC3D3D", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFqiWDQtMN2ARlbpYhXzg1NAm4QaCKB1wM_YekxF_JfGQYTy_25-pTQ4oBvy1Wg8SBEPv1yiRhd17ZJgtDWv9lnwFp9A4f9s9ZzYE9KM1LC-wWsI-Eiz3oLpUOpfNDZK50xq79QAfCD0YPtjNLjMlfb6NjtT_LImv0gGCQ428Gp_pKGery_cIJk7KA-kZO1ZlXvqc30D9ll1N-XbyPaMKDAB5LSdXICl0NHWyayk-msH7FegDfSelctVYK0SXGglZGuMn6orqwNCE3" },
                            { model: "PWR-L", status: "CORE", name: "HIGH-TENSION FEEDER", price: "$3,400.00", color: "#e0c643", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-P7wQoVmjnfrxMRhfVZ-6Lo1ZN9H_OOehqbfU6jeGqQm-CSM1FA_yaIJIzoqQYdlRjNWBMqSZ3IrPLCi5iAQisnT1YAfhHacCXWD1TjWtzhhfge4wsdx92jAPrQ8whQh710NaySJ2FEW_sNImjmqebp_bLSzxVit9eqc0zfl_4KjrWHklelV7SyZDkThq95RTEqpvar6jwYkNRiwG04yWxBGYDwjhXzT2X9UXOL6P9r-ETwW3I-yia41a1XI6m19UYYTLZTCYstDy" },
                            { model: "NET-SYS", status: "LINK", name: "FIBER-GRID HUB PRO", price: "$14,500.00", color: "#AC3D3D", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAHEWlZyF-klS9iwh331WvxmqQ5QTaSwjmLsa357Yhl1Mbu6OW8gfq_ZSyUwGW4ByUn6YX_kB2CguteOFIpuv2TnVVE6dPicmhBT51ImHEMQ3bJd9vkDMoONoQ8XXVI2KXcROyvTRQMZF5JdsOCO_BeijEY7Lb2enb3DGAg4m8EzoA4MkDc2HLoU2xo9loIf4yJo8_oIxMm30u225dVwQ1xQ0olijRaV462ly7WmPQC_e9tLkk_PIxdpb2YnwctvpQiBhBilpthKXt_" },
                            { model: "STR-FIX", status: "G5-GRADE", name: "TITANIUM BRACKET SET", price: "$670.00", color: "#e0c643", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAw5hyFYM2kqmSbHYNf1EB6nk6r7rHLjdw7mUC28g9q6ZLAnwkSrKNd1NWBoA6gJ09GRP1kv2Am6BXxl2f7SR5Mw3g7gUn_qLXyDhGxled9bv3nQ9tFcmNYgLyeROmHwSP4zUssVxVmpXCQpnfpFHQ9Dg9RBJ9SyE58Yy9c_NBt1NBHNckLeB7e4Ua6n2G8ablJjP5sFYkY-71Xo5ugBnG2PEnY74X558rEnH8OmjAwglIF-jJtpWIijHYWz8QgDaWjDC58eZFaPA4a" }
                        ].map((prod, idx) => (
                            <article key={idx} className="product-card group relative bg-[#1f1b1b] border-2 border-[#a58a89]/30 hover:border-[#AC3D3D] transition-all duration-300">
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#AC3D3D]"></div>
                                <div className="aspect-square relative overflow-hidden bg-[#393433]">
                                    <img alt={prod.name} className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500 scale-110 group-hover:scale-100" src={prod.img} />
                                    {/* NEURAL REVEAL OVERLAY */}
                                    {prod.specs && (
                                        <div className="reveal-specs absolute inset-0 glass-panel p-6 flex flex-col justify-center border-2 border-[#AC3D3D] m-2">
                                            <div className="text-[8px] font-['Inter'] text-[#AC3D3D] font-bold tracking-[0.2em] mb-4">REAL-TIME TELEMETRY</div>
                                            <div className="space-y-3">
                                                {prod.specs.map(spec => (
                                                    <div key={spec[0]} className="flex justify-between border-b border-[#a58a89]/20 pb-1">
                                                        <span className="text-[9px] text-[#a58a89] font-bold uppercase">{spec[0]}</span>
                                                        <span className="text-[9px] text-[#eae0e0] font-bold">{spec[1]}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <button className="mt-6 py-2 bg-[#AC3D3D] text-white text-[10px] font-bold tracking-widest uppercase">FULL SPEC</button>
                                        </div>
                                    )}
                                </div>
                                <div className="p-5">
                                    <div className="flex justify-between items-start mb-2">
                                        <span className="text-[10px] font-['Inter'] text-[#e0c643] font-bold tracking-widest uppercase">{prod.model}</span>
                                        <span className="text-[8px] font-bold text-[#a58a89] px-1 border border-[#a58a89]">{prod.status}</span>
                                    </div>
                                    <h3 className="font-['Manrope'] font-bold text-lg leading-tight tracking-tight uppercase group-hover:text-[#AC3D3D] transition-colors">{prod.name}</h3>
                                    <div className="mt-4 pt-4 border-t border-[#a58a89]/10 flex justify-between items-center">
                                        <span className="text-xl font-['Manrope'] font-black tracking-tighter">{prod.price}</span>
                                        <button className="material-symbols-outlined text-[#a58a89] group-hover:text-[#e0c643] transition-colors">add_circle</button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* PAGINATION */}
                    <footer className="mt-20 flex flex-col md:flex-row items-center justify-between py-10 border-t-2 border-[#a58a89]/30">
                        <div className="text-[10px] font-['Inter'] text-[#a58a89] tracking-[0.2em] mb-4 md:mb-0 uppercase">
                            SHOWING 1-8 OF 512 TECHNICAL ASSETS
                        </div>
                        <div className="flex gap-4">
                            <button className="px-6 py-2 border-2 border-[#a58a89] text-[10px] font-bold tracking-widest uppercase hover:bg-[#231f1f] transition-colors">PREVIOUS</button>
                            <div className="flex items-center gap-2">
                                <span className="px-4 py-2 bg-[#e0c643] text-[#393000] font-bold text-[10px]">01</span>
                                <span className="px-4 py-2 border border-[#a58a89]/30 text-[10px] font-bold cursor-pointer">02</span>
                                <span className="px-4 py-2 border border-[#a58a89]/30 text-[10px] font-bold cursor-pointer">03</span>
                                <span className="text-[#a58a89]">...</span>
                                <span className="px-4 py-2 border border-[#a58a89]/30 text-[10px] font-bold cursor-pointer">64</span>
                            </div>
                            <button className="px-6 py-2 border-2 border-[#a58a89] text-[10px] font-bold tracking-widest uppercase hover:bg-[#231f1f] transition-colors">NEXT</button>
                        </div>
                    </footer>
                </main>
            </div>

            {/* GLOBAL FOOTER SHELL */}
            <footer className="w-full py-6 px-10 flex justify-between items-center mt-auto bg-[#110d0d] border-t-2 border-[#a58a89]">
                <div className="flex items-center gap-6">
                    <span className="text-[#AC3D3D] font-bold font-['Manrope'] tracking-tighter uppercase">REXPLORE TECHNOLOGIES</span>
                    <span className="text-[#a58a89] font-['Inter'] text-[10px] uppercase tracking-[0.2em] hidden md:block">©2024 | INDUSTRIAL INTEGRITY</span>
                </div>
                <div className="flex gap-6">
                    {["SPECIFICATIONS", "COMPLIANCE", "CONTACT"].map(link => (
                        <a key={link} className="text-[#a58a89] hover:text-white font-['Inter'] text-[10px] uppercase tracking-[0.2em] transition-colors" href="#">{link}</a>
                    ))}
                </div>
            </footer>
        </div>
    );
};

export default CatalogV2Page;
