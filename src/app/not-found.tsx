import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Página não encontrada',
}

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-5">
      <div className="text-center max-w-md">
        <p className="font-sans font-bold text-8xl text-primary mb-2">404</p>
        <h1 className="font-sans font-bold text-2xl text-on-surface mb-4">
          Página não encontrada
        </h1>
        <p className="font-body text-base text-on-surface-variant leading-relaxed mb-8">
          Esta página não existe ou foi movida. Que tal voltar ao início e encontrar o que você precisa?
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-6 py-3.5 rounded-xl font-sans font-semibold text-sm shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
          >
            Voltar ao início
          </Link>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3.5 rounded-xl font-sans font-semibold text-sm hover:bg-primary/5 transition-colors"
          >
            Falar conosco
          </Link>
        </div>
      </div>
    </div>
  )
}
