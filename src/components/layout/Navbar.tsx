'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'
import { CHURCH_NAME, NAV_LINKS } from '@/lib/constants'
import { PedidoOracaoModal } from './PedidoOracaoModal'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [oracaoOpen, setOracaoOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-surface/95 backdrop-blur-md shadow-sm' : 'bg-surface/80 backdrop-blur-sm'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="flex items-center justify-between px-5 md:px-16 h-16 md:h-20 max-w-[1280px] mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Image
                src="/assets/logo.png"
                alt={CHURCH_NAME}
                width={160}
                height={48}
                className="h-10 w-auto md:h-12"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="/primeira-visita">
              <motion.span
                className="flex items-center gap-1.5 bg-secondary-container text-on-secondary-container px-4 py-2 rounded-lg font-sans font-semibold text-sm border border-primary/20 cursor-pointer"
                whileHover={{ y: -1, boxShadow: '0 6px 20px rgba(15,82,56,0.15)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-primary"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Primeira Visita
              </motion.span>
            </Link>
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-sans font-semibold text-sm relative py-1 transition-colors duration-200 ${
                    active ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
            <motion.button
              onClick={() => setOracaoOpen(true)}
              className="bg-primary text-on-primary px-5 py-2.5 rounded-lg font-sans font-semibold text-sm shadow-sm"
              whileHover={{ y: -2, boxShadow: '0 8px 25px rgba(15,82,56,0.3)' }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2 }}
            >
              Pedido de Oração
            </motion.button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            <motion.span
              className="block w-6 h-0.5 bg-primary rounded-full origin-center"
              animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-primary rounded-full"
              animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-primary rounded-full origin-center"
              animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-72 bg-surface z-50 md:hidden flex flex-col shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center justify-between px-6 h-16">
                <span className="font-sans font-bold text-xl text-primary">{CHURCH_NAME}</span>
                <button
                  onClick={() => setOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-surface-container"
                  aria-label="Fechar menu"
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col px-4 py-4 gap-1 flex-1">
                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    href="/primeira-visita"
                    className="flex items-center gap-2 h-12 px-4 rounded-xl font-sans font-semibold text-base bg-secondary-container text-on-secondary-container mb-1"
                  >
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-primary"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    Primeira Visita
                  </Link>
                </motion.div>
                {NAV_LINKS.map((link, i) => {
                  const active = pathname === link.href
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.07 + 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center h-12 px-4 rounded-xl font-sans font-semibold text-base transition-colors ${
                          active
                            ? 'bg-primary/10 text-primary'
                            : 'text-on-surface hover:bg-surface-container'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              <motion.div
                className="px-4 pb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <button
                  onClick={() => { setOpen(false); setOracaoOpen(true) }}
                  className="flex items-center justify-center w-full bg-primary text-on-primary py-3.5 rounded-xl font-sans font-semibold text-sm"
                >
                  Pedido de Oração
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <PedidoOracaoModal open={oracaoOpen} onClose={() => setOracaoOpen(false)} />
    </>
  )
}
