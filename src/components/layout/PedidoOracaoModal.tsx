'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'

const INPUT_BASE = 'w-full px-4 py-3 rounded-xl border border-outline-variant/40 bg-surface font-body text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all'

type Status = 'idle' | 'submitting' | 'success' | 'error'

function maskPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits.length ? `(${digits}` : ''
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

interface Props {
  open: boolean
  onClose: () => void
}

export function PedidoOracaoModal({ open, onClose }: Props) {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ nome: '', telefone: '', pedido: '' })
  const [errorMsg, setErrorMsg] = useState('')
  const firstInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      setTimeout(() => firstInputRef.current?.focus(), 100)
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  function handleReset() {
    setStatus('idle')
    setForm({ nome: '', telefone: '', pedido: '' })
    setErrorMsg('')
  }

  function handleClose() {
    onClose()
    setTimeout(handleReset, 300)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    try {
      const res = await fetch('/api/pedido-oracao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || 'Erro ao enviar. Tente novamente.')
      }

      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Erro ao enviar. Tente novamente.')
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
            <motion.div
              className="bg-surface rounded-2xl shadow-2xl w-full max-w-md border border-outline-variant/15"
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-outline-variant/15">
                <div>
                  <h2 className="font-sans font-bold text-lg text-on-surface">Pedido de Oração</h2>
                  <p className="font-body text-xs text-on-surface-variant mt-0.5">Nossa equipe irá orar por você.</p>
                </div>
                <button
                  onClick={handleClose}
                  className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-surface-container text-on-surface-variant transition-colors"
                  aria-label="Fechar"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Body */}
              <div className="px-6 py-5">
                {status === 'success' ? (
                  <motion.div
                    className="text-center py-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <motion.div
                      className="w-14 h-14 rounded-full bg-primary mx-auto flex items-center justify-center mb-4"
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </motion.div>
                    <h3 className="font-sans font-bold text-base text-on-surface mb-2">Pedido recebido!</h3>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                      Recebemos seu pedido e estaremos orando por você.
                    </p>
                    <button
                      onClick={handleClose}
                      className="mt-5 bg-primary text-on-primary px-6 py-2.5 rounded-xl font-sans font-semibold text-sm"
                    >
                      Fechar
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block font-sans font-semibold text-xs text-on-surface-variant uppercase tracking-wider mb-1.5">
                        Nome *
                      </label>
                      <input
                        ref={firstInputRef}
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
                        Telefone
                      </label>
                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder="(92) 99999-9999"
                        value={form.telefone}
                        onChange={(e) => setForm({ ...form, telefone: maskPhone(e.target.value) })}
                        className={INPUT_BASE}
                      />
                    </div>

                    <div>
                      <label className="block font-sans font-semibold text-xs text-on-surface-variant uppercase tracking-wider mb-1.5">
                        Pedido de Oração *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Compartilhe seu pedido..."
                        value={form.pedido}
                        onChange={(e) => setForm({ ...form, pedido: e.target.value })}
                        className={`${INPUT_BASE} resize-none`}
                      />
                    </div>

                    {status === 'error' && (
                      <p className="font-body text-sm text-error bg-error-container/30 px-4 py-3 rounded-xl">
                        {errorMsg}
                      </p>
                    )}

                    <p className="font-body text-xs text-on-surface-variant/70 leading-relaxed text-center">
                      Seu pedido será tratado com sigilo pela equipe pastoral.{' '}
                      <Link href="/politica-de-privacidade" className="underline hover:text-primary transition-colors" onClick={(e) => e.stopPropagation()}>
                        Política de Privacidade
                      </Link>
                    </p>

                    <motion.button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-primary text-on-primary py-3.5 rounded-xl font-sans font-bold text-sm shadow-md disabled:opacity-70"
                      whileHover={{ y: -1 }}
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
                        'Enviar Pedido'
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
