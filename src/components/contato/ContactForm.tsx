'use client'

import { useState } from 'react'
import { motion } from 'motion/react'

const INPUT_BASE = 'w-full px-4 py-3 rounded-xl border border-outline-variant/40 bg-surface font-body text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ nome: '', email: '', assunto: '', mensagem: '' })
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contato', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || 'Erro ao enviar. Tente novamente.')
      }

      setStatus('success')
      setForm({ nome: '', email: '', assunto: '', mensagem: '' })
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Erro ao enviar. Tente novamente.')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        className="bg-surface rounded-2xl p-10 border border-outline-variant/15 shadow-sm text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <motion.div
          className="w-16 h-16 rounded-full bg-primary mx-auto flex items-center justify-center mb-5"
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.5 }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
        </motion.div>
        <h3 className="font-sans font-bold text-xl text-on-surface mb-3">Mensagem recebida!</h3>
        <p className="font-body text-sm text-on-surface-variant max-w-sm mx-auto leading-relaxed">
          Obrigado por entrar em contato. Nossa secretaria responderá em breve, de segunda a sexta das 9h às 17h.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 font-sans font-semibold text-sm text-primary hover:underline"
        >
          Enviar outra mensagem
        </button>
      </motion.div>
    )
  }

  return (
    <div className="bg-surface rounded-2xl p-6 md:p-8 border border-outline-variant/15 shadow-sm">
      <h3 className="font-sans font-bold text-xl text-on-surface mb-6">Envie uma mensagem</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-sans font-semibold text-xs text-on-surface-variant uppercase tracking-wider mb-1.5">
              Nome *
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
              E-mail *
            </label>
            <input
              required
              type="email"
              placeholder="seu@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={INPUT_BASE}
            />
          </div>
        </div>

        <div>
          <label className="block font-sans font-semibold text-xs text-on-surface-variant uppercase tracking-wider mb-1.5">
            Assunto *
          </label>
          <select
            required
            value={form.assunto}
            onChange={(e) => setForm({ ...form, assunto: e.target.value })}
            className={INPUT_BASE}
          >
            <option value="">Selecione um assunto</option>
            <option value="visita">Quero visitar a IBCL</option>
            <option value="grupo-oracao">Grupos de Oração</option>
            <option value="ministerios">Ministérios</option>
            <option value="curso">Curso &quot;Um com Deus&quot;</option>
            <option value="outro">Outro assunto</option>
          </select>
        </div>

        <div>
          <label className="block font-sans font-semibold text-xs text-on-surface-variant uppercase tracking-wider mb-1.5">
            Mensagem *
          </label>
          <textarea
            required
            rows={5}
            placeholder="Escreva sua mensagem..."
            value={form.mensagem}
            onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
            className={`${INPUT_BASE} resize-none`}
          />
        </div>

        {status === 'error' && (
          <p className="font-body text-sm text-error bg-error-container/30 px-4 py-3 rounded-xl">
            {errorMsg}
          </p>
        )}

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
            'Enviar mensagem'
          )}
        </motion.button>
      </form>
    </div>
  )
}
