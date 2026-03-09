import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Send, Loader2, Terminal, User } from 'lucide-react';
import { askAI } from '../services/gemini';

export const AISearch = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      const result = await askAI(query);
      setResponse(result || "Desculpe, não consegui gerar uma resposta.");
    } catch (err) {
      setError("Ocorreu um erro ao processar sua pergunta. Tente novamente.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-4">
            <Sparkles className="w-3 h-3" />
            <span>AI Assistant Beta</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Pergunte ao Lucas AI</h2>
          <p className="text-slate-400">
            Tire dúvidas sobre minhas experiências, tecnologias que utilizo ou como posso ajudar no seu projeto.
          </p>
        </div>

        <div className="glass-effect rounded-3xl p-6 md:p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="relative mb-8">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ex: Quais tecnologias você usa para performance?"
              className="w-full bg-slate-950/50 border border-white/10 rounded-2xl py-4 pl-6 pr-16 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
            />
            <button
              type="submit"
              disabled={isLoading || !query.trim()}
              className="absolute right-2 top-2 bottom-2 px-4 bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 disabled:text-slate-500 text-white rounded-xl transition-all flex items-center justify-center"
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            </button>
          </form>

          <AnimatePresence mode="wait">
            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-3 text-cyan-400 font-mono text-sm"
              >
                <Terminal className="w-4 h-4 animate-pulse" />
                <span>Processando resposta...</span>
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
              >
                {error}
              </motion.div>
            )}

            {response && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center shrink-0">
                    <Sparkles className="text-cyan-400 w-4 h-4" />
                  </div>
                  <div className="bg-slate-800/50 rounded-2xl p-6 text-slate-200 leading-relaxed border border-white/5">
                    {response}
                  </div>
                </div>
                <div className="flex justify-end">
                  <button 
                    onClick={() => { setQuery(''); setResponse(null); }}
                    className="text-xs text-slate-500 hover:text-cyan-400 transition-colors"
                  >
                    Limpar conversa
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {!response && !isLoading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Quais são seus projetos recentes?",
                "Você trabalha com Next.js?",
                "Como você garante a performance?",
                "Qual seu foco como desenvolvedor?"
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setQuery(suggestion)}
                  className="text-left p-3 rounded-xl border border-white/5 bg-white/5 text-slate-400 text-xs hover:bg-white/10 hover:text-white transition-all"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
