'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const INPUT_BASE = 'w-full px-4 py-3 rounded-xl border border-outline-variant/40 bg-surface font-body text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all'

export function GOForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [form, setForm] = useState({ nome: '', whatsapp: '', bairro: '', casado: '', mensagem: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate / replace with real API call
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <motion.div
        className="bg-surface rounded-2xl p-8 md:p-10 border border-outline-variant/15 shadow-sm text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-16 h-16 rounded-full bg-primary mx-auto flex items-center justify-center mb-5 text-3xl"
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.5 }}
        >
          ✓
        </motion.div>
        <h3 className="font-sans font-bold text-xl text-on-surface mb-3">Mensagem enviada!</h3>
        <p className="font-body text-sm text-on-surface-variant leading-relaxed">
          Nossa secretaria entrará em contato pelo WhatsApp em breve para indicar o grupo mais próximo de você.
        </p>
      </motion.div>
    )
  }

  return (
    <div className="bg-surface rounded-2xl p-6 md:p-8 border border-outline-variant/15 shadow-sm">
      <h3 className="font-sans font-bold text-xl text-on-surface mb-6">Quero participar de um GO</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-sans font-semibold text-xs text-on-surface-variant uppercase tracking-wider mb-1.5">
            Nome completo *
          </label>
          <input
            required
            type="text"
            placeholder="Seu nome"
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
            className={INPUT_BASE}
          />
        </div>

        <div>
          <label className="block font-sans font-semibold text-xs text-on-surface-variant uppercase tracking-wider mb-1.5">
            WhatsApp *
          </label>
          <input
            required
            type="tel"
            placeholder="(92) 99999-9999"
            value={form.whatsapp}
            onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
            className={INPUT_BASE}
          />
        </div>

        <div>
          <label className="block font-sans font-semibold text-xs text-on-surface-variant uppercase tracking-wider mb-1.5">
            Bairro *
          </label>
          <input
            required
            type="text"
            placeholder="Seu bairro em Manaus"
            value={form.bairro}
            onChange={(e) => setForm({ ...form, bairro: e.target.value })}
            className={INPUT_BASE}
          />
        </div>

        <div>
          <label className="block font-sans font-semibold text-xs text-on-surface-variant uppercase tracking-wider mb-1.5">
            Situação
          </label>
          <select
            value={form.casado}
            onChange={(e) => setForm({ ...form, casado: e.target.value })}
            className={INPUT_BASE}
          >
            <option value="">Selecione...</option>
            <option value="casal">Casal</option>
            <option value="solteiro">Solteiro(a)</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        <div>
          <label className="block font-sans font-semibold text-xs text-on-surface-variant uppercase tracking-wider mb-1.5">
            Mensagem (opcional)
          </label>
          <textarea
            rows={3}
            placeholder="Algo que queira nos contar..."
            value={form.mensagem}
            onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
            className={`${INPUT_BASE} resize-none`}
          />
        </div>

        <motion.button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full bg-primary text-on-primary py-3.5 rounded-xl font-sans font-bold text-sm shadow-md disabled:opacity-70"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          {status === 'submitting' ? (
            <span className="flex items-center justify-center gap-2">
              <motion.span
                className="w-4 h-4 border-2 border-on-primary/40 border-t-on-primary rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
              />
              Enviando...
            </span>
          ) : (
            'Enviar pedido'
          )}
        </motion.button>

        <p className="font-body text-xs text-on-surface-variant/60 text-center leading-relaxed">
          Suas informações serão usadas apenas para indicar um grupo próximo a você.
        </p>
      </form>
    </div>
  )
}
