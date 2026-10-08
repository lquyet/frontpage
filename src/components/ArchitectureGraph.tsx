import React, { useState } from 'react';
import { User, Building, Box, Video, Code, FileText, CheckCircle, Sparkles } from 'lucide-react';

interface ChainItem {
  id: string;
  type: string;
  label: string;
  relation: string;
  icon: any;
  color: string;
  detail: {
    title: string;
    metrics: string;
    provenance: string;
    verifiedDate: string;
    confidence: string;
    description: string;
  };
}

export const ArchitectureGraph: React.FC = () => {
  const chain: ChainItem[] = [
    {
      id: 'person-1',
      type: 'Person',
      label: 'Dr. Evelyn Vance',
      relation: 'works at',
      icon: User,
      color: 'from-purple-500 to-indigo-500',
      detail: {
        title: 'Principal AI Researcher & Systems Architect',
        metrics: '14 Patents • 2,400 Citations',
        provenance: 'Cryptographically signed via ORCID & GitHub Keybase',
        verifiedDate: 'Synchronized 18 min ago',
        confidence: '99.8%',
        description: 'Pioneered latent-space memory synchronization protocols. Currently leading Architecture Research.'
      }
    },
    {
      id: 'company-1',
      type: 'Company',
      label: 'Aether Robotics',
      relation: 'makes',
      icon: Building,
      color: 'from-blue-500 to-cyan-500',
      detail: {
        title: 'Series B Autonomous Systems Laboratory',
        metrics: '$180M ARR • Delaware Registered C-Corp',
        provenance: 'SEC Form D + Global Entity Identifier (LEI: 549300)',
        verifiedDate: 'Real-time verified via Delaware Division of Corporations',
        confidence: '100%',
        description: 'Produces low-latency humanoid actuators and neural motor policy engines.'
      }
    },
    {
      id: 'product-1',
      type: 'Product',
      label: 'ApexCore V3',
      relation: 'reviewed by',
      icon: Box,
      color: 'from-emerald-500 to-teal-500',
      detail: {
        title: 'Sub-millisecond Neural Co-Processor',
        metrics: '8.4 TOPS/Watt • TSMC 3nm Tapeout',
        provenance: 'Manufacturer Hardware Errata + FCC Certification ID: 2A9Z7',
        verifiedDate: 'Continuous telemetry live check',
        confidence: '99.5%',
        description: 'Dedicated embedded inference silicon with hardware cryptographic attestations.'
      }
    },
    {
      id: 'person-2',
      type: 'Person',
      label: 'Marcus Thorne',
      relation: 'appears in',
      icon: User,
      color: 'from-purple-500 to-pink-500',
      detail: {
        title: 'Hardware Benchmark Lead & Technical Editor',
        metrics: '1.2M Subscribers • IEEE Senior Member',
        provenance: 'Verified YouTube API channel hash + PGP signature',
        verifiedDate: '4 hours ago',
        confidence: '98.9%',
        description: 'Conducted empirical power draw stress testing on production firmware.'
      }
    },
    {
      id: 'video-1',
      type: 'Media / Video',
      label: 'Die Tear-down & Benchmarks',
      relation: 'discusses',
      icon: Video,
      color: 'from-amber-500 to-orange-500',
      detail: {
        title: '4K Micro-probing Video Log & Die Micrograph',
        metrics: '348,000 Views • 42 Cross-Citations',
        provenance: 'YouTube Content ID & Decentralized IPFS CIDv1',
        verifiedDate: 'Timestamped block #1892014',
        confidence: '99.1%',
        description: 'Frame-by-frame thermal imaging corroborating stated clock speeds and thermal dissipation.'
      }
    },
    {
      id: 'tech-1',
      type: 'Technology',
      label: 'Sparse Hyper-Graph Routing',
      relation: 'based on',
      icon: Code,
      color: 'from-indigo-500 to-violet-500',
      detail: {
        title: 'Algorithmic Substrate for 10M+ Parallel Edges',
        metrics: 'O(log N) Traversal Complexity',
        provenance: 'ACM Turing Repository & OpenReview Paper ID #4092',
        verifiedDate: 'Formal proof checked via Lean 4 theorem prover',
        confidence: '99.9%',
        description: 'Core topology enabling instant multi-hop traversals across disparate web platforms.'
      }
    },
    {
      id: 'paper-1',
      type: 'Research',
      label: 'ArXiv:2409.1102',
      relation: 'written by',
      icon: FileText,
      color: 'from-cyan-500 to-blue-500',
      detail: {
        title: 'Unified Topological Representation for Decentralized Knowledge',
        metrics: 'Cited by 84 Lab Publications',
        provenance: 'ArXiv Semantic Scholar DOI: 10.48550/arXiv.2409.1102',
        verifiedDate: 'Indexed 2 days ago',
        confidence: '100%',
        description: 'Foundational theoretical architecture for the Victor & Klein information layer.'
      }
    },
    {
      id: 'researcher-1',
      type: 'Researcher',
      label: 'Prof. Julian Klein',
      relation: '—',
      icon: User,
      color: 'from-violet-500 to-purple-600',
      detail: {
        title: 'Co-Founder & Chief Scientist, Victor & Klein',
        metrics: 'Former Stanford AI Lab • 28 Top-Tier Papers',
        provenance: 'Faculty Directory & National Academy of Sciences Record',
        verifiedDate: 'Real-time verified identity token',
        confidence: '100%',
        description: 'Directing the mathematical synthesis engine bridging statistical inference with verified knowledge graphs.'
      }
    }
  ];

  const [selectedNode, setSelectedNode] = useState<ChainItem>(chain[1]);

  return (
    <section className="py-28 lg:py-36 border-t border-white/[0.06] relative bg-[#07080D]" id="architecture">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            Section 03 // The New Architecture
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            Everything is connected.
          </h2>
          
          <p className="text-lg text-slate-400 leading-relaxed">
            The web doesn't lack data; it lacks topological coherence. Our platform maps entities, agents, products, and empirical proofs into an unbroken, traversable semantic chain. Click or hover any node below to inspect live contextual provenance.
          </p>
        </div>

        {/* Interactive Graph Pipeline Display */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#0A0D17] p-6 lg:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle graph background lines */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

          {/* Interactive Node Train */}
          <div className="mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-4 flex items-center justify-between">
              <span>Ontological Traversal Chain</span>
              <span className="text-indigo-400">Hover or click any node</span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-thin">
              {chain.map((item, idx) => {
                const isSelected = selectedNode.id === item.id;
                const Icon = item.icon;
                return (
                  <React.Fragment key={item.id}>
                    <button
                      onClick={() => setSelectedNode(item)}
                      onMouseEnter={() => setSelectedNode(item)}
                      className={`group relative flex-shrink-0 flex items-center gap-2.5 px-4 py-3 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'border-indigo-400/80 bg-indigo-950/40 text-white shadow-lg shadow-indigo-950/80 ring-1 ring-indigo-400/50'
                          : 'border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color} text-white shadow-sm`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                          {item.type}
                        </div>
                        <div className="text-xs font-semibold text-white whitespace-nowrap">
                          {item.label}
                        </div>
                      </div>
                    </button>

                    {idx < chain.length - 1 && (
                      <div className="flex-shrink-0 flex flex-col items-center px-1">
                        <span className="text-[10px] font-mono text-indigo-400/80 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20 whitespace-nowrap">
                          {item.relation}
                        </span>
                        <div className="w-6 h-[1px] bg-indigo-500/30 mt-1"></div>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Context Inspector Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6 border-t border-white/[0.08]">
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-white/[0.06] text-indigo-300 border border-white/10">
                  Inspecting Entity: {selectedNode.type}
                </span>
                <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Confidence {selectedNode.detail.confidence}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-tight">
                {selectedNode.label}
              </h3>

              <div className="text-sm font-medium text-indigo-200/90 font-mono">
                {selectedNode.detail.title}
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">
                {selectedNode.detail.description}
              </p>

              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] space-y-2">
                <div className="text-xs font-mono text-slate-400 uppercase">Topological Provenance Audit</div>
                <div className="text-xs font-mono text-slate-200">
                  {selectedNode.detail.provenance}
                </div>
              </div>
            </div>

            {/* Quick telemetry card */}
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono uppercase text-slate-500 mb-3 flex items-center justify-between">
                  <span>Graph Properties</span>
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                </div>
                <div className="space-y-3 font-mono text-xs">
                  <div>
                    <span className="text-slate-500 block">Performance / Metrics</span>
                    <span className="text-white font-medium">{selectedNode.detail.metrics}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Freshness State</span>
                    <span className="text-emerald-400 font-medium">{selectedNode.detail.verifiedDate}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Graph Ingestion Engine</span>
                    <span className="text-indigo-300">Continuous Realtime Crawler v4.2</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] mt-4">
                <div className="text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Relational Edge Hops:</span>
                  <span className="text-white font-mono font-semibold">1-Hop Constant Time</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
