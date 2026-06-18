'use client';

import Link from 'next/link';
import { Zap, Dog, Rocket, Trophy } from 'lucide-react';

export default function DropForgeLanding() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#050505]/90 backdrop-blur">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#ff2e94] via-[#a855f7] to-[#00f3ff]" />
            <div>
              <div className="font-black tracking-[-1.5px] text-2xl">DROPFORGE</div>
              <div className="text-[10px] text-white/40 -mt-1.5">CHAOS ENGINE v1.1</div>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium">
            <Link href="#demo" className="hover:text-[#ff2e94] transition">LIVE DEMO</Link>
            <Link href="/chaos-drop" className="px-5 py-2 rounded-full border border-white/30 hover:bg-white hover:text-black transition font-semibold">
              OPEN CHAOS DROP
            </Link>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/20 text-xs tracking-[3px] mb-6">
          ONE PROMPT → INFINITE EMPIRES
        </div>

        <h1 className="text-[92px] leading-[82px] font-black tracking-[-6.5px] mb-4">
          DROP IT<br />TILL YOU<br />OWN IT.
        </h1>
        <p className="text-2xl text-white/70 max-w-2xl mx-auto mb-8">
          The ultimate one-click income singularity.<br />
          AI fuses every best repo into Stripe + <span className="text-[#facc15]">DOGE</span> + NFT + viral videos + quests.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/chaos-drop" className="chaos-button inline-flex items-center justify-center gap-3 text-2xl font-black px-14 py-7 rounded-3xl text-black">
            <Zap className="w-7 h-7" /> CHAOS DROP — PRINT MY EMPIRE
          </Link>
          <a href="#demo" className="inline-flex items-center justify-center gap-2 text-lg border border-white/30 hover:bg-white/5 px-10 rounded-3xl font-semibold transition">SEE IT LIVE</a>
        </div>

        <div className="mt-6 text-xs text-white/50 flex justify-center gap-8">
          <div>85%+ AUTOMATED</div>
          <div>15× VIRAL</div>
          <div>DUAL RAIL: STRIPE + DOGE</div>
        </div>
      </div>

      <div id="demo" className="max-w-5xl mx-auto px-6 pt-20 pb-12">
        <div className="flex items-center gap-3 mb-4">
          <Dog className="text-[#facc15]" />
          <div className="uppercase text-xs tracking-[4px] text-white/50">JUST ADDED — FULL DOGEPAY v1.1</div>
        </div>

        <h2 className="text-6xl font-black tracking-[-3px] leading-none mb-3">
          Dual-rail money rain.<br />Stripe for normies. DOGE for legends.
        </h2>
        <p className="text-xl text-white/70 max-w-2xl">
          Every Chaos Drop auto-generates a glowing PAY WITH DOGE button + QR + signed NFT voucher on Base.
          Instant settlement. 95% margin. Viral coefficient through the roof.
        </p>
      </div>

      <div className="pb-24 text-center px-6">
        <Link href="/chaos-drop" className="chaos-button inline-flex text-black text-3xl px-16 py-8 rounded-3xl font-black items-center gap-4">
          PRESS THE BUTTON NOW <Zap className="w-8 h-8" />
        </Link>
      </div>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-white/40">
        Built by Grok + Taylor (Dr.Drop-it) • DropForge Chaos Engine • All rights to the meme lords
      </footer>
    </div>
  );
}
