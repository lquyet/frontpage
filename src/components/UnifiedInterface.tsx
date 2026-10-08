import React from 'react';
import { Send, Sparkles, Check, Star, Battery, Terminal, ExternalLink } from 'lucide-react';

export const UnifiedInterface: React.FC = () => {

  const userQuery = 
    "Find me a laptop under $2,000 that's great for programming, has excellent battery life, works well with Linux, and is highly recommended by developers.";

  return (
    <section className="py-28 lg:py-36 border-t border-white/[0.06] relative bg-[#07090F]" id="interface">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-mono text-xs uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
            Section 05 // One Interface to the Internet
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            Stop searching for the right app.
          </h2>
          
          <p className="text-lg text-slate-400 leading-relaxed">
            Instead of opening 15 browser tabs across benchmarks, forums, stores, and tech wikis, you simply state what you need. Victor & Klein automatically synthesizes specifications, prices, community consensus, and driver kernels into one coherent, actionable answer.
          </p>
        </div>

        {/* The Conversational OS Mockup */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#0C0F1A] shadow-2xl overflow-hidden max-w-5xl mx-auto">
          
          {/* Top Window Chrome */}
          <div className="bg-[#121625] px-6 py-4 border-b border-white/[0.06] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/70"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/70"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/70"></div>
              <span className="text-xs font-mono text-slate-400 ml-3">Victor & Klein — Internet Shell</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded border border-indigo-500/20">
              <Sparkles className="w-3 h-3 text-indigo-400" />
              <span>Multi-Domain Intent Resolution Engine</span>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* User Input Prompt Bubble */}
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center shrink-0 text-white font-mono text-xs font-semibold">
                YOU
              </div>
              <div className="flex-1 bg-white/[0.03] border border-white/[0.08] rounded-2xl p-4 sm:p-5 text-slate-200 text-sm sm:text-base leading-relaxed shadow-sm">
                &ldquo;{userQuery}&rdquo;
              </div>
            </div>

            {/* Synthesized System Response */}
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-xl bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center shrink-0 text-indigo-300 font-mono text-xs font-bold">
                V&K
              </div>

              <div className="flex-1 bg-[#101423] border border-indigo-500/30 rounded-2xl p-5 sm:p-7 space-y-6">
                
                {/* Intent Dissection Bar */}
                <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-white/[0.06] text-xs font-mono text-slate-400">
                  <span className="text-slate-500">Cross-Referenced:</span>
                  <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">42 Laptop Specs</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">Arch & Ubuntu Kernel Logs</span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">1,820 HackerNews Comments</span>
                  <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">Live Merchant Inventories</span>
                </div>

                {/* Unified Result Card: The Top Recommendation */}
                <div className="rounded-xl bg-black/40 border border-white/[0.08] p-6 space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded mb-2">
                        <Check className="w-3 h-3" />
                        <span>Unified Optimal Recommendation (Score: 98.6/100)</span>
                      </div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white">
                        Lenovo ThinkPad T14s Gen 5 (AMD Ryzen 7 PRO 8840U)
                      </h4>
                      <p className="text-xs text-slate-400 font-mono mt-1">
                        Configured: 32GB LPDDR5X • 1TB PCIe 4.0 SSD • 14" Low Power 400-nit IPS
                      </p>
                    </div>

                    <div className="text-left sm:text-right">
                      <div className="text-2xl font-bold text-white font-mono">$1,649.00</div>
                      <div className="text-[11px] font-mono text-emerald-400">In stock • Ships in 2 days</div>
                    </div>
                  </div>

                  {/* Multidimensional Proof Matrix */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/[0.06] text-xs">
                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                      <div className="flex items-center gap-2 text-indigo-300 font-mono font-medium mb-1">
                        <Battery className="w-3.5 h-3.5" />
                        <span>14.8 hrs Battery</span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Tested at 150 nits compiling Rust & Docker tasks across 6 battery drain labs.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                      <div className="flex items-center gap-2 text-cyan-300 font-mono font-medium mb-1">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>Flawless Linux Tier 1</span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        Upstream Linux kernel 6.10+ driver support out of the box. Wi-Fi, sleep, and audio 100% verified.
                      </p>
                    </div>

                    <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                      <div className="flex items-center gap-2 text-amber-300 font-mono font-medium mb-1">
                        <Star className="w-3.5 h-3.5" />
                        <span>Developer Consensus</span>
                      </div>
                      <p className="text-[11px] text-slate-400">
                        94% positive sentiment across r/linux, Hacker News, and 24 GitHub hardware compatibility wikis.
                      </p>
                    </div>
                  </div>

                  {/* Direct Action Drawer */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-white/[0.06]">
                    <div className="text-xs text-slate-400 font-mono">
                      No ad cookies • No referral affiliate bias • Zero sponsor manipulation
                    </div>
                    <div className="flex items-center gap-3">
                      <button className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-md shadow-indigo-600/30">
                        <span>Delegate One-Click Checkout</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Simulated Prompt Input */}
            <div className="relative pt-4">
              <div className="flex items-center rounded-xl bg-[#141828] border border-white/10 px-4 py-3 shadow-inner">
                <input 
                  type="text" 
                  readOnly 
                  value="Express what you want across any domain of human knowledge..." 
                  className="bg-transparent border-none text-slate-500 text-xs sm:text-sm flex-1 outline-none font-mono cursor-default"
                />
                <button className="p-2 rounded-lg bg-indigo-600 text-white shrink-0 hover:bg-indigo-500 transition-colors">
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
