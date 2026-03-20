import React, { useState } from 'react';
import { LayoutGrid, ShoppingBag, User, FileText, Users, GraduationCap, Settings, Play } from 'lucide-react';

const REXPLORE_CATALOG = {
  BUSINESS: ["Corporate V1", "Corporate V2", "Brochure V1", "Brochure V2", "Brochure V3", "Service Provider V1", "Service Provider V2", "Catalog V1", "Catalog V2", "Catalog V3", "Startup"],
  ECOMMERCE: ["Marketplace", "Brand Store", "Auction", "Dropshipping"],
  PERSONAL: ["Portfolio", "Resume", "Personal Blog", "Memorial"],
  CONTENT: ["Niche Blog", "News Portal", "Magazine", "Wiki/Knowledge Base"],
  COMMUNITY: ["Social Network", "Forum", "Q&A Site", "Membership Portal"],
  EDUCATION: ["E-learning", "University", "Nonprofit", "Government"],
  FUNCTIONAL: ["Landing Page", "Booking", "Directory", "Crowdfunding", "Job Board", "AI Chatbot", "Web Tools", "Dashboard"],
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

import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Link } from 'react-router-dom';
import { Home, Zap } from 'lucide-react';

const TemplateDock = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  if (location.pathname === '/' || location.pathname === '/catalog') return null;

  const suggestions = {
    '/corporate-v1': [{ name: 'Corporate V2', path: '/corporate-v2' }],
    '/corporate-v2': [{ name: 'Corporate V1', path: '/corporate-v1' }],
    '/brochure-v1': [{ name: 'Brochure V2', path: '/brochure-v2' }, { name: 'Brochure V3', path: '/brochure-v3' }],
    '/brochure-v2': [{ name: 'Brochure V1', path: '/brochure-v1' }, { name: 'Brochure V3', path: '/brochure-v3' }],
    '/brochure-v3': [{ name: 'Brochure V1', path: '/brochure-v1' }, { name: 'Brochure V2', path: '/brochure-v2' }],
    '/service-provider-v1': [{ name: 'Service Provider V2', path: '/service-provider-v2' }],
    '/service-provider-v2': [{ name: 'Service Provider V1', path: '/service-provider-v1' }],
    '/catalog-v1': [{ name: 'Catalog V2', path: '/catalog-v2' }, { name: 'Catalog V3', path: '/catalog-v3' }],
    '/catalog-v2': [{ name: 'Catalog V1', path: '/catalog-v1' }, { name: 'Catalog V3', path: '/catalog-v3' }],
    '/catalog-v3': [{ name: 'Catalog V1', path: '/catalog-v1' }, { name: 'Catalog V2', path: '/catalog-v2' }],
  };

  const currentPath = location.pathname;
  const currentSuggestions = suggestions[currentPath] || [];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center gap-4 w-full px-4 max-w-lg">
      {currentSuggestions.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="text-[10px] text-white/40 uppercase tracking-widest font-black self-center mr-2 block w-full text-center md:w-auto md:text-left">Try Versions:</span>
          {currentSuggestions.map((s) => (
            <button
              key={s.path}
              onClick={() => navigate(s.path)}
              className="bg-neutral-900/80 backdrop-blur-md border border-white/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[9px] md:text-[10px] font-black uppercase text-white/70 hover:text-white hover:border-yellow-400 hover:bg-neutral-800 transition-all shadow-xl animate-blink-yellow hover:animate-none"
            >
              {s.name}
            </button>
          ))}
        </div>
      )}
      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 px-4 py-2 md:px-6 md:py-3 rounded-full flex items-center gap-4 md:gap-6 shadow-2xl overflow-hidden">
        <Link to="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors border-r border-white/10 pr-4 md:pr-6">
          <LayoutGrid size={16} className="md:w-[18px] md:h-[18px]" />
          <span className="text-xs md:text-sm font-black uppercase tracking-tighter">Home</span>
        </Link>
        <button 
          onClick={() => {
            const currentUrl = window.location.href;
            const baseUrl = "https://rexplore.tech/book-a-project";
            window.location.href = `${baseUrl}?ref=${encodeURIComponent(currentUrl)}`;
          }}
          className="flex items-center gap-2 bg-yellow-400 text-black px-3 py-1.5 md:px-5 md:py-2 rounded-full font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(250,230,0,0.3)] whitespace-nowrap"
        >
          <Zap size={12} className="md:w-[14px] md:h-[14px]" fill="black" />
          I want this type
        </button>
      </div>
    </div>
  );
};

