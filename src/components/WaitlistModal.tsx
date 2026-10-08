import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, Shield, Sparkles } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Engineer / Researcher');
  const [useCase, setUseCase] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#0C0F1A] p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow accent */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-indigo-500/20 blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white">Priority Access Reserved</h3>
            <p className="text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
              Thank you. We have logged your cryptographic invitation key. You'll receive developer sandbox access in our next onboarding cohort.
            </p>
            <div className="pt-4 font-mono text-xs text-indigo-400 bg-indigo-500/10 p-3 rounded-lg border border-indigo-500/20">
              Assigned Queue ID: #VK-2026-{Math.floor(1000 + Math.random() * 9000)}
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                setEmail('');
                onClose();
              }}
              className="mt-6 px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-semibold"
            >
              Close
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Private Technical Preview</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Join the Victor & Klein Waitlist
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Receive early API keys, query runtime tokens, and access to the interactive knowledge graph substrate.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                  Work Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com or name@institution.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                  Primary Role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#121625] border border-white/10 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                >
                  <option value="AI / ML Researcher">AI / ML Researcher</option>
                  <option value="Systems Engineer">Systems Engineer / Infrastructure</option>
                  <option value="Founder / Executive">Founder / Executive</option>
                  <option value="Autonomous Agent Developer">Autonomous Agent Developer</option>
                  <option value="Enterprise IT / Data Architect">Enterprise IT / Data Architect</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                  How do you plan to use the information layer? (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Grounding agent actions, semantic research synthesis..."
                  value={useCase}
                  onChange={(e) => setUseCase(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 text-sm"
                >
                  <span>Request Priority Access</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 pt-2 border-t border-white/[0.06]">
              <Shield className="w-3.5 h-3.5 text-slate-400" />
              <span>We never sell or share data. Zero promotional spam.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
