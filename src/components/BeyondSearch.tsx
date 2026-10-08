import React from 'react';
import { Compass, Share2, MessageSquare, Zap, ArrowUpRight } from 'lucide-react';

export const BeyondSearch: React.FC = () => {
  const cards = [
    {
      title: 'DISCOVER',
      subtitle: 'Find without knowing the URL',
      description: 'Locate information, people, ideas, products, and opportunities across multi-layered graphs without query wrestling or keyword guessing.',
      icon: Compass,
      tag: 'Semantic Retrieval',
      gradient: 'from-blue-500/20 via-indigo-500/10 to-transparent',
      borderGlow: 'hover:border-blue-500/40',
      badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
      features: ['Entity disambiguation', 'Zero keyword penalty', 'Cross-language indexing']
    },
    {
      title: 'CONNECT',
      subtitle: 'Understand relationships everywhere',
      description: "Traverse high-order relationships across the world's information. Trace supply chains, research citations, corporate hierarchies, and intellectual lineage.",
      icon: Share2,
      tag: 'Hyper-Graph Traversal',
      gradient: 'from-indigo-500/20 via-violet-500/10 to-transparent',
      borderGlow: 'hover:border-indigo-500/40',
      badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
      features: ['Multi-hop paths', 'Conflict resolution', 'Dynamic relation weighting']
    },
    {
      title: 'COMMUNICATE',
      subtitle: 'Direct peer-to-peer discourse',
      description: 'Interact with people, authors, domain experts, and communities directly within contextual knowledge nodes without fragmented walled platforms.',
      icon: MessageSquare,
      tag: 'Decentralized Discourse',
      gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
      borderGlow: 'hover:border-violet-500/40',
      badgeColor: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
      features: ['In-situ annotations', 'Cryptographic signing', 'Shared memory spaces']
    },
    {
      title: 'ACT',
      subtitle: 'From knowledge directly into execution',
      description: 'Turn verified knowledge into autonomous action. Purchase, reserve, compile, negotiate, and delegate complex workflows securely to AI agents.',
      icon: Zap,
      tag: 'Agentic Execution',
      gradient: 'from-cyan-500/20 via-emerald-500/10 to-transparent',
      borderGlow: 'hover:border-cyan-500/40',
      badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      features: ['Deterministic tooling', 'Permissioned sub-agents', 'Atomic settlements']
    },
  ];

  return (
    <section className="py-28 lg:py-36 border-t border-white/[0.06] relative" id="beyond-search">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            Section 06 // Beyond Search
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            Search is only the beginning.
          </h2>
          
          <p className="text-lg text-slate-400 leading-relaxed">
            A search engine leaves all the cognitive heavy-lifting to you. Victor & Klein establishes the four fundamental primitives of an intelligent operating substrate:
          </p>
        </div>

        {/* Four Elegant Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className={`group relative p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-[#0A0D17] hover:bg-[#0E1220] transition-all duration-300 overflow-hidden flex flex-col justify-between ${c.borderGlow}`}
              >
                {/* Ambient glow accent */}
                <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl ${c.gradient} blur-3xl opacity-50 group-hover:opacity-80 transition-opacity pointer-events-none`} />

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:scale-105 group-hover:border-white/20 transition-all text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-mono px-3 py-1 rounded-full border ${c.badgeColor}`}>
                      {c.tag}
                    </span>
                  </div>

                  <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                    {c.subtitle}
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-indigo-200 transition-colors">
                    {c.title}
                  </h3>

                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
                    {c.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {c.features.map((feat) => (
                      <span key={feat} className="text-[11px] font-mono text-slate-400 bg-white/[0.03] px-2.5 py-1 rounded">
                        • {feat}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
