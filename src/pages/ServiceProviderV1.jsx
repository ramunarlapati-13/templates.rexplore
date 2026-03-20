import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  Cloud, 
  Database, 
  Fingerprint, 
  Globe, 
  Lock, 
  Monitor, 
  ShieldCheck, 
  Smartphone,
  ChevronRight,
  MoveDown,
  Calendar,
  X,
  CreditCard
} from 'lucide-react';

const ServiceProvider = () => {
  const [scale, setScale] = useState(50000);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-[#0e0e0f] text-white font-body selection:bg-primary/30 min-h-screen">
      {/* 01: HERO SECTION */}
      <section className="pt-40 pb-20 px-8 md:px-24">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-end">
            <div className="flex-1">
               <span className="text-[10px] text-primary font-bold tracking-[0.5em] uppercase mb-8 block">Utility Driven // Expertise</span>
               <h1 className="text-5xl md:text-9xl font-headline font-black tracking-tighter uppercase leading-[0.8] mb-12">
                 High-End<br/>Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Matrix.</span>
               </h1>
               <div className="flex flex-wrap gap-4">
                  {['Cloud Infrastructure', 'Neural Security', 'Global CDN', 'AI Operations'].map(tag => (
                    <span key={tag} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      {tag}
                    </span>
                  ))}
               </div>
            </div>
            <div className="md:w-1/3">
               <p className="text-lg md:text-xl text-zinc-500 font-['Inter'] leading-relaxed mb-10">
                 A premium infrastructure partner for global firms requiring industrial-grade reliability and rapid scaling capacity.
               </p>
               <button 
                onClick={() => setIsModalOpen(true)}
                className="group px-10 py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-xs hover:bg-primary transition-colors flex items-center gap-3"
               >
                 Schedule Consultation <Calendar size={16} />
               </button>
            </div>
         </div>
      </section>

      {/* 02: SERVICE MATRIX (3X3 GRID) */}
      <section className="py-32 px-8 md:px-24 bg-surface-container-low border-y border-white/5">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
               {[
                 { icon: <Monitor />, label: "Interface Design", desc: "High-fidelity industrial dashboards.", color: "text-primary" },
                 { icon: <Cloud />, label: "Edge Computing", desc: "Low-latency global node clusters.", color: "text-secondary" },
                 { icon: <Database />, label: "Neural Storage", desc: "Secure distributed data vaults.", color: "text-tertiary" },
                 { icon: <Lock />, label: "Hardened Security", desc: "Protocol-level crypto-guards.", color: "text-secondary-dim" },
                 { icon: <Fingerprint />, label: "Identity Sync", desc: "Biometric authentication systems.", color: "text-primary-container" },
                 { icon: <BarChart3 />, label: "System Metrics", desc: "Real-time performance analytics.", color: "text-error" },
                 { icon: <ShieldCheck />, label: "SLA Integrity", desc: "99.9% availability guarantees.", color: "text-secondary" },
                 { icon: <Smartphone />, label: "Mobile Core", desc: "Responsive remote control hubs.", color: "text-zinc-600" },
                 { icon: <Globe />, label: "Global Reach", desc: "Deployment across 142 regions.", color: "text-on-surface-variant" }
               ].map((s, idx) => (
                 <div key={idx} className="p-16 border-r border-b border-white/10 hover:bg-white/[0.04] transition-all group">
                    <div className={`${s.color} mb-8 transition-transform group-hover:scale-110 duration-500`}>
                       {React.cloneElement(s.icon, { size: 32 })}
                    </div>
                    <h3 className="text-xl font-bold font-headline uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">{s.label}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-8">{s.desc}</p>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                       <span className="w-8 h-[2px] bg-primary"></span>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 03: WORKFLOW (VERTICAL INDICATOR) */}
      <section className="py-32 px-8 md:px-24">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
               <h2 className="text-4xl md:text-8xl font-headline font-black uppercase tracking-tighter leading-none mb-12">
                 THE<br/><span className="text-secondary italic">PROTOCOL.</span>
               </h2>
               <p className="text-zinc-500 max-w-sm mb-12">A highly structured 4-phase deployment system for every service integration.</p>
               <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop" 
                alt="Tech Workflow" 
                className="w-full h-[400px] object-cover grayscale opacity-30 border border-white/5"
               />
            </div>
            <div className="space-y-0">
               {[
                 { step: "01", title: "Diagnostic Audit", content: "Comprehensive analysis of existing digital infrastructure and latency bottlenecks." },
                 { step: "02", title: "Architecture Design", content: "Custom blueprinting of neural nodes and data flow protocols for maximum speed." },
                 { step: "03", title: "Global Sync", content: "Real-time deployment across our 142 integrated regional network clusters." },
                 { step: "04", title: "Mission Control", content: "Active 24/7 monitoring and autonomous scaling during peak load cycles." }
               ].map((w, idx) => (
                 <div key={idx} className="flex gap-12 group last:border-b-0 border-b border-white/5 overflow-hidden">
                    <div className="flex flex-col items-center">
                       <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-primary font-black italic relative z-10 bg-[#0e0e0f]">
                          {w.step}
                       </div>
                       <div className="flex-1 w-[1px] bg-white/10 group-last:bg-transparent" />
                    </div>
                    <div className="py-12 group-hover:pl-4 transition-all duration-500">
                       <h4 className="text-2xl font-bold font-headline uppercase tracking-tight mb-4">{w.title}</h4>
                       <p className="text-zinc-500 leading-relaxed max-w-lg">{w.content}</p>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 04: PROJECT ESTIMATOR (INTERACTIVE SLIDERS) */}
      <section className="py-32 px-8 md:px-24 bg-surface-container-highest">
         <div className="max-w-5xl mx-auto text-center mb-20">
            <h2 className="text-4xl hover:tracking-widest transition-all cursor-default md:text-6xl font-headline font-black uppercase tracking-tighter mb-4">Estimator Engine.</h2>
            <p className="text-zinc-500 uppercase text-[10px] tracking-[0.4em] font-bold">Calculate your scale v2.1</p>
         </div>
         
         <div className="max-w-4xl mx-auto bg-[#0e0e0f] border border-white/5 p-12 md:p-20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-secondary/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
               <div className="mb-20">
                  <div className="flex justify-between items-end mb-8">
                     <p className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase">Monthly Capacity (Requests)</p>
                     <p className="text-4xl font-headline font-bold text-primary tracking-tighter italic">{scale.toLocaleString()}</p>
                  </div>
                  <input 
                    type="range" 
                    min="10000" 
                    max="1000000" 
                    step="5000" 
                    value={scale} 
                    onChange={(e) => setScale(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-zinc-800 rounded-full appearance-none cursor-pointer accent-primary"
                  />
                  <div className="flex justify-between mt-4 text-[8px] font-mono text-zinc-700">
                     <span>10K REQ</span>
                     <span>1M REQ</span>
                  </div>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="p-8 border border-white/5 bg-white/[0.02]">
                     <p className="text-[8px] text-zinc-600 font-bold tracking-[0.4em] uppercase mb-4">Core Index</p>
                     <p className="text-5xl font-headline font-black text-white">${(scale * 0.0005).toFixed(2)}</p>
                     <p className="text-[10px] text-zinc-700 font-mono mt-2">PER MONTH</p>
                  </div>
                  <div className="p-8 border border-white/5 bg-white/[0.02] border-l-primary/30">
                     <p className="text-[8px] text-primary font-bold tracking-[0.4em] uppercase mb-4">Estimated Throughput</p>
                     <p className="text-5xl font-headline font-black text-secondary">{(scale / 100).toFixed(1)} GB</p>
                     <p className="text-[10px] text-zinc-700 font-mono mt-2">BANDWIDTH ASSIGNED</p>
                  </div>
               </div>

               <button className="w-full mt-12 py-6 bg-gradient-to-r from-primary to-primary-container text-black font-black uppercase tracking-widest text-xs hover:brightness-110 transition-all">
                  Request Custom Build
               </button>
            </div>
         </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-8 md:px-24 text-center">
         <p className="text-zinc-800 font-black text-[10vw] uppercase leading-none opacity-20 pointer-events-none mb-12">REXPLORE CORE</p>
         <div className="flex flex-wrap justify-center gap-10">
            {['Privacy', 'Security', 'SLA', 'Logistics', 'Nodes', 'Legal'].map(l => (
               <a key={l} href="#" className="text-[10px] font-bold tracking-[0.5em] uppercase text-zinc-700 hover:text-white transition-colors">[{l}]</a>
            ))}
         </div>
      </footer>

      {/* CONSULTATION MODAL */}
      <AnimatePresence>
         {isModalOpen && (
           <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-8"
           >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-surface-container-high border border-white/10 p-12 max-w-2xl w-full relative"
              >
                 <button onClick={() => setIsModalOpen(false)} className="absolute top-8 right-8 text-zinc-600 hover:text-white transition-colors">
                    <X size={24} />
                 </button>
                 <div className="mb-12">
                    <h3 className="text-4xl font-headline font-black uppercase tracking-tighter mb-4">Request Specs.</h3>
                    <p className="text-zinc-500 font-['Inter']">Initialize your project consultation with our core engineering team.</p>
                 </div>
                 
                 <div className="space-y-6">
                    <div>
                       <label className="text-[8px] font-bold tracking-[0.4em] uppercase text-zinc-600 block mb-2">Full Organization Name</label>
                       <input type="text" className="w-full bg-black/40 border border-white/5 p-4 text-sm font-bold focus:border-primary outline-none transition-colors" placeholder="VIRTUE CORP" />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                       <div>
                          <label className="text-[8px] font-bold tracking-[0.4em] uppercase text-zinc-600 block mb-2">Priority Level</label>
                          <select className="w-full bg-black/40 border border-white/5 p-4 text-sm font-bold focus:border-primary outline-none transition-colors">
                             <option>CRITICAL (L1)</option>
                             <option>HIGH (L2)</option>
                             <option>NORMAL (L3)</option>
                          </select>
                       </div>
                       <div>
                          <label className="text-[8px] font-bold tracking-[0.4em] uppercase text-zinc-600 block mb-2">Contact Protocol</label>
                          <input type="email" className="w-full bg-black/40 border border-white/5 p-4 text-sm font-bold focus:border-primary outline-none transition-colors" placeholder="CORE@REXP.TECH" />
                       </div>
                    </div>
                    <button className="w-full py-6 bg-white text-black font-black uppercase tracking-[0.3em] text-xs hover:bg-primary transition-all">
                       Initialize Sync
                    </button>
                 </div>
              </motion.div>
           </motion.div>
         )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceProvider;
