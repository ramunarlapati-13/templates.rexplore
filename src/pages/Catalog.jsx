import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, Filter, ShoppingCart, 
  ChevronRight, ArrowRight, Eye, Grid, List as ListIcon,
  HardDrive, Zap, Info, ShieldCheck, Cpu
} from 'lucide-react';

const PRODUCTS = [
  { id: 1, name: "Neural Modulator v4", category: "Core Systems", scale: "Enterprise", material: "Composite Silicon", price: 12400 },
  { id: 2, name: "Quantum Relay Hub", category: "Network", scale: "Global", material: "Titanium Alloy", price: 4200 },
  { id: 3, name: "Sovereign Data Vault", category: "Security", scale: "Industrial", material: "Reinforced Ceramic", price: 8900 },
  { id: 4, name: "Bio-Interface 09", category: "Interface", scale: "Personal", material: "Soft Polymer", price: 1200 },
  { id: 5, name: "Vector Power Core", category: "Energy", scale: "Factory", material: "Graphene Matrix", price: 24500 },
  { id: 6, name: "Ortho Fiber Link", category: "Network", scale: "Regional", material: "Optical Glass", price: 600 },
  { id: 7, name: "Z-Layer Firewall", category: "Security", scale: "Infrastructure", material: "Virtual Density", price: 15600 },
  { id: 8, name: "Apex Drone Dock", category: "Logistics", scale: "City", material: "Carbon Fiber", price: 3400 },
  { id: 9, name: "Vortex Cooling Rail", category: "Thermal", scale: "Cluster", material: "Cryo-Grade Steel", price: 7800 },
];

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [viewMode, setViewMode] = useState("grid");

  const filteredProducts = selectedCategory === "All" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="bg-[#0e0e0f] text-white font-body selection:bg-secondary/30 min-h-screen">
      {/* 01: CATALOG HEADER */}
      <header className="fixed top-0 w-full z-50 bg-[#0e0e0f]/80 backdrop-blur-xl border-b border-white/5 py-4 px-8 flex justify-between items-center">
         <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">grid_view</span>
            <h1 className="text-xl font-headline font-black uppercase tracking-tighter">Blueprint <span className="text-primary italic">Catalog</span></h1>
         </div>
         
         <div className="flex-1 max-w-xl mx-8 hidden md:block">
            <div className="relative group">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-primary transition-colors" size={16} />
               <input 
                type="text" 
                placeholder="PROD_ID_SEARCH // GLOBAL_INDEX" 
                className="w-full bg-white/5 border border-white/10 rounded-sm py-2.5 pl-12 pr-4 text-[10px] font-bold tracking-widest uppercase focus:border-primary outline-none focus:bg-white/[0.08] transition-all"
               />
            </div>
         </div>

         <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:text-primary transition-colors"
            >
               <ShoppingCart size={20} />
               {cart.length > 0 && (
                 <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-black text-[8px] font-black flex items-center justify-center">
                    {cart.length}
                 </span>
               )}
            </button>
            <div className="w-10 h-10 rounded-sm bg-surface-container-highest border border-white/10 flex items-center justify-center cursor-pointer">
               <span className="material-symbols-outlined text-zinc-600">person</span>
            </div>
         </div>
      </header>

      {/* 02: MAIN LAYOUT */}
      <div className="pt-24 flex min-h-screen">
         {/* SIDEBAR FILTER */}
         <aside className="w-72 border-r border-white/5 bg-[#131314] overflow-y-auto hidden lg:block p-8 fixed h-[calc(100vh-6rem)]">
            <div className="mb-12">
               <p className="text-[10px] text-zinc-600 font-bold tracking-[0.4em] uppercase mb-8">Structural Index</p>
               <div className="space-y-1">
                  {["All", "Core Systems", "Network", "Security", "Energy", "Logistics", "Thermal"].map(cat => (
                    <button 
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left py-3 px-4 text-[10px] font-bold tracking-widest uppercase transition-all flex justify-between items-center group
                        ${selectedCategory === cat ? 'bg-primary/10 text-primary border-r-2 border-primary' : 'text-zinc-600 hover:text-white hover:bg-white/5'}`}
                    >
                       {cat}
                       <ChevronRight size={10} className={`${selectedCategory === cat ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity`} />
                    </button>
                  ))}
               </div>
            </div>

            <div className="mb-12">
               <p className="text-[10px] text-zinc-600 font-bold tracking-[0.4em] uppercase mb-8">Material Scale</p>
               <div className="space-y-4">
                  {['Enterprise', 'Global', 'Industrial', 'Personal'].map(m => (
                    <div key={m} className="flex items-center gap-3 cursor-pointer group">
                       <div className="w-3 h-3 border border-white/20 group-hover:border-secondary transition-all" />
                       <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 group-hover:text-white">{m}</span>
                    </div>
                  ))}
               </div>
            </div>

            <div className="p-6 bg-primary/5 border border-primary/20 rounded-sm mt-auto">
               <p className="text-[8px] font-bold tracking-[0.3em] text-primary uppercase mb-2">Notice</p>
               <p className="text-[10px] text-zinc-500 leading-relaxed font-['Inter'] mb-4">
                 Industrial certification required for Tier 1 procurement.
               </p>
               <button className="text-[10px] font-black text-white hover:text-primary uppercase flex items-center gap-2">
                 Verify Auth <ArrowRight size={10} />
               </button>
            </div>
         </aside>

         {/* CONTENT AREA */}
         <main className="flex-1 lg:ml-72 p-8 md:p-12">
            <div className="flex justify-between items-end mb-12 flex-wrap gap-8">
               <div>
                  <h2 className="text-4xl md:text-6xl font-headline font-black uppercase tracking-tighter">System Output.</h2>
                  <p className="text-zinc-500 text-[10px] tracking-[0.4em] font-bold uppercase mt-2">v.24 // Filtered: {selectedCategory.toUpperCase()}</p>
               </div>
               <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-1">
                  <button 
                    onClick={() => setViewMode("grid")}
                    className={`p-2 transition-all ${viewMode === 'grid' ? 'bg-primary text-black' : 'text-zinc-600 hover:text-white'}`}
                  >
                     <Grid size={16} />
                  </button>
                  <button 
                    onClick={() => setViewMode("list")}
                    className={`p-2 transition-all ${viewMode === 'list' ? 'bg-primary text-black' : 'text-zinc-600 hover:text-white'}`}
                  >
                     <ListIcon size={16} />
                  </button>
               </div>
            </div>

            {/* PRODUCT GRID */}
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
               <AnimatePresence mode="popLayout">
                  {filteredProducts.map((p) => (
                    <motion.div 
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      key={p.id}
                      className="group bg-surface-container-low border border-white/5 hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
                    >
                       <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Eye size={16} className="text-primary cursor-pointer hover:scale-110 transition-transform" />
                       </div>

                       <div className="p-10">
                          <span className="text-[8px] text-zinc-600 font-bold tracking-[0.4em] uppercase mb-4 block">{p.category}</span>
                          <h3 className="text-2xl font-headline font-black uppercase tracking-tighter text-white mb-2 group-hover:text-primary transition-colors">{p.name}</h3>
                          <div className="flex gap-4 mb-10 overflow-hidden h-6 items-center">
                             <div className="flex items-center gap-1.5 opacity-40">
                                <span className="material-symbols-outlined text-[12px]">scale</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest">{p.scale}</span>
                             </div>
                             <div className="w-[1px] h-3 bg-white/10" />
                             <div className="flex items-center gap-1.5 opacity-40">
                                <span className="material-symbols-outlined text-[12px]">layers</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest">{p.material}</span>
                             </div>
                          </div>

                          <div className="flex justify-between items-end border-t border-white/5 pt-8">
                             <div>
                                <p className="text-[8px] text-zinc-700 font-bold tracking-[0.3em] uppercase mb-1">UNIT_PRICE</p>
                                <p className="text-xl font-headline font-bold text-white">${p.price.toLocaleString()}</p>
                             </div>
                             <button 
                              onClick={() => addToCart(p)}
                              className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-primary hover:text-black hover:border-primary text-[10px] font-black uppercase tracking-widest transition-all"
                             >
                                Quick Order
                             </button>
                          </div>
                       </div>

                       {/* Hover Specs Overlay - Neural Reveal */}
                       <div className="absolute inset-0 bg-primary/95 pointer-events-none translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] p-10 flex flex-col justify-between">
                          <div className="text-black">
                             <h4 className="text-3xl font-headline font-black uppercase tracking-tighter mb-8 leading-none">SPECS_ID: {p.id.toString().padStart(4, '0')}</h4>
                             <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                   <Zap size={18} />
                                   <div>
                                      <p className="text-[8px] font-black uppercase leading-none mb-1">Latency Index</p>
                                      <p className="text-sm font-bold uppercase">Optimized // &lt;5ms</p>
                                   </div>
                                </div>
                                <div className="flex items-center gap-4">
                                   <Cpu size={18} />
                                   <div>
                                      <p className="text-[8px] font-black uppercase leading-none mb-1">Architecture</p>
                                      <p className="text-sm font-bold uppercase">Neural Gen-8</p>
                                   </div>
                                </div>
                                <div className="flex items-center gap-4">
                                   <ShieldCheck size={18} />
                                   <div>
                                      <p className="text-[8px] font-black uppercase leading-none mb-1">Security Rating</p>
                                      <p className="text-sm font-bold uppercase">Industrial-9</p>
                                   </div>
                                </div>
                             </div>
                          </div>
                          <p className="text-black text-[10px] font-black flex items-center gap-2">
                             VIEW DATA SHEET <ChevronRight size={14} />
                          </p>
                       </div>
                    </motion.div>
                  ))}
               </AnimatePresence>
            </div>
         </main>
      </div>

      {/* 03: CART SIDEBAR OVERLAY */}
      <AnimatePresence>
         {isCartOpen && (
           <>
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={() => setIsCartOpen(false)}
               className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
             />
             <motion.div 
               initial={{ x: '100%' }}
               animate={{ x: 0 }}
               exit={{ x: '100%' }}
               transition={{ type: 'spring', damping: 25, stiffness: 200 }}
               className="fixed right-0 top-0 h-full w-full md:w-[450px] bg-surface-container-highest z-[101] border-l border-white/10 p-12 flex flex-col"
             >
                <div className="flex justify-between items-center mb-12">
                   <h3 className="text-3xl font-headline font-black uppercase tracking-tighter">Inquiry <span className="text-primary">Box</span></h3>
                   <button onClick={() => setIsCartOpen(false)} className="text-zinc-600 hover:text-white transition-colors"><X size={24} /></button>
                </div>

                <div className="flex-1 overflow-y-auto space-y-6 pr-4 custom-scrollbar">
                   {cart.length === 0 ? (
                     <div className="h-full flex flex-col items-center justify-center text-zinc-700">
                        <ShoppingCart size={48} className="mb-4 opacity-20" />
                        <p className="text-[10px] font-bold tracking-[0.4em] uppercase">Box is Empty</p>
                     </div>
                   ) : (
                     cart.map((item, i) => (
                       <div key={i} className="bg-black/40 border border-white/5 p-6 flex justify-between items-center group">
                          <div>
                             <p className="text-[8px] text-zinc-600 font-bold uppercase mb-1">{item.category}</p>
                             <h4 className="text-sm font-bold text-white uppercase">{item.name}</h4>
                          </div>
                          <div className="text-right">
                             <p className="text-lg font-headline font-bold text-primary tracking-tighter">${item.price.toLocaleString()}</p>
                             <button 
                              onClick={() => setCart(cart.filter((_, idx) => idx !== i))}
                              className="text-[8px] text-zinc-700 hover:text-error uppercase font-bold tracking-widest mt-1"
                             >
                                Remove
                             </button>
                          </div>
                       </div>
                     ))
                   )}
                </div>

                <div className="pt-12 border-t border-white/5">
                   <div className="flex justify-between items-end mb-8">
                      <div>
                         <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest mb-1">ESTIMATED_QUOTE</p>
                         <h4 className="text-4xl font-headline font-black text-white">${cart.reduce((sum, item) => sum + item.price, 0).toLocaleString()}</h4>
                      </div>
                      <p className="text-[10px] text-zinc-700 font-mono italic">EXCL. TAX&LOGISTICS</p>
                   </div>
                   <button className="w-full py-6 bg-white text-black font-black uppercase tracking-[0.3em] text-xs hover:bg-primary transition-all flex justify-center items-center gap-4">
                      Submit Bulk Inquiry <ChevronRight size={16} />
                   </button>
                </div>
             </motion.div>
           </>
         )}
      </AnimatePresence>
    </div>
  );
};

export default Catalog;
