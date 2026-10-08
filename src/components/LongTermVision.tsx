import React, { useEffect, useRef } from 'react';


export const LongTermVision: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle swarm converging from chaotic edges into a singular coherent sphere/ring
    interface Particle {
      x: number;
      y: number;
      origAngle: number;
      radiusDist: number;
      speed: number;
      color: string;
      size: number;
    }

    const count = 180;
    const particles: Particle[] = [];
    const colors = ['#6366F1', '#818CF8', '#A5B4FC', '#38BDF8', '#C084FC'];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        origAngle: Math.random() * Math.PI * 2,
        radiusDist: 100 + Math.random() * 160,
        speed: 0.003 + Math.random() * 0.008,
        color: colors[i % colors.length],
        size: 1 + Math.random() * 2,
      });
    }

    let t = 0;

    const render = () => {
      t += 0.015;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Draw faint center focal rings
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.12)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, 140, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.beginPath();
      ctx.arc(cx, cy, 220, 0, Math.PI * 2);
      ctx.stroke();

      // Convergence cycle: smoothly oscillates between chaotic distributed points and coherent unified ring
      const convergenceFactor = 0.5 + 0.5 * Math.sin(t * 0.4);

      for (let i = 0; i < count; i++) {
        const p = particles[i];
        p.origAngle += p.speed;

        // Target coherent ring position
        const targetX = cx + Math.cos(p.origAngle) * p.radiusDist;
        const targetY = cy + Math.sin(p.origAngle) * (p.radiusDist * 0.55);

        // Blended position
        const currentX = p.x * (1 - convergenceFactor) + targetX * convergenceFactor;
        const currentY = p.y * (1 - convergenceFactor) + targetY * convergenceFactor;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(currentX, currentY, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Connect near neighbors when converged
        if (convergenceFactor > 0.6 && i % 3 === 0) {
          const next = particles[(i + 1) % count];
          const nextX = next.x * (1 - convergenceFactor) + (cx + Math.cos(next.origAngle) * next.radiusDist) * convergenceFactor;
          const nextY = next.y * (1 - convergenceFactor) + (cy + Math.sin(next.origAngle) * (next.radiusDist * 0.55)) * convergenceFactor;
          
          ctx.beginPath();
          ctx.moveTo(currentX, currentY);
          ctx.lineTo(nextX, nextY);
          ctx.strokeStyle = 'rgba(129, 140, 248, 0.15)';
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }

      // Center core singularity
      const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 50);
      coreGrad.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      coreGrad.addColorStop(0.2, 'rgba(99, 102, 241, 0.4)');
      coreGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 50, 0, Math.PI * 2);
      ctx.fill();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section className="py-32 lg:py-44 border-t border-white/[0.06] relative overflow-hidden" id="long-term-vision">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs uppercase tracking-wider mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            Section 08 // The Long-Term Horizon
          </div>
          
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] mb-8">
            We're building the interface to the world's information.
          </h2>
          
          <p className="text-xl sm:text-2xl text-slate-300 font-light leading-relaxed max-w-3xl mx-auto">
            &ldquo;The internet shouldn't feel like billions of disconnected pages and applications. It should feel like one intelligent, interconnected system.&rdquo;
          </p>
        </div>

        {/* Visual Convergence Demonstration */}
        <div className="relative w-full h-[400px] sm:h-[500px] rounded-2xl border border-white/[0.08] bg-[#0A0D17]/80 backdrop-blur-2xl overflow-hidden shadow-2xl flex items-center justify-center">
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
          
          {/* Overlay Tag */}
          <div className="absolute bottom-6 left-6 z-10 font-mono text-xs text-slate-400 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></div>
            <span>Phase Transition: Chaotic Fragmented Pages → Unified Coherent Substrate</span>
          </div>

          <div className="absolute bottom-6 right-6 z-10 font-mono text-xs text-slate-500 hidden sm:block">
            <span>Topology: Continuous Homology</span>
          </div>
        </div>

      </div>
    </section>
  );
};
