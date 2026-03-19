import React, { useState } from 'react';
import { LayoutGrid, ShoppingBag, User, FileText, Users, GraduationCap, Settings, Play } from 'lucide-react';

const REXPLORE_CATALOG = {
  BUSINESS: ["Corporate", "Brochure", "Service Provider", "Catalog", "Startup"],
  ECOMMERCE: ["Marketplace", "Brand Store", "Auction", "Dropshipping"],
  PERSONAL: ["Portfolio", "Resume", "Personal Blog", "Memorial"],
  CONTENT: ["Niche Blog", "News Portal", "Magazine", "Wiki/Knowledge Base"],
  COMMUNITY: ["Social Network", "Forum", "Q&A Site", "Membership Portal"],
  EDUCATION: ["E-learning", "University", "Nonprofit", "Government"],
  FUNCTIONAL: ["Landing Page", "Booking", "Directory", "Crowdfunding", "Job Board", "AI Chatbot", "Web Tools"],
  ENTERTAINMENT: ["Video Stream", "Music Stream", "Gaming"]
};

const categoryIcons = {
  BUSINESS: <LayoutGrid />,
  ECOMMERCE: <ShoppingBag />,
  PERSONAL: <User />,
  CONTENT: <FileText />,
  COMMUNITY: <Users />,
  EDUCATION: <GraduationCap />,
  FUNCTIONAL: <Settings />,
  ENTERTAINMENT: <Play />,
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState('BUSINESS');

  console.log("Rexplore Technologies: Full Subtype List Loaded.");

  return (
    <div className="min-h-screen bg-[#050505] text-white font-body selection:bg-primary/30">
      {/* GLOW BACKGROUND EFFECT */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <nav className="fixed top-0 w-full p-8 flex justify-between items-center bg-black/40 backdrop-blur-2xl border-b border-white/5 z-50">
        <h1 className="text-xl font-black tracking-tighter uppercase italic text-primary">REXPLORE TECHNOLOGIES</h1>
        <div className="text-[10px] font-bold tracking-[0.4em] opacity-40 uppercase">V.1.2 // CATALOG_SYSTEM</div>
      </nav>

      <main className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto z-10">
        <div className="mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
            The Digital Blueprints
          </span>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 max-w-4xl">
            Choose Your <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary">Architecture.</span>
          </h2>
          <p className="text-slate-500 max-w-xl leading-relaxed text-sm md:text-base mb-12">
            Rexplore Technologies provides specialized industrial frameworks for every digital vertical. Select a category below to explore our core subtypes.
          </p>
        </div>

        {/* CATEGORY SELECTOR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {Object.keys(REXPLORE_CATALOG).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`p-6 rounded-2xl border transition-all text-left flex flex-col gap-4 group ${
                selectedCategory === category
                  ? 'bg-primary/10 border-primary text-primary'
                  : 'bg-white/5 border-white/5 text-white/40 hover:border-white/20 hover:text-white'
              }`}
            >
              <div className={`transition-transform duration-500 ${selectedCategory === category ? 'scale-110' : 'group-hover:scale-110 opacity-50'}`}>
                {categoryIcons[category]}
              </div>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase">{category}</span>
            </button>
          ))}
        </div>

        {/* SUBTYPE LIST */}
        <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-12 md:p-20 backdrop-blur-md">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-2">{selectedCategory}</h3>
              <p className="text-slate-500 uppercase text-[10px] tracking-[0.3em] font-bold">Industrial Frameworks Available</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REXPLORE_CATALOG[selectedCategory].map((subtype) => (
              <div key={subtype} className="group p-8 rounded-3xl border border-white/5 bg-white/[0.03] hover:bg-primary transition-all cursor-pointer">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-white group-hover:text-black transition-colors uppercase italic tracking-tighter">{subtype}</span>
                  <div className="h-2 w-2 rounded-full bg-primary group-hover:bg-black transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="w-full p-12 text-center text-[8px] tracking-[0.5em] text-slate-700 uppercase">
        © 2024 REXPLORE TECHNOLOGIES. ALL RIGHTS RESERVED.
      </footer>
    </div>
  );
}

export default App;
