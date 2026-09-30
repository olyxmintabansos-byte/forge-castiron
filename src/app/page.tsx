'use client';

import { useState } from 'react';

const ThermalSVG = ({ temp }: { temp: any }) => {
  const r = Math.min(255, Math.round((temp / 500) * 255));
  const g = Math.max(0, Math.round(100 - (temp / 500) * 100));
  const hotColor = `rgb(${r},${g},0)`;
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <ellipse cx="100" cy="110" rx="80" ry="15" fill={`${hotColor}20`} />
      <rect x="40" y="40" width="120" height="80" rx="8" fill={hotColor} opacity="0.7"/>
      <rect x="20" y="95" width="50" height="12" rx="4" fill="#b87333" opacity="0.9"/>
      <ellipse cx="100" cy="40" rx="60" ry="12" fill={hotColor} opacity="0.9"/>
      <text x="100" y="85" textAnchor="middle" fontSize="16" fill="#ffffff" fontWeight="bold">{temp}°F</text>
    </svg>
  );
};

const GlobalMaisonBar = ({ onCartOpen }: { onCartOpen: () => void }) => (
  <div className="border-b sticky top-0 z-40" style={{borderColor:'#c2410c',background:'#faf8f5'}}>
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="text-sm"><span className="font-bold" style={{color:'#121214'}}>OLYX ATELIER</span><span style={{color:'#c2410c'}} className="mx-2">//</span><span style={{color:'#121214',fontSize:'0.75rem'}}>MAISONS</span></div>
      <button onClick={onCartOpen} style={{color:'#121214'}} className="text-sm">CART</button>
    </div>
  </div>
);

const CartDrawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <>
    {isOpen && <div className="fixed inset-0 bg-black/30 z-40" onClick={onClose} />}
    <div className={`fixed right-0 top-0 h-screen w-96 transform transition z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{background:'#faf8f5',borderLeft:'1px solid #c2410c'}}>
      <div className="p-6"><h2 className="text-2xl mb-4 font-bold" style={{color:'#121214'}}>CART</h2><p className="text-sm" style={{color:'#666'}}>Empty.</p></div>
    </div>
  </>
);

export default function ForgeHome() {
  const [cartOpen, setCartOpen] = useState(false);
  const [patinaYear, setPatinaYear] = useState(1);
  const [temp, setTemp] = useState(200);
  const [size, setSize] = useState(12);

  const specs = [
    { label: 'Size', value: '12-inch (30cm)' },
    { label: 'Weight', value: '5.2 lb (2.36kg)' },
    { label: 'Material', value: 'Cast iron ASTM A48' },
    { label: 'Finish', value: 'Hand-seasoned' },
    { label: 'Handle', value: 'Ergonomic curve' },
    { label: 'Heat Range', value: 'To 500°C' },
    { label: 'Induction', value: 'Compatible' },
    { label: 'Lifespan', value: '100+ years' }
  ];

  return (
    <main style={{background:'#faf8f5',minHeight:'100vh',color:'#121214'}}>
      <GlobalMaisonBar onCartOpen={() => setCartOpen(true)} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl font-bold mb-2 leading-tight" style={{color:'#121214'}}>Hand-Poured<br/>Heritage Skillet</h1>
          <h2 className="text-xl mb-6" style={{color:'#c2410c'}}>Cast Iron / American Poured</h2>
          <p className="text-lg mb-8" style={{color:'rgba(18,18,20,0.7)',lineHeight:1.8}}>American-poured molten iron in stone molds. Five layers of seasoning. Builds non-stick patina through decades of cooking history. Induction compatible.</p>
          <div className="flex gap-6 items-center mb-12">
            <div><div className="text-3xl font-bold" style={{color:'#c2410c'}}>$210</div><div className="text-sm" style={{color:'rgba(18,18,20,0.4)'}}>Rp 3.300.000 / €195</div></div>
            <button onClick={() => setCartOpen(true)} className="px-8 py-3 font-bold" style={{background:'#121214',color:'#faf8f5'}}>ADD TO CART</button>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded" style={{background:'rgba(194,65,12,0.08)',border:'1px solid rgba(194,65,12,0.2)'}}>
              <label className="block text-sm mb-2" style={{color:'#c2410c'}}>Patina Timeline: Year {patinaYear}</label>
              <input type="range" min="1" max="100" value={patinaYear} onChange={(e) => setPatinaYear(parseInt(e.target.value))} className="w-full" />
              <div className="text-xs mt-2" style={{color:'rgba(18,18,20,0.5)'}}>{patinaYear < 5 ? 'Fresh: grey iron' : patinaYear < 20 ? 'Developing: dark copper tones' : patinaYear < 50 ? 'Seasoned: deep obsidian black' : 'Heritage: antique glass surface'}</div>
            </div>
            <div className="p-4 rounded" style={{background:'rgba(194,65,12,0.08)',border:'1px solid rgba(194,65,12,0.2)'}}>
              <label className="block text-sm mb-2" style={{color:'#c2410c'}}>Heat Simulation: {temp}°F</label>
              <input type="range" min="150" max="500" value={temp} onChange={(e) => setTemp(parseInt(e.target.value))} className="w-full" />
            </div>
          </div>
        </div>

        <div className="aspect-square rounded flex items-center justify-center" style={{background:'#121214',border:'1px solid rgba(194,65,12,0.3)'}}>
          <ThermalSVG temp={temp} />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-12">Iron Specifications</h2>
        <div className="grid grid-cols-4 gap-4">{specs.map((s, i) => (
          <div key={i} className="p-4" style={{border:'1px solid rgba(194,65,12,0.2)'}}>
            <div className="text-xs mb-1" style={{color:'#c2410c'}}>{s.label}</div>
            <div className="text-sm" style={{color:'#121214'}}>{s.value}</div>
          </div>
        ))}</div>
      </section>

      <footer className="py-8" style={{background:'#121214',borderTop:'1px solid #c2410c'}}>
        <div className="max-w-7xl mx-auto px-6 text-center text-xs" style={{color:'rgba(250,248,245,0.5)'}}>Forge Cast Iron / Heritage American cookware since 2024</div>
      </footer>
    </main>
  );
}
