import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { ArchitectureGraph } from './components/ArchitectureGraph';
import { DataEngineSection } from './components/DataEngineSection';
import { UnifiedInterface } from './components/UnifiedInterface';
import { BeyondSearch } from './components/BeyondSearch';
import { DualRuntime } from './components/DualRuntime';
import { LongTermVision } from './components/LongTermVision';
import { FooterCTA } from './components/FooterCTA';
import { WaitlistModal } from './components/WaitlistModal';

export function App() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#08090D] text-slate-300 font-sans selection:bg-indigo-500/30 selection:text-white relative overflow-x-hidden">
      {/* Background ambient grid mesh */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-20" />
      
      {/* Global Navigation */}
      <Navbar onOpenWaitlist={() => setWaitlistOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenWaitlist={() => setWaitlistOpen(true)} />

        {/* Section 2: The Problem */}
        <ProblemSection />

        {/* Section 3: The New Architecture */}
        <ArchitectureGraph />

        {/* Section 4: AI-Native Data Engine */}
        <DataEngineSection />

        {/* Section 5: One Interface to the Internet */}
        <UnifiedInterface />

        {/* Section 6: Beyond Search */}
        <BeyondSearch />

        {/* Section 7: Built for Humans and AI */}
        <DualRuntime />

        {/* Section 8: The Long-Term Vision */}
        <LongTermVision />

        {/* Final CTA & Category-defining Footer */}
        <FooterCTA onOpenWaitlist={() => setWaitlistOpen(true)} />
      </main>

      {/* Waitlist Modal */}
      <WaitlistModal 
        isOpen={waitlistOpen} 
        onClose={() => setWaitlistOpen(false)} 
      />
    </div>
  );
}

export default App;

