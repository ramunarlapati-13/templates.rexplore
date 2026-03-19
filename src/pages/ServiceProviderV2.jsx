import React from "react";
import { motion } from "framer-motion";

const ServiceProviderV2Page = () => {
    return (
        <div className="bg-[#f9f9f9] text-[#1a1c1c] font-['Work_Sans'] selection:bg-[#aa3000] selection:text-white min-h-screen">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&family=Work+Sans:wght@300;400;500;600;700&display=swap');
                
                .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                }
                .kinetic-bg {
                    background-image: linear-gradient(45deg, #aa3000 25%, transparent 25%), 
                                    linear-gradient(-45deg, #aa3000 25%, transparent 25%), 
                                    linear-gradient(45deg, transparent 75%, #aa3000 75%), 
                                    linear-gradient(-45deg, transparent 75%, #aa3000 75%);
                    background-size: 20px 20px;
                    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
                    opacity: 0.03;
                }
                .glass-void {
                    background: rgba(117, 76, 151, 0.4);
                    backdrop-filter: blur(20px);
                }
            `}</style>

            {/* Top Navigation */}
            <nav className="sticky top-0 z-50 bg-[#020617] flex justify-between items-center w-full px-6 py-4 border-b-0 shadow-[8px_8px_0px_0px_rgba(26,28,28,1)]">
                <div className="text-3xl font-black text-[#ea580c] italic font-['Space_Grotesk'] uppercase tracking-tighter">REXPLORE</div>
                <div className="hidden md:flex gap-8 items-center">
                    <a className="text-[#f97316] border-b-4 border-[#ea580c] pb-1 font-['Space_Grotesk'] uppercase tracking-tighter font-bold" href="#">Services</a>
                    {["Projects", "Fleet", "About", "Contact"].map(link => (
                        <a key={link} className="text-zinc-400 hover:text-white transition-colors font-['Space_Grotesk'] uppercase tracking-tighter font-bold" href="#">{link}</a>
                    ))}
                </div>
                <button className="bg-[#aa3000] text-white font-['Space_Grotesk'] font-bold uppercase tracking-tighter px-6 py-2 shadow-[4px_4px_0px_0px_#1a1c1c] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all">
                    GET STARTED
                </button>
            </nav>

            <main className="relative">
                {/* Hero Section */}
                <section className="relative min-h-[921px] flex flex-col justify-center px-10 bg-[#020617] overflow-hidden">
                    <div className="absolute inset-0 kinetic-bg pointer-events-none"></div>
                    <div className="relative z-10 max-w-6xl">
                        <motion.span 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-block bg-[#aa3000] text-white font-['Space_Grotesk'] text-xs uppercase tracking-[0.2em] px-3 py-1 mb-6"
                        >
                            System Status: Active
                        </motion.span>
                        <motion.h1 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="font-['Space_Grotesk'] text-[10vw] md:text-[8rem] leading-[0.85] font-black text-white uppercase tracking-tighter mb-8 -ml-1 md:-ml-2"
                        >
                            THE <br/><span className="text-[#aa3000] italic">KINETIC</span> <br/>ENGINE
                        </motion.h1>
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <p className="max-w-xl text-lg md:text-xl text-zinc-400 font-light border-l-4 border-[#754c97] pl-6 leading-relaxed">
                                Architecting high-velocity industrial solutions through raw structural integrity and experimental spatial depth. Performance is not a metric; it is an obsession.
                            </p>
                            <div className="flex flex-col gap-4">
                                <button className="bg-[#aa3000] text-white text-xl font-black px-10 py-5 shadow-[8px_8px_0px_0px_#1a1c1c] hover:bg-[#d43f00] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none">
                                    DEPLOY BLUEPRINT
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Absolute Decorative Slab */}
                    <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-[#754c97] opacity-20 transform skew-x-12 translate-x-20 pointer-events-none"></div>
                </section>

                {/* Service Matrix */}
                <section className="py-24 px-10 bg-[#f9f9f9]">
                    <div className="mb-16 flex items-end justify-between border-b-8 border-[#1a1c1c] pb-4">
                        <h2 className="font-['Space_Grotesk'] text-6xl font-black uppercase tracking-tighter">SERVICE MATRIX</h2>
                        <span className="font-['Space_Grotesk'] text-[#aa3000] font-bold tracking-widest pb-2">v.2.04.1</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-[#1a1c1c]">
                        {[
                            { icon: "precision_manufacturing", title: "Precision Fab", desc: "Automated structural synthesis with zero-tolerance variance protocols." },
                            { icon: "rocket_launch", title: "Rapid Deployment", desc: "High-velocity logistical frameworks for critical infrastructure." },
                            { icon: "biotech", title: "Neuro-Logic", desc: "AI-driven predictive maintenance for global fleet operations." },
                            { icon: "grid_view", title: "Grid Control", desc: "Centralized oversight of distributed industrial nodes." },
                            { icon: "bolt", title: "Kinetic Power", desc: "Zero-loss energy distribution for heavy machinery." },
                            { icon: "shield", title: "Void Shield", desc: "Cyber-physical security layers for sensitive environments." },
                            { icon: "factory", title: "Heavy Works", desc: "Mass-scale construction utilizing brutalist modular slabs." },
                            { icon: "settings_input_antenna", title: "Deep Link", desc: "Sub-orbital telemetry for remote project management." },
                            { icon: "architecture", title: "Draft Phase", desc: "Consultative engineering and blueprint visualization." }
                        ].map((service, idx) => (
                            <div key={idx} className={`bg-[#754c97] p-12 group hover:bg-[#754c97]/90 transition-colors ${idx % 3 !== 2 ? 'md:border-r-4' : ''} ${idx < 6 ? 'border-b-4' : ''} border-[#1a1c1c]`}>
                                <span className="material-symbols-outlined text-5xl text-[#aa3000] mb-6">{service.icon}</span>
                                <h3 className="font-['Space_Grotesk'] text-3xl font-bold text-white uppercase mb-4">{service.title}</h3>
                                <p className="text-[#f2daff] text-sm leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Phase Protocol */}
                <section className="py-24 px-10 grid grid-cols-1 lg:grid-cols-12 gap-16 bg-[#f3f3f4]">
                    <div className="lg:col-span-12 mb-8">
                         <h2 className="font-['Space_Grotesk'] text-5xl font-black uppercase tracking-tighter">PHASE PROTOCOL</h2>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="space-y-0">
                            {[
                                { step: "01", title: "Initialization", desc: "Deep-scan of environmental variables and project constraints." },
                                { step: "02", title: "Slab Synthesis", desc: "Raw material processing and structural component creation." },
                                { step: "03", title: "Deployment", desc: "Precision installation using the REXPLORE kinetic fleet." }
                            ].map((phase, idx) => (
                                <div key={idx} className="flex gap-8 group">
                                    <div className="flex flex-col items-center">
                                        <div className={`w-16 h-16 ${idx === 0 ? 'bg-[#aa3000]' : 'bg-[#1a1c1c]'} text-white flex items-center justify-center font-['Space_Grotesk'] text-3xl font-black shadow-[4px_4px_0px_0px_#1a1c1c]`}>{phase.step}</div>
                                        {idx < 2 && <div className={`w-2 h-24 ${idx === 0 ? 'bg-[#aa3000]' : 'bg-[#1a1c1c]'}`}></div>}
                                    </div>
                                    <div className="pt-2">
                                        <h4 className="font-['Space_Grotesk'] text-2xl font-bold uppercase">{phase.title}</h4>
                                        <p className="text-[#5c4037] max-w-sm mt-2 font-medium">{phase.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Project Estimator */}
                    <div className="lg:col-span-7 bg-white p-12 shadow-[16px_16px_0px_0px_#754c97] border-4 border-[#1a1c1c]">
                        <h2 className="font-['Space_Grotesk'] text-4xl font-black uppercase mb-8">KINETIC ESTIMATOR</h2>
                        <div className="space-y-12">
                            <div>
                                <div className="flex justify-between mb-4">
                                    <label className="font-['Space_Grotesk'] uppercase font-bold text-sm tracking-widest text-[#5c4037]">Operation Scale (Sq. Meters)</label>
                                    <span className="text-[#aa3000] font-['Space_Grotesk'] font-black text-xl">4,500</span>
                                </div>
                                <input className="w-full h-4 bg-[#e2e2e2] appearance-none accent-[#aa3000] cursor-pointer border-2 border-[#1a1c1c]" max="10000" min="0" type="range" defaultValue="4500"/>
                            </div>
                            <div>
                                <div className="flex justify-between mb-4">
                                    <label className="font-['Space_Grotesk'] uppercase font-bold text-sm tracking-widest text-[#5c4037]">Velocity Requirement (Weeks)</label>
                                    <span className="text-[#aa3000] font-['Space_Grotesk'] font-black text-xl">12</span>
                                </div>
                                <input className="w-full h-4 bg-[#e2e2e2] appearance-none accent-[#aa3000] cursor-pointer border-2 border-[#1a1c1c]" max="52" min="1" type="range" defaultValue="12"/>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <button className="border-4 border-[#1a1c1c] p-6 flex flex-col items-center group hover:bg-[#1a1c1c] transition-all">
                                    <span className="material-symbols-outlined text-4xl text-[#aa3000] group-hover:text-white">factory</span>
                                    <span className="font-['Space_Grotesk'] font-bold uppercase mt-2 group-hover:text-white">Industrial</span>
                                </button>
                                <button className="border-4 border-[#aa3000] p-6 flex flex-col items-center group bg-[#aa3000] shadow-[4px_4px_0px_0px_#1a1c1c]">
                                    <span className="material-symbols-outlined text-4xl text-white">domain</span>
                                    <span className="font-['Space_Grotesk'] font-bold uppercase mt-2 text-white">Commercial</span>
                                </button>
                            </div>
                            <div className="bg-[#1a1c1c] p-10 flex justify-between items-center mt-8">
                                <div>
                                    <span className="block text-zinc-500 font-['Space_Grotesk'] text-xs uppercase tracking-[0.2em] mb-1">Projected Budget</span>
                                    <span className="text-white font-['Space_Grotesk'] text-4xl font-black">$245,000.00</span>
                                </div>
                                <button className="bg-[#aa3000] text-white font-['Space_Grotesk'] font-bold uppercase px-8 py-4 shadow-[4px_4px_0px_0px_#ffffff] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                                    GENERATE SPECS
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Project */}
                <section className="py-24 px-10">
                    <div className="relative w-full h-[600px] overflow-hidden border-4 border-[#1a1c1c] group">
                        <img alt="Industrial Project" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC00opaN-PT_FCsQXKbGBg3MoofrrOtVzdYYpFF672kyRPgu0vaAwR8z7bE9uo1lyLfs3bdvLATbQwuxVe0YIdQoPf9v1GrFNaj1vlNW16fsg808oR3clDYlTcM24X1y359YdjZC0df7ad9WqlqEbq7kwxO7O1ieJaZ8-2l6EkG9j9e8CA1hr2lxSwCskV5U3QSqK3BhvrFn1AI8so_Ffn7dug1d57VXt-cqh2MEI45KGWparcWA2XY7VVEorenneJD_MWDMX-EeuQ2" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-12">
                            <h2 className="font-['Space_Grotesk'] text-7xl font-black text-white uppercase tracking-tighter leading-none mb-4 -ml-2">THE OMEGA <br/>SYNTHESIS</h2>
                            <p className="text-[#aa3000] font-bold tracking-[0.3em] font-['Space_Grotesk'] text-sm mb-6 uppercase">CASE STUDY / 009 / BERLIN</p>
                            <button className="bg-white text-[#1a1c1c] font-['Space_Grotesk'] font-black px-12 py-4 hover:bg-[#aa3000] hover:text-white transition-all uppercase tracking-widest text-xs">
                                VIEW DOCUMENTATION
                            </button>
                        </div>
                    </div>
                </section>

                {/* Form Section */}
                <section className="py-32 px-10 flex justify-center bg-[#020617] relative overflow-hidden">
                    <div className="absolute inset-0 kinetic-bg pointer-events-none opacity-5"></div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="max-w-4xl w-full glass-void border-8 border-[#aa3000] p-12 md:p-20 relative z-10 shadow-[24px_24px_0px_0px_#aa3000]"
                    >
                        <h2 className="font-['Space_Grotesk'] text-5xl md:text-6xl font-black text-white uppercase mb-8 leading-none tracking-tighter">INITIATE <br/>CONTACT</h2>
                        <p className="text-[#c6c6c6] mb-12 text-lg font-light max-w-lg leading-relaxed">Enter project parameters for immediate engineer assessment. Our response time is calculated in minutes, not days.</p>
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-[#aa3000] font-black">OPERATIVE NAME</label>
                                    <input className="w-full bg-[#e8e8e8] border-none p-5 font-['Space_Grotesk'] font-black placeholder-zinc-500 focus:ring-4 focus:ring-[#ffb59e] outline-none uppercase tracking-widest text-xs" placeholder="John Doe" type="text" />
                                </div>
                                <div className="space-y-3">
                                    <label className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-[#aa3000] font-black">COMMUNICATION LINK</label>
                                    <input className="w-full bg-[#e8e8e8] border-none p-5 font-['Space_Grotesk'] font-black placeholder-zinc-500 focus:ring-4 focus:ring-[#ffb59e] outline-none uppercase tracking-widest text-xs" placeholder="LINK@REXPLORE.COM" type="email" />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-[#aa3000] font-black">PROJECT BRIEF</label>
                                <textarea className="w-full bg-[#e8e8e8] border-none p-5 font-['Space_Grotesk'] font-black placeholder-zinc-500 focus:ring-4 focus:ring-[#ffb59e] outline-none uppercase tracking-widest text-xs" placeholder="Describe the structural objective..." rows="4"></textarea>
                            </div>
                            <button className="w-full bg-[#aa3000] text-white font-['Space_Grotesk'] font-black text-3xl py-8 shadow-[8px_8px_0px_0px_#1a1c1c] flex items-center justify-center gap-4 hover:bg-[#d43f00] transition-all active:translate-x-1 active:translate-y-1 active:shadow-none uppercase">
                                SEND TRANSMISSION
                            </button>
                        </form>
                    </motion.div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-[#020617] text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-10 py-20 w-full border-t-8 border-[#aa3000]">
                    <div className="space-y-6">
                        <div className="text-2xl font-black text-white font-['Space_Grotesk'] italic uppercase tracking-tighter">REXPLORE</div>
                        <p className="text-zinc-500 text-sm leading-relaxed font-medium">
                            Pioneering Kinetic Brutalism in industrial design and engineering. Built for the void.
                        </p>
                    </div>
                    {[
                        { title: "Resources", links: ["Industrial Standards", "Safety Protocols", "Documentation"] },
                        { title: "Legal", links: ["Privacy Policy", "Terms of Service"] }
                    ].map((col, idx) => (
                        <div key={idx} className="space-y-6">
                            <h5 className="font-['Space_Grotesk'] font-black uppercase text-[#aa3000] tracking-widest text-xs">{col.title}</h5>
                            <ul className="space-y-4 font-['Space_Grotesk'] text-xs uppercase tracking-[0.2em] font-bold">
                                {col.links.map(link => (
                                    <li key={link}><a className="text-zinc-500 hover:text-[#aa3000] underline decoration-2 underline-offset-4 transition-all" href="#">{link}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="space-y-6">
                        <h5 className="font-['Space_Grotesk'] font-black uppercase text-[#aa3000] tracking-widest text-xs">Contact</h5>
                        <p className="text-zinc-500 font-['Space_Grotesk'] text-xs uppercase tracking-widest leading-loose font-bold">
                            HQ: Sector 7G, Industrial Way<br/>
                            T: +1 800-REX-ENGN<br/>
                            E: CORE@REXPLORE.TECH
                        </p>
                    </div>
                </div>
                <div className="px-10 py-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="font-['Space_Grotesk'] text-[10px] uppercase tracking-[0.3em] text-zinc-600 font-black">© 2024 REXPLORE TECHNOLOGIES. ALL RIGHTS RESERVED.</div>
                    <div className="flex gap-8">
                        {["share", "language", "rss_feed"].map(icon => (
                            <span key={icon} className="material-symbols-outlined text-zinc-600 hover:text-[#aa3000] cursor-pointer transition-colors">{icon}</span>
                        ))}
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default ServiceProviderV2Page;
