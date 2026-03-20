import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  ArrowRight, 
  Layers, 
  Cpu, 
  Globe, 
  Shield, 
  Rocket, 
  Terminal,
  ChevronRight,
  TrendingUp,
  Wind
} from 'lucide-react';

const Startup = () => {
  return (
    <div className="bg-[#050505] text-white font-body selection:bg-primary/30 min-h-screen overflow-hidden">
      {/* 01: VIBRANT HERO SECTION */}
      <section className="relative pt-48 pb-32 px-8 md:px-24">
         {/* Background Orbs */}
         <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full animate-pulse" />
         <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-secondary/10 blur-[150px] rounded-full" />
         
         <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left flex flex-col md:flex-row gap-20 items-center">
            <div className="flex-1">
               <motion.div
                 initial={{ opacity: 0, x: -50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8 }}
               >
                  <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-8">
                     Velocity Series v1.0
                  </span>
                  <h1 className="text-5xl md:text-[10rem] font-headline font-black tracking-tighter uppercase leading-[0.8] mb-12">
                    FAST<br/>FORWARD <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary italic">EVERYTHING.</span>
                  </h1>
                  <p className="text-lg md:text-xl text-zinc-500 font-['Inter'] leading-relaxed max-w-xl mb-12">
                     Disrupting legacy architectures with autonomous, high-velocity infrastructure that scales as fast as you think.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6">
                     <button className="px-10 py-5 bg-primary text-black font-black uppercase tracking-[0.2em] text-xs hover:scale-105 transition-all flex items-center justify-center gap-3">
                        Join The Waitlist <ArrowRight size={16} />
                     </button>
                     <div className="relative group">
                        <div className="absolute inset-0 bg-secondary/20 blur-[10px] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <button className="relative w-full px-10 py-5 bg-white/5 border border-white/10 text-white font-bold uppercase tracking-[0.2em] text-xs hover:bg-white/10 transition-all">
                           View Prototype
                        </button>
                     </div>
                  </div>
               </motion.div>
            </div>
            
            <div className="md:w-[400px] relative">
               <motion.div 
                 className="w-full aspect-square border-2 border-primary/30 bg-primary/5 rounded-3xl relative overflow-hidden"
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               >
                  <div className="absolute inset-4 border border-secondary/30 rounded-2xl flex items-center justify-center">
                     <Rocket className="text-white opacity-20" size={100} />
                  </div>
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary/40" />
                  <div className="absolute top-0 left-1/2 w-[1px] h-full bg-primary/40" />
               </motion.div>
               <div className="absolute -bottom-8 -right-8 p-8 bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl">
                  <p className="text-[8px] font-black uppercase text-zinc-500 mb-2">Build Stability</p>
                  <p className="text-3xl font-headline font-black text-secondary">99.999%</p>
               </div>
            </div>
         </div>
      </section>

      {/* 02: BENTO BOX LAYOUT - FEATURES */}
      <section className="py-32 px-8 md:px-24">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
            {/* Box 1: Large Feature */}
            <div className="md:col-span-2 md:row-span-2 bg-[#131314] border border-white/5 rounded-3xl p-12 relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8">
                  <TrendingUp className="text-primary opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all" size={60} />
               </div>
               <div className="relative z-10">
                  <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-500 uppercase mb-8 block">01 / HYPER-SCALING</span>
                  <h3 className="text-4xl md:text-6xl font-headline font-black uppercase tracking-tighter mb-6">Built For <br/> Massive <span className="text-primary">Loads.</span></h3>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-sm mb-12">
                     Elastic infrastructure that automatically provisions resource clusters based on real-time traffic spikes.
                  </p>
                  <div className="flex gap-4">
                     {[1, 2, 3, 4].map(i => (
                       <div key={i} className="w-1.5 h-12 bg-zinc-800 rounded-full overflow-hidden">
                          <motion.div 
                            className="w-full h-full bg-primary origin-bottom"
                            animate={{ scaleY: [0.2, 0.8, 0.4, 1, 0.2] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                          />
                       </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Box 2: Rapid Sync */}
            <div className="md:col-span-2 bg-primary/10 border-2 border-primary/20 rounded-3xl p-10 flex flex-col justify-between group cursor-pointer hover:bg-primary hover:text-black transition-all">
               <div className="flex justify-between items-start">
                  <h4 className="text-2xl font-headline font-black uppercase tracking-tighter leading-none">Instant<br/>Global Sync.</h4>
                  <Globe size={24} className="opacity-40 group-hover:opacity-100" />
               </div>
               <div className="flex justify-between items-end">
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Deployment Latency: &lt;100ms</p>
                  <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
               </div>
            </div>

            {/* Box 3: Security */}
            <div className="bg-[#131314] border border-white/5 rounded-3xl p-10 flex flex-col justify-between hover:border-secondary transition-colors group">
               <Shield className="text-zinc-700 group-hover:text-secondary group-hover:scale-110 transition-all" size={32} />
               <div>
                  <h4 className="text-lg font-bold uppercase tracking-tight mb-2">Fortress 
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white ml-1">OS</span>
                  </h4>
                  <p className="text-[10px] text-zinc-500 uppercase font-black leading-none">Active Protection</p>
               </div>
            </div>

            {/* Box 4: Terminal */}
            <div className="bg-[#131314] border border-white/5 rounded-3xl p-6 flex flex-col hover:border-white/20 transition-colors">
               <div className="flex gap-1.5 mb-6">
                  <div className="w-2 h-2 rounded-full bg-zinc-800" />
                  <div className="w-2 h-2 rounded-full bg-zinc-800" />
               </div>
               <div className="font-mono text-[9px] text-zinc-600 space-y-1">
                  <p className="text-secondary">$ velocity sync --global</p>
                  <p>Initializing...</p>
                  <p className="text-primary">Node 01: [COMPLETE]</p>
                  <p>Node 02: [COMPLETE]</p>
                  <p className="animate-pulse">_</p>
               </div>
            </div>
         </div>
      </section>

      {/* 03: WAITLIST CTA - GLOWING INPUT */}
      <section className="py-40 px-8 md:px-24 bg-surface-container relative">
         <div className="absolute inset-0 bg-primary/5 opacity-40 pointer-events-none" />
         <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-8xl font-headline font-black uppercase tracking-tighter mb-12">DON'T WAIT FOR<br/>THE <span className="text-primary italic">FUTURE.</span></h2>
            
            <div className="relative max-w-xl mx-auto group">
               <div className="absolute inset-0 bg-primary/20 blur-[30px] opacity-0 group-focus-within:opacity-100 transition-opacity" />
               <div className="relative flex p-1.5 bg-[#0e0e0f] border border-white/10 rounded-sm">
                  <input 
                    type="email" 
                    placeholder="ENTER_YOUR_CORE_EMAIL" 
                    className="flex-1 bg-transparent border-none outline-none px-6 py-4 text-xs font-bold uppercase tracking-widest text-primary placeholder:text-zinc-800"
                  />
                  <button className="px-8 bg-white text-black font-black uppercase tracking-widest text-xs hover:bg-primary transition-colors">
                    Access
                  </button>
               </div>
            </div>
            
            <p className="mt-12 text-[8px] font-bold tracking-[0.5em] text-zinc-700 uppercase">
               JOIN 4,200+ ORGANIZATIONS ALREADY DEPLOYING ON VELOCITY.
            </p>
         </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
         <div className="flex items-center gap-2">
            <Zap className="text-primary" size={20} />
            <span className="text-xl font-headline font-black tracking-tighter uppercase italic">Velocity</span>
         </div>
         <div className="flex gap-12">
            {['Docs', 'Pricing', 'X', 'GitHub', 'System'].map(link => (
              <a key={link} href="#" className="text-[10px] font-black uppercase tracking-widest text-zinc-700 hover:text-white transition-colors">{link}</a>
            ))}
         </div>
         <p className="text-[10px] text-zinc-800 font-bold uppercase tracking-widest">© 2024 VELOCITY LABS</p>
      </footer>
    </div>
  );
};

export default Startup;
