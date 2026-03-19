import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary min-h-screen">
      {/* SideNavBar */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-[#131314] flex flex-col py-8 px-4 gap-2 z-50">
        <div className="mb-10 px-4">
          <h1 className="text-lg font-black text-[#bc13fe] font-headline uppercase tracking-tighter">Dev Console</h1>
          <p className="text-[10px] text-zinc-500 font-label tracking-widest mt-1">v2.0.4-alpha</p>
        </div>
        <nav className="flex-1 space-y-1">
          <a className="flex items-center gap-3 px-4 py-3 bg-zinc-800/50 text-[#00f4fe] border-r-2 border-[#00f4fe] shadow-[inset_0_0_10px_rgba(0,244,254,0.1)] transition-all translate-x-1 duration-200" href="#">
            <span className="material-symbols-outlined text-xl">dashboard</span>
            <span className="font-['Inter'] text-sm uppercase tracking-widest">Overview</span>
          </a>
          {['insights', 'terminal', 'group', 'shield', 'settings'].map((icon) => (
            <a key={icon} className="flex items-center gap-3 px-4 py-3 text-zinc-500 hover:bg-zinc-800 hover:text-white transition-colors group" href="#">
              <span className="material-symbols-outlined text-xl">{icon}</span>
              <span className="font-['Inter'] text-sm uppercase tracking-widest">{icon.charAt(0).toUpperCase() + icon.slice(1)}</span>
            </a>
          ))}
        </nav>
        <div className="mt-auto px-4 space-y-4">
          <button className="w-full py-3 bg-gradient-to-r from-primary to-primary-container text-black font-bold text-xs uppercase tracking-widest rounded-sm hover:brightness-110 transition-all">
            New Deploy
          </button>
          <div className="pt-6 border-t border-white/5 space-y-1">
            <Link className="flex items-center gap-3 px-0 py-2 text-zinc-600 hover:text-[#bc13fe] transition-all" to="/">
              <span className="material-symbols-outlined text-sm">home</span>
              <span className="font-['Inter'] text-[10px] tracking-widest uppercase">Portal</span>
            </Link>
            <a className="flex items-center gap-3 px-0 py-2 text-zinc-600 hover:text-[#bc13fe] transition-all" href="#">
              <span className="material-symbols-outlined text-sm">logout</span>
              <span className="font-['Inter'] text-[10px] tracking-widest uppercase">Logout</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="ml-64 p-8 min-h-screen">
        <header className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-headline font-bold tracking-tighter text-white">System Dynamics</h2>
            <div className="flex items-center gap-3 mt-2">
              <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                Network Live
              </span>
              <span className="text-on-surface-variant text-xs font-label uppercase tracking-widest opacity-60">Last scan: 14:02:29 UTC</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-xs text-on-surface-variant uppercase tracking-widest font-label">Active Node</p>
              <p className="text-sm font-mono text-white">US-EAST-01</p>
            </div>
            <div className="w-10 h-10 rounded-sm bg-surface-container-highest flex items-center justify-center border border-outline-variant/20">
              <img alt="User Profile Avatar" className="w-8 h-8 opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtF9iMpcuH8Lz1Z3Dkv-oeSG6MbQ0NJfPiEHP3YI5UYZuBgZbk8n2s9ccr5R0-S6ze4CTrTmKfHThwy84T42Oq2GQB3toNSCtDWqP6jjgzaNiS2f0IuUf7PT_LzyHTJFVVfivVG-AbUNy8GikPKJfx8ZsLmGsx95Pl_MGMMEWqa1K5Xc95rUiK-9HXJ2WcpZ9cE2gEzCYaAkI-R19zamMSIPliI4N79aQgze7wIztQQB_TBGIctHWtkIKi9WLftCwmy3Kuiu8pbOyh"/>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-6">
          <section className="col-span-12 lg:col-span-8 bg-surface-container-low p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
              <span className="material-symbols-outlined text-zinc-700 group-hover:text-secondary transition-colors cursor-pointer">open_in_full</span>
            </div>
            <div className="flex justify-between items-start mb-8">
              <div>
                <p className="text-[10px] text-primary uppercase tracking-[0.2em] font-label mb-1">Global Throughput</p>
                <h3 className="text-2xl font-headline font-bold text-white tracking-tight">412.8 Gb/s</h3>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">Primary</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">Fallback</span>
                </div>
              </div>
            </div>
            <div className="h-64 w-full relative">
              <svg className="w-full h-full" viewBox="0 0 800 200">
                <defs>
                  <linearGradient id="cyan-glow" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#00f4fe" stopOpacity="0.2"></stop>
                    <stop offset="100%" stopColor="#00f4fe" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
                <path className="drop-shadow-[0_0_8px_rgba(0,244,254,0.8)]" d="M0,150 Q50,140 100,160 T200,130 T300,140 T400,90 T500,110 T600,60 T700,80 T800,40" fill="none" stroke="#00f4fe" strokeWidth="3"></path>
                <path d="M0,150 Q50,140 100,160 T200,130 T300,140 T400,90 T500,110 T600,60 T700,80 T800,40 V200 H0 Z" fill="url(#cyan-glow)"></path>
                <path d="M0,180 Q100,170 200,185 T400,160 T600,175 T800,150" fill="none" opacity="0.6" stroke="#ff6e81" strokeDasharray="8,4" strokeWidth="2"></path>
              </svg>
              <div className="absolute top-10 left-[60%] glass-panel border border-secondary/30 px-3 py-2 rounded-sm shadow-xl">
                <p className="text-[8px] text-secondary uppercase font-bold tracking-widest mb-0.5">Peak Load</p>
                <p className="text-xs font-mono text-white">0.942ms Latency</p>
              </div>
            </div>
          </section>

          <section className="col-span-12 lg:col-span-4 bg-surface-container p-6 flex flex-col justify-between">
            <div>
              <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.2em] font-label mb-4">Project Integrity</p>
              <div className="space-y-6">
                {[
                  { name: 'Quantum Pipeline', status: 'Active • 98% Health', color: 'bg-secondary', icon: 'check_circle' },
                  { name: 'Neural Bridge v4', status: 'Deploying • 62% Sync', color: 'bg-primary', icon: 'sync', spin: true },
                  { name: 'Void Protocol', status: 'Standby • Off-grid', color: 'bg-zinc-700', icon: 'pause_circle' }
                ].map((p) => (
                  <div key={p.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-8 ${p.color} rounded-full`}></div>
                      <div>
                        <p className="text-sm font-bold text-white uppercase tracking-tight">{p.name}</p>
                        <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">{p.status}</p>
                      </div>
                    </div>
                    <span className={`material-symbols-outlined text-${p.color.replace('bg-', '')} ${p.spin ? 'animate-spin' : ''}`}>{p.icon}</span>
                  </div>
                ))}
              </div>
            </div>
            <button className="w-full mt-8 py-3 bg-surface-container-highest border border-outline-variant/20 text-xs font-bold uppercase tracking-widest hover:bg-zinc-800 transition-colors">
              View Registry
            </button>
          </section>

          <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
               { label: 'Cluster 01A', val: '12.4%', sub: 'CPU', color: 'border-secondary', fill: 'secondary', icon: 'memory' },
               { label: 'Cluster 02B', val: '84.1%', sub: 'MEM', color: 'border-primary', fill: 'primary', icon: 'storage' },
               { label: 'Thermal Index', val: '42°C', sub: 'NOMINAL', color: 'border-tertiary', fill: 'tertiary', icon: 'thermostat' },
               { label: 'Uptime', val: '99.98%', sub: 'SLA', color: 'border-zinc-600', fill: 'zinc-400', icon: 'timer' }
             ].map((c) => (
               <div key={c.label} className={`bg-surface-container-low p-5 border-l-2 ${c.color} shadow-[inset_0_0_10px_rgba(0,0,0,0.2)]`}>
                 <div className="flex justify-between items-start mb-4">
                   <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">{c.label}</p>
                   <span className="material-symbols-outlined text-lg">{c.icon}</span>
                 </div>
                 <p className="text-2xl font-headline font-bold text-white">{c.val} <span className="text-xs font-normal text-on-surface-variant">{c.sub}</span></p>
                 <div className="w-full h-1 bg-surface-container-highest mt-3 overflow-hidden">
                   <div className={`h-full bg-${c.fill}`} style={{ width: c.val.includes('%') ? c.val : '42%' }}></div>
                 </div>
               </div>
             ))}
          </div>

          <section className="col-span-12 bg-surface-container-lowest border border-white/5 p-6 rounded-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-error-dim"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#780023]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00696e]"></span>
                </div>
                <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-2">Console Output — kernel.log</h4>
              </div>
              <span className="text-[10px] font-mono text-secondary">0 ERRORS / 4 WARNINGS</span>
            </div>
            <div className="font-mono text-xs space-y-2 max-h-48 overflow-y-auto custom-scrollbar pr-4 text-left">
              {[
                { time: '14:12:01', type: 'INF', msg: 'Handshake established with Node 77-Alpha. SSL Cipher: AES-256-GCM.', color: 'text-secondary-dim' },
                { time: '14:12:05', type: 'WRN', msg: 'Latency spike detected in region EU-WEST (152ms). Re-routing traffic to backup gateway.', color: 'text-tertiary' },
                { time: '14:12:12', type: 'INF', msg: 'Automatic scaling initiated: Cluster 01B successfully provisioned +4 worker threads.', color: 'text-secondary-dim' },
                { time: '14:12:45', type: 'SYS', msg: 'CyberKinetic Core Integrity Check: 100% Secure. All protocols operational.', color: 'text-primary' }
              ].map((log, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-zinc-700">[{log.time}]</span>
                  <span className={log.color}>{log.type}</span>
                  <span className="text-zinc-400">{log.msg}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <footer className="ml-64 bg-[#0e0e0f] w-full border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-16 max-w-7xl mx-auto">
          <div className="col-span-1 md:col-span-1">
            <h5 className="text-xl font-bold text-white font-headline tracking-tighter mb-4">CyberKinetic</h5>
            <p className="text-zinc-600 font-['Inter'] text-[10px] tracking-widest uppercase leading-relaxed">
              Engineering the next generation of digital infrastructure through autonomous systems and neural architecture.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="text-primary font-bold text-[10px] tracking-widest uppercase mb-2 text-left">Navigation</h6>
            {['Solutions', 'Development', 'Services'].map((link) => (
              <a key={link} className="text-zinc-600 hover:text-[#bc13fe] text-[10px] tracking-widest uppercase transition-all text-left" href="#">{link}</a>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <h6 className="text-primary font-bold text-[10px] tracking-widest uppercase mb-2 text-left">Legal & Docs</h6>
            {['Privacy Policy', 'Terms of Service', 'API Docs', 'System Status'].map((link) => (
              <a key={link} className="text-zinc-600 hover:text-[#bc13fe] text-[10px] tracking-widest uppercase transition-all text-left" href="#">{link}</a>
            ))}
          </div>
          <div className="flex flex-col justify-end items-end">
            <p className="text-zinc-600 font-['Inter'] text-[10px] tracking-widest uppercase text-right">© 2024 REXPLORE TECHNOLOGIES.<br/>ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
