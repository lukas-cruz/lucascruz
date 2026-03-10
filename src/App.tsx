/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Layout, 
  Smartphone, 
  Globe, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronRight, 
  Cpu, 
  Layers, 
  Zap,
  Menu,
  X,
  Terminal
} from 'lucide-react';

import { AISearch } from './components/AISearch';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-slate-950 selection:bg-cyan-500/30">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-white/5">
        {/* ... existing header content ... */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center rounded-lg shadow-lg shadow-cyan-500/20">
                <Code2 className="text-white w-6 h-6" />
              </div>
              <div>
                <h1 className="text-white font-bold text-lg leading-tight tracking-tight">LUCAS CRUZ</h1>
                <p className="text-[10px] text-cyan-400 uppercase tracking-[0.2em] font-mono">Front-end Engineer</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {['Projetos', 'Habilidades', 'Sobre', 'Contato'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {item}
                </a>
              ))}
              <a 
                href="#contato" 
                className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-cyan-600/20"
              >
                VAMOS CONVERSAR
              </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-slate-900 border-b border-white/10 px-4 py-6 flex flex-col gap-4"
          >
            {['Projetos', 'Habilidades', 'Sobre', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-lg font-medium text-slate-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="#contato" 
              className="bg-cyan-600 text-white px-5 py-3 rounded-md font-bold text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              VAMOS CONVERSAR
            </a>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-500/5 to-transparent" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-slate-950 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6">
                <Terminal className="w-3 h-3" />
                <span>Disponível para novos projetos</span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 tracking-tight">
                Criando interfaces <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">memoráveis</span> e código de alta performance.
              </h2>
              <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
                Olá, eu sou o Lucas. Desenvolvedor Front-end focado em transformar ideias complexas em experiências digitais fluidas, modernas e acessíveis.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#projetos"
                  className="flex items-center justify-center gap-2 bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-cyan-400 hover:scale-105"
                >
                  Ver Projetos
                  <ChevronRight className="w-5 h-5" />
                </a>
                <div className="flex items-center gap-4 px-4">
                  <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors"><Mail className="w-6 h-6" /></a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative hidden md:block"
            >
              <div className="relative z-10">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-slate-900 group">
                  <img 
                    src="https://hmiujiuiaauuc62r.public.blob.vercel-storage.com/perfil.jpg..jpeg" 
                    alt="Lucas Cruz" 
                    className="w-full h-full object-cover transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                </div>
                
                {/* Floating Tech Cards */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 glass-effect p-4 rounded-2xl shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                      <Zap className="text-cyan-400 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Performance</p>
                      <p className="text-[10px] text-slate-400 uppercase">99+ Lighthouse</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-6 -left-6 glass-effect p-4 rounded-2xl shadow-2xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Layers className="text-blue-400 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">Arquitetura</p>
                      <p className="text-[10px] text-slate-400 uppercase">Clean Code</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'Framer Motion'].map((skill) => (
              <div key={skill} className="flex flex-col items-center gap-3 group">
                <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-white/5 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-slate-800/50 transition-all duration-300">
                  <Cpu className="w-8 h-8 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>
                <span className="text-sm font-medium text-slate-400 group-hover:text-white transition-colors">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Search Section */}
      <AISearch />

      {/* Projects Section */}
      <section id="projetos" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold text-white mb-4">Projetos em Destaque</h2>
              <p className="text-slate-400 max-w-xl">
                Uma seleção dos meus trabalhos mais recentes, focados em design excepcional e experiência do usuário.
              </p>
            </div>
            <a href="#" className="text-cyan-400 font-bold flex items-center gap-2 hover:text-cyan-300 transition-colors">
              Ver todos no GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Nova Finanças',
                category: 'Fintech Dashboard',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
                tags: ['React', 'TypeScript', 'Recharts']
              },
              {
                title: 'EcoStore',
                category: 'E-commerce Sustentável',
                image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop',
                tags: ['Next.js', 'Stripe', 'Tailwind']
              }
            ].map((project, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-white/5"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <p className="text-cyan-400 text-xs font-mono uppercase tracking-widest mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <div className="flex gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-[10px] text-slate-300 border border-white/10">{tag}</span>
                    ))}
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 text-white font-bold group/link">
                    Explorar Projeto
                    <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services/What I Do Section */}
      <section id="serviços" className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Como posso ajudar</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Especializado em criar soluções digitais que unem estética e funcionalidade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Desenvolvimento Web',
                desc: 'Aplicações robustas e escaláveis utilizando as tecnologias mais modernas do ecossistema React.',
                icon: Layout
              },
              {
                title: 'Interfaces Responsivas',
                desc: 'Design que se adapta perfeitamente a qualquer dispositivo, garantindo a melhor experiência mobile.',
                icon: Smartphone
              },
              {
                title: 'Otimização de SEO',
                desc: 'Código semântico e performance otimizada para garantir que seu projeto seja encontrado.',
                icon: Globe
              }
            ].map((service, i) => (
              <div 
                key={i}
                className="glass-effect p-8 rounded-3xl hover:bg-slate-800/50 transition-all"
              >
                <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="text-cyan-400 w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan-600/5" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-6">Vamos criar algo incrível juntos?</h2>
          <p className="text-xl text-slate-400 mb-10">
            Estou sempre aberto a novas oportunidades e colaborações desafiadoras.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:lucas@exemplo.com"
              className="bg-cyan-600 hover:bg-cyan-500 text-white px-10 py-5 rounded-full font-bold text-xl transition-all shadow-2xl shadow-cyan-600/20"
            >
              Me envie um e-mail
            </a>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center">
              <Code2 className="text-white w-5 h-5" />
            </div>
            <span className="text-white font-bold">LUCAS CRUZ</span>
          </div>
          
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Lucas Cruz. Desenvolvido com React & Tailwind.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
