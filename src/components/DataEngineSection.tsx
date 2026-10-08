import React, { useState } from 'react';
import { ShieldCheck, History, Clock, AlertCircle, FileSearch } from 'lucide-react';

export const DataEngineSection: React.FC = () => {
  const [selectedDimension, setSelectedDimension] = useState<number>(2);

  const dimensions = [
    { name: 'Entities', count: '1.2B+', desc: 'Disambiguated canonical objects with persistent global CIDs.' },
    { name: 'Relationships', count: '18.4B+', desc: 'Directed contextual edges with mathematical edge weighting.' },
    { name: 'Claims', count: '420M+', desc: 'Discrete factual statements extracted and parsed from unstructured feeds.' },
    { name: 'Evidence', count: '2.1B+', desc: 'Primary document excerpts, sensor telemetry, and court/financial filings.' },
    { name: 'Provenance', count: '100%', desc: 'Cryptographic attestation and origin lineage from source to ingestion.' },
    { name: 'Time', count: 'Temporal', desc: '4D validity intervals: when an event occurred vs. when it was reported.' },
    { name: 'Confidence', count: 'Bayesian', desc: 'Dynamic probabilistic certainty calculated across competing sources.' },
    { name: 'Context', count: 'Multi-scope', desc: 'Jurisdictional, cultural, and situational bounding of assertions.' },
  ];

  return (
    <section className="py-28 lg:py-36 border-t border-white/[0.06] relative" id="data-engine">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            Section 04 // AI-Native Data Engine
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            Not a database of documents. <br />
            <span className="text-slate-400 font-normal">
              A database of understanding.
            </span>
          </h2>
          
          <p className="text-lg text-slate-400 leading-relaxed">
            The platform continuously transforms fragmented raw text into structured, auditable knowledge. Every assertion is deconstructed into multi-dimensional coordinates of truth, provenance, and contextual confidence.
          </p>
        </div>

        {/* 8 Dimensions Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-16">
          {dimensions.map((dim, i) => {
            const isSelected = selectedDimension === i;
            return (
              <button
                key={dim.name}
                onClick={() => setSelectedDimension(i)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'border-cyan-400/80 bg-cyan-950/30 text-white shadow-lg shadow-cyan-950/40 ring-1 ring-cyan-400/40'
                    : 'border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">{dim.name}</span>
                  <span className="text-[10px] font-mono text-cyan-400/90 bg-cyan-400/10 px-1.5 py-0.5 rounded">{dim.count}</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-normal line-clamp-2">
                  {dim.desc}
                </p>
              </button>
            );
          })}
        </div>

        {/* Technical Deep Dive: The Live Claim Deconstruction */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#0A0D16] p-6 lg:p-10 shadow-2xl relative">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div>
              <div className="text-xs font-mono uppercase text-slate-500 mb-1 flex items-center gap-2">
                <span>Claim Resolution Telemetry</span>
                <span className="text-white">/</span>
                <span className="text-emerald-400">STATUS: AUDITED & SYNTHESIZED</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
                <span>&ldquo;Novus Labs acquired SynthAI for $1.85B.&rdquo;</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Confidence: 99.4%</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 font-mono text-xs flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>t = 2026-09-14 14:02:11 UTC</span>
              </div>
            </div>
          </div>

          {/* Breakdown Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-8">
            
            {/* Supporting Sources */}
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <FileSearch className="w-3.5 h-3.5 text-cyan-400" />
                <span>Supporting Sources (4 verified)</span>
              </div>

              <div className="space-y-2.5">
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/10 transition-colors">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-white">SEC Form 8-K Item 2.01</span>
                    <span className="font-mono text-[10px] text-emerald-400">Primary Official</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Novus Holdings Corporation regulatory disclosure filed with EDGAR at 13:58 UTC.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/10 transition-colors">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-white">Bloomberg Terminal Wire</span>
                    <span className="font-mono text-[10px] text-emerald-400">99.8% corroboration</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Deal terms confirmed with Novus VP Investor Relations, citing cash & equity split.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] hover:border-white/10 transition-colors">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-white">Financial Times Lead Editorial</span>
                    <span className="font-mono text-[10px] text-slate-400">Secondary press</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Published 14:15 UTC. Corroborates strategic integration into Novus Compute cloud.
                  </p>
                </div>
              </div>
            </div>

            {/* Conflicting Claims & Resolution */}
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Contradiction Detection</span>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/15 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-300 font-semibold">Rejected Claim (#CF-981)</span>
                  <span className="text-rose-400">Confidence: 12.1%</span>
                </div>
                <div className="text-xs text-slate-300 italic">
                  &ldquo;TechLeaks blog claims valuation was only $1.2B and equity-free.&rdquo;
                </div>
                <div className="text-[11px] text-slate-400 leading-relaxed border-t border-amber-500/10 pt-2">
                  <strong className="text-amber-300">Resolution:</strong> System identified source as unverified rumor blog. Refuted by legally audited 8-K regulatory filing timestamped 22 minutes prior.
                </div>
              </div>

              {/* Related Entities Map */}
              <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs font-mono text-slate-400 uppercase mb-2">Entailment Graph</div>
                <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                  <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">Novus Labs</span>
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">SynthAI</span>
                  <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">M&A Transaction</span>
                  <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">Antitrust Clearance</span>
                </div>
              </div>
            </div>

            {/* Provenance & Historical Mutation Log */}
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <History className="w-3.5 h-3.5 text-indigo-400" />
                <span>Temporal State Mutation</span>
              </div>

              <div className="p-4 rounded-xl bg-[#06080E] border border-white/[0.06] space-y-3 font-mono text-xs">
                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-1.5"></div>
                  <div>
                    <div className="text-slate-400 text-[10px]">13:40 UTC • Rumor detected</div>
                    <div className="text-slate-300">Speculative report on X/Twitter (Confidence 42%)</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5"></div>
                  <div>
                    <div className="text-amber-300 text-[10px]">13:58 UTC • 8-K Regulatory Ingestion</div>
                    <div className="text-slate-200">Official filing ingested and parsed (Confidence 98.2%)</div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5"></div>
                  <div>
                    <div className="text-emerald-400 text-[10px]">14:02 UTC • Graph Convergence</div>
                    <div className="text-white font-medium">Canonical state locked across global cluster (Confidence 99.4%)</div>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 font-mono">
                Lineage Proof: SHA256 <span className="text-slate-400">e89b4f2c019d...74a1</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
