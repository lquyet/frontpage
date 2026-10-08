import React, { useEffect, useRef, useState } from 'react';

interface Node {
  id: string;
  name: string;
  category: 'Entity' | 'Company' | 'Product' | 'Claim' | 'Document' | 'Event' | 'Person' | 'Media';
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  connections: number[];
}

const CATEGORY_COLORS: Record<string, string> = {
  Entity: '#6366F1',     // Indigo
  Company: '#3B82F6',    // Blue
  Product: '#06B6D4',    // Cyan
  Claim: '#F59E0B',      // Amber
  Document: '#10B981',   // Emerald
  Event: '#EC4899',      // Pink
  Person: '#A855F7',     // Purple
  Media: '#14B8A6',      // Teal
};

export const HeroVisual: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hoveredNode, setHoveredNode] = useState<Node | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 900);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 560);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    const initialData: Array<{ name: string; category: Node['category'] }> = [
      { name: 'Victor & Klein OS', category: 'Entity' },
      { name: 'OpenAI DevDay', category: 'Event' },
      { name: 'Apple M4 Max', category: 'Product' },
      { name: 'Autonomous Agents', category: 'Entity' },
      { name: 'Stripe Press', category: 'Company' },
      { name: 'Semiconductor Supply', category: 'Claim' },
      { name: 'Vector Space Index', category: 'Document' },
      { name: 'Demis Hassabis', category: 'Person' },
      { name: 'TSMC N2 Fab', category: 'Company' },
      { name: 'Transformer Paper', category: 'Document' },
      { name: 'Neural Synthesizer', category: 'Product' },
      { name: 'Global Energy Transition', category: 'Claim' },
      { name: 'Sam Altman Keynote', category: 'Media' },
      { name: 'Quantum Supremacy', category: 'Claim' },
      { name: 'Yann LeCun Lecture', category: 'Media' },
      { name: 'Nature Benchmark', category: 'Document' },
      { name: 'Spatial Computing', category: 'Entity' },
      { name: 'Jensen Huang', category: 'Person' },
      { name: 'Robotics Actuator', category: 'Product' },
      { name: 'DeepMind AlphaFold', category: 'Company' },
    ];

    const nodes: Node[] = initialData.map((item, index) => {
      const angle = (index / initialData.length) * 2 * Math.PI;
      const dist = 110 + (index % 3) * 80 + Math.random() * 40;
      return {
        id: `node-${index}`,
        name: item.name,
        category: item.category,
        x: width / 2 + Math.cos(angle) * dist,
        y: height / 2 + Math.sin(angle) * dist * 0.75,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: index === 0 ? 9 : 4 + Math.random() * 3,
        color: CATEGORY_COLORS[item.category] || '#6366F1',
        connections: [],
      };
    });

    // Generate organic connections between nodes
    nodes.forEach((node, i) => {
      const targetCount = 2 + (i % 3);
      for (let k = 0; k < targetCount; k++) {
        const target = (i + k * 3 + 1) % nodes.length;
        if (!node.connections.includes(target) && target !== i) {
          node.connections.push(target);
        }
      }
    });

    let mouseX = -1000;
    let mouseY = -1000;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      let found: Node | null = null;
      for (const node of nodes) {
        const dx = node.x - mouseX;
        const dy = node.y - mouseY;
        if (Math.hypot(dx, dy) < node.radius + 14) {
          found = node;
          break;
        }
      }
      setHoveredNode(found);
    };

    const onMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
      setHoveredNode(null);
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Center attractor force and gentle wander
      const centerX = width / 2;
      const centerY = height / 2;

      // Update positions
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;

        // Gentle pull towards center
        const toCenterX = centerX - node.x;
        const toCenterY = centerY - node.y;
        node.vx += toCenterX * 0.00008;
        node.vy += toCenterY * 0.00008;

        // Mouse repelling subtle interactive field
        const dmx = node.x - mouseX;
        const dmy = node.y - mouseY;
        const distMouse = Math.hypot(dmx, dmy);
        if (distMouse < 120 && distMouse > 0) {
          const force = (120 - distMouse) / 120;
          node.vx += (dmx / distMouse) * force * 0.5;
          node.vy += (dmy / distMouse) * force * 0.5;
        }

        // Dampening
        node.vx *= 0.985;
        node.vy *= 0.985;

        // Soft boundaries
        const pad = 40;
        if (node.x < pad) { node.x = pad; node.vx *= -1; }
        if (node.x > width - pad) { node.x = width - pad; node.vx *= -1; }
        if (node.y < pad) { node.y = pad; node.vy *= -1; }
        if (node.y > height - pad) { node.y = height - pad; node.vy *= -1; }
      }

      // Draw subtle orbital rings to emphasize living coordinates
      ctx.save();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 8]);
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, 190, 110, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, 330, 200, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        for (const targetIdx of node.connections) {
          const target = nodes[targetIdx];
          const dist = Math.hypot(node.x - target.x, node.y - target.y);
          if (dist > 360) continue;

          const isHighlighted = 
            (hoveredNode && (hoveredNode.id === node.id || hoveredNode.id === target.id)) ||
            (activeCategory && (activeCategory === node.category || activeCategory === target.category));

          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);

          if (isHighlighted) {
            ctx.strokeStyle = 'rgba(129, 140, 248, 0.65)';
            ctx.lineWidth = 1.6;
          } else {
            const alpha = Math.max(0.04, 0.22 - dist / 380);
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.8;
          }
          ctx.stroke();

          // Flowing energy particle along edge
          const pulseT = (time * 0.5 + i * 0.4) % 1;
          const px = node.x + (target.x - node.x) * pulseT;
          const py = node.y + (target.y - node.y) * pulseT;
          ctx.beginPath();
          ctx.arc(px, py, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = isHighlighted ? 'rgba(255, 255, 255, 0.85)' : 'rgba(165, 180, 252, 0.35)';
          ctx.fill();
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const isHovered = hoveredNode?.id === node.id;
        const matchesCategory = !activeCategory || activeCategory === node.category;
        const opacity = matchesCategory ? 1 : 0.25;

        ctx.save();
        ctx.globalAlpha = opacity;

        // Outer glow
        const glowRadius = isHovered ? node.radius * 3.5 : node.radius * 2;
        const grad = ctx.createRadialGradient(node.x, node.y, 1, node.x, node.y, glowRadius);
        grad.addColorStop(0, node.color + '55');
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();

        // Inner solid core
        ctx.beginPath();
        ctx.arc(node.x, node.y, isHovered ? node.radius + 2 : node.radius, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? '#FFFFFF' : node.color;
        ctx.fill();

        // Node label
        ctx.font = isHovered ? '600 12px Inter, sans-serif' : '500 10.5px Inter, sans-serif';
        ctx.fillStyle = isHovered ? '#FFFFFF' : 'rgba(226, 232, 240, 0.7)';
        ctx.fillText(node.name, node.x + node.radius + 6, node.y + 3.5);

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [hoveredNode, activeCategory]);

  return (
    <div ref={containerRef} className="relative w-full h-[520px] lg:h-[600px] rounded-2xl border border-white/[0.08] bg-[#090B12]/80 backdrop-blur-2xl overflow-hidden shadow-2xl">
      {/* Top bar indicators */}
      <div className="absolute top-4 left-6 right-6 z-20 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.06] pb-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
          <span className="font-mono text-xs uppercase tracking-wider text-slate-300">
            Realtime Knowledge Substrate
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.06] text-slate-400">
            4.8M Ent / sec
          </span>
        </div>

        {/* Category filtering tags */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-full text-[11px] font-mono">
          {Object.entries(CATEGORY_COLORS).slice(0, 5).map(([cat, color]) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className={`px-2.5 py-0.5 rounded-full border transition-all ${
                activeCategory === cat 
                  ? 'border-white text-white font-semibold' 
                  : 'border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20'
              }`}
              style={{
                backgroundColor: activeCategory === cat ? `${color}33` : 'transparent',
              }}
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full mr-1.5" style={{ backgroundColor: color }}></span>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block cursor-crosshair" />

      {/* Hover tooltip card */}
      {hoveredNode && (
        <div className="absolute bottom-6 left-6 z-20 p-3.5 rounded-xl bg-[#0F121C]/95 border border-indigo-500/30 backdrop-blur-xl shadow-xl max-w-xs animate-in fade-in duration-200">
          <div className="flex items-center gap-2 mb-1">
            <span 
              className="w-2 h-2 rounded-full" 
              style={{ backgroundColor: CATEGORY_COLORS[hoveredNode.category] }}
            />
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
              {hoveredNode.category} Entity
            </span>
          </div>
          <div className="text-sm font-semibold text-white mb-1">
            {hoveredNode.name}
          </div>
          <div className="text-[11px] text-slate-400 font-mono flex items-center justify-between pt-1 border-t border-white/[0.06]">
            <span>Active Links: {hoveredNode.connections.length * 42}</span>
            <span className="text-emerald-400">Confidence 99.4%</span>
          </div>
        </div>
      )}

      {/* Bottom telemetry overlay */}
      <div className="absolute bottom-4 right-6 z-20 hidden sm:flex items-center gap-4 text-[11px] font-mono text-slate-500">
        <div>Lat: 3.2ms</div>
        <div className="w-1 h-1 rounded-full bg-slate-600"></div>
        <div>State: Continuous Inference</div>
        <div className="w-1 h-1 rounded-full bg-slate-600"></div>
        <div>Engine: Semantic DAG</div>
      </div>
    </div>
  );
};
