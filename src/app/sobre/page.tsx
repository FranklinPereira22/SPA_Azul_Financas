'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Cpu, 
  Terminal, 
  Layers, 
  ArrowUpRight, 
  ChevronRight,
  Database,
  Globe
} from 'lucide-react';

export default function SobreEmpresa() {
  return (
    <div className="bg-[#fcfcfd] text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* NAVBAR (IGUAL À HOME) */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-[100] px-8 py-4 flex justify-between items-center bg-white/70 backdrop-blur-xl border border-white/20 shadow-sm rounded-3xl">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black shadow-lg">G</div>
          <span className="text-xl font-black tracking-tighter uppercase">Growth<span className="text-blue-600">Tech</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-[2px]">
          <a href="../" className="hover:text-blue-600 transition-colors italic">O Produto</a>
          <span className="text-blue-600 border-b border-blue-600">Sobre a Empresa</span>
          <a href="mailto:contato@growthtech.com" className="bg-slate-900 text-white px-6 py-3 rounded-2xl hover:bg-blue-600 transition-all flex items-center gap-2">
            Falar com a Engenharia <ChevronRight size={14} />
          </a>
        </div>
      </nav>

      {/* HERO - FOCO NA ENGENHARIA */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 pt-32">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-[3px] mb-8">
              Software Engineering Lab
            </span>
            <h1 className="text-[12vw] md:text-[8vw] font-black leading-[0.8] tracking-tighter uppercase mb-12">
              Engenharia de <br />
              <span className="text-slate-200 italic font-light">Elite.</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
              <div className="md:col-span-7">
                <p className="text-2xl md:text-3xl font-medium text-slate-500 leading-tight tracking-tight">
                  A <span className="text-slate-900 font-bold">GrowthTech</span> é um laboratório especializado em arquitetar e construir ativos digitais. Nós criamos softwares prontos para escala, focados em <span className="text-blue-600">performance e segurança.</span>
                </p>
              </div>
              <div className="md:col-span-5 flex md:justify-end gap-10">
                <div>
                   <p className="text-[10px] font-black uppercase text-slate-300 tracking-widest mb-2">Localização</p>
                   <p className="font-bold text-lg italic">Remoto / Global</p>
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase text-slate-300 tracking-widest mb-2">Expertise</p>
                   <p className="font-bold text-lg italic">Full-Stack SaaS</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GRID DE CAPACIDADES (PADRÃO BENTO) */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Box 1 - Arquitetura */}
          <div className="md:col-span-4 bg-slate-950 rounded-[3rem] p-12 text-white flex flex-col justify-between h-[450px]">
            <Terminal className="text-blue-500" size={40} />
            <div>
              <h3 className="text-3xl font-black mb-4 uppercase">Arquitetura <br/> de Valor.</h3>
              <p className="text-slate-400 font-medium text-sm leading-relaxed">
                Construímos sistemas utilizando Clean Architecture, facilitando a manutenção e a venda do ativo para grandes players.
              </p>
            </div>
          </div>

          {/* Box 2 - Stack Técnica */}
          <div className="md:col-span-8 bg-white border border-slate-200 rounded-[3rem] p-12 flex flex-col justify-between group overflow-hidden relative">
            <div className="relative z-10">
               <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter">Stack <span className="text-blue-600 italic">2026</span></h3>
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Next.js 15', 'TypeScript', 'Tailwind v4', 'PostgreSQL', 'Framer Motion', 'Node.js', 'Redis', 'Docker'].map((tech) => (
                    <div key={tech} className="px-4 py-2 bg-slate-50 rounded-xl border border-slate-100 text-[10px] font-black uppercase tracking-tighter text-slate-500 flex items-center gap-2">
                       <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" /> {tech}
                    </div>
                  ))}
               </div>
            </div>
            <Code2 size={180} className="absolute bottom-[-40px] right-[-20px] text-slate-50 -z-0 group-hover:text-blue-50 transition-colors duration-500" />
          </div>

          {/* Box 3 - Propriedade Intelectual */}
          <div className="md:col-span-7 bg-white border border-slate-200 rounded-[3rem] p-10 flex items-center justify-between group">
            <div className="max-w-xs">
              <h4 className="text-2xl font-black mb-2 uppercase italic text-blue-600">Transferência Total</h4>
              <p className="text-slate-500 text-sm font-medium">Ao adquirir nossos produtos, você recebe 100% da propriedade intelectual e acesso total ao repositório.</p>
            </div>
            <Layers className="text-slate-100 group-hover:text-blue-100 transition-colors" size={60} />
          </div>

          {/* Box 4 - Escalabilidade */}
          <div className="md:col-span-5 bg-blue-600 rounded-[3rem] p-10 text-white flex flex-col justify-between">
            <Globe size={40} />
            <div>
              <h4 className="text-2xl font-black mb-2 uppercase">Pronto para o Mundo</h4>
              <p className="text-blue-100 text-sm font-medium">Sistemas multi-moeda e multi-idioma preparados para expansão internacional imediata.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-40 text-center">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12 uppercase italic">Construa com a <br/> <span className="text-blue-600 font-black">GrowthTech.</span></h2>
        <div className="flex flex-wrap justify-center gap-6">
          <button className="bg-slate-900 text-white px-12 py-6 rounded-full font-black text-xl hover:bg-blue-600 transition-all flex items-center gap-3">
             Ver Outros Projetos <ArrowUpRight />
          </button>
          <button className="border-2 border-slate-900 px-12 py-6 rounded-full font-black text-xl hover:bg-slate-900 hover:text-white transition-all">
             Contratar Consultoria
          </button>
        </div>
        
        <footer className="mt-40 border-t border-slate-100 pt-20">
           <p className="text-[10px] font-black uppercase tracking-[5px] text-slate-300">
             © 2026 GrowthTech Engineering • Luanda / Global
           </p>
        </footer>
      </section>
    </div>
  );
}