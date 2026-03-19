import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Globe, Shield, Zap, ChevronRight, Menu, X, ArrowRight } from 'lucide-react';

const Corporate = () => {
  return (
    <div className="bg-[#0e0e0f] text-white font-body selection:bg-secondary/30 min-h-screen">
      {/* Header / Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0e0e0f]/80 backdrop-blur-xl border-b border-white/5 px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center font-black italic">R</div>
          <span className="text-lg font-headline font-bold tracking-tighter uppercase">Rexplore <span className="text-primary font-black">Corp</span></span>
        </div>
        <div className="hidden md:flex gap-8 items-center">
          {['Vision', 'Expertise', 'Logistics', 'Leadership'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-60 hover:opacity-100 transition-opacity">{item}</a>
          ))}
          <button className="px-6 py-2 bg-white text-black text-[10px] font-bold tracking-widest uppercase hover:bg-primary hover:text-white transition-all rounded-sm">
            Inquiry
          </button>
        </div>
        <button className="md:hidden opacity-60"><Menu size={20} /></button>
      </nav>

      {/* Hero Section - Vision-First */}
      <section id="vision" className="relative h-[90vh] flex items-center px-8 md:px-20 pt-20 overflow-hidden">
         <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0f] via-[#0e0e0f]/80 to-transparent z-10" />
           <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Global HQ Architecture" 
            className="w-full h-full object-cover opacity-40 grayscale"
           />
         </div>
         
         <div className="relative z-20 max-w-4xl">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
           >
             <span className="inline-block px-3 py-1 border border-primary/40 rounded-full text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 bg-primary/5">
               Strategic Architecture v4.0
             </span>
             <h1 className="text-6xl md:text-9xl font-headline font-black tracking-tighter uppercase leading-[0.85] mb-8">
               Architecting <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Global Stability.</span>
             </h1>
             <p className="text-lg md:text-xl text-zinc-400 font-['Inter'] max-w-2xl leading-relaxed mb-12">
               Precision-engineered digital foundations for the world's most critical infrastructures. We bridge industrial scaling with avant-garde neural tech.
             </p>
             <div className="flex gap-4">
               <button className="px-8 py-4 bg-primary text-black font-black text-xs uppercase tracking-[0.2em] rounded-sm hover:brightness-110 transition-all flex items-center gap-3">
                 Explore Ecosystem <ArrowRight size={14} />
               </button>
               <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-[0.2em] rounded-sm hover:bg-white/10 transition-all">
                 System Overview
               </button>
             </div>
           </motion.div>
         </div>

         {/* Hero Footer Stats */}
         <div className="absolute bottom-12 right-12 hidden lg:grid grid-cols-2 gap-8 text-right">
            <div>
              <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold mb-1">Network Capacity</p>
              <p className="text-2xl font-headline font-bold text-secondary tracking-tighter">842.1 PB/S</p>
            </div>
            <div>
              <p className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold mb-1">Global Verticals</p>
              <p className="text-2xl font-headline font-bold text-primary tracking-tighter">142+</p>
            </div>
         </div>
      </section>

      {/* Partner Ticker - Auto-scrolling (Grayscale/Neon) */}
      <div className="py-12 bg-white/[0.02] border-y border-white/5 overflow-hidden">
        <div className="flex gap-20 animate-marquee whitespace-nowrap px-4 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
           {['QUANTUM X', 'NEURAL SYSTEMS', 'VOID CORE', 'GLOBAL STACK', 'CYBERKIN', 'ORTHO TECH', 'TITAN DYNAMICS', 'VERTEX GEAR'].map((p) => (
             <span key={p} className="text-2xl font-black font-headline tracking-tighter italic">{p}</span>
           ))}
           {/* Duplicate for seamless scroll */}
           {['QUANTUM X', 'NEURAL SYSTEMS', 'VOID CORE', 'GLOBAL STACK', 'CYBERKIN', 'ORTHO TECH', 'TITAN DYNAMICS', 'VERTEX GEAR'].map((p) => (
             <span key={`${p}-2`} className="text-2xl font-black font-headline tracking-tighter italic">{p}</span>
           ))}
        </div>
      </div>

      {/* Expertise Grid - Multi-column */}
      <section id="expertise" className="py-32 px-8 md:px-20 max-w-7xl mx-auto">
        <div className="mb-20">
          <p className="text-[10px] text-secondary font-bold tracking-[0.5em] uppercase mb-4 text-center">Core Competencies</p>
          <h2 className="text-4xl md:text-6xl font-headline font-black text-center uppercase tracking-tighter mb-4">Industrial Excellence.</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
          {[
            { icon: <Zap size={32} />, title: "Energy Grid Dynamics", desc: "Autonomous power distribution modules with millisecond arbitrage latency.", color: "text-primary" },
            { icon: <Shield size={32} />, title: "Quantum Security", desc: "Protocol-level encryption architectures for sovereign data custody.", color: "text-secondary" },
            { icon: <Globe size={32} />, title: "Global Logistics", desc: "Supply chain synchronization using high-fidelity spatial intelligence.", color: "text-zinc-400" },
            { icon: <LayoutGrid size={32} />, title: "Industrial SaaS", desc: "High-density operating systems for manufacturing and fabrication labs.", color: "text-tertiary" },
            { icon: <Users size={24} />, title: "Neural Humanism", desc: "Ergonomic interface design for complex operator-machine interaction.", color: "text-primary-container" },
            { icon: <FileText size={24} />, title: "Policy Integrity", desc: "Automated regulatory compliance frameworks for global jurisdiction.", color: "text-on-surface-variant" }
          ].map((item, idx) => (
            <div key={idx} className="p-12 border-r border-b border-white/10 hover:bg-white/[0.03] transition-colors group relative overflow-hidden">
              <div className={`mb-8 ${item.color} group-hover:scale-110 transition-transform duration-500`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold font-headline uppercase tracking-tight mb-4 text-white group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                {item.desc}
              </p>
              <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">
                View Spec <ChevronRight size={12} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Section - Carousel (Horizontal Scroll/Framer Motion) */}
      <section id="leadership" className="py-32 bg-surface-container-low overflow-hidden">
         <div className="px-8 md:px-20 mb-12 flex justify-between items-end">
            <div>
              <p className="text-[10px] text-primary font-bold tracking-[0.5em] uppercase mb-4">The Architects</p>
              <h2 className="text-4xl md:text-6xl font-headline font-black uppercase tracking-tighter">Command Unit.</h2>
            </div>
            <div className="flex gap-4 mb-4">
               <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all">←</button>
               <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all">→</button>
            </div>
         </div>
         
         <div className="flex gap-8 px-8 md:px-20 overflow-x-auto pb-12 custom-scrollbar snap-x">
            {[
              { name: "Dr. Aris Vane", role: "Chief Systems Architect", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtF9iMpcuH8Lz1Z3Dkv-oeSG6MbQ0NJfPiEHP3YI5UYZuBgZbk8n2s9ccr5R0-S6ze4CTrTmKfHThwy84T42Oq2GQB3toNSCtDWqP6jjgzaNiS2f0IuUf7PT_LzyHTJFVVfivVG-AbUNy8GikPKJfx8ZsLmGsx95Pl_MGMMEWqa1K5Xc95rUiK-9HXJ2WcpZ9cE2gEzCYaAkI-R19zamMSIPliI4N79aQgze7wIztQQB_TBGIctHWtkIKi9WLftCwmy3Kuiu8pbOyh" },
              { name: "Sera Thorne", role: "Head of Neural Dev", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtF9iMpcuH8Lz1Z3Dkv-oeSG6MbQ0NJfPiEHP3YI5UYZuBgZbk8n2s9ccr5R0-S6ze4CTrTmKfHThwy84T42Oq2GQB3toNSCtDWqP6jjgzaNiS2f0IuUf7PT_LzyHTJFVVfivVG-AbUNy8GikPKJfx8ZsLmGsx95Pl_MGMMEWqa1K5Xc95rUiK-9HXJ2WcpZ9cE2gEzCYaAkI-R19zamMSIPliI4N79aQgze7wIztQQB_TBGIctHWtkIKi9WLftCwmy3Kuiu8pbOyh" },
              { name: "Marcus Rex", role: "Global Operations", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtF9iMpcuH8Lz1Z3Dkv-oeSG6MbQ0NJfPiEHP3YI5UYZuBgZbk8n2s9ccr5R0-S6ze4CTrTmKfHThwy84T42Oq2GQB3toNSCtDWqP6jjgzaNiS2f0IuUf7PT_LzyHTJFVVfivVG-AbUNy8GikPKJfx8ZsLmGsx95Pl_MGMMEWqa1K5Xc95rUiK-9HXJ2WcpZ9cE2gEzCYaAkI-R19zamMSIPliI4N79aQgze7wIztQQB_TBGIctHWtkIKi9WLftCwmy3Kuiu8pbOyh" },
              { name: "Elena Volkov", role: "Security Principal", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtF9iMpcuH8Lz1Z3Dkv-oeSG6MbQ0NJfPiEHP3YI5UYZuBgZbk8n2s9ccr5R0-S6ze4CTrTmKfHThwy84T42Oq2GQB3toNSCtDWqP6jjgzaNiS2f0IuUf7PT_LzyHTJFVVfivVG-AbUNy8GikPKJfx8ZsLmGsx95Pl_MGMMEWqa1K5Xc95rUiK-9HXJ2WcpZ9cE2gEzCYaAkI-R19zamMSIPliI4N79aQgze7wIztQQB_TBGIctHWtkIKi9WLftCwmy3Kuiu8pbOyh" }
            ].map((p, idx) => (
              <div key={idx} className="min-w-[400px] h-[500px] bg-[#1a191b] border border-white/5 relative group snap-start overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover opacity-50 grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10">
                  <p className="text-[10px] text-primary font-bold tracking-[0.3em] uppercase mb-2">{p.role}</p>
                  <h3 className="text-3xl font-headline font-black uppercase tracking-tighter">{p.name}</h3>
                </div>
              </div>
            ))}
         </div>
      </section>

      {/* Global Logistics - Interactive Map Placeholder */}
      <section id="logistics" className="py-32 px-8 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div>
              <span className="text-[10px] text-secondary font-bold tracking-[0.5em] uppercase mb-6 block">Spatial Network</span>
              <h2 className="text-4xl md:text-7xl font-headline font-black uppercase tracking-tighter leading-none mb-8">Synchronized <br/> Global <span className="text-on-surface-variant/30 italic">Presence.</span></h2>
              <p className="text-zinc-500 text-lg leading-relaxed mb-12 font-['Inter']">
                Our infrastructure spans 42 strategic hubs, providing resilient failover capabilities and real-time synchronization for global enterprise nodes.
              </p>
              <div className="space-y-4">
                 {['United States (East/West)', 'European Union Central', 'Asia-Pacific Core', 'Southern Hemispheric Hub'].map(hub => (
                    <div key={hub} className="flex justify-between items-center py-4 border-b border-white/5 group cursor-pointer hover:px-2 transition-all">
                       <span className="text-sm font-bold uppercase tracking-widest text-zinc-400 group-hover:text-secondary">{hub}</span>
                       <span className="text-[10px] text-zinc-700 font-mono">LATENCY: &lt;12ms</span>
                    </div>
                 ))}
              </div>
           </div>
           <div className="h-[600px] bg-white/[0.02] border border-white/10 p-1 relative group overflow-hidden">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              {/* Fake Map Elements */}
              <div className="w-full h-full border border-white/5 flex items-center justify-center relative">
                 <div className="w-[80%] h-[80%] opacity-20 border-[2px] border-dashed border-zinc-700 rounded-full animate-[spin_60s_linear_infinite]" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2 h-2 bg-secondary rounded-full shadow-[0_0_20px_#00f4fe] animate-pulse" />
                    <div className="absolute top-[30%] left-[20%] w-1.5 h-1.5 bg-primary rounded-full" />
                    <div className="absolute top-[60%] right-[40%] w-1.5 h-1.5 bg-primary rounded-full opacity-50" />
                    <div className="absolute bottom-[20%] left-[50%] w-1.5 h-1.5 bg-secondary rounded-full opacity-30" />
                 </div>
                 <div className="absolute top-10 left-10 p-4 border-l border-primary/50 bg-black/50 backdrop-blur-md">
                    <p className="text-[8px] text-primary uppercase font-bold tracking-widest">Active Hubs</p>
                    <p className="text-xl font-mono text-white">42 Nodes</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 md:px-20 bg-surface-container-highest border-t border-white/5">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-1">
               <div className="flex items-center gap-2 mb-8">
                  <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center font-black italic text-black">R</div>
                  <span className="text-xl font-headline font-bold tracking-tighter uppercase whitespace-nowrap">Rexplore <span className="text-primary font-black">Corp</span></span>
               </div>
               <p className="text-zinc-600 font-['Inter'] text-[10px] tracking-widest uppercase leading-relaxed">
                  Engineering global stability through industrial-grade neural architecture. Professional excellence since 20XX.
               </p>
            </div>
            {[
              { title: "Navigation", links: ["Vision", "Expertise", "Ecosystem", "Logistics", "Leadership"] },
              { title: "Resources", links: ["Spec Sheets", "Whitepapers", "API Access", "Legal Hub"] },
              { title: "Connect", links: ["Global HQ", "Regional Hubs", "Inquiry", "Press Kit"] }
            ].map(col => (
               <div key={col.title}>
                  <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-500 mb-8">{col.title}</h4>
                  <ul className="space-y-4">
                     {col.links.map(link => (
                        <li key={link}><a href="#" className="text-zinc-600 hover:text-primary transition-colors text-[10px] font-bold tracking-widest uppercase">[{link}]</a></li>
                     ))}
                  </ul>
               </div>
            ))}
         </div>
         <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-12 border-t border-white/5 opacity-30 grayscale ring-white/10">
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-600">REXPLORE TECHNOLOGIES // GLOBAL ARCHIVE</p>
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-600">ALL RIGHTS RESERVED 2024</p>
         </div>
      </footer>

      {/* Tailwind Marquee Keyframes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />
    </div>
  );
};

export default Corporate;
