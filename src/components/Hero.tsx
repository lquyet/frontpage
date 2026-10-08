import React from 'react';
import { ArrowRight, ChevronRight, Compass } from 'lucide-react';
import { HeroVisual } from './HeroVisual';

interface HeroProps {
  onOpenWaitlist: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenWaitlist }) => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden" id="vision">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-indigo-600/15 via-violet-500/10 to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-cyan-500/10 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Intro Tag */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-8 hover:border-white/20 transition-colors">
            <span className="flex h-2 w-2 rounded-full bg-indigo-400"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-slate-300">
              Victor & Klein LLC
            </span>
            <span className="text-xs text-slate-500 font-mono">/</span>
            <span className="text-xs text-indigo-300 font-medium flex items-center gap-0.5">
              The Next Internet Substrate
              <ChevronRight className="w-3 h-3" />
            </span>
          </div>

          {/* Large Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.04] mb-8">
            The Internet, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-indigo-300">
              Understood.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-400 leading-relaxed max-w-3xl font-light mb-10">
            We're building an AI-native information layer that connects, organizes, and understands the world's knowledge — creating a unified interface for humans and AI.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={onOpenWaitlist}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-[0.99] transition-all shadow-xl shadow-indigo-600/25 border border-indigo-400/30 text-[15px]"
            >
              <span>Join the Waitlist</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#problem"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-medium text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-all text-[15px]"
            >
              <Compass className="w-4 h-4 text-slate-400" />
              <span>Explore the Vision</span>
            </a>
          </div>

          {/* Key Metric Ticker */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 mt-16 pt-10 border-t border-white/[0.06] w-full max-w-4xl text-left">
            <div>
              <div className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight">100%</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1 font-mono">Semantic Provenance</div>
            </div>
            <div>
              <div className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight">&lt; 10ms</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1 font-mono">Cross-Graph Traversal</div>
            </div>
            <div>
              <div className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight">Living</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1 font-mono">Continuous Synthesis</div>
            </div>
            <div>
              <div className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-tight">Dual API</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mt-1 font-mono">Human + Agent Native</div>
            </div>
          </div>
        </div>

        {/* Hero Interactive Visualization Canvas */}
        <div className="w-full mt-4">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
};
