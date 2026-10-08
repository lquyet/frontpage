import React, { useState } from 'react';
import { FileText, Database, Network, Cpu, ArrowRight, Split, CheckCircle2 } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(2);

  const steps = [
    {
      icon: FileText,
      label: 'Documents',
      sub: '1990s Web',
      desc: 'Static HTML pages, links, and text blobs. Built for human reading through browser tabs.',
      color: 'border-slate-700 bg-slate-900/60 text-slate-300',
    },
    {
      icon: Database,
      label: 'Data',
      sub: '2000s Web 2.0',
      desc: 'Siloed relational databases behind closed platform walls. Tables, rows, and proprietary app stores.',
      color: 'border-blue-900/50 bg-blue-950/30 text-blue-300',
    },
    {
      icon: Network,
      label: 'Knowledge',
      sub: 'Now: Victor & Klein',
      desc: 'A living, unified graph connecting entities, claims, people, and events with contextual provenance.',
      color: 'border-indigo-500/60 bg-indigo-950/40 text-indigo-200 ring-2 ring-indigo-500/20',
    },
    {
      icon: Cpu,
      label: 'Intelligence',
      sub: 'The Next Internet',
      desc: 'Autonomous multi-hop reasoning and agentic execution directly grounded in verified reality.',
      color: 'border-cyan-500/60 bg-cyan-950/30 text-cyan-200',
    },
  ];

  return (
    <section className="py-28 lg:py-36 border-t border-white/[0.06] relative" id="problem">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 font-mono text-xs uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
            Section 02 // The Problem
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            The internet was built for documents. <br />
            <span className="text-slate-400 font-normal">
              The next internet will be built around knowledge.
            </span>
          </h2>
          
          <p className="text-lg text-slate-400 leading-relaxed">
            Today's internet is fragmented across thousands of isolated platforms. Search finds isolated pages. Social networks isolate people. E-commerce separates buyers and sellers into proprietary apps. Databases hoard structured records. While AI can reason, it remains starved of verified, interconnected truth.
          </p>
        </div>

        {/* Visual Progression */}
        <div className="mb-20">
          <div className="text-xs uppercase font-mono tracking-widest text-slate-500 mb-6 flex items-center gap-2">
            <span>Evolutionary Progression of the Web</span>
            <div className="h-[1px] flex-1 bg-white/[0.08]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              const isSelected = activeStep === idx;
              return (
                <div
                  key={s.label}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 rounded-xl border transition-all cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? `${s.color} shadow-lg shadow-indigo-950/50`
                      : 'border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-white/[0.05] border border-white/[0.08]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-slate-500">0{idx + 1}</span>
                  </div>

                  <div className="text-lg font-semibold text-white mb-1">
                    {s.label}
                  </div>
                  <div className="font-mono text-[11px] text-indigo-400/90 mb-3">
                    {s.sub}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {s.desc}
                  </p>

                  {idx < steps.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[#08090D] border border-white/10 text-slate-500 flex items-center justify-center pointer-events-none">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* The Missing Layer Graphic / Comparison */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#0E111B]/60 backdrop-blur-xl p-8 sm:p-12 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-4">
                The Disconnection Paradox
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                The missing substrate is an intelligent layer that understands how everything connects.
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                When you search today, you receive 10 blue links. When you query an LLM, it halluncinates or generates probabilistic text divorced from real-time provenance. 
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Split className="w-4 h-4 text-rose-400 mt-1 shrink-0" />
                  <span className="text-sm text-slate-300">
                    <strong className="text-white font-medium">Siloed Data Islands:</strong> Information trapped inside thousands of walled gardens with no semantic continuity.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Split className="w-4 h-4 text-rose-400 mt-1 shrink-0" />
                  <span className="text-sm text-slate-300">
                    <strong className="text-white font-medium">Zero Provenance:</strong> AI models generate assertions without citation integrity or cryptographic freshness.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                  <span className="text-sm text-slate-300">
                    <strong className="text-white font-medium">Victor & Klein Solution:</strong> A self-synthesizing knowledge fabric that unifies web entities into live, queryable relations.
                  </span>
                </div>
              </div>
            </div>

            {/* Visual Contrast Panel */}
            <div className="p-6 rounded-xl border border-white/[0.08] bg-[#07090F] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] text-xs font-mono">
                <span className="text-slate-400">STATUS QUO</span>
                <span className="text-indigo-400 font-semibold">VICTOR & KLEIN</span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-lg bg-rose-500/5 border border-rose-500/10 space-y-2">
                  <div className="font-mono text-rose-300 uppercase font-semibold">Current Web</div>
                  <div className="text-slate-400">Isolated webpages & URLs</div>
                  <div className="text-slate-400">Manual cross-app juggling</div>
                  <div className="text-slate-400">Probabilistic hallucinations</div>
                  <div className="text-slate-400">Dead static archives</div>
                </div>

                <div className="p-3.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 space-y-2">
                  <div className="font-mono text-indigo-300 uppercase font-semibold">Knowledge Layer</div>
                  <div className="text-slate-200">Interlinked ontological entities</div>
                  <div className="text-slate-200">One intelligent intent interface</div>
                  <div className="text-slate-200">Deterministic claim verification</div>
                  <div className="text-slate-200">Living continuously updated graph</div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.05] font-mono text-[11px] text-slate-400 flex items-center justify-between">
                <span>Network entropy reduction</span>
                <span className="text-emerald-400 font-semibold">-87.4%</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
