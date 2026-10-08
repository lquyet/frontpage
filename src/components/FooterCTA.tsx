import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

interface FooterCTAProps {
  onOpenWaitlist: () => void;
}

export const FooterCTA: React.FC<FooterCTAProps> = ({ onOpenWaitlist }) => {
  return (
    <footer className="relative pt-28 pb-16 border-t border-white/[0.08] bg-[#06070B] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Large Closing Call to Action */}
        <div className="max-w-4xl mx-auto text-center mb-28">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-slate-300 font-mono text-xs uppercase tracking-wider mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            Join the Founding Network
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-tight mb-8">
            Help us build the next internet.
          </h2>

          <p className="text-lg sm:text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            We're building the infrastructure for a world where information is connected, understandable, verifiable, and accessible to everyone.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenWaitlist}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] transition-all shadow-xl shadow-indigo-600/30 border border-indigo-400/30 text-base"
            >
              <span>Join the Waitlist</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="mailto:inquiries@victorklein.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-all text-base"
            >
              <Mail className="w-4 h-4 text-slate-400" />
              <span>Contact Us</span>
            </a>
          </div>
        </div>

        {/* Global Footer Links and Branding */}
        <div className="pt-16 border-t border-white/[0.06] grid grid-cols-1 md:grid-cols-5 gap-10">
          
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center font-mono font-bold text-xs text-white">
                VK
              </div>
              <span className="text-base font-semibold text-white">Victor & Klein LLC</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Building the AI-native information layer for the next generation of the internet. Transforming fragmented pages into a living, verifiable knowledge substrate.
            </p>
            <div className="text-[11px] font-mono text-slate-500">
              San Francisco, CA • Zurich, CH
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">Technology</div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#architecture" className="hover:text-white transition-colors">Semantic Graph DAG</a></li>
              <li><a href="#data-engine" className="hover:text-white transition-colors">Bayesian Truth Verification</a></li>
              <li><a href="#dual-runtime" className="hover:text-white transition-colors">Dual Protocol Runtime</a></li>
              <li><a href="#interface" className="hover:text-white transition-colors">Intent Resolver</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">Research</div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><span className="text-slate-400 hover:text-white cursor-pointer transition-colors">Whitepaper v1.0</span></li>
              <li><span className="text-slate-400 hover:text-white cursor-pointer transition-colors">Formal Verification</span></li>
              <li><span className="text-slate-400 hover:text-white cursor-pointer transition-colors">Topological Homology</span></li>
              <li><span className="text-slate-400 hover:text-white cursor-pointer transition-colors">Agent Consensus</span></li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">Company</div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><span className="text-slate-400 hover:text-white cursor-pointer transition-colors">About Victor & Klein</span></li>
              <li><span className="text-slate-400 hover:text-white cursor-pointer transition-colors">Careers (Hiring Systems Engineers)</span></li>
              <li><span className="text-slate-400 hover:text-white cursor-pointer transition-colors">Security & Lineage Audits</span></li>
              <li><span className="text-slate-400 hover:text-white cursor-pointer transition-colors">Press & Media Kit</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright bar */}
        <div className="pt-12 mt-12 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Victor & Klein LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">System Status: All Green</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
