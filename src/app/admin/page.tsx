'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, Monitor, Moon, Sun, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const telas = [
  { id: 'dashboard', nome: 'Dashboard Principal', arquivo: 'dashboard.png' },
  { id: 'auth-login', nome: 'Tela de Login', arquivo: 'auth_login.png' },
  { id: 'auth-cadastro', nome: 'Tela de Cadastro', arquivo: 'auth_cadastro.png' },
  { id: 'cms', nome: 'Gestão de Conteúdo (CMS)', arquivo: 'cms.png' },
  { id: 'reports', nome: 'Relatórios Avançados', arquivo: 'reports.png' },
  { id: 'services', nome: 'Gestão de Serviços', arquivo: 'services.png' },
  { id: 'settings', nome: 'Configurações', arquivo: 'settings.png' },
  { id: 'users', nome: 'Controle de Usuários', arquivo: 'users.png' },
];

export default function GaleriaAdmin() {
  const [modo, setModo] = useState<'light' | 'dark'>('dark');

  return (
    <div className={`min-h-screen transition-colors duration-500 ${modo === 'dark' ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* HEADER DA GALERIA */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group text-sm font-bold uppercase tracking-widest">
          <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Voltar para Home
        </Link>

        <div className="flex bg-slate-800/50 p-1 rounded-xl border border-white/5">
          <button 
            onClick={() => setModo('light')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-black uppercase transition-all ${modo === 'light' ? 'bg-white text-blue-600 shadow-lg' : 'text-slate-400'}`}
          >
            <Sun size={14} /> Light
          </button>
          <button 
            onClick={() => setModo('dark')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-black uppercase transition-all ${modo === 'dark' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400'}`}
          >
            <Moon size={14} /> Dark
          </button>
        </div>
      </nav>

      {/* CONTEÚDO */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <header className="mb-20">
          <span className="text-blue-600 font-black uppercase tracking-[3px] text-xs">System Architecture</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mt-4 mb-6 uppercase">
            Interface do <br /> <span className="italic opacity-50">Painel Administrativo.</span>
          </h1>
          <p className="max-w-2xl text-slate-500 font-medium text-lg">
            Explore a robustez técnica do ecossistema Azul Finanças. Telas projetadas para alta performance, 
            disponíveis em temas claro e escuro com total consistência visual.
          </p>
        </header>

        {/* GRID DE TELAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {telas.map((tela) => (
            <motion.div 
              key={tela.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex justify-between items-end mb-4">
                <h3 className="font-black uppercase tracking-tighter text-xl">{tela.nome}</h3>
                <span className="text-[10px] font-mono opacity-30">{tela.id}.tsx</span>
              </div>
              
              <div className={`relative aspect-video rounded-[2rem] overflow-hidden border-[8px] transition-colors duration-500 ${modo === 'dark' ? 'border-white/5 bg-slate-900' : 'border-slate-200 bg-white'} shadow-2xl group-hover:scale-[1.01] transition-transform`}>
                <Image 
                  src={`/painel/${modo}/${tela.arquivo}`}
                  alt={tela.nome}
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
                
                {/* Overlay de Hover */}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* FOOTER DA GALERIA */}
      <footer className="py-32 text-center border-t border-white/5">
        <h2 className="text-3xl font-black mb-8 uppercase italic">Pronto para implementação imediata.</h2>
        <a href="mailto:contato@growthtech.com" className="bg-blue-600 text-white px-10 py-5 rounded-full font-black hover:scale-105 transition-all inline-flex items-center gap-3">
          Solicitar Documentação Técnica <ArrowUpRight />
        </a>
      </footer>
    </div>
  );
}