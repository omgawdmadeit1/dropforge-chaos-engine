'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Dog, Copy, ExternalLink } from 'lucide-react';
import { toast } from 'sonner';
import { generateDogePay } from '@/lib/dogepay';

export default function ChaosDropPage() {
  const [idea, setIdea] = useState("Tesla treasure hunt NFT pack for meme lords");
  const [isDropping, setIsDropping] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [dogeResult, setDogeResult] = useState<any>(null);

  const handleChaosDrop = async () => {
    if (!idea.trim()) {
      toast.error("Give the Chaos Engine an idea, king");
      return;
    }

    setIsDropping(true);
    setResult(null);
    setDogeResult(null);

    try {
      await new Promise(r => setTimeout(r, 650));

      const products = [
        { name: "Cyberbeast Empire Pack", price: 69, type: "NFT + SaaS bundle" },
        { name: "Drop It Till You Own It Video Arc", price: 29, type: "HyperFrames viral" },
        { name: "Agent Marketplace Listing", price: 19, type: "Autonomous hustle agent" },
      ];

      const deployedUrl = `https://dropforge-${Date.now().toString(36)}.vercel.app`;

      const doge = await generateDogePay(69, idea.slice(0, 42), `SKU-${Date.now().toString(36)}`, 'demo-user-420');

      const videoUrl = `https://hyperframes.ai/preview/${Date.now()}`;

      const dropResult = {
        idea,
        products,
        deployedUrl,
        videoUrl,
        revenueProjected: 420,
      };

      setResult(dropResult);
      setDogeResult(doge);

      toast.success("CHAOS DROP COMPLETE", { description: "Empire spawned. Doge link + NFT voucher ready." });
      
      triggerMemeConfetti();

    } catch (e) {
      toast.error("Chaos engine hiccup", { description: "Try again — the void sometimes resists." });
    } finally {
      setIsDropping(false);
    }
  };

  const triggerMemeConfetti = () => {
    const colors = ['#ff2e94', '#00f3ff', '#facc15', '#a855f7'];
    for (let i = 0; i < 42; i++) {
      const c = document.createElement('div');
      c.className = 'confetti';
      c.style.left = Math.random() * 100 + 'vw';
      c.style.top = '-10px';
      c.style.width = '9px';
      c.style.height = '9px';
      c.style.background = colors[Math.floor(Math.random() * colors.length)];
      c.style.opacity = (0.7 + Math.random() * 0.3).toString();
      c.style.transform = `rotate(${Math.random() * 360}deg)`;
      document.body.appendChild(c);

      setTimeout(() => c.remove(), 2400);
    }
  };

  const copyLink = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard — go spread the chaos");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <div className="max-w-3xl mx-auto px-6 pt-12 pb-24">
        <div className="flex items-center justify-between mb-10">
          <div>
            <Link href="/" className="text-xs tracking-[3px] text-white/40">← BACK TO EMPIRE</Link>
            <div className="text-7xl font-black tracking-[-4.5px] leading-none mt-1">CHAOS DROP</div>
            <div className="text-[#ff2e94] font-mono text-sm mt-1">ONE PROMPT. INSTANT EMPIRE. + DOGE RAIN</div>
          </div>
          <div className="text-right text-xs text-white/50">
            DR.DROP-IT MODE<br />ENGAGED
          </div>
        </div>

        <div className="mb-8">
          <div className="text-xs uppercase tracking-[3px] text-white/40 mb-2">WHAT ARE WE DROPPING TODAY?</div>
          <input
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            className="w-full bg-black border border-white/20 focus:border-[#ff2e94] text-3xl py-5 px-6 rounded-2xl outline-none placeholder:text-white/20 font-medium"
            placeholder="Tesla treasure hunt NFT pack for meme lords"
          />
        </div>

        <button
          onClick={handleChaosDrop}
          disabled={isDropping}
          className="chaos-button disabled:opacity-60 w-full py-9 text-4xl font-black rounded-3xl flex items-center justify-center gap-4 text-black disabled:cursor-wait"
        >
          {isDropping ? (
            "FORGING YOUR EMPIRE IN THE VOID..."
          ) : (
            <>CHAOS DROP — PRINT MY EMPIRE NOW <Zap className="w-9 h-9" /></>
          )}
        </button>

        <div className="text-center text-[10px] mt-2.5 tracking-widest text-white/40">DUAL RAIL • STRIPE OR 69 DOGE • INSTANT NFT VOUCHER</div>

        <AnimatePresence>
          {result && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }}
              className="mt-10 space-y-6"
            >
              <div className="card p-8 rounded-3xl">
                <div className="uppercase text-[#00f3ff] text-xs tracking-[3px]">EMPIRE DEPLOYED</div>
                <div className="text-4xl font-black mt-2 mb-4">{result.idea}</div>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {result.products.map((p: any, idx: number) => (
                    <div key={idx} className="px-4 py-1 bg-white/5 rounded-full text-sm border border-white/10">{p.name} • ${p.price}</div>
                  ))}
                </div>

                <a 
                  href={result.deployedUrl} 
                  target="_blank" 
                  className="inline-flex items-center gap-2 text-[#ff2e94] hover:underline font-mono text-sm"
                >
                  {result.deployedUrl} <ExternalLink size={14} />
                </a>
              </div>

              {dogeResult && (
                <div className="card p-8 rounded-3xl border-[#facc15] border-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Dog className="text-[#facc15]" />
                    <div className="uppercase tracking-[3px] text-[#facc15] text-sm font-bold">DOGEPAY INSTANT MODE — LIVE</div>
                  </div>

                  <div className="font-mono text-sm mb-4 text-white/70">69 DOGE • MEMO: {idea}</div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href={dogeResult.dogeLink} 
                      target="_blank"
                      className="doge-btn flex-1 flex items-center justify-center gap-3 py-5 text-xl rounded-2xl font-black"
                    >
                      PAY WITH DOGE — INSTANT <Dog />
                    </a>
                    <button 
                      onClick={() => copyLink(dogeResult.dogeLink)}
                      className="flex items-center gap-2 border border-white/30 hover:bg-white/5 px-6 rounded-2xl font-semibold"
                    >
                      <Copy size={18} /> COPY LINK
                    </button>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <img src={dogeResult.qrDataUrl} alt="DogePay QR" className="rounded-2xl border border-white/10" />
                  </div>

                  <a 
                    href={dogeResult.nftClaimUrl} 
                    target="_blank"
                    className="mt-6 block text-center text-sm text-[#a855f7] hover:underline"
                  >
                    CLAIM YOUR SIGNED FORTUNE COOKIE NFT VOUCHER →
                  </a>

                  <div className="text-[10px] text-center text-white/40 mt-4">
                    Settlement in &lt;10s • 95% margin • Auto-triggers HyperFrames celebration + quest complete
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="card p-6 rounded-3xl">
                  <div className="text-xs text-white/50">PROJECTED THIS DROP</div>
                  <div className="text-6xl font-black tabular-nums mt-1 text-[#ff2e94]">${result.revenueProjected}</div>
                  <div className="text-sm mt-4">+ 1 Tesla-trek Quest unlocked • +1 Cyberbeast level</div>
                </div>
                <div className="card p-6 rounded-3xl flex items-center">
                  <div>
                    <div className="text-xs text-white/50">NEXT ACTIONS (auto-orchestrated)</div>
                    <ul className="mt-3 space-y-1 text-sm font-mono">
                      <li>• Linear task created: "New Empire Revenue"</li>
                      <li>• Notion asset page saved</li>
                      <li>• X thread drafted</li>
                      <li>• Video arc queued in HyperFrames</li>
                    </ul>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => { setResult(null); setDogeResult(null); }} 
                className="w-full py-4 rounded-full border border-white/20 hover:bg-white/5 text-sm tracking-widest"
              >
                DROP ANOTHER CHAOS BOMB
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