import DashboardPage from './pages/Dashboard';
import CorporateV1Page from './pages/CorporateV1';
import CorporateV2Page from './pages/CorporateV2';
import BrochureV1Page from './pages/BrochureV1';
import BrochureV2Page from './pages/BrochureV2';
import BrochureV3Page from './pages/BrochureV3';
import ServiceProviderV1Page from './pages/ServiceProviderV1';
import ServiceProviderV2Page from './pages/ServiceProviderV2';
import CatalogV1Page from './pages/CatalogV1';
import CatalogV2Page from './pages/CatalogV2';
import CatalogV3Page from './pages/CatalogV3';
import StartupPage from './pages/Startup';
import NotFoundPage from './pages/NotFound';






function AppContent() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('BUSINESS');

  const handleSubtypeClick = (subtype) => {
    if (subtype === 'Dashboard') {
      navigate('/dashboard');
    }
    if (subtype === 'Corporate V1') {
      navigate('/corporate-v1');
    }
    if (subtype === 'Corporate V2') {
      navigate('/corporate-v2');
    }
    if (subtype === 'Brochure V1') {
      navigate('/brochure-v1');
    }
    if (subtype === 'Brochure V2') {
      navigate('/brochure-v2');
    }
    if (subtype === 'Brochure V3') {
      navigate('/brochure-v3');
    }
    if (subtype === 'Service Provider V1') {
      navigate('/service-provider-v1');
    }
    if (subtype === 'Service Provider V2') {
      navigate('/service-provider-v2');
    }
    if (subtype === 'Catalog V1') {
      navigate('/catalog-v1');
    }
    if (subtype === 'Catalog V2') {
      navigate('/catalog-v2');
    }
    if (subtype === 'Catalog V3') {
      navigate('/catalog-v3');
    }
    if (subtype === 'Startup') {
      navigate('/startup');
    }
    // Add more mappings as more codes are uploaded
  };

  console.log("Rexplore Technologies: Full Subtype List Loaded.");

  return (
    <div className="min-h-screen bg-[#050505] text-white font-body selection:bg-primary/30">
      {/* GLOW BACKGROUND EFFECT */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <nav className="fixed top-0 w-full p-4 md:p-8 flex justify-between items-center bg-black/40 backdrop-blur-2xl border-b border-white/5 z-50">
        <h1 className="text-base md:text-xl font-black tracking-tighter uppercase italic text-primary">REXPLORE TECHNOLOGIES</h1>
        <div className="text-[8px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.4em] opacity-40 uppercase">V.1.2 // CATALOG_SYSTEM</div>
      </nav>

      <main className="relative pt-24 md:pt-40 pb-20 px-4 md:px-6 max-w-7xl mx-auto z-10">
        <div className="mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
            The Digital Blueprints
          </span>
          <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter mb-8 max-w-4xl">
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
        <div className="bg-white/[0.02] border border-white/5 rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-20 backdrop-blur-md">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div>
              <h3 className="text-2xl md:text-5xl font-black uppercase tracking-tight mb-2">{selectedCategory}</h3>
              <p className="text-slate-500 uppercase text-[8px] md:text-[10px] tracking-[0.3em] font-bold">Industrial Frameworks Available</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REXPLORE_CATALOG[selectedCategory].map((subtype, index) => (
              <div 
                key={subtype} 
                onClick={() => handleSubtypeClick(subtype)}
                className="group p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 bg-white/[0.03] hover:bg-primary transition-all cursor-pointer"
              >
                <div className="flex justify-between items-center text-left">
                  <div className="flex items-center gap-3 md:gap-4">
                    <span className="text-[10px] font-black text-primary group-hover:text-black opacity-40 transition-colors uppercase italic tracking-widest leading-none bg-primary/10 group-hover:bg-black/10 px-2 py-1 rounded">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="text-base md:text-lg font-bold text-white group-hover:text-black transition-colors uppercase italic tracking-tighter">{subtype}</span>
                  </div>
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

function App() {
  return (
    <Router>
      <TemplateDock />
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/corporate-v1" element={<CorporateV1Page />} />
        <Route path="/corporate-v2" element={<CorporateV2Page />} />
        <Route path="/brochure-v1" element={<BrochureV1Page />} />
        <Route path="/brochure-v2" element={<BrochureV2Page />} />
        <Route path="/brochure-v3" element={<BrochureV3Page />} />
        <Route path="/service-provider-v1" element={<ServiceProviderV1Page />} />
        <Route path="/service-provider-v2" element={<ServiceProviderV2Page />} />
        <Route path="/catalog-v1" element={<CatalogV1Page />} />
        <Route path="/catalog-v2" element={<CatalogV2Page />} />
        <Route path="/catalog-v3" element={<CatalogV3Page />} />
        <Route path="/startup" element={<StartupPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
