'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, Smartphone, Zap, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

// Array com as 12 telas baseadas no seu print da pasta public/mobile
const mobileScreens = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  path: `/mobile/mobile-${i + 1}.PNG`, // Note o .PNG em maiúsculo conforme seu print
  label: `Interface ${i + 1}`
}));

export default function MobileShowcase() {
  return (
    <div className="min-h-screen bg-[#fcfcfd] text-slate-900 font-sans">
      
      {/* HEADER SIMPLIFICADO */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-[100] px-8 py-4 flex justify-between items-center bg-white/80 backdrop-blur-xl border border-slate-200 shadow-sm rounded-3xl">
        <Link href="/" className="flex items-center gap-2 font-black uppercase text-xs tracking-tighter">
          <ChevronLeft size={16} /> Voltar
        </Link>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-black text-xs">AF</div>
          <span className="font-black uppercase text-xs tracking-tighter">Mobile <span className="text-blue-600 italic font-medium">Pages</span></span>
        </div>
      </nav>

      {/* TITULO DA PÁGINA */}
      <section className="pt-40 pb-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-blue-600 font-black uppercase tracking-[4px] text-[10px]">On-The-Go Experience</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mt-4 mb-8 uppercase leading-none">
            Ecossistema <br /> <span className="text-blue-600 italic font-light">Mobile-First.</span>
          </h1>
          <p className="max-w-xl mx-auto text-slate-500 font-medium">
            Cada pixel foi otimizado para oferecer uma experiência nativa no navegador. 
            Arquitetura PWA pronta para instalação em iOS e Android.
          </p>
        </motion.div>
      </section>

      {/* GRID DE CELULARES */}
      <section className="px-6 pb-40 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {mobileScreens.map((screen, index) => (
            <motion.div
              key={screen.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[9/19] rounded-[2.5rem] bg-slate-900 border-[7px] border-slate-900 shadow-2xl overflow-hidden group-hover:scale-[1.03] transition-transform duration-500">
                <Image 
                  src={screen.path}
                  alt={screen.label}
                  fill
                  className="object-cover"
                  unoptimized
                />
                {/* Overlay de Brilho */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
              </div>
              <p className="mt-6 text-center text-[10px] font-black uppercase tracking-[2px] text-slate-300 group-hover:text-blue-600 transition-colors">
                {screen.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BANNER DE VANTAGENS TÉCNICAS */}
      <section className="bg-slate-950 py-24 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <Zap className="text-blue-500" size={32} />
            <h3 className="text-xl font-black uppercase italic">Performance</h3>
            <p className="text-slate-400 text-sm">Carregamento instantâneo mesmo em conexões 3G instáveis.</p>
          </div>
          <div className="flex flex-col gap-4">
            <Smartphone className="text-blue-500" size={32} />
            <h3 className="text-xl font-black uppercase italic">Responsividade</h3>
            <p className="text-slate-400 text-sm">Ajuste dinâmico para todos os tamanhos de tela e entalhes (notches).</p>
          </div>
          <div className="flex flex-col gap-4">
            <ShieldCheck className="text-blue-500" size={32} />
            <h3 className="text-xl font-black uppercase italic">Segurança</h3>
            <p className="text-slate-400 text-sm">Autenticação biométrica integrada e criptografia de ponta-a-ponta.</p>
          </div>
        </div>
      </section>

      {/* FOOTER PADRÃO GROWTH TECH */}
      <footer className="bg-[#0a0c10] py-16 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          <div className="flex items-center gap-3 opacity-50 grayscale">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black font-black text-sm">G</div>
            <span className="text-white text-lg font-black tracking-tighter uppercase italic">GrowthTech</span>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[5px] text-slate-500 text-center">
            © 2026 GrowthTech Engineering Lab • High Performance Software
          </p>
        </div>
      </footer>
    </div>
  );
}