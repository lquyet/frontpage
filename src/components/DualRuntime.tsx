import React from 'react';
import { User, Bot, ArrowDown, CheckCircle2 } from 'lucide-react';

export const DualRuntime: React.FC = () => {
  return (
    <section className="py-28 lg:py-36 border-t border-white/[0.06] relative bg-[#07080E]" id="dual-runtime">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Section 07 // Built for Humans & AI
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            One internet. <br />
            <span className="text-slate-400 font-normal">
              Two kinds of users.
            </span>
          </h2>
          
          <p className="text-lg text-slate-400 leading-relaxed">
            Humans need understandable, contextual insight and clean interfaces. Autonomous AI agents need structured, machine-verifiable, deterministic schema with cryptographically auditable lineage. Our substrate serves both simultaneously.
          </p>
        </div>

        {/* Dual Stack Architecture Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Track 1: Human Path */}
          <div className="p-8 sm:p-10 rounded-2xl border border-indigo-500/20 bg-[#0B0E1A] relative overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Human Track</h3>
                    <span className="text-xs font-mono text-slate-400">Intuitive Sensory Cognition</span>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded">
                  UX / Natural Language
                </span>
              </div>

              {/* Vertical Flow Diagram */}
              <div className="space-y-3 font-mono text-xs">
                
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                  <span className="text-slate-300 font-medium">1. Human User</span>
                  <span className="text-slate-500 text-[10px]">Intent Origin</span>
                </div>

                <div className="flex justify-center text-indigo-400">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>

                <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-between">
                  <span className="text-indigo-200 font-medium">2. Natural Language Synthesis</span>
                  <span className="text-indigo-400 text-[10px]">Contextual Dialogue</span>
                </div>

                <div className="flex justify-center text-indigo-400">
                  <ArrowDown className="w-4 h-4" />
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                  <span className="text-slate-300 font-medium">3. Intelligence Layer</span>
                  <span className="text-slate-500 text-[10px]">Probabilistic Disambiguation</span>
                </div>

                <div className="flex justify-center text-indigo-400">
                  <ArrowDown className="w-4 h-4" />
                </div>

                <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-between">
                  <span className="text-purple-200 font-medium">4. Knowledge Graph Traversal</span>
                  <span className="text-purple-400 text-[10px]">Sub-graph Assembly</span>
                </div>

                <div className="flex justify-center text-indigo-400">
                  <ArrowDown className="w-4 h-4" />
                </div>

                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
                  <span className="text-emerald-300 font-medium">5. Unified Internet Interface</span>
                  <span className="text-emerald-400 text-[10px]">Zero friction action</span>
                </div>

              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.06] mt-6 flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Optimized for visual scanability, trust, and effortless decision-making.</span>
            </div>
          </div>

          {/* Track 2: AI Agent Path */}
          <div className="p-8 sm:p-10 rounded-2xl border border-cyan-500/20 bg-[#0B0E1A] relative overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">AI Agent Track</h3>
                    <span className="text-xs font-mono text-slate-400">Autonomous Machine Protocol</span>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded">
                  gRPC / JSON-LD / RDF
                </span>
              </div>

              {/* Vertical Flow Diagram */}
              <div className="space-y-3 font-mono text-xs">
                
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                  <span className="text-slate-300 font-medium">1. Autonomous Agent Worker</span>
                  <span className="text-slate-500 text-[10px]">Task Dispatch</span>
                </div>

                <div className="flex justify-center text-cyan-400">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>

                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-between">
                  <span className="text-cyan-200 font-medium">2. High-Throughput gRPC API</span>
                  <span className="text-cyan-400 text-[10px]">Type-safe Schemas</span>
                </div>

                <div className="flex justify-center text-cyan-400">
                  <ArrowDown className="w-4 h-4" />
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                  <span className="text-slate-300 font-medium">3. Intelligence Layer</span>
                  <span className="text-slate-500 text-[10px]">Formal Verification Check</span>
                </div>

                <div className="flex justify-center text-cyan-400">
                  <ArrowDown className="w-4 h-4" />
                </div>

                <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-between">
                  <span className="text-purple-200 font-medium">4. Deterministic State Vector</span>
                  <span className="text-purple-400 text-[10px]">Zero Hallucination Grounding</span>
                </div>

                <div className="flex justify-center text-cyan-400">
                  <ArrowDown className="w-4 h-4" />
                </div>

                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between">
                  <span className="text-emerald-300 font-medium">5. Protocol Settlement & Execution</span>
                  <span className="text-emerald-400 text-[10px]">Atomic RPC calls</span>
                </div>

              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.06] mt-6 flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Optimized for 0-shot fidelity, auditability, and autonomous delegation.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
