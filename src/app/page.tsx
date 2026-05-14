'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  ArrowUpRight, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

const colaboradores = [
  { 
    nome: "Franklin Pereira", 
    cargo: "Diretor Executivo e Engenheiro de Interface", 
    foto: "/colaboradores/1Franklin.jpg" 
  },
  { 
    nome: "Elton Migotto", 
    cargo: "Diretor de Design e Documentação Técnica", 
    foto: "/colaboradores/1Elton.jpg" 
  },
  { 
    nome: "Edevaldo Paparelli", 
    cargo: "Engenheiro de Interface Júnior", 
    foto: "/colaboradores/1Edevaldo.jpg" 
  },
  { 
    nome: "Cauã Gomes", 
    cargo: "Arquiteto de Software e Desenvolvedor Back-end", 
    foto: "/colaboradores/1Caua.jpg" 
  },
  { 
    nome: "Edgar Maia", 
    cargo: "Arquiteto de Software e Desenvolvedor Back-end", 
    foto: "/colaboradores/1Edgar.jpg" 
  },
];

export default function SobreEmpresa() {
  return (
    <div className="bg-[#f8fafc] text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* BACKGROUND DECORATIVO */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-indigo-100/40 blur-[100px]" />
      </div>

      {/* NAVBAR RESPONSIVA - GROWTHTECH INSTITUCIONAL */}
<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] flex items-center justify-between
  w-[90%] max-w-7xl 
  px-5 md:px-8 py-3 md:py-4 
  bg-white/80 backdrop-blur-2xl border border-white/40 shadow-sm rounded-full">
  
  {/* LOGO - LADO ESQUERDO (Agora sempre visível no mobile) */}
  <div className="flex items-center gap-2 shrink-0">
    <div className="w-8 h-8 md:w-10 md:h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black text-sm md:text-base">
      G
    </div>
    <span className="text-sm md:text-xl font-black tracking-tighter uppercase italic">
      Growth<span className="text-blue-600">Tech</span>
    </span>
  </div>

  {/* NAVEGAÇÃO E BOTÃO - DIREITA */}
  <div className="flex items-center gap-4 md:gap-10">
    
    {/* Link O Produto - Sempre visível */}
    <a href="/azul" className="text-[10px] md:text-[11px] font-black uppercase tracking-[2px] hover:text-blue-600 transition-all whitespace-nowrap">
      O Produto
    </a>
    
    {/* Link Sobre - Apenas Desktop para manter a bolachinha curta no mobile */}
    <span className="hidden md:block text-blue-600 text-[11px] font-black uppercase tracking-[2px] border-b-2 border-blue-600 pb-0.5 cursor-default">
      Sobre a Empresa
    </span>

    {/* BOTÃO DE CONTATO (Seta no mobile) */}
    <div className="shrink-0">
      <a href="mailto:contato@growthtech.com" className="bg-slate-900 text-white p-2.5 md:px-7 md:py-3.5 rounded-xl md:rounded-2xl hover:bg-blue-600 transition-all flex items-center gap-2 group">
        <span className="hidden md:block text-[10px] font-black uppercase tracking-[2px]">Falar com a Engenharia</span>
        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  </div>
</nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-[3px] mb-10 shadow-sm">
               Laboratório de Engenharia de Software
            </div>
            
            <h1 className="text-[13vw] md:text-[9vw] font-black leading-[0.85] tracking-tighter uppercase mb-12">
              Arquitetura <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent italic font-light">Digital de Elite.</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-8">
                <p className="text-2xl md:text-4xl font-medium text-slate-500 leading-[1.1] tracking-tight">
                  Transformamos códigos em <span className="text-slate-900 font-bold">ativos estratégicos</span>. <br /> A GrowthTech é onde a engenharia pura encontra a escala global.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO: CORPO TÉCNICO */}
      <section className="px-6 py-40 max-w-7xl mx-auto relative border-t border-slate-100">
        <div className="mb-32 text-center">
          <span className="text-blue-600 font-black uppercase tracking-[5px] text-[10px]">The minds behind the code</span>
          <h2 className="text-5xl md:text-7xl font-black mt-6 tracking-tighter uppercase leading-none">
            Corpo de <br /> <span className="text-blue-600 italic font-light opacity-80">Especialistas.</span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-x-16 gap-y-24 max-w-6xl mx-auto">
          {colaboradores.map((membro, index) => (
            <motion.div 
              key={membro.nome}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center group w-full sm:w-[300px]"
            >
              <div className="relative w-56 h-56 md:w-60 md:h-60 mb-10">
                <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-[-12px] rounded-full border border-blue-600/0 group-hover:border-blue-600/30 group-hover:rotate-180 transition-all duration-1000" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-[6px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-slate-100">
                  <Image 
                    src={membro.foto}
                    alt={membro.nome}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="text-center">
                <h4 className="text-2xl font-black tracking-tighter uppercase text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {membro.nome}
                </h4>
                <div className="flex flex-col gap-1.5 items-center">
                  {membro.cargo.split(/ e | & | \+ /).map((funcao, i) => (
                    <span key={i} className="text-slate-400 font-bold text-[10px] uppercase tracking-[3px] leading-tight block">
                      {funcao.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA FINAL - LIMPO E LEGÍVEL */}
      <section className="py-40 px-6 text-center relative bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-12 uppercase italic leading-[0.85] text-slate-900">
            Sua Próxima <br/> <span className="text-blue-600">Grande Ideia</span> <br/> Começa Aqui.
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-blue-600 text-white px-12 py-6 rounded-full font-black text-xl hover:bg-blue-700 hover:scale-105 transition-all flex items-center gap-3 shadow-xl shadow-blue-600/20">
               Iniciar Projeto <ArrowUpRight />
            </button>
            <button className="border-2 border-slate-200 text-slate-900 px-12 py-6 rounded-full font-black text-xl hover:bg-slate-900 hover:text-white transition-all">
               Consultoria Técnica
            </button>
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