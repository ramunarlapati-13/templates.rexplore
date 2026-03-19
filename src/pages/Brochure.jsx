import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ChevronDown, ArrowRight, Play, Server, Layers, Cpu } from 'lucide-react';

const Brochure = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div ref={containerRef} className="bg-[#050505] text-white selection:bg-secondary/30 relative">
      {/* 100vh Sticky Progress Indicator */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
         {[0, 1, 2, 3, 4].map(i => (
           <motion.div 
            key={i}
            className="w-1 h-8 rounded-full bg-white/10 overflow-hidden"
           >
             <motion.div 
               className="w-full h-full bg-primary origin-top"
               style={{ scaleY: useTransform(smoothProgress, [i * 0.2, (i + 1) * 0.2], [0, 1]) }}
             />
           </motion.div>
         ))}
      </div>

      {/* SECTION 1: HERO - VISUAL IMPACT (100vh) */}
      <section className="h-screen w-full relative flex items-center justify-center overflow-hidden">
         <motion.div 
           className="absolute inset-0 z-0"
           style={{ y: useTransform(smoothProgress, [0, 0.2], ["0%", "30%"]), scale: useTransform(smoothProgress, [0, 0.2], [1, 1.1]) }}
         >
           <img 
             src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2072&auto=format&fit=crop" 
             alt="Luxury Flagship Architecture" 
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-black/40 backdrop-grayscale-[0.5]" />
           <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
         </motion.div>

         <div className="relative z-10 text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              <h1 className="text-8xl md:text-[14rem] font-headline font-black tracking-tighter uppercase leading-[0.8] mb-4">
                THE ALPHA<br/>PROJECT.
              </h1>
              <p className="text-[10px] md:text-sm tracking-[0.8em] font-bold uppercase text-white/40 mb-12">
                A Flagship Evolution in Technical Luxury
              </p>
              <button className="group relative px-12 py-6 bg-white text-black font-black uppercase tracking-[0.3em] overflow-hidden hover:text-white transition-colors duration-500">
                <span className="relative z-10 flex items-center gap-4">
                  Experience Intro <Play size={16} fill="currentColor" />
                </span>
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </button>
            </motion.div>
         </div>
         
         <motion.div 
           className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
           animate={{ y: [0, 10, 0] }}
           transition={{ duration: 2, repeat: Infinity }}
         >
           <span className="text-[8px] tracking-[0.4em] uppercase font-bold">Scroll to Enter</span>
           <ChevronDown size={14} />
         </motion.div>
      </section>

      {/* SECTION 2: THE VISION (100vh) */}
      <section className="h-screen w-full relative flex items-center px-8 md:px-24 overflow-hidden bg-[#0a0a0a]">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              style={{ opacity: useTransform(smoothProgress, [0.1, 0.2, 0.3], [0, 1, 0]), x: useTransform(smoothProgress, [0.1, 0.2, 0.3], [-50, 0, -50]) }}
            >
               <h2 className="text-6xl md:text-[8rem] font-headline font-black tracking-tighter uppercase leading-none mb-10">
                 PURE<br/><span className="text-secondary">ESTHETIC.</span>
               </h2>
               <p className="text-slate-400 text-lg md:text-xl font-['Inter'] leading-relaxed max-w-xl mb-12">
                 We've redefined the intersection of industrial capability and minimal elegance. The Alpha Project isn't just a structure; it's a statement of digital permanence.
               </p>
               <div className="flex gap-12 border-l border-white/10 pl-8">
                  <div>
                    <p className="text-[8px] text-zinc-600 font-bold tracking-[0.4em] uppercase mb-2">Build Quality</p>
                    <p className="text-3xl font-headline font-bold uppercase transition-colors hover:text-primary cursor-default">Grade-A+</p>
                  </div>
                  <div>
                    <p className="text-[8px] text-zinc-600 font-bold tracking-[0.4em] uppercase mb-2">Efficiency</p>
                    <p className="text-3xl font-headline font-bold uppercase transition-colors hover:text-secondary cursor-default">100% Core</p>
                  </div>
               </div>
            </motion.div>
            <div className="relative h-[600px] w-full lg:w-3/4 justify-self-end">
               <motion.div 
                 className="absolute inset-0 border border-white/5 bg-white/[0.02]"
                 style={{ rotate: useTransform(smoothProgress, [0.2, 0.4], [0, 5]) }}
               />
               <motion.img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                  alt="Minimal Studio"
                  className="w-full h-full object-cover grayscale opacity-60"
                  style={{ y: useTransform(smoothProgress, [0.2, 0.4], [50, -50]) }}
               />
            </div>
         </div>
      </section>

      {/* SECTION 3: FEATURES - GLASSMORPHIC SHOWCASE (100vh) */}
      <section className="h-screen w-full bg-black relative flex flex-col justify-center px-8 md:px-24">
         <div className="max-w-7xl mx-auto w-full">
            <motion.div 
              className="mb-20"
              style={{ opacity: useTransform(smoothProgress, [0.4, 0.5, 0.6], [0, 1, 0]) }}
            >
               <h3 className="text-4xl md:text-6xl font-headline font-black uppercase tracking-tighter text-white mb-4">THE CORE ARRAY.</h3>
               <div className="h-[2px] w-40 bg-gradient-to-r from-primary via-secondary to-transparent" />
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { title: "Bioluminescent Glass", desc: "Adaptive lighting systems integrated into the structural membrane.", icon: <Layers /> },
                 { title: "Neural Link v4", desc: "Seamless interface between biological intent and spatial automation.", icon: <Cpu /> },
                 { title: "Dynamic Load", desc: "Structural integrity that adapts to shifting environmental metrics.", icon: <Server /> }
               ].map((f, i) => (
                 <motion.div 
                   key={f.title}
                   className="glass-panel p-10 border border-white/10 group cursor-default"
                   style={{ y: useTransform(smoothProgress, [0.45, 0.5, 0.55], [100 * (i + 1), 0, -100 * (i + 1)]) }}
                 >
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all">
                       {f.icon}
                    </div>
                    <h4 className="text-xl font-bold font-headline uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">{f.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 4: MILESTONES - SLEEK TIMELINE (100vh) */}
      <section className="h-screen w-full bg-white relative flex items-center justify-center overflow-hidden">
         <motion.div 
           className="absolute inset-0 bg-black opacity-100"
           style={{ opacity: useTransform(smoothProgress, [0.6, 0.65], [1, 0]) }}
         />
         <div className="relative z-10 w-full max-w-7xl px-8 flex flex-col md:flex-row gap-20 items-center">
            <div className="md:w-1/2">
               <span className="text-[10px] text-zinc-400 font-bold tracking-[0.5em] uppercase mb-8 block">Project Roadmap</span>
               <h3 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-black leading-[0.85] mb-12">
                 FROM CONCEPT<br/>TO <span className="text-primary italic">REALITY.</span>
               </h3>
               <button className="px-8 py-4 border-2 border-black text-black font-black uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-all">
                 Download Roadmap 2024
               </button>
            </div>
            
            <div className="md:w-1/2 space-y-12">
               {[
                 { year: "2021", label: "Genesis Phase", status: "Completed" },
                 { year: "2022", label: "Neural Mapping", status: "Completed" },
                 { year: "2023", label: "Alpha Build", status: "In Testing" },
                 { year: "2024", label: "Global Launch", status: "Upcoming", active: true }
               ].map((m, i) => (
                 <motion.div 
                   key={m.year}
                   className={`flex gap-8 items-end border-b-2 pb-4 ${m.active ? 'border-primary' : 'border-zinc-200'}`}
                   style={{ opacity: useTransform(smoothProgress, [0.65, 0.7, 0.8], [0, 1, 0]) }}
                 >
                    <span className={`text-4xl md:text-6xl font-headline font-black ${m.active ? 'text-primary' : 'text-zinc-200'}`}>{m.year}</span>
                    <div className="flex-1">
                       <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest leading-none mb-1">{m.status}</p>
                       <h4 className="text-xl font-bold uppercase tracking-tight text-black">{m.label}</h4>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 5: CALL TO ACTION - CINEMATIC END (100vh) */}
      <section className="h-screen w-full bg-[#050505] flex items-center justify-center p-8">
         <motion.div 
           className="text-center"
           style={{ scale: useTransform(smoothProgress, [0.85, 1], [0.8, 1]), opacity: useTransform(smoothProgress, [0.85, 0.95], [0, 1]) }}
         >
            <h2 className="text-6xl md:text-9xl font-headline font-black uppercase tracking-tighter mb-12">
              BUILD WITH<br/><span className="text-secondary italic">REXPLORE.</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
               <button className="w-full md:w-auto px-12 py-6 bg-primary text-black font-black uppercase tracking-[0.3em] rounded-sm hover:-translate-y-1 transition-transform">
                  Secure Consultation
               </button>
               <button className="w-full md:w-auto px-12 py-6 border border-white/20 text-white font-black uppercase tracking-[0.3em] hover:bg-white/5 transition-colors">
                  Contact Sales
               </button>
            </div>
            <p className="mt-20 text-zinc-700 text-[10px] tracking-[0.4em] uppercase font-bold">
               © 2024 Rexplore Technologies // Alpha Division
            </p>
         </motion.div>
      </section>
      
      {/* Floating NAV */}
      <div className="fixed top-8 left-8 right-8 flex justify-between items-center z-50">
         <h2 className="text-lg font-black tracking-tighter uppercase italic text-white/40">RC_B_02</h2>
         <div className="flex gap-4">
            <button className="px-4 py-2 border border-white/5 bg-black/40 backdrop-blur-xl text-[10px] font-bold tracking-widest uppercase hover:bg-primary group transition-all">
               <span className="group-hover:text-black">Catalog</span>
            </button>
         </div>
      </div>
    </div>
  );
};

export default Brochure;
