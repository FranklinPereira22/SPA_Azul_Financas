'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  ArrowRight,
  BarChart3,
  ShieldCheck,
  Zap,
  Code2,
  ChevronRight,
  Database,
  Terminal
} from 'lucide-react';

export default function PaginaProduto() {
  return (
    <div className="bg-[#fcfcfd] text-slate-900 font-sans selection:bg-blue-600 selection:text-white">

      {/* NAVBAR */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-[100] px-8 py-4 flex justify-between items-center bg-white/70 backdrop-blur-xl border border-white/20 shadow-sm rounded-3xl">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black shadow-lg shadow-blue-500/20">A</div>
          <span className="text-xl font-black tracking-tighter uppercase">Azul <span className="text-blue-600 font-medium italic">Finanças</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-[2px]">
          <a href="/sobre" className="hover:text-blue-600 transition-colors italic">By GrowthTech</a>
          <a href="#detalhes" className="hover:text-blue-600 transition-colors">Tecnologias</a>
          <a href="/admin" className="bg-slate-900 text-white px-6 py-3 rounded-2xl hover:bg-blue-600 transition-all flex items-center gap-2">
            Ver Painel Admin <ChevronRight size={14} />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 pt-32">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[3px] mb-8">
              Projeto Pronto para Entrega
            </span>
            <h1 className="text-[13vw] md:text-[9vw] font-black leading-[0.8] tracking-tighter uppercase mb-12">
              SaaS <br />
              <span className="text-blue-600 italic">Financeiro.</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
              <div className="md:col-span-6">
                <p className="text-2xl md:text-3xl font-medium text-slate-500 leading-tight tracking-tight">
                  A <span className="text-slate-900">Azul Finanças</span> é um software completo (MVP funcional) desenvolvido pela <span className="font-bold">GrowthTech</span> para investidores que buscam um ativo escalável e pronto para faturar.
                </p>
              </div>
              <div className="md:col-span-6 flex justify-end">
                <button className="group bg-blue-600 text-white px-12 py-6 rounded-[2rem] font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-blue-500/20 flex items-center gap-3">
                  Adquirir Projeto <ArrowRight />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BENTO GRID - PROVAS TÉCNICAS */}
      <section id="detalhes" className="px-6 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Card do Dashboard Real */}
          <div className="md:col-span-8 bg-slate-950 rounded-[3rem] p-12 overflow-hidden relative group min-h-[500px]">
            <div className="relative z-10">
              <h3 className="text-4xl font-black text-white mb-4">Painel de Gestão</h3>
              <p className="text-slate-400 max-w-sm font-medium">Interface intuitiva com gráficos em tempo real e controle de fluxo de caixa.</p>
            </div>

            <div className="absolute bottom-[-5%] right-[-2%] w-[85%] h-[65%] transition-all duration-700 group-hover:scale-[1.02] group-hover:-translate-y-4">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/dashboard.jpg"
                  alt="Azul Finanças Dashboard"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Card de Performance */}
          <div className="md:col-span-4 bg-blue-600 rounded-[3rem] p-10 text-white flex flex-col justify-between">
            <Zap fill="currentColor" size={40} />
            <div>
              <h4 className="text-3xl font-black mb-4 leading-none">Código Limpo <br /> e Veloz.</h4>
              <p className="text-blue-100 font-medium text-sm">Otimizado para carregamento instantâneo.</p>
            </div>
          </div>

          {/* Card de Tech Stack */}
          <div className="md:col-span-5 bg-white border border-slate-200 rounded-[3rem] p-10 flex flex-col justify-between">
            <div className="flex gap-4">
              <Terminal className="text-blue-600" />
              <Code2 className="text-blue-600" />
            </div>
            <div>
              <h4 className="text-2xl font-black mb-2 uppercase italic text-blue-600">Stack Moderna</h4>
              <p className="text-slate-500 font-bold">Next.js 15, TypeScript e Tailwind CSS.</p>
            </div>
          </div>

          {/* Card de Segurança */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[3rem] p-10 flex items-center justify-between">
            <div className="max-w-xs">
              <h4 className="text-2xl font-black mb-2 uppercase">Pronto para Escala</h4>
              <p className="text-slate-500 text-sm font-medium">Arquitetura modular preparada para novas funções.</p>
            </div>
            <Database size={40} className="text-slate-200" />
          </div>
        </div>
      </section>

      {/* SEÇÃO MOBILE SHOWCASE - FORA DA GRID PARA NÃO BUGAR */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Texto Lateral */}
            <div className="relative z-10">
              <span className="text-blue-600 font-black uppercase tracking-[3px] text-xs">Mobile First</span>
              <h2 className="text-4xl md:text-6xl font-black mt-6 mb-8 tracking-tighter leading-none">
                Gestão na palma <br /> da sua mão.
              </h2>
              <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-sm">
                Interface totalmente responsiva que funciona perfeitamente em qualquer dispositivo.
              </p>
              
              <div className="mt-10 flex gap-4">
                <div className="px-6 py-3 bg-slate-50 rounded-2xl border border-slate-100 font-bold text-sm text-slate-400 italic font-mono">/ios_ready</div>
                <div className="px-6 py-3 bg-slate-50 rounded-2xl border border-slate-100 font-bold text-sm text-slate-400 italic font-mono">/android_pwa</div>
              </div>
            </div>

            {/* BOX DOS PRINTS MOBILE */}
            <div className="relative flex justify-center items-center gap-6">
              <motion.div 
                whileHover={{ y: -20 }}
                className="relative z-20 w-[200px] h-[400px] bg-slate-900 rounded-[2.5rem] border-[6px] border-slate-900 shadow-2xl overflow-hidden"
              >
                <Image 
                  src="/mobile-1.png" 
                  alt="Tela Mobile Principal"
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div 
                initial={{ rotate: 5, x: -20 }}
                whileHover={{ rotate: 0, x: 0 }}
                className="absolute z-10 w-[180px] h-[360px] bg-slate-200 rounded-[2.5rem] border-[6px] border-slate-900 opacity-40 blur-[1px] translate-x-20 overflow-hidden hidden md:block"
              >
                <Image 
                  src="/mobile-2.png" 
                  alt="Tela Mobile Secundária"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER FINAL */}
      <section className="py-32 text-center">
        <h2 className="text-5xl font-black tracking-tighter mb-8 uppercase">Ideal para <span className="text-blue-600">Investidores.</span></h2>
        <p className="text-slate-500 max-w-xl mx-auto mb-12 font-medium">
          Ao adquirir o software, você recebe a propriedade total do código-fonte e o suporte técnico da GrowthTech.
        </p>
        <button className="bg-slate-900 text-white px-12 py-5 rounded-full font-black hover:bg-blue-600 transition-all">
          Solicitar Proposta de Compra
        </button>
        <footer className="mt-24 text-[10px] font-black uppercase tracking-[5px] text-slate-300">
          © 2026 GrowthTech Engineering • Engenharia de Software
        </footer>
      </section>
    </div>
  );
}