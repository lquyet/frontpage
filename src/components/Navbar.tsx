import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenWaitlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWaitlist }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#08090D]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/40' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-indigo-600 to-violet-600 p-[1px] shadow-lg shadow-indigo-500/20">
            <div className="w-full h-full bg-[#090A10] rounded-[7px] flex items-center justify-center transition-colors group-hover:bg-[#0F111C]">
              <span className="font-mono text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-violet-200">
                V&K
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[15px] font-semibold tracking-tight text-white group-hover:text-indigo-200 transition-colors">
              Victor & Klein
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
              Information Layer
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-slate-300">
          <a href="#vision" className="hover:text-white transition-colors">Vision</a>
          <a href="#problem" className="hover:text-white transition-colors">The Paradigm Shift</a>
          <a href="#architecture" className="hover:text-white transition-colors">Knowledge Graph</a>
          <a href="#data-engine" className="hover:text-white transition-colors">Verifiable Intelligence</a>
          <a href="#interface" className="hover:text-white transition-colors">Unified Interface</a>
          <a href="#dual-runtime" className="hover:text-white transition-colors">Human & AI</a>
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>OS v0.9 preview</span>
          </div>
          <button
            onClick={onOpenWaitlist}
            className="group relative inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all shadow-sm hover:shadow-indigo-500/20 hover:border-indigo-400/40"
          >
            <span>Request Access</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-slate-400 group-hover:text-white" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drop menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0C14] border-b border-white/10 px-6 py-5 space-y-4">
          <div className="flex flex-col space-y-3 text-sm text-slate-300">
            <a href="#vision" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">Vision</a>
            <a href="#problem" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">The Paradigm Shift</a>
            <a href="#architecture" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">Knowledge Graph</a>
            <a href="#data-engine" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">Verifiable Intelligence</a>
            <a href="#interface" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">Unified Interface</a>
            <a href="#dual-runtime" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">Human & AI</a>
          </div>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWaitlist();
              }}
              className="w-full text-center py-2.5 text-sm font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-lg shadow-indigo-600/30"
            >
              Join the Waitlist
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
